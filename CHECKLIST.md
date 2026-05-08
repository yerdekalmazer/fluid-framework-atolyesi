# 🔍 Bug Teşhis Kontrol Listesi — 30 Sayfalık SPA

**Pixel-Perfect Fluid Framework Atölyesi · FAZ 2**
**Dosya:** `bug-app.html` · **30 sayfa · ~200+ bug** (desktop + mobile + build/runtime)

> Sayfalar arasında geçiş için soldaki sidebar'ı kullan. Her sayfada en az 3-5 bug var. Bazı bug'lar tüm sayfalarda tekrarlanan paylaşılan bileşenlerden geliyor.
>
> **DevTools'u aç** (Cmd+Option+I) — Console tab'da React warning'leri, Network tab'da 404'ler, **Toggle Device Toolbar** (Cmd+Shift+M) ile mobile viewport'a geç.

---

## 🌐 GLOBAL (her sayfada)

| # | Bug | Konum |
|---|---|---|
| G-01 | Avatar oval (`w-12 h-10`) | Avatar bileşeni — tüm sayfalar |
| G-02 | TopBar arama: `focus:outline-none` ring yok | TopBar |
| G-03 | TopBar arama: text yazılınca clear (×) yok | TopBar |
| G-04 | TopBar avatar `w-12 h-10` | TopBar |
| G-05 | TopBar username uzun → layout patlar | TopBar — username'i tıkla, uzun yaz |
| G-06 | Bildirim 🔔 → dışarı tıklayınca kapanmıyor | TopBar |
| G-07 | Sidebar aktif sayfa highlight yok | Sidebar — tüm linkler aynı görünür |
| G-08 | Sticky TopBar `z-50` yok → modal/dropdown örtüyor | TopBar |
| G-09 | "Devam et"/"Aç" butonları `h-8 + py-3` çelişkisi | Tüm butonlar |
| G-10 | PageHeader subtitle `text-slate-300` (kontrast düşük) | Tüm sayfa başlıkları |
| G-11 | Modal `absolute inset-0` (`fixed` olmalı) | Sil/Düzenle modal |
| G-12 | Modal Esc tuşu çalışmıyor | Modal |
| G-13 | Modal dışarı tıklama kapatmıyor | Modal |
| G-14 | Modal açıkken body scroll kilitli değil | Modal |
| G-15 | Toast `z-30`, modal `z-40` → modal toast'ı örter | Toast |
| G-16 | Toast otomatik kaybolmuyor (auto-dismiss yok) | Toast |
| G-17 | Footer linkleri `gap-1` çok dar | Footer |
| G-18 | Footer linkleri `hover:text-white` (beyaz arkaplanda kayboluyor) | Footer |
| G-19 | Sosyal medya butonları farklı boyutta (`w-9 h-8`, `w-7 h-9`) | Footer |

---

## 📄 SAYFA BAZLI

