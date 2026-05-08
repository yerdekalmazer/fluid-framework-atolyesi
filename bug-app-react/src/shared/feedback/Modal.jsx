export function DeleteModal({ onClose, onConfirm }) {
  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-40">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 shadow-2xl">
        <h4 className="font-bold text-lg text-slate-900 mb-2">İçeriği sil?</h4>
        <p className="text-slate-600 mb-5 text-sm">Bu işlem geri alınamaz.</p>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-white border border-slate-300 px-4 py-2 rounded-lg text-sm">Vazgeç</button>
          <button onClick={onConfirm} className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">Sil</button>
        </div>
      </div>
    </div>
  );
}

export function EditModal({ onClose, onConfirm }) {
  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-40">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 shadow-2xl">
        <h4 className="font-bold text-lg text-slate-900 mb-4">Düzenle</h4>
        <input type="text" defaultValue="Başlık" className="w-full px-3 py-2 border border-slate-300 rounded-lg mb-3 focus:outline-none" />
        <textarea rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg mb-4 focus:outline-none"></textarea>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-white border border-slate-300 px-4 py-2 rounded-lg text-sm">Vazgeç</button>
          <button onClick={onConfirm} className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">Kaydet</button>
        </div>
      </div>
    </div>
  );
}
