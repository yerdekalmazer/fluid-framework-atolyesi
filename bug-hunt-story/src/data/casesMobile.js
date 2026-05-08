export const CASES_MOBILE = [
  // ===== DRAWER =====
  {
    id: "M-01", chapter: "ch4", reporter: "hakan", date: "10 May, 18:30", status: "Açık",
    category: "Mobile / Drawer", page: "Tüm sayfalar — Sidebar overlay", group: "Drawer",
    subject: "Telefonda hamburger menüyü açtım, dış alana tıklayınca kapanmıyor",
    body: "iPhone'umdan hamburger menüyü açtım, sonra menünün dışındaki koyu alana parmağımla dokundum — drawer kapanmadı. Geri tuşuna basana kadar açık kaldı.",
    hint: "Overlay'da onClick handler yok.",
    reveal: "Sidebar overlay div'inde `onClick={() => setSidebarOpen(false)}` yok."
  },
  {
    id: "M-02", chapter: "ch4", reporter: "hakan", date: "10 May, 18:35", status: "Açık",
    category: "Mobile / Drawer", page: "Tüm sayfalar — Sidebar links", group: "Drawer",
    subject: "Drawer'dan link tıklayınca açık kalıyor",
    body: "Hamburger açtım, bir sayfaya tıkladım — sayfa yüklendi ama drawer hâlâ açık. Drawer kapatıp sayfayı görmek için ekstra tıklama gerekiyor.",
    hint: "onChange handler içinde drawer kapanmıyor.",
    reveal: "Sidebar `<a onClick={() => onChange(item.id)}>` — `onChange` ile birlikte `setSidebarOpen(false)` çağrılmalı."
  },
  {
    id: "M-03", chapter: "ch4", reporter: "hakan", date: "10 May, 18:42", status: "Açık",
    category: "Mobile / Scroll lock", page: "Tüm sayfalar — App", group: "Drawer",
    subject: "Drawer açıkken arka plan kayıyor",
    body: "Hamburger açıkken iki parmakla kaydırınca arka plandaki ana sayfa hareket ediyor. Drawer açıkken arka plan kilitlenmeli.",
    hint: "body scroll lock.",
    reveal: "Drawer açıkken `document.body.style.overflow = 'hidden'` yok."
  },
  {
    id: "M-04", chapter: "ch4", reporter: "aylin", date: "10 May, 18:50", status: "Yeni",
    category: "Mobile / UX", page: "Tüm sayfalar — Sidebar", group: "Drawer",
    subject: "Drawer'ın içinde X butonu yok",
    body: "Drawer'ı kapatmanın tek yolu hamburger ikonuna tekrar basmak — ama drawer açıkken hamburger görünmüyor. İçeride bir X (kapat) butonu olmalı.",
    hint: "Drawer içinde close button yok.",
    reveal: "Sidebar drawer mode'da X butonu eklenmeli."
  },
  {
    id: "M-05", chapter: "ch4", reporter: "berk", date: "10 May, 19:00", status: "Açık",
    category: "Mobile / z-index", page: "Tüm sayfalar — Layout", group: "Drawer",
    subject: "Drawer açıkken üst bar kayboluyor",
    body: "Drawer z-50, overlay z-40 ama sticky TopBar kendisi z-50 değil — drawer açıldığında TopBar drawer'ın altında kalıyor.",
    hint: "z-index katmanları çatışıyor.",
    reveal: "TopBar sticky'de z-index yok — drawer açıkken altta kalıyor."
  },

  // ===== TOPBAR =====
  {
    id: "M-06", chapter: "ch4", reporter: "hakan", date: "10 May, 19:10", status: "Açık",
    category: "Mobile / Layout", page: "Tüm sayfalar — TopBar", group: "TopBar",
    subject: "Telefonda üst bar yatay scroll yapıyor",
    body: "iPhone SE'de TopBar sığmıyor — search + bell + avatar + username kombinasyonu 375px'i aşıyor. Sayfa yatay kaydırılabilir hale geliyor.",
    hint: "Mobile'da bazı elemanlar gizlenmeli.",
    reveal: "TopBar'da mobile'da username ve bazı elemanlar `hidden md:flex` ile gizlenmeli."
  },
  {
    id: "M-07", chapter: "ch4", reporter: "hakan", date: "10 May, 19:18", status: "Açık",
    category: "Mobile / Layout", page: "Tüm sayfalar — TopBar", group: "TopBar",
    subject: "Username text mobilde de görünüyor — uzun ad layout'u kırıyor",
    body: "Username mobilde gizlenmiyor, uzun bir adda topbar dağılıyor.",
    hint: "Username için responsive hide.",
    reveal: "`<span>{username}</span>` — `hidden md:inline` eklenmeli."
  },
  {
    id: "M-08", chapter: "ch4", reporter: "aylin", date: "10 May, 19:25", status: "Açık",
    category: "Mobile / UX", page: "Tüm sayfalar — TopBar", group: "TopBar",
    subject: "Arama placeholder'ı mobilde yarım kesiliyor",
    body: "\"Atölye, mentor veya kaynak ara...\" placeholder'ı mobile'da uzun, input dar olduğu için \"Atölye, mentor veya kayna...\" gibi kesiliyor.",
    hint: "Responsive placeholder.",
    reveal: "Mobile için `placeholder=\"Ara...\"` veya kısaltılmış olmalı."
  },
  {
    id: "M-09", chapter: "ch4", reporter: "hakan", date: "10 May, 19:32", status: "Açık",
    category: "Mobile / Layout", page: "Tüm sayfalar — TopBar", group: "TopBar",
    subject: "Bildirim dropdown'ı mobilde sağ kenardan taşıyor",
    body: "Bildirim ikonuna basınca açılan dropdown `right-0 w-72` — mobile'da 288px genişlik ekrana sığmıyor, sağdan dışarı taşıyor.",
    hint: "w-72 mobile'da çok geniş.",
    reveal: "Dropdown'ı mobile'da `w-screen max-w-xs` veya benzeri responsive yap."
  },

  // ===== LAYOUT =====
  {
    id: "M-10", chapter: "ch4", reporter: "hakan", date: "10 May, 19:40", status: "Açık",
    category: "Mobile / Layout", page: "Ana Sayfa", group: "Layout",
    subject: "Ana sayfada yatay scroll çıkıyor",
    body: "Hero `w-[800px]` sabit genişlik — mobile'da 375px ekranda sayfa sağa kayıyor. Sağa parmakla kaydırabiliyorum.",
    hint: "P-HOME-1 ile aynı; mobile'da daha belirgin.",
    reveal: "`w-[800px]` → `max-w-[800px]`."
  },
  {
    id: "M-11", chapter: "ch4", reporter: "hakan", date: "10 May, 19:48", status: "Açık",
    category: "Mobile / Spacing", page: "Tüm sayfalar — App layout", group: "Layout",
    subject: "Mobilde içerik çok dar kalıyor — padding fazla",
    body: "Main `p-6` (24px) mobile'da fazla — 375px ekranda 327px kalıyor içeriğe. Mobile'da `p-4` veya `p-3` olmalı.",
    hint: "Responsive padding.",
    reveal: "`<main className=\"p-6\">` → `p-4 md:p-6`."
  },
  {
    id: "M-12", chapter: "ch4", reporter: "sema", date: "10 May, 19:55", status: "Açık",
    category: "Mobile / Layout", page: "Ana Sayfa", group: "Layout",
    subject: "İstatistik kartlarında ikon ve metin çakışıyor",
    body: "`grid-cols-2` ile 2 sütun, içerikte sayı + ikon + \"12% bu ay\" gibi metin var — mobilde sıkışıyor, ikon metni iter.",
    hint: "İçerik yapısı dar viewport'a uygun değil.",
    reveal: "Stats card'larda flex yapısı mobile için yeniden organize edilmeli."
  },
  {
    id: "M-13", chapter: "ch4", reporter: "hakan", date: "10 May, 20:05", status: "Açık",
    category: "Mobile / Layout", page: "Profilim", group: "Layout",
    subject: "Profil header'ı mobilde stack etmiyor",
    body: "Profil sayfasında avatar + isim + \"Profili Düzenle\" butonu yan yana — mobilde sıkışıyor, buton küçülüyor. Mobilde dikey stack olmalı.",
    hint: "flex flex-col sm:flex-row.",
    reveal: "Profil header `flex gap-4` — mobile için `flex-col gap-3 sm:flex-row` olmalı."
  },
  {
    id: "M-14", chapter: "ch4", reporter: "sema", date: "10 May, 20:12", status: "Açık",
    category: "Mobile / Layout", page: "Tüm sayfalar — Footer", group: "Layout",
    subject: "Footer 2 sütunda hizasız — sosyal ikonlar eğik",
    body: "Footer mobile'da 2 sütun (`grid-cols-2`) ama içerik farklı boyutta, ikinci satırdaki sosyal ikonlar yamuk kalıyor.",
    hint: "Grid'de items-start vs stretch farkı.",
    reveal: "Footer grid'de `items-start` veya hizalama kontrolleri eksik."
  },
  {
    id: "M-15", chapter: "ch4", reporter: "hakan", date: "10 May, 20:20", status: "Açık",
    category: "Mobile / Layout", page: "Faturalama", group: "Layout",
    subject: "Faturalama tablosu mobilde taşıyor",
    body: "Fatura geçmişi tablosu wide, mobile'da taşıyor — ama wrapper'da `overflow-x-auto` yok. Kullanıcı yatay scroll yapamıyor.",
    hint: "Tablo wrapper'da overflow-x-auto.",
    reveal: "`<table>` etrafındaki div'de `overflow-x-auto` yok."
  },

  // ===== FORMS =====
  {
    id: "M-16", chapter: "ch4", reporter: "aylin", date: "10 May, 20:28", status: "Açık",
    category: "Mobile / Form", page: "Akış", group: "Form",
    subject: "Yorum input'u + Gönder butonu mobilde sığmıyor",
    body: "Akış'ta yorum yazma alanında input + gönder yan yana ama input'a `flex-1` verilmemiş — mobile'da gönder butonu kayboluyor.",
    hint: "input'a flex-1 eksik.",
    reveal: "Yorum input'una `flex-1` veya container'da `flex gap-2` ile esnek değer."
  },
  {
    id: "M-17", chapter: "ch4", reporter: "aylin", date: "10 May, 20:35", status: "Açık",
    category: "Mobile / Form", page: "Konuşma", group: "Form",
    subject: "Konuşma input'u + Gönder mobilde dar",
    body: "Aynı problem konuşma sayfasında. Input ve buton sığmıyor.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "M-18", chapter: "ch4", reporter: "hakan", date: "10 May, 20:42", status: "Açık",
    category: "Mobile / Touch target", page: "Tüm formlar", group: "Form",
    subject: "Form input'larına dokunmak zor",
    body: "Mobile'da form alanları `px-3 py-2` ile yetersiz boyutta — parmakla isabet ettirmek zor. Apple HIG en az 44x44px touch target önerir.",
    hint: "Touch target küçük.",
    reveal: "Mobile'da `py-3` ve `min-h-[44px]` olmalı."
  },

  // ===== MODAL =====
  {
    id: "M-19", chapter: "ch4", reporter: "aylin", date: "10 May, 20:50", status: "Açık",
    category: "Mobile / Modal", page: "Tüm sayfalar — Modal", group: "Modal",
    subject: "Modal mobile'da ekrana sığmıyor",
    body: "Modal `max-w-md mx-4` ile 4px mx ile margin veriyor ama ekran 375px'te modal sığmıyor — yatay scroll yapıyor.",
    hint: "max-w-md mobile'da geniş.",
    reveal: "Modal'da `max-w-md` mobile'da yetersiz; `w-[calc(100%-2rem)] sm:max-w-md`."
  },
  {
    id: "M-20", chapter: "ch4", reporter: "aylin", date: "10 May, 20:58", status: "Açık",
    category: "Mobile / Modal", page: "Tüm sayfalar — Modal", group: "Modal",
    subject: "Mobilde modal scroll'da çok belirgin kayıyor",
    body: "G-11 modal absolute bug'ı mobile'da daha belirgin — sayfayı kaydırıyorsun, modal açıyorsun, modal sayfanın çok aşağısında belirebiliyor.",
    hint: "G-11 ile aynı.",
    reveal: "absolute → fixed."
  },
  {
    id: "M-21", chapter: "ch4", reporter: "hakan", date: "10 May, 21:05", status: "Açık",
    category: "Mobile / Toast", page: "Tüm sayfalar — Toast", group: "Modal",
    subject: "Toast uzun mesajlarda mobilde ekranın yarısını kaplıyor",
    body: "Bir uzun toast mesajı geldi, mobile'da ekranın 50%'sini kapladı — sağ alta yapışık ama genişlik sınırı yok.",
    hint: "max-width yok.",
    reveal: "Toast'ta `max-w-[300px]` veya `max-w-xs` olmalı."
  },
  {
    id: "M-22", chapter: "ch4", reporter: "hakan", date: "10 May, 21:12", status: "Açık",
    category: "Mobile / Dropdown", page: "Akış", group: "Modal",
    subject: "Post ⋯ menüsü mobilde sağdan kesiliyor",
    body: "Akış'ta postun ⋯ ikonuna tıkladığımda dropdown `right-0 w-32` ile açılıyor ama parent'ta `overflow-hidden` olduğu için kesiliyor.",
    hint: "P-FEED-4 ile aynı, mobile'da daha belirgin.",
    reveal: "Aynı."
  },

  // ===== İÇERİK =====
  {
    id: "M-23", chapter: "ch4", reporter: "hakan", date: "10 May, 21:20", status: "Açık",
    category: "Mobile / iOS Safari", page: "Konuşma", group: "İçerik",
    subject: "iOS Safari'de konuşma alanı tam ekran olmuyor",
    body: "iPhone Safari'de konuşma aç — alanın altında bir boşluk kalıyor. Adres barı dahil hesaplama 70vh'yi bozuyor.",
    hint: "vh + iOS = problem.",
    reveal: "`70vh` → `dvh` (dynamic viewport height) veya JS ile `window.innerHeight` ile dinamik."
  },
  {
    id: "M-24", chapter: "ch4", reporter: "hakan", date: "10 May, 21:28", status: "Açık",
    category: "Mobile / Layout", page: "Ana Sayfa", group: "İçerik",
    subject: "Hero butonları mobilde wrap etmiyor",
    body: "Hero'da bir buton var, mobilde alana sığmadığı için kart kenarında kesiliyor — `flex-wrap` yok ve parent `overflow-hidden`.",
    hint: "flex-wrap eksik.",
    reveal: "Buton container'ı `flex flex-wrap gap-2` olmalı."
  },
  {
    id: "M-25", chapter: "ch4", reporter: "hakan", date: "10 May, 21:35", status: "Açık",
    category: "Mobile / Layout", page: "Takvim", group: "İçerik",
    subject: "Takvim hücreleri mobilde çok dar",
    body: "Takvim 7 sütun, mobilde her hücre ~50px — etkinlik metni hiç okunmuyor. Mobile için liste görünümü daha iyi olabilir.",
    hint: "7 col grid mobile'da yetersiz.",
    reveal: "Mobile için takvim ya tek sütun liste, ya da etkinlikler ayrı section."
  },
  {
    id: "M-26", chapter: "ch4", reporter: "deniz", date: "10 May, 21:42", status: "Yeni",
    category: "Mobile / Layout", page: "Genel pricing kartlar", group: "İçerik",
    subject: "Pricing kartları mobilde stack edince \"featured\" vurgusu kayboluyor",
    body: "Faturalama'da plan kartı ön plana çıkıyor masaüstünde, mobilde tüm kartlar üst üste binince hangisi featured anlaşılmıyor.",
    hint: "Visual hierarchy mobile'da değişmeli.",
    reveal: "Featured kart için mobile'da ek görsel vurgu (badge, border) eklenmeli."
  },
  {
    id: "M-27", chapter: "ch4", reporter: "hakan", date: "10 May, 21:50", status: "Açık",
    category: "Mobile / Layout", page: "Mentorlar", group: "İçerik",
    subject: "Mentor kartı içeriği mobilde taşıyor",
    body: "Mentor kartında avatar + isim + butonlar var — mobile'da kart genişliği yetersiz, içerik dışına taşıyor.",
    hint: "Card içeriği responsive değil.",
    reveal: "Mentor card içeriğinde `min-w-0` ve flex değerleri responsive olmalı."
  },
  {
    id: "M-28", chapter: "ch4", reporter: "hakan", date: "10 May, 21:58", status: "Açık",
    category: "Mobile / Layout", page: "Atölyeler", group: "İçerik",
    subject: "Atölye kartı uzun başlıkta kart altına taşıyor",
    body: "Atölye gradient image var, üzerinde başlık ilk kelimesi yazıyor. Mobilde uzun başlıkta metin kart sınırını aşıyor.",
    hint: "Image overlay metni truncate yok.",
    reveal: "Card image overlay'da `truncate` eksik."
  },
];
