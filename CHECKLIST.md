# 🔍 Bug Teşhis Kontrol Listesi

**Pixel-Perfect Fluid Framework Atölyesi · FAZ 2**
**Dosya:** `bug-test.html` · **Toplam:** 20 bug · 10 görsel + 10 etkileşim

---

## 🟦 Görsel Bug'lar (statik — açar açmaz görünür)

| # | Bug | Konum | Sorun | Çözüm İpucu |
|---|---|---|---|---|
| **S-01** | ☐ Avatar oval | Header + tüm yorumlardaki avatarlar | `w-12 h-10 rounded-full` — eşit olmayan boyut | `w-12 h-12` |
| **S-02** | ☐ Hero subtitle düşük kontrast | Hero `<p>` | Mor gradient üzerinde `text-gray-300` | `text-white/90` |
| **S-03** | ☐ Header dikey hizasız | `<header>` flex container | `items-center` yok | `flex items-center` |
| **S-04** | ☐ Padding tutarsız | 2. yorum kartı | `p-3` (diğerleri `p-5`) | Tüm yorumlar `p-5` |
| **S-05** | ☐ Hero sabit genişlik | Hero iç `<div>` | `w-[800px]` — mobilde overflow | `max-w-3xl` |
| **S-06** | ☐ Focus stili eksik | `<textarea>` | `focus:outline-none` var, ring yok | `focus:ring-2 focus:ring-indigo-500` |
| **S-07** | ☐ Buton yükseklik çelişkisi | "Devam et" butonu | `h-8 + py-3` çakışıyor | Sadece `py-2` (h kaldır) |
| **S-08** | ☐ Sticky header z-index | `<header class="sticky">` | `z-50` yok | `sticky top-0 z-50` |
| **S-09** | ☐ Resim oranı bozuk | Featured post resmi | `h-56 w-full` ama `object-cover` yok | `object-cover` |
| **S-10** | ☐ Footer link aralığı | Footer link grubu | `gap-1` (4px) çok dar | `gap-6` |

---

## 🟪 Etkileşim Bug'ları (kullanıcı eylemiyle ortaya çıkar)

| # | Bug | Tetikleyici | Sorun | Çözüm İpucu |
|---|---|---|---|---|
| **I-01** | ☐ Uzun yorum taşması | Demo: "Uzun yorum" | 150+ karakterli kelime kart dışına taşıyor | `break-words` |
| **I-02** | ☐ Uzun kullanıcı adı | Demo: "Uzun kullanıcı adı" | Header layout'u patlıyor | `truncate max-w-[160px]` |
| **I-03** | ☐ Uzun URL satır kırmıyor | Demo: "URL'li yorum" | URL satır kırmadan taşıyor | `break-all` veya `overflow-wrap-anywhere` |
| **I-04** | ☐ Footer hover beyaz | Footer linklerine hover | `hover:text-white` beyaz arkaplanda kayboluyor | `hover:text-indigo-600` |
| **I-05** | ☐ Modal yanlış konum | Demo: "Sil modal aç" + scroll | Modal `absolute`, scroll'da kayıyor | `fixed inset-0` |
| **I-06** | ☐ Dropdown clipping | Demo: "Dropdown aç" | Yorum kartı `overflow-hidden` → menü kırpılıyor | Parent'tan `overflow-hidden` kaldır |
| **I-07** | ☐ Tooltip clipping | İlk yorumun avatarına hover | Avatar tooltip'i kart üzerinde kesiliyor | Aynı: parent `overflow-hidden` kaldır |
| **I-08** | ☐ Textarea sınırsız büyüme | Textarea'yı sürükle | `resize-y` var, `max-h-*` yok | `max-h-64` |
| **I-09** | ☐ Boş submit aktif | Yorumu boş bırakıp gönder | Buton her zaman mor | `disabled:opacity-50` + JS ile `disabled` |
| **I-10** | ☐ Input focus belirsiz | Textarea'ya tıkla | Border rengi değişmiyor | `focus:border-indigo-500` |

---

## 📊 Skor Anahtarı

| Bulduğun Sayı | Değerlendirme |
|---|---|
| **20/20** | 🏆 Pixel-Perfect Avcı |
| **15-19** | 🎯 Deneyimli Frontender |
| **10-14** | 🔍 İyi Gözlemci — biraz daha pratik |
| **5-9** | 📚 Bug teşhis listesini tekrar oku |
| **0-4** | 🤔 Mentor masasına gel |

---

## 🛠️ Kullanım

1. `bug-test.html` dosyasını tarayıcıda aç
2. Sağ üstteki **📋 Bug Listesi** butonuna tıkla — interaktif checklist açılır
3. Sol alttaki **DEMO TETİKLE** paneliyle etkileşim bug'larını canlandır
4. Her bug'ı bulduğunda checkbox'ı işaretle — ilerleme barı dolar
5. Hedef: 20/20 — gerçek bir code review'da bu bug'ların tamamını yakalayabilmek

---

_Bu liste atölyenin "FAZ 2 — Bireysel Bug Teşhis ve Onarım" aşamasında referans materyal olarak masada bulunur._
