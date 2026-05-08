# Pixel Avı — Atölye Defterinden Vakalar

`bug-app.html` prototipindeki **196 kasıtlı bug**, kullanıcı şikayet panosu formatında sunulan ayrı bir Vite + React + Tailwind sitesi.

## Konsept

Atölye katılımcısına bug'ları doğrudan listelemek yerine, her bir bug'ı **topluluktan gelen bir kullanıcı şikayeti** olarak veriyoruz:

- Şikayet sahibi (Eda, Murat, Sema, Can, Deniz, Hakan, Aylin, Berk)
- Tarih + status (Açık / Yeni / İncelemede)
- Şikayet metni (1. tekil şahıs, kullanıcı dilinden — "ben profilime girdim, avatarım yamuk duruyor")
- Kategori etiketi + sayfa konumu
- 💡 İpucu (atölye katılımcısı için, açılır kapanır)
- 🔧 Çözüm (mentor notu — teknik detay, en sonda)

Her vakanın altında "Bu şikayeti çözdüm" checkbox'ı var; localStorage'da saklanıyor, refresh sonrası kalıyor.

## Kurulum

```bash
cd bug-hunt-story
npm install
npm run dev
```

`http://localhost:5174` adresinde açılır (bug-app-react ile çakışmasın diye 5174).

## Klasör Yapısı

```
bug-hunt-story/
├── index.html
├── package.json, vite.config.js, tailwind.config.js, postcss.config.js
├── src/
│   ├── main.jsx
│   ├── index.css
│   ├── App.jsx
│   ├── components/
│   │   ├── Hero.jsx           — siyah destek paneli başlığı + ilerleme
│   │   ├── FilterBar.jsx      — kategori, sayfa, arama, "çözülenleri gizle"
│   │   ├── ChapterIntro.jsx   — kategori giriş kartı (anlatıcı tonu)
│   │   └── CaseCard.jsx       — şikayet kartı (avatar, body, ipucu, çözüm, checkbox)
│   └── data/
│       ├── characters.js      — 8 şikayet sahibi karakter
│       ├── chapters.js        — 4 kategori (Genel / Sayfa / Teknik / Mobil)
│       ├── casesGlobal.js     — 19 vaka (G-01..G-19)
│       ├── casesPages.js      — 134 vaka (P-* — 30 sayfa)
│       ├── casesRuntime.js    — 19 vaka (R-01..R-19)
│       ├── casesMobile.js     — 28 vaka (M-01..M-28)
│       └── cases.js           — birleştirici + scoring + status renkleri
```

## UI Özellikleri

- **Hero** — siyah "Divizyon Destek Paneli" temalı, anlık ilerleme yüzdesi + skor ünvanı
- **Sticky filter bar** — kategori chip'leri, arama, sayfa dropdown, çözülenleri gizle, sıfırla
- **Kategori intro kartları** — her kategori için anlatıcı tonunda giriş paragrafı
- **Şikayet kartı** —
  - Sol: avatar (renkli initials), şikayet sahibi adı + rolü
  - Sağ: status rozeti (Açık/Yeni/İncelemede)
  - Kategori chip + sayfa konumu + güvenlik/kritik etiketleri
  - Subject (italik tırnak içinde, font-serif)
  - Body (1. şahıs şikayet metni)
  - 💡 İpucu accordion (sarı arka plan)
  - 🔧 Çözüm accordion (siyah/monospace blok — kod görünümü)
  - "Bu şikayeti çözdüm" checkbox

## Bug Sayıları

| Kategori | Vaka |
|---|---|
| Genel (Global) | 19 |
| Sayfa Bazlı | 134 |
| Teknik / Console | 19 |
| Mobil | 28 |
| **Toplam** | **200** |

## Skor Anahtarı

| Çözülen | Ünvan |
|---|---|
| 180+ | 🏆 Pixel-Perfect Avcı Efsanesi |
| 130+ | 🎯 Senior Frontender |
| 80+  | 🔍 İyi Gözlemci |
| 40+  | 📚 Bug Listesi'ni tekrar oku |
| <40  | 🤔 Mentor masasına gel |

## Atölye Akışı

1. Katılımcı şikayetleri okur (kullanıcı tonunda — aralarda mizah, bazı yerlerde kibar dil, bazı yerlerde sinir)
2. "Bu hangi sayfada olabilir?" / "Bu nasıl bir hata olabilir?" diye düşünür
3. İpucu'na tıklar → kafasına bir yön gelirse, prototipe gidip orada bug'ı araştırır
4. Bulduğunda "Çözümü göster"den teknik detayı kontrol eder
5. Doğruysa checkbox işaretler

> Şikayetler kasıtlı olarak farklı tonlarda yazıldı (ricacı, kızgın, soru, öneri) — gerçek destek panellerine benzesin diye.
