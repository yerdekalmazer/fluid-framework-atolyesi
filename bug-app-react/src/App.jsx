import { useState, useEffect } from "react";
import { Sidebar } from "./shared/components/Sidebar.jsx";
import { TopBar } from "./shared/components/TopBar.jsx";
import { Footer } from "./shared/components/Footer.jsx";
import { DeleteModal, EditModal } from "./shared/feedback/Modal.jsx";
import { ToastStack } from "./shared/feedback/Toast.jsx";
import { PAGE_COMPONENTS } from "./routes.js";
import { HomePage } from "./features/home/HomePage.jsx";

export default function App() {
  console.log("[DEBUG] App render", new Date().toISOString());
  const [page, setPage] = useState("home");
  const [username, setUsername] = useState("Ali Yılmaz");
  const [bio, setBio] = useState("Frontend Developer · Divizyon");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTick(t => t + 1);
    }, 5000);
  }, []);

  const [search, setSearch] = useState("");
  const [openNotif, setOpenNotif] = useState(false);
  const [modal, setModal] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [messages, setMessages] = useState([
    { from: "them", text: "Selam, atölye için takvim önerin var mı?" },
    { from: "me",   text: "Cumartesi 14:00 nasıl?" },
    { from: "them", text: "Süper, ben ekleyeyim." },
  ]);
  const [postComments, setPostComments] = useState({});
  const [registrations, setRegistrations] = useState({});
  const [likedPosts, setLikedPosts] = useState({});
  const [postLikes, setPostLikes] = useState({});
  const [readNotifs, setReadNotifs] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const ctx = {
    username, setUsername,
    bio, setBio,
    navigate: setPage,
    openModal: setModal,
    addToast: (msg) => setToasts(t => [...t, { id: Date.now() + Math.random(), msg }]),
    messages, setMessages,
    sendMessage: (text) => setMessages(m => [...m, { from: "me", text }]),
    postComments, setPostComments,
    addComment: (postId, text) => setPostComments(pc => ({
      ...pc,
      [postId]: [...(pc[postId] || []), { id: Date.now(), author: username, text, time: "şimdi" }]
    })),
    registrations, setRegistrations,
    toggleRegistration: (id) => setRegistrations(r => ({ ...r, [id]: !r[id] })),
    likedPosts, postLikes,
    toggleLike: (id) => {
      setLikedPosts(l => ({ ...l, [id]: !l[id] }));
      setPostLikes(l => ({ ...l, [id]: (l[id] || 0) + 2 }));
    },
    readNotifs, setReadNotifs,
  };

  const PageComp = PAGE_COMPONENTS[page] || HomePage;

  return (
    <div className="flex">
      <div className={`lg:hidden fixed inset-0 bg-black/40 z-40 transition ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}></div>
      <Sidebar current={page} onChange={setPage} isOpen={sidebarOpen} />
      <div className="flex-1 min-w-0">
        <TopBar
          username={username}
          onUsernameChange={setUsername}
          search={search}
          onSearchChange={setSearch}
          openNotif={openNotif}
          onOpenNotif={() => setOpenNotif(!openNotif)}
          onMenuClick={() => setSidebarOpen(o => !o)}
        />
        <main className="p-6">
          <PageComp ctx={ctx} />
        </main>
        <Footer />
      </div>

      {modal === "delete" && (
        <DeleteModal
          onClose={() => setModal(null)}
          onConfirm={() => { setModal(null); ctx.addToast("Silindi"); }}
        />
      )}

      {modal === "edit" && (
        <EditModal
          onClose={() => setModal(null)}
          onConfirm={() => { setModal(null); ctx.addToast("Kaydedildi"); }}
        />
      )}

      <ToastStack toasts={toasts} />
    </div>
  );
}
