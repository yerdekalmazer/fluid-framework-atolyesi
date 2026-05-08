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

### 1. Supabase projesi oluştur (~5 dk)

1. [supabase.com](https://supabase.com) → **Start your project** → GitHub ile giriş
2. **New project** → isim ver, region "Frankfurt" seç, güçlü bir DB password belirle (lazım olmaz ama kaydet)
3. Proje hazır olunca: **Project Settings → API** sayfasına git
   - **Project URL**'i kopyala (örn. `https://xxxx.supabase.co`)
   - **anon public** key'i kopyala (uzun JWT)

### 2. SQL şemasını yükle

1. Supabase Dashboard → **SQL Editor** → **New query**
2. `supabase/schema.sql` dosyasının içeriğini yapıştır
3. **Run** (Cmd/Ctrl+Enter)

### 3. Email confirmation'ı kapat (atölye için kolaylık)

Default'ta Supabase yeni kayıtlara doğrulama maili yollar. Atölyede pratik olsun diye:

1. **Authentication → Sign In / Providers → Email**
2. **Confirm email** seçeneğini KAPAT
3. Save

> Production'da bunu açmanı öneririm; atölyenin canlı oturumunda kapalı tut.

### 4. .env.local'i ayarla

```bash
cd bug-hunt-story
cp .env.local.example .env.local
```

Açıp şu iki değeri Supabase'den kopyaladığın değerlerle doldur:

```
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

### 5. Çalıştır

```bash
npm install
npm run dev
```

`http://localhost:5174` adresinde açılır.

> `.env.local` ayarlanmamışsa site çalışır ama üstte bir uyarı bandı çıkar ve auth/leaderboard devre dışı kalır — misafir mod'da localStorage ile çalışmaya devam edilir.

## Klasör Yapısı

```
bug-hunt-story/
├── index.html
├── package.json, vite.config.js, tailwind.config.js, postcss.config.js
├── .env.local.example          — Supabase URL + anon key şablon
├── supabase/
│   └── schema.sql              — Dashboard SQL Editor'a yapıştırılacak şema (profiles, progress, RLS, leaderboard view)
├── src/
│   ├── main.jsx
│   ├── index.css
│   ├── App.jsx
│   ├── lib/
│   │   ├── supabase.js         — createClient (env yoksa null)
│   │   ├── useSession.js       — auth state hook
│   │   └── progress.js         — localStorage ↔ Supabase sync
│   ├── components/
│   │   ├── AuthBar.jsx         — üst bantta misafir/giriş durumu
│   │   ├── AuthModal.jsx       — login + signup tek modal
│   │   ├── Leaderboard.jsx     — top 50 sıralama (gerçek-zamanlı)
│   │   ├── Hero.jsx            — siyah destek paneli başlığı + ilerleme
│   │   ├── FilterBar.jsx       — kategori, sayfa, arama, "çözülenleri gizle"
│   │   ├── ChapterIntro.jsx    — kategori giriş kartı (anlatıcı tonu)
│   │   └── CaseCard.jsx        — şikayet kartı (avatar, body, ipucu, çözüm, checkbox)
│   └── data/
│       ├── characters.js       — 8 şikayet sahibi karakter
│       ├── chapters.js         — 4 kategori (Genel / Sayfa / Teknik / Mobil)
│       ├── casesGlobal.js      — 19 vaka (G-01..G-19)
│       ├── casesPages.js       — 134 vaka (P-* — 30 sayfa)
│       ├── casesRuntime.js     — 19 vaka (R-01..R-19)
│       ├── casesMobile.js      — 28 vaka (M-01..M-28)
│       └── cases.js            — birleştirici + scoring + status renkleri
```

## Auth & Leaderboard Akışı

- **Misafir mod:** `.env.local` boşsa veya kullanıcı giriş yapmadıysa, ilerleme sadece `localStorage`'da tutulur. Leaderboard'a girilmez.
- **Kayıt:** Sağ üst "Giriş yap / Kayıt ol" → modal'da email + şifre + handle (zorunlu, leaderboard'da görünür) + display name (opsiyonel).
- **Login:** Mevcut localStorage işaretlemeleri **otomatik olarak Supabase'e upsert edilir** (eski misafir progress kaybolmaz).
- **Toggle:** Her checkbox tıklaması hem local'e hem Supabase'e yazar (optimistic).
- **Leaderboard:** "🏆 Sıralama" sekmesi → top 50, gerçek-zamanlı (başkası bug çözünce listenin de yenilenir). Sıralama: çözülen sayısı DESC, eşitlikte süre ASC. Sen listede varsan satırın yeşille vurgulanır.

## Hız Hesabı

`leaderboard` view'unda her kullanıcı için:
- `solved_count` = toplam çözülen vaka
- `duration_seconds` = `MAX(marked_at) - MIN(marked_at)` (ilk işaretten son işarete geçen süre)

Sıralama formülü: `ORDER BY solved_count DESC, duration_seconds ASC` — yani aynı sayıda bug çözen iki kişiden hızlı olan üstte.

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
