/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LucideBrain, LucideSendHorizontal } from "lucide-react";

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = {
      role: "user",
      content: input,
      sender: "user",
      createdAt: new Date().toISOString(),
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxkRx4BNiFRSCMzei5AtO_vMEsKDUs-Tvrg&s",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: "تو یک دستیار هوش مصنوعی فارسی هستی" },
            ...messages.map((m) => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text || m.content,
            })),
            { role: "user", content: input },
          ],
        }),
      });

      const data = await res.json();

      const aiMsg = {
        sender: "ai",
        content: data.reply, // 👈 فقط content
        createdAt: new Date().toISOString(),
        avatar: "https://i.pravatar.cc/40?u=ai",
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-3 py-3 bg-blue-600 text-white rounded-full"
      >
        <LucideBrain size={20} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
          dir="rtl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="w-[380px] h-[560px] bg-white rounded-2xl shadow-xl flex flex-col dark:bg-slate-900 dark:text-white"
            >
              <div className="p-4 border-b flex justify-between">
                <h2 className="font-bold">چت هوش مصنوعی</h2>
                <button onClick={() => setOpen(false)} className="hover:text-red-500 transition-all duration-150">✕</button>
              </div>

              <div className="h-[420px] overflow-y-auto p-3 space-y-3 ">
                {messages.map((msg, index) => {
                  const isUser = msg.sender === "user";

                  return (
                    <div
                      dir="rtl"
                      key={index}
                      className={`flex items-start gap-2 p-2 rounded shadow text-sm w-3/4 ${
                        isUser
                          ? "bg-blue-600 text-white ml-auto text-right"
                          : "bg-neutral-200 text-black dark:bg-slate-600 dark:text-white"
                      }`}
                    >
                      <img
                        dir="rtl"
                        src={msg.avatar}
                        alt=""
                        className="w-8 h-8 rounded-full border"
                      />

                      <div className="flex flex-col gap-1">
                        <p className="leading-relaxed">{msg.content}</p>

                        <span className="text-[10px] opacity-70 self-end">
                          {new Date(msg.createdAt).toLocaleTimeString("fa-IR")}
                        </span>
                      </div>
                    </div>
                  );
                })}

                <div ref={bottomRef} />
              </div>

              <div className="p-3 border-t flex gap-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 border rounded-lg px-3  text-right"
                  placeholder="پیام خود را بنویسید..."
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-600 text-white px-4 rounded-lg"
                >
                  <LucideSendHorizontal />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
