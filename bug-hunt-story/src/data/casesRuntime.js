export const CASES_RUNTIME = [
  {
    id: "R-01", chapter: "ch3", reporter: "berk", date: "8 May, 22:30", status: "Açık", severity: "high",
    category: "Performans / Memory leak", page: "App",
    subject: "Site sekmem arka planda açık kalınca yavaşlıyor",
    body: "Bilgisayarımda bu sekmeyi 1-2 saat açık unutursam fan dönmeye başlıyor, RAM artıyor. DevTools'ta Memory tab'ında snapshot aldım — heap sürekli büyüyor, GC temizlemiyor. Bir interval cleanup yapılmamış olabilir.",
    hint: "useEffect içindeki setInterval'in cleanup return etmesi gerekir.",
    reveal: "App'te `useEffect(() => { setInterval(...) }, [])` — cleanup return etmiyor. `return () => clearInterval(id)` eklenmeli."
  },
  {
    id: "R-02", chapter: "ch3", reporter: "can", date: "8 May, 23:00", status: "Açık",
    category: "Console / Debug", page: "App",
    subject: "Console'a sürekli '[DEBUG] App render' basılıyor",
    body: "DevTools Console'u açtım, bir şey debug ediyordum. Saniyede birkaç kez `[DEBUG] App render 2026-05-08T...` log'u düşüyor. Production kodunda bu olmamalı.",
    hint: "App component'inde unutulmuş console.log.",
    reveal: "`App` fonksiyonunun başında `console.log(\"[DEBUG] App render\", ...)` — silinmesi unutulmuş."
  },
  {
    id: "R-03", chapter: "ch3", reporter: "can", date: "9 May, 09:15", status: "Açık",
    category: "Console / Deprecation", page: "Hakkımızda",
    subject: "Hakkımızda sayfasını açınca Console'da kırmızı warning",
    body: "About sayfasına geldim, Console'da: `[DEPRECATED] AboutPage uses legacy layout, will be removed in v3`. Geliştirme notu prod'a sızmış sanırım.",
    hint: "console.warn unutulmuş.",
    reveal: "`AboutPage` fonksiyonunun başında `console.warn(\"[DEPRECATED] ...\")` — kaldırılmalı."
  },
  {
    id: "R-04", chapter: "ch3", reporter: "can", date: "9 May, 09:30", status: "Açık",
    category: "Console / Debug", page: "Birden fazla sayfa",
    subject: "Bir sürü sayfada console.log var",
    body: "Sayfa değiştirdikçe Console'a debug çıktıları düşüyor: \"HomePage rendering, user: ...\", \"BlogPostPage { author: ... }\", \"scroll updated [...]\". Geliştirme sırasında konmuş, temizlenmemiş.",
    hint: "console.log'lar production'a karışmış.",
    reveal: "`HomePage`, `FeedPage`, `BlogPostPage`, `ConversationPage` içinde `console.log` çağrıları — hepsi silinmeli."
  },
  {
    id: "R-05", chapter: "ch3", reporter: "berk", date: "9 May, 10:45", status: "Açık",
    category: "React / Key prop", page: "Ana Sayfa",
    subject: "Ana sayfada Console'da \"key prop\" warning'i",
    body: "Ana sayfaya girince React warning: \"Each child in a list should have a unique 'key' prop\". Stats grid'inde olduğunu tahmin ediyorum çünkü diğer .map'ler key veriyor.",
    hint: "Stats array'inde key eksik.",
    reveal: "HomePage stats `.map((s) => ...)` — `key` prop'u verilmemiş. `key={s.l}` eklenmeli."
  },
  {
    id: "R-06", chapter: "ch3", reporter: "berk", date: "9 May, 11:00", status: "Açık",
    category: "React / Duplicate key", page: "Mentor Profil",
    subject: "Mentor sayfasında \"two children with same key\" hatası",
    body: "Mentor detay sayfasında uzmanlık etiketleri var. Console: \"Encountered two children with the same key, `SCSS`\". Listede SCSS iki kez geçiyor.",
    hint: "Duplicate string in array.",
    reveal: "Uzmanlık tag dizisinde `\"SCSS\"` iki kez var — `key={s}` kullanıldığı için duplicate. Index'i da key'e dahil et veya tekilleştir."
  },
  {
    id: "R-07", chapter: "ch3", reporter: "berk", date: "9 May, 11:08", status: "Açık",
    category: "React / Duplicate key", page: "Beğeniler",
    subject: "Beğeniler sayfasında da aynı duplicate key",
    body: "LikesPage'te `key={u.role}` kullanılıyor ama iki kullanıcının role'ü \"Frontend Dev\" — duplicate.",
    hint: "Role unique değil.",
    reveal: "LikesPage'te `key={u.role}` — Can Köse ve Aylin O. ikisi de \"Frontend Dev\". Index ile birleştir."
  },
  {
    id: "R-08", chapter: "ch3", reporter: "berk", date: "9 May, 11:20", status: "Açık",
    category: "React / DOM nesting", page: "Kariyer",
    subject: "Kariyer sayfasında validateDOMNesting warning'i",
    body: "Console'da: \"validateDOMNesting(...): <a> cannot appear as a descendant of <a>\". Kariyer kartlarında a etiketi içine başka a yerleştirilmiş.",
    hint: "<a> içinde <button> ve iç içe <a>.",
    reveal: "CareersPage'te dış `<a href=\"#\">` içinde hem `<button>` hem başka `<a href=\"#\">Detayları gör</a>` — iç içe geçmiş."
  },
  {
    id: "R-09", chapter: "ch3", reporter: "berk", date: "9 May, 11:30", status: "Açık",
    category: "React / DOM nesting", page: "Mentorlar",
    subject: "Mentor kartlarında button içinde button warning'i",
    body: "Mentorlar sayfasında her kart bir `<button>`, içine \"Mentor Seç\" diye başka bir `<button>` daha konmuş. DOM nesting warning.",
    hint: "Button içinde button.",
    reveal: "MentorsPage'te kartın kendisi `<button>`, içeride `<button>Mentor Seç</button>` — yapı kırılmalı."
  },
  {
    id: "R-10", chapter: "ch3", reporter: "berk", date: "9 May, 11:40", status: "Açık",
    category: "React / DOM nesting", page: "Hakkımızda",
    subject: "About sayfasında p içinde div warning'i",
    body: "Hero açıklamasında `<p>` etiketi içine `<div className=\"inline-block\">Yeni</div>` konmuş. p element'i block-level child kabul etmez.",
    hint: "<p>'nin içi sadece inline.",
    reveal: "AboutPage hero'da `<p>...<div>Yeni</div></p>` — `<span>` veya `<p>` dışına alınmalı."
  },
  {
    id: "R-11", chapter: "ch3", reporter: "berk", date: "9 May, 11:48", status: "Açık",
    category: "React / DOM nesting", page: "Kaynak Detay",
    subject: "Kaynak detayda a içinde button warning'i",
    body: "ResourceDetail'de \"Kaynak Linki\" altında uzun URL'nin yanında \"Kopyala\" butonu var — `<a>` içinde `<button>`.",
    hint: "Anchor içinde button.",
    reveal: "`<a>...{LONG_URL}<button>Kopyala</button></a>` — buton dışarı alınmalı."
  },
  {
    id: "R-12", chapter: "ch3", reporter: "aylin", date: "9 May, 13:00", status: "Açık",
    category: "React / Form", page: "Atölye Oluştur",
    subject: "Atölye oluşturmaya başlayınca uncontrolled→controlled warning",
    body: "Form'a yazmaya başlayınca Console: \"A component is changing an uncontrolled input to be controlled\". Title alanının başlangıç değeri undefined sanırım.",
    hint: "useState({title: undefined}) → string olur.",
    reveal: "`useState({title: undefined, ...})` — `title: \"\"` (boş string) olmalı."
  },
  {
    id: "R-13", chapter: "ch3", reporter: "murat", date: "9 May, 13:15", status: "Açık",
    category: "Erişilebilirlik / Form", page: "Atölye Oluştur",
    subject: "Başlık label'ına tıklayınca input fokuslanmıyor",
    body: "\"Başlık\" yazısına tıklıyorum, input fokuslanması gerekirken hiçbir şey olmuyor. label htmlFor değeri input id'si ile uyuşmuyor olmalı.",
    hint: "htmlFor=ws-title vs id=ws-input-title.",
    reveal: "`<label htmlFor=\"ws-title\">` ama `<input id=\"ws-input-title\">` — eşleşmiyor."
  },
  {
    id: "R-14", chapter: "ch3", reporter: "can", date: "9 May, 14:00", status: "Açık",
    category: "React / Form", page: "SSS",
    subject: "SSS arama yazınca controlled input warning",
    body: "P-FAQ-4 ile aynı: `value=\"\"` var ama onChange yok.",
    hint: "Aynı.",
    reveal: "Aynı: `value=\"\"` + `onChange` ekle veya `defaultValue` kullan."
  },
  {
    id: "R-15", chapter: "ch3", reporter: "can", date: "9 May, 14:30", status: "Açık", severity: "high",
    category: "Performans / useEffect", page: "Konuşma",
    subject: "Konuşma sayfası her saniye scroll yeniden hesaplıyor",
    body: "Konuşma sayfasında `console.log('scroll updated', ...)` her render'da çıkıyor. useEffect deps array'siz tanımlanmış sanırım, sürekli çalışıyor.",
    hint: "useEffect ikinci argüman eksik.",
    reveal: "ConversationPage useEffect'te deps array yok — her render çalışıyor. `[ctx.messages]` eklenmeli."
  },
  {
    id: "R-16", chapter: "ch3", reporter: "can", date: "9 May, 15:00", status: "Açık",
    category: "Network / 404", page: "Ana Sayfa",
    subject: "Ana sayfada hero illustration 404 dönüyor",
    body: "Network sekmesinde `/images/hero-illustration.svg` 404. Ayrıca alt attribute da yok — a11y hatası.",
    hint: "Image src yanlış.",
    reveal: "HomePage hero'da `<img src=\"/images/hero-illustration.svg\">` — dosya yok, alt eksik."
  },
  {
    id: "R-17", chapter: "ch3", reporter: "can", date: "9 May, 15:08", status: "Açık",
    category: "Network / 404", page: "Hakkımızda",
    subject: "Hakkımızda team-photo de 404",
    body: "AboutPage'de `/static/team-photo-2025.jpg` 404.",
    hint: "Aynı.",
    reveal: "Aynı pattern."
  },
  {
    id: "R-18", chapter: "ch3", reporter: "can", date: "9 May, 15:15", status: "Açık",
    category: "Network / 404", page: "Blog Yazısı",
    subject: "Blog kapak görseli 404",
    body: "BlogPostPage'de `/blog/cover-scss-specificity.jpg` 404.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "R-19", chapter: "ch3", reporter: "berk", date: "9 May, 15:25", status: "Açık",
    category: "Code / Dead code", page: "Blog Yazısı",
    subject: "Blog yazısında DOM'da olan ama görünmeyen ölü div var",
    body: "Inspector'da bakınca \"Cover Image\" yazılı bir `<div>` var, `display: none` ile gizlenmiş. Backup fallback olabilir ama kullanılmıyorsa silinmeli.",
    hint: "display:none ile dolu.",
    reveal: "BlogPostPage'te `<div ... style={{display: 'none'}}>Cover Image</div>` — fallback yapılacaksa onError handler ile dinamik yap, sabit gizleme yapma."
  },
];
