export const CASES_GLOBAL = [
  {
    id: "G-01", chapter: "ch1", reporter: "sema", date: "8 May, 14:32", status: "Açık",
    category: "Görsel", page: "Tüm sayfalar — Avatar",
    subject: "Profil fotoğraflarım yumurta gibi duruyor",
    body: "Selam, profilime girince fotoğrafımın yuvarlak değil yamuk olduğunu fark ettim. Yan yana 5-6 kullanıcının avatarına baktım, hepsi hafif oval. Sadece bende değil, başka mentor profillerinde de aynı. Tasarım kararı mı, hata mı? Estetik açıdan epey rahatsız edici.",
    hint: "Bir kutuyu sonsuza kadar yuvarlatabilirsin; eni boyundan farklıysa daire olmaz.",
    reveal: "`Avatar` bileşeni `w-12 h-10` kullanıyor — eşit olmadığı için `rounded-full` daireyi oval yapıyor. `w-10 h-10` veya `w-12 h-12` olmalı."
  },
  {
    id: "G-02", chapter: "ch1", reporter: "murat", date: "9 May, 09:14", status: "Açık",
    category: "Erişilebilirlik", page: "Tüm sayfalar — TopBar arama",
    subject: "Klavyeyle gezerken arama kutusuna gelince nereye geldiğimi göremiyorum",
    body: "Fareyi az kullanıyorum, çoğunlukla Tab tuşuyla geziyorum. Sayfanın tepesindeki arama kutusuna ulaştığımda hiçbir vurgu, hiçbir çerçeve görmüyorum — sadece bir his ile yazmaya başlayınca anlıyorum o alanda olduğumu. Bu bir erişilebilirlik problemi olmalı.",
    hint: "Tarayıcının kendi outline'ını kapattıysan, yerine başka bir görsel ipucu koyman gerekir.",
    reveal: "TopBar arama input'unda `focus:outline-none` var ama yerine `focus:ring-2 focus:ring-indigo-400` gibi alternatif eklenmemiş."
  },
  {
    id: "G-03", chapter: "ch1", reporter: "aylin", date: "10 May, 16:48", status: "Yeni",
    category: "UX iyileştirme", page: "Tüm sayfalar — TopBar arama",
    subject: "Aramayı temizlemek için bir × düğmesi olabilir mi?",
    body: "Bir öneri olarak yazıyorum. Uzun bir sorgu yazıyorum, fikrimi değiştirip silmek istediğimde elle silmek zorunda kalıyorum. Çoğu modern arama kutusunda yazılı metin varken sağda küçük bir × oluyor, tek tıkla temizliyor. Buraya da eklenebilir mi?",
    hint: "Input'ta metin varsa koşullu olarak bir clear button render edilebilir.",
    reveal: "TopBar arama input'unda metin yazıldığında temizleme (×) butonu yok. `value` boş değilse render edilen küçük bir buton eklenebilir."
  },
  {
    id: "G-04", chapter: "ch1", reporter: "sema", date: "10 May, 17:02", status: "Açık",
    category: "Görsel", page: "Tüm sayfalar — TopBar avatar",
    subject: "Sağ üstteki kendi avatarım da yamuk",
    body: "G-01'de yazdığım avatar şikayeti sadece profil sayfasında değilmiş. Üst sağ köşedeki avatar div'i de aynı şekilde oval duruyor. Aynı boyut hatası, sadece bağlam farklı. İki yerde de düzeltmek lazım.",
    hint: "Bir bileşendeki yanlış boyut, başka bir yerde elle yazılan benzer bir div'e taşınmış olabilir.",
    reveal: "TopBar'daki kullanıcı avatarı `w-12 h-10` kullanan ayrı bir div — `Avatar` bileşeniyle paylaşmıyor ama aynı hatayı yapıyor."
  },
  {
    id: "G-05", chapter: "ch1", reporter: "berk", date: "11 May, 11:20", status: "Açık",
    category: "Layout", page: "Tüm sayfalar — TopBar username",
    subject: "Adımı uzun yazınca üst bar dağılıyor",
    body: "Kullanıcı adımı düzenlerken bir test olsun diye uzun bir Türkçe isim yazdım — TopBar tamamen kaydı, bildirim çanı yan tarafa gitti. Kullanıcı adı alanının taşma davranışı yok galiba.",
    hint: "Esnek bir alanın `max-width`, `truncate` veya `overflow-hidden` davranışı yoksa, içerik uzadıkça komşusunu iter.",
    reveal: "TopBar'da username metninde `truncate max-w-[160px]` veya benzeri bir taşma kontrolü yok. Uzun isim layout'u kırıyor."
  },
  {
    id: "G-06", chapter: "ch1", reporter: "can", date: "11 May, 13:45", status: "Açık",
    category: "Etkileşim", page: "Tüm sayfalar — Bildirim paneli",
    subject: "Bildirim panelini açtım, kapatamıyorum",
    body: "Sağ üstteki çan ikonuna tıkladım, bildirim listesi açıldı. Sonra başka bir yere tıkladım — ana içerik alanına, sayfa kenarına — panel kapanmadı. Sadece tekrar çan ikonuna basarsam kapanıyor. Dropdown'lar genelde dış tıklamayla kapanır.",
    hint: "Açılan menülerin outside-click handler'ı olmalı; aksi halde kullanıcı tuzakta kalır.",
    reveal: "Bildirim dropdown'ında `onClick` outside-click dinleyicisi yok. `useRef + useEffect` ile click-outside handler eklenmeli."
  },
  {
    id: "G-07", chapter: "ch1", reporter: "hakan", date: "12 May, 08:55", status: "Açık",
    category: "UX", page: "Tüm sayfalar — Sidebar",
    subject: "Sidebar'da hangi sayfada olduğumu anlayamıyorum",
    body: "Sol menüde 30 küsür link var, hepsi aynı görünüyor. \"Profil\" sayfasındayken Profil linki diğer linklerden hiçbir şekilde ayırt edilmiyor. Aktif sayfanın işaretlenmesi standart bir özellik.",
    hint: "Aktif route ile menu item id'sini karşılaştırıp koşullu class verilebilir.",
    reveal: "Sidebar'da aktif sayfa için `bg-indigo-50 text-indigo-700` gibi bir highlight yok. `current === item.id` koşulu eksik."
  },
  {
    id: "G-08", chapter: "ch1", reporter: "berk", date: "12 May, 10:11", status: "Açık",
    category: "Layout / z-index", page: "Tüm sayfalar — TopBar",
    subject: "Modal açıyorum, üst bar onun üstünde kalıyor",
    body: "Bir post için \"Sil\" modalını açtım, modal sayfanın ortasında belirdi ama üstteki sticky header onun ÖNÜNE geçti. Yani modal açıkken bile arama kutusunu görmem lazım gibi duruyor — ama bu yanlış, modal her şeyin üstünde olmalı.",
    hint: "Sticky bir öğe modal'dan düşük z-index'te olmalı.",
    reveal: "Sticky `<header>` içinde z-index tanımlı değil — varsayılan auto. Modal'ın `z-40` değerinin altında kalması için TopBar'a `z-40` veya altı, modal'a `z-50` verilmeli."
  },
  {
    id: "G-09", chapter: "ch1", reporter: "sema", date: "12 May, 14:22", status: "Açık",
    category: "Görsel", page: "Tüm sayfalar — Birincil butonlar",
    subject: "Butonlar çok büyük çıkıyor — ama \"h-8\" yazıyormuş?",
    body: "DevTools'ta inceledim, bir butonun class'ında `h-8 px-4 py-3` yazıyor. h-8 = 32px ama py-3 = yukarı 12, aşağı 12 = ek 24px padding. Hangisini dinleyecek tarayıcı? Görsel olarak butonlar 56px civarı çıkıyor, h-8 göz boyamış oluyor. Çok yerde aynı şey var.",
    hint: "Padding ile fixed height aynı anda yazılırsa biri kazanır ama görsel tutarsızlık oluşur.",
    reveal: "Birincil butonlarda `h-8 px-4 py-3` çelişkili — sadece birini kullan. `h-10 px-4` veya `px-4 py-2.5` tutarlı."
  },
  {
    id: "G-10", chapter: "ch1", reporter: "deniz", date: "12 May, 15:30", status: "Açık",
    category: "Erişilebilirlik / Kontrast", page: "Tüm sayfalar — PageHeader subtitle",
    subject: "Sayfa başlıklarının altındaki açıklamalar görünmüyor",
    body: "Sayfa başlıklarının altında bir açıklama metni var ama o kadar açık gri ki, beyaz arkaplanda neredeyse görünmüyor. WebAIM contrast checker'da test ettim, 1.6:1 — WCAG AA'nın çok altında. Yaşlı veya zayıf görme bozukluğu olan biri okuyamaz.",
    hint: "Beyaz arkaplanda en azından `slate-500` veya daha koyu olmalı.",
    reveal: "`PageHeader` bileşeninde subtitle `text-slate-300` — 1.6:1 kontrast oranı. Minimum AA için `text-slate-500` (4.5:1) gerekir."
  },
  {
    id: "G-11", chapter: "ch1", reporter: "aylin", date: "13 May, 10:05", status: "Açık",
    category: "Modal / Pozisyon", page: "Tüm sayfalar — Sil/Düzenle modal",
    subject: "Modal sayfanın yarısında açılıyor, ekranın ortasında değil",
    body: "Uzun bir feed sayfasını kaydırıyordum, sonra bir post için \"Sil\" modalını açtım. Modal benim baktığım yerde değil, sayfanın çok yukarısında belirdi. Aşağı kaydırınca onu bulabildim. Modal sayfayla beraber kayıyor sanırım.",
    hint: "Modal viewport'a göre değil sayfaya göre konumlanıyorsa, position değeri yanlış.",
    reveal: "Modal wrapper'ında `absolute inset-0` kullanılmış — `fixed inset-0` olmalı. `fixed` viewport'a sabitler."
  },
  {
    id: "G-12", chapter: "ch1", reporter: "murat", date: "13 May, 11:18", status: "Açık",
    category: "Erişilebilirlik / Klavye", page: "Tüm sayfalar — Modal",
    subject: "Modalı Escape ile kapatmak istiyorum, çalışmıyor",
    body: "Klavye kullanıcısıyım, modal kapatmak için Esc tuşuna basıyorum. Hiçbir şey olmuyor. \"Vazgeç\" butonuna Tab ile gitmek zorunda kalıyorum. Bu temel bir klavye gezinme özelliği.",
    hint: "Modal mount olduğunda window'a `keydown` listener bağlanıp Escape'e action verilebilir.",
    reveal: "Modal'da `useEffect(() => { ... addEventListener('keydown') ... }, [])` ile Esc handler yok."
  },
  {
    id: "G-13", chapter: "ch1", reporter: "eda", date: "13 May, 11:45", status: "Açık",
    category: "Etkileşim", page: "Tüm sayfalar — Modal backdrop",
    subject: "Modal'ın koyu arka planına tıklayınca hiçbir şey olmuyor",
    body: "Modal açıldığında arka plan kararıyor, ben de \"vazgeçtim\" diye o koyu alana tıklıyorum — kapanmıyor. Sadece \"Vazgeç\" butonuna basınca kapanıyor. Backdrop tıklaması neredeyse her sitede modalı kapatır.",
    hint: "Backdrop'a `onClick` ekleyip event.target === event.currentTarget kontrolüyle modalı kapatabilirsin.",
    reveal: "Modal backdrop div'inde `onClick` handler yok."
  },
  {
    id: "G-14", chapter: "ch1", reporter: "can", date: "13 May, 14:00", status: "Açık",
    category: "Modal / Scroll", page: "Tüm sayfalar — Modal",
    subject: "Modal açıkken arka plandaki sayfa kayıyor",
    body: "Modal açıyorum ama trackpad'imle iki parmakla kaydırınca modalın arkasındaki sayfa hareket ediyor. Bu modal ne kadar modal o zaman? Genelde modal açıkken body scroll'u kilitlenir.",
    hint: "Modal mount olduğunda `document.body.style.overflow = 'hidden'`, unmount'ta geri alınır.",
    reveal: "Modal açıldığında body scroll lock yok. `useEffect` ile body overflow kontrolü eklenmeli."
  },
  {
    id: "G-15", chapter: "ch1", reporter: "sema", date: "14 May, 09:12", status: "Açık",
    category: "z-index", page: "Tüm sayfalar — Toast",
    subject: "Toast bildirimleri modal açıkken görünmüyor",
    body: "Modal açıkken bir aksiyon yaptım, sağ alttan bir toast belirmesi gerekiyordu — modal bütün ekranı kapladığı için toast'ı yiyor sanırım. Aslında toast modal'ın bile üstünde olmalı, çünkü toast genel bilgi mesajı.",
    hint: "Toast container z-index'i, modal'ınkinden yüksek olmalı.",
    reveal: "Toast container `z-30`, modal `z-40` — ters sıralanmış. Toast `z-50` olmalı."
  },
  {
    id: "G-16", chapter: "ch1", reporter: "hakan", date: "14 May, 10:33", status: "Açık",
    category: "Toast / UX", page: "Tüm sayfalar — Toast",
    subject: "Toast'lar ekrana yığılıyor, kendiliğinden kaybolmuyorlar",
    body: "Birkaç işlem yaptım, her biri bir toast tetikledi. 8-9 toast üst üste yığıldı sağ altta, hiçbiri silinmedi. Yenileyene kadar orada durdular. Toast'ların 3-5 saniye sonra kaybolması gerekmez mi?",
    hint: "Her toast eklendiğinde `setTimeout` ile state'ten silinebilir.",
    reveal: "Toast eklendiğinde auto-dismiss yok. `addToast` içinde `setTimeout(() => removeToast(id), 4000)` eklenmeli."
  },
  {
    id: "G-17", chapter: "ch1", reporter: "aylin", date: "14 May, 16:48", status: "Açık",
    category: "Görsel", page: "Tüm sayfalar — Footer alt link satırı",
    subject: "Footer'daki Gizlilik / Şartlar linkleri birbirine yapışık",
    body: "Sayfanın en altındaki Gizlilik ve Şartlar linklerine baktım, aralarında neredeyse hiç boşluk yok. Tıklamak istediğimde hangisine bastığımı kestirmek zor. Mobile'da daha da kötü, parmakla isabet ettirmesi imkansız.",
    hint: "Tıklanabilir öğeler arasında en az 12-16 piksel boşluk olmalı.",
    reveal: "Footer alt link satırında `gap-1` (4px) — yetersiz. `gap-4` veya daha geniş olmalı."
  },
  {
    id: "G-18", chapter: "ch1", reporter: "berk", date: "14 May, 17:05", status: "Açık",
    category: "Görsel / Hover", page: "Tüm sayfalar — Footer",
    subject: "Footer'daki linklerin üzerine gelince linkler kayboluyor",
    body: "Tuhaf bir şey: footer'daki linklerin üzerine fareyle geldiğimde renk açılıyor ve link tamamen görünmez oluyor. Hover state arka planın rengiyle aynı oluyor sanki. Görsel olarak çok rahatsız edici.",
    hint: "Beyaz arkaplanda hover rengi beyaza dönüştürülmüş olabilir.",
    reveal: "Footer linklerinde `hover:text-white` — beyaz arkaplanda link kayboluyor. `hover:text-indigo-600` olmalı."
  },
  {
    id: "G-19", chapter: "ch1", reporter: "sema", date: "15 May, 08:40", status: "Açık",
    category: "Görsel", page: "Tüm sayfalar — Footer sosyal medya butonları",
    subject: "Twitter ve LinkedIn butonları farklı boyutta",
    body: "Footer'da sosyal medya ikonları yan yana ama ikisi farklı boyutta. Twitter butonu daha geniş ve kısa, LinkedIn ise dar ve uzun. Yanyana 3-4 piksel oynayınca göze batıyor. Estetik açıdan kabul edilemez.",
    hint: "Yan yana duran ikonlu butonlar aynı kare boyutta olmalı.",
    reveal: "Twitter butonu `w-9 h-8`, LinkedIn `w-7 h-9` — kasıtlı tutarsız. İkisi de `w-9 h-9` olmalı."
  },
];
