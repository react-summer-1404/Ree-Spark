/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { BsChat } from "react-icons/bs";

const API_URL = "https://692df381e5f67cd80a4d7d1b.mockapi.io/massages";

const PROJECT_ID = "projectB";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    const loadMessages = () => {
      axios.get(API_URL).then((res) => {
        const sorted = res.data.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        setMessages(sorted);
      });
    };

    loadMessages();

    const interval = setInterval(loadMessages, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: PROJECT_ID,
      text: input,
      createdAt: new Date().toISOString(),
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxkRx4BNiFRSCMzei5AtO_vMEsKDUs-Tvrg&s" +
        PROJECT_ID,
    };

    await axios.post(API_URL, userMessage);
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-3 py-3 bg-blue-600 text-white rounded-full shadow"
      >
        <BsChat size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur flex items-center justify-center "
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              className={`w-96 h-[550px] rounded-xl shadow-lg overflow-hidden ${"bg-white text-black"} dark:bg-slate-900 dark:text-white`}
            >
              <div
                dir="rtl"
                className="flex items-center justify-between p-4 border-b"
              >
                <h2 className="text-lg font-semibold">چت با پشتیبان</h2>

                <div className="flex gap-3">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-red-500"
                  >
                    بستن
                  </button>
                </div>
              </div>

              <div
                dir="rtl"
                className="h-[420px] overflow-y-auto p-3 space-y-3"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id || msg.createdAt}
                    className={`flex items-start gap-2 p-2 rounded shadow text-sm w-3/4 ${
                      msg.sender === PROJECT_ID
                        ? "bg-blue-600 text-white ml-auto text-right"
                        : msg.sender === "system"
                        ? "bg-neutral-300 text-black mx-auto text-center"
                        : "bg-neutral-200 text-black"
                    }`}
                  >
                    <img
                      src={msg.avatar}
                      alt=""
                      className="w-8 h-8 rounded-full border"
                    />

                    <div className=" overflow-y-auto p-3 space-y-3">
                      <p className="break-words whitespace-pre-wrap">{msg.text}</p>
                      <span className="text-[10px] opacity-70 ">
                        {new Date(msg.createdAt).toLocaleTimeString("fa-IR")}
                      </span>
                    </div>
                  </div>
                ))}

                <div ref={bottomRef}></div>
              </div>

              <div className="p-3 border-t flex gap-2">
                <button
                  onClick={sendMessage}
                  className="bg-blue-600 text-white px-4 rounded"
                >
                  ارسال
                </button>
                <textarea
                  rows={2}
                  className="flex-1 border text-right rounded px-3 outline-none resize-none bg-white dark:bg-slate-500 "
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="... پیام خود را بنویسید"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