### 1. Ana Sayfa (`home`)
- Hero `w-[800px]` sabit (max-w değil)
- Hero subtitle `text-gray-300` (mor gradient'te düşük kontrast)
- Hero buton `h-8 + py-3`
- Stats kartlarının 2.'si `p-3` (diğerleri `p-5`)
- Son hareketler 2. öğesi `p-3`
- Quick actions hem `space-y-2` hem `flex flex-col gap-1` çakışıyor

### 2. Akış (`feed`)
- Filter tab'larında aktif highlight yok
- 2. post `p-3` (diğerleri `p-5`)
- Tooltip `overflow-hidden` parent ile kırpılır (avatar hover)
- Dropdown `overflow-hidden` parent ile kırpılır
- Birden fazla dropdown aynı anda açık kalabilir (outside-click yok)
- Like sayısı 1 yerine **2 artıyor** (off-by-one)
- 3. post: 150+ karakterli kelime taşıyor (`break-words` yok)
- 4. post: uzun URL satır kırmıyor (`break-all` yok)

### 3. Bildirimler (`notifications`)
- 3. öğe `p-2` (diğerleri `p-4`)
- Time text `text-slate-300` (düşük kontrast)
- Unread dot `w-2 h-3` (kare değil dikdörtgen)
- "Tümünü okundu işaretle" butonu `text-slate-300 hover:text-white`

### 4. Mesajlar (`messages`)
- 3. konuşma kartı `p-3`
- 1. konuşma preview'unda `truncate` yok → uzun mesaj taşar
- Unread badge `w-5 h-5` ama bazıları `w-5 h-3` olabilir
- Konuşma tıklamasında click feedback yok

### 5. Konuşma (`conversation`)
- Mesaj inputu `focus:outline-none` (ring yok)
- "Gönder" butonu `h-8 + py-3`
- Uzun mesajda `break-words` yok (4. mesaj taşar)
- Online dot ile metin hizasız (vertical-align)
- Mesaj yüksekliği sabit `70vh` → mobilde sorunlu

### 6. Atölyeler (`workshops`)
- 3. workshop kartı `p-3` (içeriden — diğerleri `p-0`)
- Filter'da aktif highlight tutarsız
- "+ Yeni Atölye" butonu `h-8 + py-3`
- Card image gradient gerçek `<img>` olsa `object-cover` yok

### 7. Atölye Detay (`workshop-detail`)
- Hero gradient sabit yükseklik `h-64`
- Program adımları `w-6 h-7` (kare değil)
- Sidebar fiyat metni `text-slate-300`
- "Kayıt Ol" butonu `h-8 + py-3`

### 8. Atölye Oluştur (`workshop-create`)
- Tüm input'lar `focus:outline-none` ring yok
- `focus:border-indigo-500` yok
- Textarea `resize-y` ama `max-h` yok
- Date input min/max yok
- Süre `type="text"` (number olmalı)
- Checkbox label clickable değil (label sarmıyor)
- "Yayınla" butonu `h-8 + py-3`
- Boş submit aktif görünüyor

### 9. Takvim (`calendar`)
- Day headers `text-slate-300`
- 19 May etkinliği uzun başlık → kart taşıyor (`overflow-hidden` ama `truncate` yok)
- Geçmiş günler `text-slate-300` (zaten zayıf)
- ‹/› butonlarında active state yok

### 10. Etkinlik (`event-detail`)
- Hero subtitle `text-gray-300`
- Uzun URL satır kırmıyor
- Katılımcı avatar grid hizasız (`flex-wrap gap-1` yetersiz)
- "Katıl" butonu `h-8 + py-3`

### 11. Mentorlar (`mentors`)
- 2. mentor kartı `p-3` (diğerleri `p-5`)
- Mentor card `overflow-hidden` ama hover içerik clip oluyor olabilir
- "Mentor Seç" butonu `h-8 + py-3`
- Star rating sembolik `★ 4.9` — sayısal hesaplama yok

### 12. Mentor Profil (`mentor-detail`)
- Bio'da uzun kelime taşıyor
- Yorumlardaki avatar oval (sm size: `w-8 h-7`)
- Uzmanlık tag listesi `flex-nowrap` → mobilde overflow
- "Seans Rezervasyonu" butonu `h-8 + py-3`

### 13. Mentor Başvuru (`mentor-apply`)
- E-posta `type="text"` (email olmalı)
- Tecrübe yılı `type="text"` (number olmalı)
- Required field `*` sadece bir alanda var
- Textarea `resize-y` max-h yok
- Submit butonu `h-8 + py-3`
- Boş form submit aktif

### 14. Kaynaklar (`resources`)
- "+ Yükle" butonu `h-8 + py-3`
- Kaynak kartı subtitle `text-slate-300`
- Filter aktif state inconsistent
- 6 sabit kart — hover'da farklı state yok

### 15. Kaynak Detay (`resource-detail`)
- Uzun URL satır kırmıyor
- Yorumlardan 2.'si `p-3`
- 3. yorum: 150+ karakter taşıyor
- "İndir" butonu `h-8 + py-3`
- Yorum kartı `overflow-hidden` (gereksiz)

### 16. Profilim (`profile`)
- Avatar sabit `w-16 h-14` (oval)
- Bio rengi `text-slate-300` (düşük kontrast)
- Tab'larda aktif highlight yok
- Atölye kartlarında image dynamic class hatalı (Tailwind JIT problemi: `from-indigo-${...}` purge edilebilir)

### 17. Profili Düzenle (`profile-edit`)
- Tüm input'lar `focus:outline-none`
- Web site `type="text"` (url olmalı)
- "Sil" linki kırmızı ama hover state yok
- "Fotoğraf Değiştir" butonu disabled-look yok
- "Kaydet" butonu `h-8 + py-3`

### 18. Beğeniler (`likes`)
- 2. öğe `p-3`
- 3. öğe: uzun kelime taşıyor
- Heart icon ♥ sabit kırmızı (toggle yok)

### 19. Yorumlarım (`comments-mine`)
- 2. yorumda uzun URL satır kırmıyor
- Düzenle/Sil butonlarında confirm yok
- Tüm yorumlar `overflow-hidden` (tooltip clip eder)

### 20. Hesap (`settings-account`)
- Şifre input'ları `type="text"` (`type="password"` olmalı!) — güvenlik bug'ı
- Tüm input'larda `focus:outline-none` ring yok
- "Hesabı Sil" tek tıkla — confirm yok
- Tehlikeli Bölge metni `text-red-300` (kontrast düşük)
- "Kaydet" butonu `h-8 + py-3`

### 21. Bildirim Ayarları (`settings-notifications`)
- 2. toggle satırı `p-3` (diğerleri `p-4`)
- Toggle açıklaması `text-slate-300`
- Toggle butonu `w-12 h-7` ama içindeki dot `w-5 h-5` — hizalama sorunu

### 22. Gizlilik (`settings-privacy`)
- Checkbox açıklamaları `text-slate-300`
- Select `focus:outline-none`
- "Kaydet" butonu `h-8 + py-3`

### 23. Faturalama (`settings-billing`)
- Plan değiştir butonu `h-8 + py-3`
- Tablo başlıkları sticky değil
- "Durum" sütunu başlık `text-center` ama hücre `text-left` (hizasız)
- Plan kartı subtitle `text-indigo-200` (gradient'te düşük kontrast)

### 24. Hakkımızda (`about`)
- Stats kartlarının 2.'si `p-3`
- Hero subtitle `text-gray-300`
- Misyon/Vizyon `text-slate-300`

### 25. Kariyer (`careers`)
- 3. iş kartı `p-3`
- "Başvur" butonu `h-8 + py-3`
- Kart logosu `w-12 h-10` (oval)
- Lokasyon/tip metni `text-slate-300`

### 26. İletişim (`contact`)
- Tüm input'lar `focus:outline-none`
- E-posta `type="text"` (email olmalı)
- 2. iletişim kartı `p-3`
- İletişim başlık `text-slate-300`
- "Gönder" butonu `h-8 + py-3`
- Boş form submit aktif

### 27. Blog (`blog`)
- 2. yazı `p-3` (içerik kayar)
- Card image dynamic gradient class (Tailwind purge)
- Yazı subtitle `text-slate-300`
- Yazı kartı tıklamada cursor:pointer ama active state yok

### 28. Blog Yazısı (`blog-post`)
- Cover image `object-cover` yok
- Uzun URL satır kırmıyor
- Span'in içindeki uzun kelime taşıyor
- 2. yorum `p-3`
- Tarih/dakika metni okuma metni `text-slate-300`

### 29. Yardım (`help`)
- 3. kategori kartı `p-3`
- Açıklama metni `text-slate-300`
- Hover'da shadow var ama transform yok (hızlı geçiş)

### 30. SSS (`faq`)
- 2. soru satırı `p-3`
- Cevap metni `text-slate-300`
- + / − ikon hizası dinamik değil
- Search input `value=""` ama `onChange` yok (controlled warning)

---

## 🟥 BUILD / RUNTIME / CONSOLE (DevTools'da görünür)

> DevTools Console'u aç — bu bug'lar sessiz değil, log/warning üretiyor.

| # | Bug | Konum | Nasıl yakala |
|---|---|---|---|
| **R-01** | `setInterval` cleanup yok → memory leak | `App` `useEffect` | DevTools Memory tab'da heap büyür |
| **R-02** | `[DEBUG] App render` console.log her render'da | `App` | Console'da sürekli log |
| **R-03** | `[DEPRECATED] AboutPage uses legacy layout` | `AboutPage` | About sayfasını ziyaret et, Console'da warn |
| **R-04** | Debug `console.log` prod kodunda | `HomePage`, `FeedPage`, `BlogPostPage`, `ConversationPage` | Console |
| **R-05** | Missing `key` prop on `.map()` | HomePage stats grid | React: *"Each child in a list should have a unique 'key'"* |
| **R-06** | Duplicate `key={s}` | MentorDetail uzmanlık tag'leri ("SCSS" iki kez) | React: *"Encountered two children with the same key"* |
| **R-07** | Duplicate `key={u.role}` | LikesPage (iki user'da "Frontend Dev") | Aynı key warning |
| **R-08** | `<a>` içine `<button>` + iç içe `<a>` | CareersPage | React: *"validateDOMNesting"* |
| **R-09** | `<button>` içine `<button>` | MentorsPage kartları | DOM nesting validation warning |
| **R-10** | `<p>` içine `<div>` | AboutPage hero açıklaması | DOM nesting warning |
| **R-11** | `<a>` içine `<button>` | ResourceDetail kaynak linki | DOM nesting warning |
| **R-12** | Uncontrolled → controlled warning | WorkshopCreate (`title: undefined`) | React form warning |
| **R-13** | `htmlFor` ↔ `id` mismatch | WorkshopCreate başlık (label `ws-title` vs input `ws-input-title`) | A11y: label tıklayınca focus gitmiyor |
| **R-14** | Read-only `value` (controlled w/o onChange) | FaqPage search input | React form warning |
| **R-15** | `useEffect` deps array yok | ConversationPage | Her render'da çalışıyor |
| **R-16** | 404 image: `/images/hero-illustration.svg` | HomePage hero | Network 404, alt yok (a11y) |
| **R-17** | 404 image: `/static/team-photo-2025.jpg` | AboutPage | Aynı |
| **R-18** | 404 image: `/blog/cover-scss-specificity.jpg` | BlogPostPage | Aynı |
| **R-19** | Ölü kod (`display:none`) | BlogPostPage cover image fallback | DOM'da var ama render edilmiyor |

---

## 📱 MOBILE (DevTools → Toggle Device Toolbar — Cmd+Shift+M)

> 375x667 (iPhone SE) veya 390x844 (iPhone 12) viewport'unda test et.

### Mobile Drawer / Hamburger
| # | Bug | Konum | Nasıl yakala |
|---|---|---|---|
| **M-01** | Drawer dışına tıklayınca kapanmıyor | Sidebar overlay | `onClick` handler eksik |
| **M-02** | Sidebar'dan link tıklayınca drawer kapanmıyor | Sidebar `<a>` items | `onChange` çağırılırken `setSidebarOpen(false)` yok |
| **M-03** | Drawer açıkken body scroll lock yok | App | Arka plan kaydırılabilir |
| **M-04** | Drawer'ın içinde X (kapat) butonu yok | Sidebar | Sadece hamburger toggle var |
| **M-05** | Drawer `z-50`, overlay `z-40`, TopBar sticky `z-50` değil → çakışma | Layout | Drawer açıkken TopBar kayboluyor |

### TopBar / Header
| # | Bug | Konum | Nasıl yakala |
|---|---|---|---|
| **M-06** | TopBar mobilde yatay overflow | Header | Search + bell + avatar + username sığmıyor |
| **M-07** | Username text mobilde gizlenmiyor | TopBar | Uzun adda layout patlıyor |
| **M-08** | Search placeholder uzun, input dar olunca yarısı kayboluyor | TopBar | "Atölye, mentor veya kaynak ara..." |
| **M-09** | Bildirim dropdown `w-72 right-0` mobilde sağdan ekran dışı | TopBar | Görsel taşma |

### Layout & Spacing
| # | Bug | Konum | Nasıl yakala |
|---|---|---|---|
| **M-10** | Hero `w-[800px]` mobilde yatay scroll | HomePage hero | Sayfayı sağa kaydır |
| **M-11** | `main p-6` mobilde fazla padding | App layout | İçerik dar kalıyor |
| **M-12** | Stats grid `grid-cols-2`, içerik `trending-up + text` taşıyor | HomePage stats | Sayı + ikon + text çakışıyor |
| **M-13** | Profile header `flex gap-4` stack etmiyor | ProfilePage | "Profili Düzenle" butonu sıkışık |
| **M-14** | Footer `grid-cols-2 md:grid-cols-4` — 2 sütun ama hizasız | Footer | Sosyal ikonlar yamuk |
| **M-15** | Faturalama tablosu `overflow-x` yok | SettingsBilling | Yatay overflow |

### Forms / Inputs
| # | Bug | Konum | Nasıl yakala |
|---|---|---|---|
| **M-16** | Yorum form'unda input + Gönder butonu yan yana, `flex-1` yok | FeedPage yorum | Buton kaybolabilir |
| **M-17** | Konuşma input + Gönder mobilde dar | ConversationPage | Aynı |
| **M-18** | Form input'ları full-width ama `px-3 py-2` mobile için dar | Tüm formlar | Touch target küçük |

### Modal / Overlay
| # | Bug | Konum | Nasıl yakala |
|---|---|---|---|
| **M-19** | Modal `max-w-md mx-4` küçük ekrana sığmıyor | App modal | Yatay scroll |
| **M-20** | Modal `absolute` (zaten bug) — mobilde scroll'da çok belirgin | App modal | Sayfayı kaydır + modal aç |
| **M-21** | Toast `bottom-4 right-4` ekranın yarısını kaplar (uzun mesaj) | App toast | Newsletter abone ol |
| **M-22** | Post `⋯` dropdown `right-0 w-32` overflow-hidden parent'la kesilir | FeedPage | ⋯ tıkla mobilde |

### İçerik / Görsel
| # | Bug | Konum | Nasıl yakala |
|---|---|---|---|
| **M-23** | Konuşma `style={{height: "70vh"}}` iOS Safari'de adres barıyla hesaplama bozuk | ConversationPage | iOS Safari, tam ekran olmuyor |
| **M-24** | Hero buton'ları `flex` wrap etmiyor + `overflow-hidden` parent | HomePage hero | "Detaylar" butonu kesiliyor |
| **M-25** | Takvim 7 sütun, hücreler çok dar, etkinlik metni okunmaz | CalendarPage | Mobile viewport'ta takvimi aç |
| **M-26** | Pricing kartları stack ediyor ama featured emphasis kaybolur | (yok ama benzer kartlar var) | — |
| **M-27** | Mentor card `flex` yapısı taşar (kart içi avatar + ad + butonlar) | MentorsPage | Kart içeriği overflow |
| **M-28** | Workshop card image gradient mobilde uzun isim kart altına taşıyor | WorkshopsPage | Uzun başlıkta görünür |

---

## 📊 Skor Anahtarı

| Bulduğun | Değerlendirme |
|---|---|
| **180+** | 🏆 Pixel-Perfect Avcı Efsanesi |
| **130-179** | 🎯 Senior Frontender |
| **80-129** | 🔍 İyi Gözlemci |
| **40-79** | 📚 Bug Listesi'ni tekrar oku |
| **<40** | 🤔 Mentor masasına gel |

**Toplam ≈ 200+** (≈19 global · ~130 sayfa-spesifik · 19 build/runtime · 28 mobile)

---

## ⚠️ ÖZEL DİKKAT — Güvenlik Bug'ı

**Settings-Account sayfasında şifre alanları `type="text"` olarak tanımlı.** Bu UI bug'ı değil, gerçek bir **güvenlik açığı**: şifreler ekranda görünür hale gelir. Pen-test review'larında bu tür bug'lar her zaman çıkar — atölye katılımcılarının buna özellikle dikkat etmesini öneriyorum.

---

## 🛠️ Atölye Akışı Önerisi

1. **Faz 1 — Görsel Tarama (45dk)**
   Katılımcılar siteyi gezer, sadece gözle gördükleri statik bug'ları işaretler. Hedef: 50+ bug.

2. **Faz 2 — Etkileşim Avı (60dk)**
   Form'lara veri girer, mesaj gönderir, modal'lar açar, toast'ları biriktirir. Hedef: +40 etkileşim bug'ı.

3. **Faz 3 — DevTools Avı (45dk)**
   Console'da warning'leri, Network'te 404'leri, A11y panel'i kontrol eder. Hedef: +20 build/runtime bug'ı.

4. **Faz 4 — Mobile Avı (30dk)**
   DevTools cihaz simülatöründe iPhone SE, iPad, vs.'de tekrar gezer. Hedef: +25 mobile bug'ı.

5. **Faz 5 — Code Review (60dk)**
   Mentor masaları açılır, katılımcılar bulduklarını paylaşır, kaçırılanları beraber tartışır.

---

_Atölyenin "FAZ 2 — Bireysel Bug Teşhis ve Onarım" aşamasında referans materyal olarak masada bulunur._
