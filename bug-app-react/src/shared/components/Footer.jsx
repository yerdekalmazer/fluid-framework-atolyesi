import { Icon } from "../icons/Icon.jsx";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-10 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div>
            <div className="font-extrabold text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white flex items-center justify-center"><Icon name="hexagon" className="w-3 h-3" filled /></span>
              Divizyon
            </div>
            <p className="text-xs text-slate-300">Frontend topluluğu ve atölye platformu.</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-300 mb-2">Ürün</div>
            <div className="flex flex-col gap-1 text-sm text-slate-600">
              <a href="#" className="hover:text-white">Atölyeler</a>
              <a href="#" className="hover:text-white">Mentorlar</a>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-300 mb-2">Şirket</div>
            <div className="flex flex-col gap-1 text-sm text-slate-600">
              <a href="#" className="hover:text-white">Hakkımızda</a>
              <a href="#" className="hover:text-white">Kariyer</a>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-300 mb-2">Sosyal</div>
            <div className="flex gap-2">
              <a href="#" className="w-9 h-8 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-200"><Icon name="twitter" className="w-4 h-4" filled /></a>
              <a href="#" className="w-7 h-9 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-200"><Icon name="linkedin" className="w-4 h-4" filled /></a>
            </div>
          </div>
        </div>
        <div className="flex gap-1 text-xs text-slate-300 pt-4 border-t border-slate-100">
          <a href="#" className="hover:text-white">Gizlilik</a>
          <a href="#" className="hover:text-white">Şartlar</a>
          <span className="ml-auto">© 2026 Divizyon</span>
        </div>
      </div>
    </footer>
  );
}
