import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaMicrophone, FaStop, FaCommentAlt } from "react-icons/fa";
import axios from "axios";

const AIChat = () => {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [scenarioSelected, setScenarioSelected] = useState(false);
  const [previousChats, setPreviousChats] = useState(() => {
    const storedChats = localStorage.getItem("previousChats");
    return storedChats ? JSON.parse(storedChats) : [];
  });
  const [currentChat, setCurrentChat] = useState(null);

  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  useEffect(() => {
    // Fetch voices for TTS
    const fetchVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0]); // Default to the first voice
      }
    };

    fetchVoices();
    window.speechSynthesis.onvoiceschanged = fetchVoices;

    // Initialize SpeechRecognition if supported
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.lang = "en-US";

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        addMessage("user", transcript);
        sendMessageToOpenAI(transcript);
      };

      recognitionInstance.onend = () => setIsListening(false);

      setRecognition(recognitionInstance);
    } else {
      console.warn("SpeechRecognition is not supported in this browser.");
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("previousChats", JSON.stringify(previousChats));
  }, [previousChats]);

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    utterance.lang = "en-US";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const handleVoiceChange = (e) => {
    const voice = voices.find((v) => v.name === e.target.value);
    setSelectedVoice(voice);
  };

  const addMessage = (sender, text) => {
    const newMessages = [...messages, { sender, text }];
    setMessages(newMessages);

    if (currentChat) {
      setPreviousChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === currentChat.id
            ? { ...chat, messages: newMessages }
            : chat
        )
      );
    }
  };

  const saveChat = () => {
    if (!currentChat) {
      const newChat = {
        id: Date.now(),
        name: `Chat ${previousChats.length + 1}`,
        messages: [...messages],
      };
      setPreviousChats((prevChats) => [newChat, ...prevChats]);
      setCurrentChat(newChat);
    }
  };

  const loadChat = (chat) => {
    setCurrentChat(chat);
    setMessages(chat.messages);
    setScenarioSelected(true);
  };

  const sendMessageToOpenAI = async (message) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "You are a supportive assistant providing short, conversational responses.",
            },
            { role: "user", content: message },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botResponse = response.data.choices[0].message.content;
      addMessage("bot", botResponse);
      speakText(botResponse);
    } catch (error) {
      console.error("Error communicating with OpenAI:", error);
      addMessage("bot", "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    addMessage("user", userInput);
    setUserInput("");

    await sendMessageToOpenAI(userInput);
    saveChat();
  };

  const startScenario = (topic) => {
    const exampleMessages = {
      stress: "I'm feeling stressed about work deadlines. Can you share more?",
      sleep: "I can't sleep properly at night. What’s on your mind?",
      selfHarm: "I'm having dark thoughts and need help.",
      relationships: "I'm struggling with relationship issues. What’s happening?",
      loneliness: "I'm feeling lonely and isolated. Can you share more?",
      other: "Feel free to share anything on your mind.",
    };

    const initialMessage = exampleMessages[topic] || "How are you feeling?";
    addMessage("bot", initialMessage);
    speakText(initialMessage);
    setScenarioSelected(true);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#1e2124] via-[#2c2f33] to-[#36393e] text-white">
      {/* Sidebar */}
      <aside className="w-1/4 bg-[#292b2f] p-4 overflow-y-auto border-r border-[#424549]">
        <h2 className="text-xl font-bold text-[#7dd3fc] mb-4">Previous Chats</h2>
        <ul className="space-y-2">
          {previousChats.map((chat) => (
            <li
              key={chat.id}
              className={`p-2 rounded-lg cursor-pointer ${
                currentChat?.id === chat.id ? "bg-[#424549]" : "hover:bg-[#424549]"
              }`}
              onClick={() => loadChat(chat)}
            >
              <FaCommentAlt className="inline-block mr-2" />
              {chat.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 p-6 flex flex-col">
        {!scenarioSelected ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#7dd3fc] mb-6">
              Choose a Topic to Start
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <button
                onClick={() => startScenario("stress")}
                className="bg-[#7289da] text-white px-4 py-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                Feeling Stressed
              </button>
              <button
                onClick={() => startScenario("sleep")}
                className="bg-[#7289da] text-white px-4 py-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                Trouble Sleeping
              </button>
              <button
                onClick={() => startScenario("selfHarm")}
                className="bg-[#7289da] text-white px-4 py-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                Self-Harm Thoughts
              </button>
              <button
                onClick={() => startScenario("relationships")}
                className="bg-[#7289da] text-white px-4 py-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                Relationship Issues
              </button>
              <button
                onClick={() => startScenario("loneliness")}
                className="bg-[#7289da] text-white px-4 py-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                Feeling Lonely
              </button>
              <button
                onClick={() => startScenario("other")}
                className="bg-[#7289da] text-white px-4 py-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                Other
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="relative bg-[#1e2124] flex-1 overflow-y-auto border border-[#424549] rounded-lg p-4 shadow-inner">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex items-start mb-4 ${
                    message.sender === "user" ? "justify-end" : ""
                  }`}
                  initial={{ opacity: 0, x: message.sender === "user" ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {message.sender === "bot" && (
                    <FaRobot className="text-2xl text-[#7dd3fc] mr-2" />
                  )}
                  <div
                    className={`max-w-sm px-4 py-2 rounded-xl ${
                      message.sender === "user"
                        ? "bg-[#7dd3fc] text-white"
                        : "bg-[#424549] text-gray-300"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  className="flex items-center text-gray-400 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaRobot className="text-2xl text-[#7dd3fc] mr-2" />
                  <p>Typing...</p>
                </motion.div>
              )}
            </div>

            {/* Input Section */}
            <div className="mt-4 flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-grow border border-[#424549] rounded-l-lg px-4 py-2 focus:outline-none bg-[#2c2f33] text-gray-300 placeholder-gray-500"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                className={`${
                  isLoading ? "bg-gray-500" : "bg-[#7dd3fc]"
                } text-white px-6 py-2 rounded-r-lg hover:bg-[#5daddb] transition duration-300 disabled:opacity-50`}
                onClick={sendMessage}
                disabled={isLoading}
              >
                Send
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default AIChat;
