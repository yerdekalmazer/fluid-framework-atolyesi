# Bug App — React + Tailwind (Feature-Based)

`bug-app.html` dosyasının **Vite + React + Tailwind CSS** ile feature-based mimariye taşınmış halidir.

> ⚠️ **Atölye notu:** Bu sürüm `CHECKLIST.md`'deki ~200+ kasıtlı bug'ı **korur**. Atölye katılımcıları artık her bug'u yalıtılmış bir component dosyasında inceleyebilir. Production'a alınacak bir kod değildir.

## Kurulum

```bash
cd bug-app-react
npm install
npm run dev
```

Tarayıcı `http://localhost:5173` adresinde açılır.

## Klasör Yapısı

```
bug-app-react/
├── index.html
├── src/
│   ├── main.jsx              # entry
│   ├── index.css             # Tailwind directives
│   ├── App.jsx               # state + ctx + layout kompozisyonu
│   ├── routes.js             # page id → component map
│   │
│   ├── shared/
│   │   ├── icons/
│   │   │   ├── Icon.jsx
│   │   │   └── iconPaths.jsx
│   │   ├── data/
│   │   │   ├── nav.js        # Sidebar NAV
│   │   │   └── sampleData.js # SAMPLE_USERS, LONG_WORD, LONG_URL
│   │   ├── components/
│   │   │   ├── Avatar.jsx
│   │   │   ├── PageHeader.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TopBar.jsx
│   │   │   └── Footer.jsx
│   │   └── feedback/
│   │       ├── Modal.jsx     # DeleteModal + EditModal
│   │       └── Toast.jsx     # ToastStack
│   │
│   └── features/
│       ├── home/             HomePage.jsx
│       ├── feed/             FeedPage.jsx
│       ├── notifications/    NotificationsPage.jsx
│       ├── messaging/        MessagesPage.jsx, ConversationPage.jsx
│       ├── workshops/        WorkshopsPage, WorkshopDetailPage, WorkshopCreatePage
│       ├── events/           CalendarPage, EventDetailPage
│       ├── mentors/          MentorsPage, MentorDetailPage, MentorApplyPage
│       ├── resources/        ResourcesPage, ResourceDetailPage
│       ├── profile/          ProfilePage, ProfileEditPage, LikesPage, MyCommentsPage
│       ├── settings/         SettingsAccountPage, ...Notifications, ...Privacy, ...Billing
│       └── company/          AboutPage, CareersPage, ContactPage, BlogPage, BlogPostPage, HelpPage, FaqPage
```

## Mimari Notları

- **Feature-based:** Her sayfa kendi feature klasöründe yaşar; ortak parçalar `shared/` altında.
- **State yönetimi:** Tüm global state `App.jsx` içinde tutulur, sayfalara `ctx` prop'u olarak iner. Hızlı atölye iterasyonu için kasıtlı olarak basit tutuldu (Redux/Context yok).
- **Routing:** `useState("home")` + `routes.js` map. Bug'ların component sınırlarında daha okunaklı olması için tercih edildi.
- **Tailwind:** Standart Tailwind 3 kurulumu (PostCSS + autoprefixer). Tailwind v4 farklılığı arayanlar `tailwind.config.js`'i v4'e geçirip karşılaştırabilir.

## Atölye Akışı

Bug'lar `CHECKLIST.md`'deki sıraya bağlı kalır:

1. **Görsel tarama** — sayfaları gez, statik bug'ları işaretle.
2. **Etkileşim avı** — form, modal, toast, dropdown, like sayacı.
3. **DevTools avı** — Console (warn/log/key dups), Network (404'ler).
4. **Mobile avı** — DevTools cihaz simülatörü (375x667).
5. **Code review** — feature klasöründe bug'a tek tıkla ulaş.

## Bug → Dosya Hızlı Eşleme

| Bug | Dosya |
|---|---|
| Avatar oval (`w-12 h-10`) | `src/shared/components/Avatar.jsx` |
| TopBar `focus:outline-none`, dropdown z-index | `src/shared/components/TopBar.jsx` |
| Sidebar aktif highlight yok | `src/shared/components/Sidebar.jsx` |
| Modal `absolute inset-0` (fixed olmalı) | `src/shared/feedback/Modal.jsx` |
| Toast z-30 modal'ın altında | `src/shared/feedback/Toast.jsx` |
| Footer link contrast / sosyal boyut | `src/shared/components/Footer.jsx` |
| `setInterval` cleanup yok, `console.log` her render | `src/App.jsx` |
| DOM nesting `<a>` içinde `<button>` | `src/features/company/CareersPage.jsx`, `src/features/mentors/MentorsPage.jsx` |
| `<p>` içinde `<div>` | `src/features/company/AboutPage.jsx` |
| Type=text şifre (güvenlik) | `src/features/settings/SettingsAccountPage.jsx` |
| Duplicate keys ("SCSS"x2) | `src/features/mentors/MentorDetailPage.jsx` |
| Duplicate keys (`u.role`) | `src/features/profile/LikesPage.jsx` |
| Uncontrolled→controlled, `htmlFor` mismatch | `src/features/workshops/WorkshopCreatePage.jsx` |
| Read-only input | `src/features/company/FaqPage.jsx` |
| `useEffect` deps array yok | `src/features/messaging/ConversationPage.jsx` |
| 404 image — hero illustration | `src/features/home/HomePage.jsx` |
| 404 image — team photo | `src/features/company/AboutPage.jsx` |
| 404 image — blog cover + ölü kod | `src/features/company/BlogPostPage.jsx` |
| Dynamic Tailwind class (JIT purge) | `src/features/company/BlogPage.jsx`, `src/features/profile/ProfilePage.jsx` |

> Tam liste için `../CHECKLIST.md` dosyasına bakın.
