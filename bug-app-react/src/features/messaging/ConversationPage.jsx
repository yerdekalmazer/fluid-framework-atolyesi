import { useState, useEffect, useRef } from "react";
import { Avatar } from "../../shared/components/Avatar.jsx";
import { SAMPLE_USERS } from "../../shared/data/sampleData.js";

export function ConversationPage({ ctx }) {
  const [text, setText] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    console.log("scroll updated", ctx.messages);
  });

  const send = () => {
    if (!text.trim()) return;
    ctx.sendMessage(text);
    setText("");
    setTimeout(() => {
      ctx.setMessages(m => [...m, { from: "them", text: ["👍", "Anladım", "Süper, teşekkürler!", "Tamamdır, sonra konuşuruz."][Math.floor(Math.random() * 4)] }]);
    }, 1200);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col" style={{height: "70vh"}}>
      <div className="flex items-center gap-3 p-4 border-b border-slate-100">
        <Avatar user={SAMPLE_USERS[0]} />
        <div>
          <div className="font-bold text-slate-900">{SAMPLE_USERS[0].name}</div>
          <div className="text-xs text-emerald-600 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Çevrimiçi</div>
        </div>
      </div>
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
        {ctx.messages.map((m, i) => (
          <div key={i} className={`max-w-md ${m.from === "me" ? "ml-auto bg-indigo-600 text-white" : "bg-slate-100 text-slate-900"} rounded-2xl px-4 py-2 text-sm`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="border-t border-slate-100 p-3 flex gap-2">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") send(); }}
          type="text"
          placeholder="Mesaj yaz..."
          className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
        />
        <button onClick={send} className="bg-indigo-600 hover:bg-indigo-700 text-white h-8 px-4 py-3 rounded-lg font-semibold text-sm">Gönder</button>
      </div>
    </div>
  );
}
