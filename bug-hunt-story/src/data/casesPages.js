export const CASES_PAGES = [
  // ===== 1. ANA SAYFA =====
  {
    id: "P-HOME-1", chapter: "ch2", reporter: "hakan", date: "8 May, 11:20", status: "Açık",
    category: "Layout", page: "Ana Sayfa", pageGroup: "Ana Sayfa",
    subject: "Ana sayfa hero alanı sağa taşıyor",
    body: "Hoş geldin banner'ında metnin olduğu kısım sayfanın dışına çıkıyor sanki. Tarayıcımı küçültünce yatay scroll çıkıyor. Bilgisayarda da olmuyor değil — 1366px ekranda hâlâ taşıyor.",
    hint: "Sabit piksel genişliği yerine `max-width` ve esnek değerler kullanılmalı.",
    reveal: "Hero içindeki div `w-[800px]` (sabit) — `max-w-[800px]` olmalı. Sabit genişlik responsive layout'u kırıyor."
  },
  {
    id: "P-HOME-2", chapter: "ch2", reporter: "deniz", date: "8 May, 12:05", status: "Açık",
    category: "Kontrast", page: "Ana Sayfa", pageGroup: "Ana Sayfa",
    subject: "Hero altyazısı mor gradient üzerinde okunmuyor",
    body: "\"Bu hafta 8 yeni atölye...\" diye başlayan açıklama metni hero'nun mor-fuşya gradient'i üstünde grimsi duruyor, okumak için gözümü kısmam gerekiyor. Beyaz veya açık mor olsa daha okunaklı olurdu.",
    hint: "Koyu renkli gradient üzerinde `text-gray-300` yetersiz kalıyor.",
    reveal: "Hero subtitle: `text-gray-300` — mor gradient üzerinde 2.8:1 kontrast. `text-white/90` veya `text-indigo-100` olmalı."
  },
  {
    id: "P-HOME-3", chapter: "ch2", reporter: "sema", date: "8 May, 12:14", status: "Açık",
    category: "Görsel", page: "Ana Sayfa", pageGroup: "Ana Sayfa",
    subject: "\"Atölye Keşfet\" butonu çok büyük çıkıyor",
    body: "Hero'daki birincil buton da G-09'da yazdığım `h-8 + py-3` problemiyle karşı karşıya. Tasarımda ufak bir buton gösteriliyor ama gerçekte 56px yükseklikte. Çelişkili class'lar.",
    hint: "Aynı çelişki: fixed height + padding aynı anda yazılmış.",
    reveal: "Hero buton: `h-8 px-5 py-3` — birini sil. `px-5 py-3` veya `h-10 px-5` olmalı."
  },
  {
    id: "P-HOME-4", chapter: "ch2", reporter: "sema", date: "8 May, 12:30", status: "Açık",
    category: "Görsel", page: "Ana Sayfa", pageGroup: "Ana Sayfa",
    subject: "Stats kartlarından biri farklı boyutta",
    body: "4 istatistik kartı yan yana: \"Toplam Atölye, Aktif Üye, Mentor, Memnuniyet\". Aktif Üye kartı diğerlerinden belirgin şekilde küçük — içerik alanı sıkışmış. Diğerleri ferah ama bu sıkış sıkış.",
    hint: "Padding değerleri aynı bileşende farklı.",
    reveal: "Stats array'inde 2. öğe `p-3`, diğerleri `p-5` — kasıtlı tutarsızlık. Hepsi aynı padding olmalı."
  },
  {
    id: "P-HOME-5", chapter: "ch2", reporter: "aylin", date: "8 May, 13:00", status: "Açık",
    category: "Görsel", page: "Ana Sayfa", pageGroup: "Ana Sayfa",
    subject: "Son hareketler listesinde 2. satır farklı görünüyor",
    body: "Son hareketler kartında üst üste 4 kullanıcı listeleniyor. 2. satır (Murat Tunç) diğerlerinden daha sıkışık duruyor — boşlukları azaltılmış gibi. Liste tutarlı olmalı.",
    hint: "Aynı `.map()` içinde index'e bağlı koşullu padding olabilir.",
    reveal: "`SAMPLE_USERS.slice(0,4).map((u, i) => ... ${i === 1 ? 'p-3' : 'p-4'} ...)` — index 1 için kasıtlı `p-3`."
  },
  {
    id: "P-HOME-6", chapter: "ch2", reporter: "berk", date: "8 May, 14:15", status: "Açık",
    category: "CSS conflict", page: "Ana Sayfa", pageGroup: "Ana Sayfa",
    subject: "Hızlı aksiyonlar listesinde dikey boşluklar tutarsız",
    body: "Sağ taraftaki Hızlı Aksiyonlar kutusunda 3 buton var, aralarındaki boşluk garip. DevTools'ta inceleyince hem `space-y-2` hem `flex flex-col gap-1` aynı div'de — çelişkili. Hangisini dinleyecek tarayıcı?",
    hint: "`space-y-*` ile `flex gap-*` aynı container'da kullanılırsa biri diğerini ezebilir.",
    reveal: "Hızlı Aksiyonlar wrapper'ı: `space-y-2 flex flex-col gap-1` — sadece birini kullan. Flex container'da `gap-2` yeterli."
  },

  // ===== 2. AKIŞ =====
  {
    id: "P-FEED-1", chapter: "ch2", reporter: "hakan", date: "9 May, 08:30", status: "Açık",
    category: "UX", page: "Akış", pageGroup: "Akış",
    subject: "Akış sayfasında hangi filtrede olduğumu göremiyorum",
    body: "Tümü / Atölyeler / Mentorlar / Kaynaklar diye filtre tab'ları var. Tıkladığımda hiçbir görsel değişiklik olmuyor — hangisini seçtiğimi unutuyorum. Bir alt çizgi, bir renk değişimi, herhangi bir ipucu bekliyorum.",
    hint: "Aktif tab koşullu olarak farklı stillenir.",
    reveal: "Filter tab butonlarında `${tab === i ? 'border-b-2 border-indigo-600' : ''}` gibi aktif state yok."
  },
  {
    id: "P-FEED-2", chapter: "ch2", reporter: "sema", date: "9 May, 09:10", status: "Açık",
    category: "Görsel", page: "Akış", pageGroup: "Akış",
    subject: "Feed'deki 2. post diğerlerinden küçük",
    body: "Akış sayfasında postlar düzenli sıralanmış ama 2. post (Murat Tunç'unki) gözle görülür şekilde dar — iç padding'i azaltılmış sanki. Estetik olarak rahatsız.",
    hint: "Index'e bağlı koşullu padding.",
    reveal: "`articles.map((u, i) => ... ${i === 1 ? 'p-3' : 'p-5'} ...)` — i=1 için `p-3` kasıtlı."
  },
  {
    id: "P-FEED-3", chapter: "ch2", reporter: "deniz", date: "9 May, 10:00", status: "Açık",
    category: "Tooltip / Overflow", page: "Akış", pageGroup: "Akış",
    subject: "Avatar üzerine gelince tooltip yarısı görünmüyor",
    body: "Bir avatara fareyle geldim, üzerine küçük bir \"X — Doğrulanmış\" tooltip'i çıkıyor ama tooltip'in sol kısmı kart kenarında kayboluyor — kırpılmış gibi. Sanki kart `overflow-hidden` ve tooltip dışarı taşamıyor.",
    hint: "Parent'ta `overflow-hidden` varsa, child'ın absolute positioned tooltip'i kırpılır.",
    reveal: "Post `<article>` etiketinde `overflow-hidden` var — tooltip parent'ı dışarı çıkamadığı için kırpılıyor. Tooltip'i portal ile veya parent'tan overflow kaldırarak çöz."
  },
  {
    id: "P-FEED-4", chapter: "ch2", reporter: "deniz", date: "9 May, 10:08", status: "Açık",
    category: "Dropdown / Overflow", page: "Akış", pageGroup: "Akış",
    subject: "Post ⋯ menüsü de kırpılıyor",
    body: "Aynı şekilde, post'un sağ üstündeki ⋯ menüsüne tıkladığımda açılan dropdown'ın bir kenarı yine kırpılıyor. Aynı `overflow-hidden` problemi sanırım.",
    hint: "Post wrapper'ında overflow varsa, içindeki absolute dropdown'lar görünmez.",
    reveal: "Aynı `overflow-hidden` post `<article>`'ında — dropdown da kırpılıyor."
  },
  {
    id: "P-FEED-5", chapter: "ch2", reporter: "berk", date: "9 May, 11:20", status: "Açık",
    category: "State / UX", page: "Akış", pageGroup: "Akış",
    subject: "Birden fazla post menüsü aynı anda açık kalabiliyor",
    body: "Bir post'un ⋯ menüsünü açtım, sonra başka bir post'unkini de açtım — ilki kapanmadı. Şimdi ekranda 2-3 dropdown açık duruyor. Bir tanesi açıldığında diğerleri kapansın istiyorum.",
    hint: "Tek bir state değişkeni hangi dropdown'ın açık olduğunu tutmalı, çoklu state değil.",
    reveal: "`openDd` state'i tek bir id tutuyor ama outside-click yok, başka post'un menüsüne tıklayınca eski dropdown kalıyor."
  },
  {
    id: "P-FEED-6", chapter: "ch2", reporter: "aylin", date: "9 May, 12:00", status: "Açık",
    category: "Bug / Sayım", page: "Akış", pageGroup: "Akış",
    subject: "Like sayısı 1 yerine 2 artıyor",
    body: "Bir post'a kalp ikonuna tıkladım — like sayısı 24'ten 26'ya çıktı. Ne? Tek tıklama 2 like ekliyor sanki. Tekrar tıkladım, 28 oldu. Off-by-one değil, doğrudan 2 ekliyor.",
    hint: "Toggle fonksiyonunda artış değeri yanlış olabilir.",
    reveal: "`toggleLike`: `setPostLikes(l => ({ ...l, [id]: (l[id] || 0) + 2 }))` — `+2` yazılmış, `+1` olmalı."
  },
  {
    id: "P-FEED-7", chapter: "ch2", reporter: "sema", date: "9 May, 13:15", status: "Açık",
    category: "Layout / Word break", page: "Akış", pageGroup: "Akış",
    subject: "3. post'ta uzun kelime kart dışına taşıyor",
    body: "3. post'un içeriğinde Türkçe çok uzun bir kelime var — kart genişliğinden taşıp sayfanın dışına çıkıyor. Kart yatay scroll çıkarıyor. Word-break gerekiyor.",
    hint: "Uzun stringler için `break-words` veya `overflow-wrap: anywhere`.",
    reveal: "Post body'sinde `break-words` veya `overflow-wrap-anywhere` yok — uzun kelime kartı kırıyor."
  },
  {
    id: "P-FEED-8", chapter: "ch2", reporter: "aylin", date: "9 May, 13:25", status: "Açık",
    category: "Layout / URL", page: "Akış", pageGroup: "Akış",
    subject: "4. post'taki URL satır sonunda kırılmıyor",
    body: "4. post'ta uzun bir URL var, link satır sonuna gelince kırılmıyor — sayfanın yatay genişliğini zorluyor. Mobile'da daha da beter.",
    hint: "URL'ler için `break-all` veya `word-break: break-all` lazım.",
    reveal: "Anchor link'lerde `break-all` yok — uzun URL satır kırmadan taşıyor."
  },

  // ===== 3. BILDIRIMLER =====
  {
    id: "P-NOTIF-1", chapter: "ch2", reporter: "sema", date: "10 May, 09:00", status: "Açık",
    category: "Görsel", page: "Bildirimler", pageGroup: "Bildirimler",
    subject: "Bildirim listesinde 3. satır küçülmüş",
    body: "Bildirimler sayfasında üst üste 6 satır var — 3.'sü diğerlerinden belirgin şekilde küçük, padding'i azaltılmış. Liste tutarlı görünmesi gerekirken 3. satır göze batıyor.",
    hint: "Index'e bağlı koşullu padding.",
    reveal: "`items.map((n, i) => ... ${i === 2 ? 'p-2' : 'p-4'} ...)` — i=2 için `p-2` kasıtlı."
  },
  {
    id: "P-NOTIF-2", chapter: "ch2", reporter: "deniz", date: "10 May, 09:30", status: "Açık",
    category: "Kontrast", page: "Bildirimler", pageGroup: "Bildirimler",
    subject: "Bildirim zamanları (\"5 dk önce\") çok soluk",
    body: "Her bildirimin altında \"5 dk önce, 1 saat önce\" gibi zaman bilgisi var ama o kadar açık gri ki neredeyse okunmuyor. Bilgi mimarinin önemli bir parçası, gizlenmemeli.",
    hint: "Beyaz arka planda `text-slate-300` yetersiz.",
    reveal: "Time text: `text-slate-300` — `text-slate-500` veya `slate-600` olmalı."
  },
  {
    id: "P-NOTIF-3", chapter: "ch2", reporter: "sema", date: "10 May, 09:48", status: "Açık",
    category: "Görsel", page: "Bildirimler", pageGroup: "Bildirimler",
    subject: "Okunmamış bildirim noktası kare gibi duruyor",
    body: "Okunmamış bildirimlerin yanında bir mavi nokta var — ama nokta yuvarlak değil, dikey dikdörtgen gibi. Bir noktayı yuvarlatamamak ilginç.",
    hint: "Eşit olmayan width/height + rounded-full = dikey kapsül.",
    reveal: "Unread dot: `w-2 h-3` — `w-2 h-2` olmalı."
  },
  {
    id: "P-NOTIF-4", chapter: "ch2", reporter: "berk", date: "10 May, 10:00", status: "Açık",
    category: "Hover / Görsel", page: "Bildirimler", pageGroup: "Bildirimler",
    subject: "\"Tümünü okundu işaretle\" linki neredeyse görünmüyor",
    body: "Sayfa başlığının yanında \"Tümünü okundu işaretle\" diye bir link var ama metin çok soluk gri, hover'da beyaza dönüyor — beyaz arka plan üzerinde kayboluyor. İki kez hata.",
    hint: "Düşük kontrast + beyazlaşan hover = görünmez link.",
    reveal: "`text-slate-300 hover:text-white` — beyaz arkaplanda iki yönden de yetersiz."
  },

  // ===== 4. MESAJLAR =====
  {
    id: "P-MSG-1", chapter: "ch2", reporter: "sema", date: "10 May, 14:00", status: "Açık",
    category: "Görsel", page: "Mesajlar", pageGroup: "Mesajlar",
    subject: "Mesajlar listesinde 3. konuşma daha küçük",
    body: "Konuşma listesinde 3. öğe (Sema Bilge) diğerlerinden farklı padding'e sahip. Kart sıkışmış, avatarın etrafında nefes alanı yok.",
    hint: "i === 2 koşulu.",
    reveal: "`SAMPLE_USERS.slice(0,6).map((u, i) => ... ${i === 2 ? 'p-3' : 'p-4'} ...)`."
  },
  {
    id: "P-MSG-2", chapter: "ch2", reporter: "aylin", date: "10 May, 14:08", status: "Açık",
    category: "Layout", page: "Mesajlar", pageGroup: "Mesajlar",
    subject: "1. konuşmada uzun mesaj kart dışına taşıyor",
    body: "Mesaj listesinde 1. konuşmanın preview'unda Eda Kaplan'dan gelen son mesaj çok uzun bir Türkçe kelime — satıra sığmıyor, kartı dışarı doğru iterek genişletiyor.",
    hint: "Preview text'te truncate yok.",
    reveal: "Preview `<p>` element'inde `truncate` veya `line-clamp-1` yok — uzun mesaj kartı kırıyor."
  },
  {
    id: "P-MSG-3", chapter: "ch2", reporter: "sema", date: "10 May, 14:20", status: "Açık",
    category: "Görsel", page: "Mesajlar", pageGroup: "Mesajlar",
    subject: "Okunmamış mesaj rozetleri farklı boyutta",
    body: "Bazı konuşmaların yanında küçük mavi sayı rozeti var — bazıları yuvarlak, biri ezilmiş gibi duruyor. Sayıları gösterirken hepsi aynı şekilde olmalı.",
    hint: "Sabit kare olmalı; w/h tutarlı verilmeli.",
    reveal: "Bazı `unread badge`'lerde `w-5 h-5`, başka yerde `w-5 h-3` — tutarsızlık."
  },
  {
    id: "P-MSG-4", chapter: "ch2", reporter: "hakan", date: "10 May, 14:35", status: "Açık",
    category: "UX", page: "Mesajlar", pageGroup: "Mesajlar",
    subject: "Konuşmaya tıklayınca tıkladığımı anlamıyorum",
    body: "Mesaj listesinde bir konuşmaya tıklıyorum, sayfa değişiyor ama tıkladığım kart hiçbir görsel feedback vermiyor — :active state yok, tıklanma anı belirsiz.",
    hint: "`active:bg-...` veya geçici state ile feedback.",
    reveal: "Konuşma kartında `active:bg-slate-100` veya benzeri click feedback yok."
  },

  // ===== 5. KONUŞMA =====
  {
    id: "P-CONV-1", chapter: "ch2", reporter: "murat", date: "11 May, 08:00", status: "Açık",
    category: "Erişilebilirlik", page: "Konuşma", pageGroup: "Konuşma",
    subject: "Mesaj yazma input'unda fokus belli olmuyor",
    body: "Klavye ile mesaj input'una geldiğimde nereye geldiğimi göremiyorum. G-02'deki gibi — outline kapatılmış, yerine bir şey konmamış.",
    hint: "Aynı: focus:outline-none + ring/border yok.",
    reveal: "Mesaj input'u: `focus:outline-none` var, alternatif yok."
  },
  {
    id: "P-CONV-2", chapter: "ch2", reporter: "sema", date: "11 May, 08:10", status: "Açık",
    category: "Görsel", page: "Konuşma", pageGroup: "Konuşma",
    subject: "Gönder butonu yine h-8 + py-3 problemi",
    body: "Mesaj kutusunun yanındaki Gönder butonu görsel olarak büyük çıkıyor — yine aynı çelişki.",
    hint: "Aynı buton problemi her sayfada tekrar.",
    reveal: "`h-8 px-4 py-3` — birini sil."
  },
  {
    id: "P-CONV-3", chapter: "ch2", reporter: "aylin", date: "11 May, 08:30", status: "Açık",
    category: "Layout", page: "Konuşma", pageGroup: "Konuşma",
    subject: "Uzun mesajda 4. balon kart dışına taşıyor",
    body: "Konuşmada 4. mesaj balonu uzun bir kelime içeriyor — balon viewport dışına çıkıyor sanki, scroll bile gerekiyor. Balonların `break-words` davranışı yok.",
    hint: "Mesaj balonlarında `break-words` eksik.",
    reveal: "Mesaj balonu div'inde `break-words` yok — uzun kelime balonu kırıyor."
  },
  {
    id: "P-CONV-4", chapter: "ch2", reporter: "sema", date: "11 May, 08:45", status: "Açık",
    category: "Görsel / Hizalama", page: "Konuşma", pageGroup: "Konuşma",
    subject: "\"Çevrimiçi\" yazısının yanındaki yeşil nokta hizasız",
    body: "Header'da \"Çevrimiçi\" yazısının solunda yeşil nokta var ama nokta metnin baseline'ı ile değil, üst kısmıyla hizalı. Estetik açıdan kayık duruyor.",
    hint: "Inline-block elemanların vertical-align'ı varsayılan baseline değildir.",
    reveal: "Status dot'ta vertical-align veya flex hizalaması (`items-center`) eksik — baseline ile uyumsuz."
  },
  {
    id: "P-CONV-5", chapter: "ch2", reporter: "hakan", date: "11 May, 09:00", status: "Açık",
    category: "Mobile / Layout", page: "Konuşma", pageGroup: "Konuşma",
    subject: "Konuşma alanı telefonda yarım ekran kaplıyor",
    body: "Telefonumdan konuşmayı açtım — alan ekranın sadece %70'ini kaplıyor, alt boşluk var. Tablette ise 2/3'ü kaplıyor. Sabit yükseklik kullanılmış galiba.",
    hint: "Sabit `vh` değeri responsive değildir.",
    reveal: "`style={{height: '70vh'}}` — sabit `70vh` mobile için sorunlu (iOS Safari adres barı), responsive değil."
  },

  // ===== 6. ATÖLYELER =====
  {
    id: "P-WS-1", chapter: "ch2", reporter: "sema", date: "11 May, 11:00", status: "Açık",
    category: "Görsel", page: "Atölyeler", pageGroup: "Atölyeler",
    subject: "3. atölye kartı diğerlerinden farklı duruyor",
    body: "Atölye grid'inde 6 kart var, 3.'sü içerdeki padding'i farklı. Diğerleri tamamen sıfır padding ile başlıyor (image baştan dolduruyor), bu kart içerden boşluk bırakıyor.",
    hint: "i === 2 koşulu.",
    reveal: "`workshops.map((w, i) => ... ${i === 2 ? 'p-3' : 'p-0'} ...)`."
  },
  {
    id: "P-WS-2", chapter: "ch2", reporter: "berk", date: "11 May, 11:15", status: "Açık",
    category: "UX", page: "Atölyeler", pageGroup: "Atölyeler",
    subject: "Atölye filtre butonlarında aktif olan belli değil",
    body: "Tümü / Başlangıç / Orta / İleri butonları var. \"Tümü\" başta seçili görünüyor (gri arka plan) ama diğerlerine tıkladığımda görsel olarak hiçbir şey değişmiyor — yine \"Tümü\" gibi duruyor.",
    hint: "Filter aktif state state'e bağlı değil.",
    reveal: "Filter butonu: `${i === 0 ? 'bg-slate-200' : 'bg-white border'}` — sadece index 0 highlight, state ile değişmiyor."
  },
  {
    id: "P-WS-3", chapter: "ch2", reporter: "sema", date: "11 May, 11:25", status: "Açık",
    category: "Görsel", page: "Atölyeler", pageGroup: "Atölyeler",
    subject: "\"+ Yeni Atölye\" butonu yine devasa",
    body: "Sayfanın sağ üstünde +Yeni Atölye var, hero butonu kadar yüksek çıkıyor. Aynı buton problemi.",
    hint: "h-8 + py-3.",
    reveal: "Aynı çelişki: birini kaldır."
  },
  {
    id: "P-WS-4", chapter: "ch2", reporter: "deniz", date: "11 May, 11:40", status: "Açık",
    category: "Görsel / İmaj", page: "Atölyeler", pageGroup: "Atölyeler",
    subject: "Kart görselleri gradient — gerçek görsel olunca taşar mı?",
    body: "Şu an her atölye kartının üstünde gradient bir alan var, içinde başlığın ilk kelimesi. Gerçek görsel kullanıldığında taşma davranışı ne olacak?",
    hint: "İleride gerçek `<img>` kullanılırsa `object-cover` olmadan distortion olur.",
    reveal: "Card image div'inde `object-cover` yok — gerçek görselle değiştirildiğinde aspect ratio bozulur."
  },

  // ===== 7. ATÖLYE DETAY =====
  {
    id: "P-WSD-1", chapter: "ch2", reporter: "hakan", date: "11 May, 14:00", status: "Açık",
    category: "Layout", page: "Atölye Detay", pageGroup: "Atölye Detay",
    subject: "Atölye detay hero'su sabit yükseklikte",
    body: "Hero'nun yüksekliği `h-64` sabit. İçeriğin uzunluğuna göre uyum sağlamıyor. Mobile'da çok dar olduğunda metin sığmıyor.",
    hint: "Sabit yükseklik responsive değil.",
    reveal: "`h-64` sabit — `min-h-64` veya esnek değer olmalı."
  },
  {
    id: "P-WSD-2", chapter: "ch2", reporter: "sema", date: "11 May, 14:10", status: "Açık",
    category: "Görsel", page: "Atölye Detay", pageGroup: "Atölye Detay",
    subject: "Program adımlarının numara dairelerİ oval",
    body: "\"1, 2, 3, 4\" numaralı dairecikler var ama hepsi yumurtaya benziyor — yine `w-X h-Y` farklı.",
    hint: "Aynı oval problem yine.",
    reveal: "Program steps: `w-6 h-7` — eşit olmalı, `w-7 h-7`."
  },
  {
    id: "P-WSD-3", chapter: "ch2", reporter: "deniz", date: "11 May, 14:20", status: "Açık",
    category: "Kontrast", page: "Atölye Detay", pageGroup: "Atölye Detay",
    subject: "₺149 fiyat kutusunda \"Üyelere ücretsiz\" görünmüyor",
    body: "Sağdaki fiyat kartında \"Üyelere ücretsiz\" yazısı çok soluk, beyaz arka planda görünmüyor.",
    hint: "Kontrast.",
    reveal: "`text-slate-300` — `text-slate-500` olmalı."
  },
  {
    id: "P-WSD-4", chapter: "ch2", reporter: "sema", date: "11 May, 14:30", status: "Açık",
    category: "Görsel", page: "Atölye Detay", pageGroup: "Atölye Detay",
    subject: "Kayıt Ol butonu yine büyük çıkıyor",
    body: "Sayfa boyunca her primary buton aynı sorunda.",
    hint: "h-8+py-3.",
    reveal: "Standart buton bug'ı."
  },

  // ===== 8. ATÖLYE OLUŞTUR =====
  {
    id: "P-WSC-1", chapter: "ch2", reporter: "murat", date: "12 May, 09:00", status: "Açık",
    category: "Erişilebilirlik", page: "Atölye Oluştur", pageGroup: "Atölye Oluştur",
    subject: "Form input'larında focus state hiç yok",
    body: "Atölye oluşturma formundaki tüm input/textarea/select'lerde fokuslandığımda hiçbir görsel ipucu yok. Klavye kullanıcıları için sayfa kullanılmaz halde.",
    hint: "Tüm inputlarda focus:outline-none var, alternatif yok.",
    reveal: "Tüm form alanlarında `focus:outline-none` — `focus:ring-2 focus:ring-indigo-400` veya `focus:border-indigo-500` eklenmeli."
  },
  {
    id: "P-WSC-2", chapter: "ch2", reporter: "deniz", date: "12 May, 09:05", status: "Açık",
    category: "Erişilebilirlik", page: "Atölye Oluştur", pageGroup: "Atölye Oluştur",
    subject: "Input'a yazınca bile çerçeve değişmiyor",
    body: "Bir alana yazıyorum, kenar rengi olduğu gibi kalıyor. Aktif alan ile pasif alan ayırt edilmiyor.",
    hint: "focus:border-indigo-500 yok.",
    reveal: "Input border focus state'inde renk değişmiyor."
  },
  {
    id: "P-WSC-3", chapter: "ch2", reporter: "berk", date: "12 May, 09:15", status: "Açık",
    category: "UX", page: "Atölye Oluştur", pageGroup: "Atölye Oluştur",
    subject: "Açıklama textarea'sı sonsuza kadar uzayabiliyor",
    body: "Textarea resize edilebilir ama max yüksekliği yok — 1000 piksel yapıp ekranın altını işgal edebiliyorum.",
    hint: "max-h yok.",
    reveal: "Textarea: `resize-y` var ama `max-h-64` veya benzeri sınır yok."
  },
  {
    id: "P-WSC-4", chapter: "ch2", reporter: "aylin", date: "12 May, 09:25", status: "Açık",
    category: "Form / Validation", page: "Atölye Oluştur", pageGroup: "Atölye Oluştur",
    subject: "Atölye tarihinde geçmiş tarih seçebiliyorum",
    body: "Tarih input'unda 1990 seçtim ve form bunu kabul etti. Geçmiş tarih için bir atölye oluşturmak mantıksız.",
    hint: "type=date'te min/max attribute.",
    reveal: "Date input'ta `min={today}` ve gerekirse `max` yok."
  },
  {
    id: "P-WSC-5", chapter: "ch2", reporter: "berk", date: "12 May, 09:35", status: "Açık",
    category: "Form / Type", page: "Atölye Oluştur", pageGroup: "Atölye Oluştur",
    subject: "Süre alanına \"abcdef\" yazabiliyorum",
    body: "Süre alanı dakika cinsinden olmalı ama type=text. Harfler de kabul ediyor.",
    hint: "type=number kullan.",
    reveal: "Süre input: `type=\"text\"` — `type=\"number\"` olmalı, `min={1}` ile."
  },
  {
    id: "P-WSC-6", chapter: "ch2", reporter: "murat", date: "12 May, 09:45", status: "Açık",
    category: "Erişilebilirlik", page: "Atölye Oluştur", pageGroup: "Atölye Oluştur",
    subject: "Checkbox label'ına tıklayınca işaret konmuyor",
    body: "\"Üyelere açık\" yazısının yanında bir checkbox var. Yazıya tıklasam da işaret konmuyor — sadece kutuya tıklayınca çalışıyor. Label clickable olmalı.",
    hint: "Label sarmalama veya htmlFor.",
    reveal: "Label çevresinde input doğru sarmalanmamış — text node ayrı, label fonksiyonel değil."
  },
  {
    id: "P-WSC-7", chapter: "ch2", reporter: "sema", date: "12 May, 09:55", status: "Açık",
    category: "Görsel", page: "Atölye Oluştur", pageGroup: "Atölye Oluştur",
    subject: "Yayınla butonu yine devasa",
    body: "Form alt sağda Yayınla butonu — h-8+py-3.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "P-WSC-8", chapter: "ch2", reporter: "aylin", date: "12 May, 10:05", status: "Açık",
    category: "Form / UX", page: "Atölye Oluştur", pageGroup: "Atölye Oluştur",
    subject: "Boş form gönderebiliyorum",
    body: "Hiçbir alanı doldurmadan Yayınla'ya bastım, başarılı toast geldi: \"Atölye yayınlandı: Başlıksız\". Required alanlar olmalı, boşken submit deaktif olmalı.",
    hint: "Submit disabled veya validation.",
    reveal: "Submit butonu boş form'da bile aktif, zorunlu alan validation'ı yok."
  },

  // ===== 9. TAKVİM =====
  {
    id: "P-CAL-1", chapter: "ch2", reporter: "deniz", date: "12 May, 11:00", status: "Açık",
    category: "Kontrast", page: "Takvim", pageGroup: "Takvim",
    subject: "Pzt/Sal/Çar gün başlıkları neredeyse görünmüyor",
    body: "Takvim ızgarasının üst sıra başlıkları çok soluk. Hangi günde olduğumu okumak için yaklaşmam gerek.",
    hint: "Kontrast.",
    reveal: "Day headers: `text-slate-300` — `text-slate-600` olmalı."
  },
  {
    id: "P-CAL-2", chapter: "ch2", reporter: "aylin", date: "12 May, 11:08", status: "Açık",
    category: "Layout / Truncate", page: "Takvim", pageGroup: "Takvim",
    subject: "19 Mayıs etkinliği uzun başlık — kart taşıyor",
    body: "19 Mayıs gününde \"Tailwind Deep Dive workshop with extra long title\" yazıyor. Etkinlik kartı `overflow-hidden` ama metin truncate olmadığı için yine de görsel olarak yamuluyor.",
    hint: "overflow-hidden + truncate ayrı.",
    reveal: "Etkinlik kartında `truncate` yok — metin overflow ediyor görsel olarak."
  },
  {
    id: "P-CAL-3", chapter: "ch2", reporter: "deniz", date: "12 May, 11:15", status: "Açık",
    category: "Kontrast", page: "Takvim", pageGroup: "Takvim",
    subject: "Geçmiş günlerin sayıları zaten zayıfken bir de soluk renkte",
    body: "Önceki ay günleri ve geçmiş günler `text-slate-300`. Vurgu için kullanılmış ama zaten zayıf renk üstüne soluklaştırılınca neredeyse boş kutu.",
    hint: "Kontrast iki kademe düşük.",
    reveal: "Geçmiş günler: `text-slate-300` + `bg-slate-50` — `text-slate-400` daha okunaklı."
  },
  {
    id: "P-CAL-4", chapter: "ch2", reporter: "sema", date: "12 May, 11:25", status: "Açık",
    category: "Görsel", page: "Takvim", pageGroup: "Takvim",
    subject: "‹/› butonlarında tıklama hissi yok",
    body: "Ay değiştirme okları var ama tıklayınca hiçbir geri bildirim yok — :active state yok, ay da değişmiyor (mock muhtemelen) ama görsel tepki bekledim.",
    hint: "active:bg veya scale.",
    reveal: "‹/› butonlarında `active:bg-slate-200` veya benzeri yok."
  },

  // ===== 10. ETKİNLİK DETAY =====
  {
    id: "P-EVT-1", chapter: "ch2", reporter: "deniz", date: "12 May, 14:00", status: "Açık",
    category: "Kontrast", page: "Etkinlik", pageGroup: "Etkinlik",
    subject: "Etkinlik hero altyazısı yine soluk",
    body: "P-HOME-2 ile aynı: gradient üzerinde `text-gray-300`.",
    hint: "Aynı.",
    reveal: "Aynı, `text-white/90` olmalı."
  },
  {
    id: "P-EVT-2", chapter: "ch2", reporter: "aylin", date: "12 May, 14:10", status: "Açık",
    category: "Layout / URL", page: "Etkinlik", pageGroup: "Etkinlik",
    subject: "Kayıt URL'si satır kırılmıyor",
    body: "Detay alanında uzun bir kayıt URL'si var, satıra sığmıyor — yatay scroll yapıyor.",
    hint: "break-all yok.",
    reveal: "Anchor element'inde `break-all` yok."
  },
  {
    id: "P-EVT-3", chapter: "ch2", reporter: "sema", date: "12 May, 14:25", status: "Açık",
    category: "Layout", page: "Etkinlik", pageGroup: "Etkinlik",
    subject: "Katılımcı avatarları dağınık duruyor",
    body: "Sağdaki katılımcı listesinde avatarlar `flex-wrap gap-1` ama hizalama kayık. Bazı avatarlar 2. satıra geçince üst sıraya hizalanmıyor.",
    hint: "gap az + items-start eksik.",
    reveal: "`flex-wrap gap-1` yetersiz — `gap-2` ve `items-start` ile düzelir."
  },
  {
    id: "P-EVT-4", chapter: "ch2", reporter: "sema", date: "12 May, 14:35", status: "Açık",
    category: "Görsel", page: "Etkinlik", pageGroup: "Etkinlik",
    subject: "Katıl butonu büyük",
    body: "Aynı standart buton problemi.",
    hint: "h-8+py-3.",
    reveal: "Aynı."
  },

  // ===== 11. MENTORLAR =====
  {
    id: "P-MEN-1", chapter: "ch2", reporter: "sema", date: "13 May, 09:00", status: "Açık",
    category: "Görsel", page: "Mentorlar", pageGroup: "Mentorlar",
    subject: "Mentor kartlarından 2.'si farklı padding'de",
    body: "Mentor grid'i temiz görünüyor ama 2. kart (Murat Tunç) sıkışmış — diğerleri ferah.",
    hint: "i === 1 koşulu.",
    reveal: "`SAMPLE_USERS.map((u, i) => ... ${i === 1 ? 'p-3' : 'p-5'} ...)`."
  },
  {
    id: "P-MEN-2", chapter: "ch2", reporter: "berk", date: "13 May, 09:10", status: "Açık",
    category: "Layout / Overflow", page: "Mentorlar", pageGroup: "Mentorlar",
    subject: "Hover'da kart içi clip oluyor sanki",
    body: "Mentor kartına geldiğimde shadow var ama içerikteki tooltip benzeri etkileşimler kart sınırında kırpılıyor — `overflow-hidden` belki gerekmiyor.",
    hint: "overflow-hidden gereksiz.",
    reveal: "Card'da `overflow-hidden` var, tooltip clip eder."
  },
  {
    id: "P-MEN-3", chapter: "ch2", reporter: "sema", date: "13 May, 09:20", status: "Açık",
    category: "Görsel", page: "Mentorlar", pageGroup: "Mentorlar",
    subject: "Mentor Seç butonu çok büyük",
    body: "Standart problem.",
    hint: "h-8+py-3.",
    reveal: "Aynı."
  },
  {
    id: "P-MEN-4", chapter: "ch2", reporter: "deniz", date: "13 May, 09:30", status: "Yeni",
    category: "Veri / İçerik", page: "Mentorlar", pageGroup: "Mentorlar",
    subject: "Tüm mentorların puanı 4.9 — gerçek mi?",
    body: "Her mentor kartında \"★ 4.9\" yazıyor. 8 mentor, hepsi aynı puanda. Mock data hard-coded sanırım, gerçek değer hesaplanmıyor.",
    hint: "Sembolik veri.",
    reveal: "Star rating sabit string `★ 4.9` — gerçek hesaplama yok, hardcoded."
  },

  // ===== 12. MENTOR PROFİL =====
  {
    id: "P-MND-1", chapter: "ch2", reporter: "aylin", date: "13 May, 11:00", status: "Açık",
    category: "Layout", page: "Mentor Profil", pageGroup: "Mentor Profil",
    subject: "Bio'da uzun kelime sayfayı kırıyor",
    body: "Bio metni içinde Türkçe çok uzun bir kelime var — kart genişliğinden taşıyor.",
    hint: "break-words.",
    reveal: "Bio paragrafında `break-words` yok."
  },
  {
    id: "P-MND-2", chapter: "ch2", reporter: "sema", date: "13 May, 11:08", status: "Açık",
    category: "Görsel", page: "Mentor Profil", pageGroup: "Mentor Profil",
    subject: "Yorumlardaki avatarlar yine oval",
    body: "G-01 problemi small size'da da var: `w-8 h-7` — yani avatar bileşeninde sm boyutu da yamuk.",
    hint: "sm size: w-8 h-7.",
    reveal: "Avatar sizes: `sm: 'w-8 h-7'` — `sm: 'w-8 h-8'`."
  },
  {
    id: "P-MND-3", chapter: "ch2", reporter: "hakan", date: "13 May, 11:18", status: "Açık",
    category: "Mobile / Layout", page: "Mentor Profil", pageGroup: "Mentor Profil",
    subject: "Uzmanlık etiketleri mobilde tek sıra çıkıyor, taşıyor",
    body: "Uzmanlık tag'leri `flex-nowrap` ile yan yana — mobile'da sayfanın dışına çıkıyor. Wrap olmalı.",
    hint: "flex-wrap kullan.",
    reveal: "`flex-nowrap` yerine `flex-wrap` olmalı."
  },
  {
    id: "P-MND-4", chapter: "ch2", reporter: "sema", date: "13 May, 11:25", status: "Açık",
    category: "Görsel", page: "Mentor Profil", pageGroup: "Mentor Profil",
    subject: "Seans Rezervasyonu butonu yine büyük",
    body: "Aynı.",
    hint: "h-8+py-3.",
    reveal: "Aynı."
  },

  // ===== 13. MENTOR BAŞVURU =====
  {
    id: "P-MNA-1", chapter: "ch2", reporter: "aylin", date: "13 May, 14:00", status: "Açık",
    category: "Form / Type", page: "Mentor Başvuru", pageGroup: "Mentor Başvuru",
    subject: "E-posta alanı sadece text, validate etmiyor",
    body: "Email alanına \"abc\" yazdım, kabul etti. Mobile'da @ tuşu da gelmedi — çünkü type=text.",
    hint: "type=email kullan.",
    reveal: "Email input: `type=\"text\"` — `type=\"email\"` olmalı."
  },
  {
    id: "P-MNA-2", chapter: "ch2", reporter: "aylin", date: "13 May, 14:05", status: "Açık",
    category: "Form / Type", page: "Mentor Başvuru", pageGroup: "Mentor Başvuru",
    subject: "Tecrübe yılı alanına harf yazılabiliyor",
    body: "Rakam beklenen alana harf yazılabiliyor.",
    hint: "type=number.",
    reveal: "Tecrübe yılı: `type=\"text\"` — `type=\"number\" min={0}`."
  },
  {
    id: "P-MNA-3", chapter: "ch2", reporter: "berk", date: "13 May, 14:10", status: "Açık",
    category: "Form / UX", page: "Mentor Başvuru", pageGroup: "Mentor Başvuru",
    subject: "Sadece bir alanda * (zorunlu) işareti var",
    body: "\"Ad Soyad\" yazısının yanında kırmızı yıldız var ama email de zorunlu olmalı, yıldız yok. Tutarsız.",
    hint: "Tüm zorunlu alanlarda işaret.",
    reveal: "Required field marker sadece bir label'da — tüm zorunlu alanlarda olmalı."
  },
  {
    id: "P-MNA-4", chapter: "ch2", reporter: "berk", date: "13 May, 14:18", status: "Açık",
    category: "Form / UX", page: "Mentor Başvuru", pageGroup: "Mentor Başvuru",
    subject: "Açıklama textarea sonsuza uzayabiliyor",
    body: "P-WSC-3 ile aynı.",
    hint: "max-h yok.",
    reveal: "`resize-y` ama `max-h` yok."
  },
  {
    id: "P-MNA-5", chapter: "ch2", reporter: "sema", date: "13 May, 14:25", status: "Açık",
    category: "Görsel", page: "Mentor Başvuru", pageGroup: "Mentor Başvuru",
    subject: "Submit butonu büyük",
    body: "Aynı.",
    hint: "h-8+py-3.",
    reveal: "Aynı."
  },
  {
    id: "P-MNA-6", chapter: "ch2", reporter: "aylin", date: "13 May, 14:35", status: "Açık",
    category: "Form / Validation", page: "Mentor Başvuru", pageGroup: "Mentor Başvuru",
    subject: "Boş form gönderilebiliyor",
    body: "Hiçbir alan dolduruluş, başvuru kabul yazısı geldi. Required validation yok.",
    hint: "Validation eksik.",
    reveal: "Submit boş form'da bile aktif."
  },

  // ===== 14. KAYNAKLAR =====
  {
    id: "P-RES-1", chapter: "ch2", reporter: "sema", date: "14 May, 09:00", status: "Açık",
    category: "Görsel", page: "Kaynaklar", pageGroup: "Kaynaklar",
    subject: "+Yükle butonu yine devasa",
    body: "Aynı.",
    hint: "h-8+py-3.",
    reveal: "Aynı."
  },
  {
    id: "P-RES-2", chapter: "ch2", reporter: "deniz", date: "14 May, 09:05", status: "Açık",
    category: "Kontrast", page: "Kaynaklar", pageGroup: "Kaynaklar",
    subject: "Kaynak kart altyazıları (\"PDF · 12 sayfa\") soluk",
    body: "Beyaz kartta açık gri metin — okunmuyor.",
    hint: "text-slate-300.",
    reveal: "`text-slate-300` — `text-slate-500`."
  },
  {
    id: "P-RES-3", chapter: "ch2", reporter: "berk", date: "14 May, 09:15", status: "Açık",
    category: "UX", page: "Kaynaklar", pageGroup: "Kaynaklar",
    subject: "Kategori filtreleri tıklanmıyor mu?",
    body: "CSS / SCSS / Tailwind / Bootstrap... butonlarına tıkladım, hiçbir şey değişmiyor. Sadece ilki vurgulu, diğerleri tıklanınca state değişmiyor.",
    hint: "active state state'e bağlı değil.",
    reveal: "Filter aktif state state'e bağlı değil — sabit i === 0."
  },
  {
    id: "P-RES-4", chapter: "ch2", reporter: "hakan", date: "14 May, 09:25", status: "Yeni",
    category: "UX", page: "Kaynaklar", pageGroup: "Kaynaklar",
    subject: "6 kart hep aynı — hover state da yok",
    body: "Tüm kartlar aynı görüntü, sadece numaraları değişiyor (\"Cheatsheet 1, 2, 3...\"). Hover'da shadow var ama aksiyon hissi yok.",
    hint: "Visual diversification eksik.",
    reveal: "6 sabit kart, hover transform yok."
  },

  // ===== 15. KAYNAK DETAY =====
  {
    id: "P-RSD-1", chapter: "ch2", reporter: "aylin", date: "14 May, 11:00", status: "Açık",
    category: "Layout / URL", page: "Kaynak Detay", pageGroup: "Kaynak Detay",
    subject: "Uzun URL satır kırılmıyor",
    body: "Kaynak linki bölümünde uzun URL var, taşıyor.",
    hint: "break-all.",
    reveal: "Aynı."
  },
  {
    id: "P-RSD-2", chapter: "ch2", reporter: "sema", date: "14 May, 11:10", status: "Açık",
    category: "Görsel", page: "Kaynak Detay", pageGroup: "Kaynak Detay",
    subject: "Yorumların 2.'si farklı padding'de",
    body: "Yorumlar 4 tane, 2.'si sıkışık.",
    hint: "i === 1.",
    reveal: "Aynı pattern."
  },
  {
    id: "P-RSD-3", chapter: "ch2", reporter: "aylin", date: "14 May, 11:18", status: "Açık",
    category: "Layout", page: "Kaynak Detay", pageGroup: "Kaynak Detay",
    subject: "3. yorumda uzun kelime taşıyor",
    body: "Aynı break-words problemi.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "P-RSD-4", chapter: "ch2", reporter: "sema", date: "14 May, 11:25", status: "Açık",
    category: "Görsel", page: "Kaynak Detay", pageGroup: "Kaynak Detay",
    subject: "İndir butonu büyük",
    body: "Aynı.",
    hint: "h-8+py-3.",
    reveal: "Aynı."
  },
  {
    id: "P-RSD-5", chapter: "ch2", reporter: "berk", date: "14 May, 11:32", status: "Açık",
    category: "CSS", page: "Kaynak Detay", pageGroup: "Kaynak Detay",
    subject: "Yorum kartlarında gereksiz overflow-hidden",
    body: "Yorum kartlarına `overflow-hidden` verilmiş ama içerik tooltip vs. yok — sadece ileride sorun çıkarır.",
    hint: "Gereksiz CSS.",
    reveal: "Yorum kartında `overflow-hidden` gereksiz, kaldırılmalı."
  },

  // ===== 16. PROFİLİM =====
  {
    id: "P-PRO-1", chapter: "ch2", reporter: "sema", date: "14 May, 14:00", status: "Açık",
    category: "Görsel", page: "Profilim", pageGroup: "Profilim",
    subject: "Profilimdeki büyük avatarım da oval",
    body: "Profil sayfasında baş kısımdaki büyük avatar `w-16 h-14` — yine yumurta. Avatar bileşeni kullanılmamış, custom yazılmış ve aynı hata.",
    hint: "Custom div'de aynı problem.",
    reveal: "`w-16 h-14` — `w-16 h-16`."
  },
  {
    id: "P-PRO-2", chapter: "ch2", reporter: "deniz", date: "14 May, 14:08", status: "Açık",
    category: "Kontrast", page: "Profilim", pageGroup: "Profilim",
    subject: "Bio metni soluk",
    body: "Profilim sayfasında bio metni `text-slate-300` — okunmuyor.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "P-PRO-3", chapter: "ch2", reporter: "berk", date: "14 May, 14:15", status: "Açık",
    category: "UX", page: "Profilim", pageGroup: "Profilim",
    subject: "Profil tab'larında aktif olan belli değil",
    body: "Atölyelerim / Yorumlarım / Beğendiklerim / Kaydedilenler tab'ları var, hangisi aktif belirsiz.",
    hint: "Tab active state.",
    reveal: "Tab butonlarında aktif state highlighting yok."
  },
  {
    id: "P-PRO-4", chapter: "ch2", reporter: "berk", date: "14 May, 14:25", status: "İncelemede",
    category: "Tailwind / JIT", page: "Profilim", pageGroup: "Profilim",
    subject: "Atölye kartlarındaki gradient bazen render olmuyor",
    body: "Bazı kartlarda gradient gözükmüyor sadece beyaz kalıyor. Sanki Tailwind class'ı runtime'da generate edilmiş ama purge silmiş.",
    hint: "Tailwind JIT dynamic class purge eder.",
    reveal: "Card image'da `from-indigo-${(i+3)*100}` dynamic class — JIT bunları compile time'da göremez, build'de purge olur."
  },

  // ===== 17. PROFİLİ DÜZENLE =====
  {
    id: "P-PED-1", chapter: "ch2", reporter: "murat", date: "15 May, 09:00", status: "Açık",
    category: "Erişilebilirlik", page: "Profili Düzenle", pageGroup: "Profili Düzenle",
    subject: "Düzenleme formunda da focus yok",
    body: "Genel form problemi yine.",
    hint: "focus:outline-none.",
    reveal: "Aynı."
  },
  {
    id: "P-PED-2", chapter: "ch2", reporter: "aylin", date: "15 May, 09:10", status: "Açık",
    category: "Form / Type", page: "Profili Düzenle", pageGroup: "Profili Düzenle",
    subject: "Web site alanı text — URL validate etmiyor",
    body: "Web site alanına \"abc\" yazdım, kabul etti.",
    hint: "type=url.",
    reveal: "`type=\"text\"` — `type=\"url\"`."
  },
  {
    id: "P-PED-3", chapter: "ch2", reporter: "deniz", date: "15 May, 09:18", status: "Açık",
    category: "Görsel", page: "Profili Düzenle", pageGroup: "Profili Düzenle",
    subject: "Sil linki kırmızı ama hover'da hiçbir şey olmuyor",
    body: "Fotoğrafın yanındaki \"Sil\" yazısı kırmızı — link gibi duruyor ama üzerine geldiğimde renk değişmiyor, underline gelmiyor. Tıklanabilir mi anlamadım.",
    hint: "hover:text-red-700 vb yok.",
    reveal: "Hover state yok."
  },
  {
    id: "P-PED-4", chapter: "ch2", reporter: "berk", date: "15 May, 09:25", status: "Açık",
    category: "UX", page: "Profili Düzenle", pageGroup: "Profili Düzenle",
    subject: "\"Fotoğraf Değiştir\" butonu disabled görünmüyor ama çalışmıyor",
    body: "Fotoğraf değiştir butonuna bastım, toast geldi: \"Yükleme henüz aktif değil\". Madem aktif değil, buton da disabled görünmeli.",
    hint: "disabled state.",
    reveal: "Buton disabled-look uygulanmamış (`disabled:opacity-50`)."
  },
  {
    id: "P-PED-5", chapter: "ch2", reporter: "sema", date: "15 May, 09:35", status: "Açık",
    category: "Görsel", page: "Profili Düzenle", pageGroup: "Profili Düzenle",
    subject: "Kaydet butonu büyük",
    body: "Aynı.",
    hint: "h-8+py-3.",
    reveal: "Aynı."
  },

  // ===== 18. BEĞENİLER =====
  {
    id: "P-LIK-1", chapter: "ch2", reporter: "sema", date: "15 May, 11:00", status: "Açık",
    category: "Görsel", page: "Beğeniler", pageGroup: "Beğeniler",
    subject: "2. öğe sıkışık",
    body: "Aynı tutarsızlık.",
    hint: "i === 1.",
    reveal: "Aynı."
  },
  {
    id: "P-LIK-2", chapter: "ch2", reporter: "aylin", date: "15 May, 11:08", status: "Açık",
    category: "Layout", page: "Beğeniler", pageGroup: "Beğeniler",
    subject: "3. öğede uzun kelime",
    body: "break-words yok.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "P-LIK-3", chapter: "ch2", reporter: "berk", date: "15 May, 11:15", status: "Açık",
    category: "Etkileşim", page: "Beğeniler", pageGroup: "Beğeniler",
    subject: "Kalp ikonu hep dolu — beğeni geri alınamıyor",
    body: "Bu sayfada beğenilenler listeleniyor ama kalp ikonu hep dolu kırmızı, tıklamayla toggle yok. Beğeniyi kaldırma özelliği yok mu?",
    hint: "Toggle eksik.",
    reveal: "Heart icon sabit `filled` — tıklama handler yok."
  },

  // ===== 19. YORUMLARIM =====
  {
    id: "P-CMM-1", chapter: "ch2", reporter: "aylin", date: "15 May, 13:00", status: "Açık",
    category: "Layout / URL", page: "Yorumlarım", pageGroup: "Yorumlarım",
    subject: "2. yorumdaki uzun URL satır kırılmıyor",
    body: "Aynı.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "P-CMM-2", chapter: "ch2", reporter: "berk", date: "15 May, 13:08", status: "Açık",
    category: "UX", page: "Yorumlarım", pageGroup: "Yorumlarım",
    subject: "Sil/Düzenle butonlarında confirm yok",
    body: "Sil butonu doğrudan modal açıyor olsa da, modal'ın kendisi bug'lı (G-11 vd). Hatta düzenle de tek tıkla açılıyor — onay yok.",
    hint: "Modal güvenliği zaten zayıf.",
    reveal: "Modal'da `confirm` flow eksik."
  },
  {
    id: "P-CMM-3", chapter: "ch2", reporter: "berk", date: "15 May, 13:18", status: "Açık",
    category: "CSS", page: "Yorumlarım", pageGroup: "Yorumlarım",
    subject: "Tüm yorumlarda gereksiz overflow-hidden",
    body: "Tooltip vs ileride eklenirse clip eder.",
    hint: "Gereksiz CSS.",
    reveal: "Tüm yorum kartlarında `overflow-hidden` — ihtiyaç yok."
  },

  // ===== 20. HESAP =====
  {
    id: "P-SAC-1", chapter: "ch2", reporter: "berk", date: "16 May, 08:00", status: "Açık", severity: "security",
    category: "🚨 Güvenlik", page: "Hesap", pageGroup: "Hesap",
    subject: "Şifre alanları metin olarak yazıyor — bütün ekran şifrem görünüyor",
    body: "Hesap ayarlarından şifre değiştirmek istedim. Mevcut şifre / Yeni şifre alanlarına yazınca harfler maskelenmedi — ekrandaki herkese şifremi gösterdim. Bu UI hatası değil, GERÇEK bir güvenlik açığı.",
    hint: "type=\"password\" kullanılmamış.",
    reveal: "Şifre input'larında `type=\"text\"` — `type=\"password\"` olmalı. Pen-test review'larında bu tür bug'lar her zaman çıkar."
  },
  {
    id: "P-SAC-2", chapter: "ch2", reporter: "murat", date: "16 May, 08:15", status: "Açık",
    category: "Erişilebilirlik", page: "Hesap", pageGroup: "Hesap",
    subject: "Tüm input'larda yine focus yok",
    body: "Aynı genel form problemi.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "P-SAC-3", chapter: "ch2", reporter: "aylin", date: "16 May, 08:25", status: "Açık", severity: "high",
    category: "🚨 Tehlikeli aksiyon", page: "Hesap", pageGroup: "Hesap",
    subject: "Hesabı Sil tek tıkla çalışıyor — onay yok",
    body: "Sayfanın altında \"Hesabı Sil\" diye kırmızı buton var. Tıkladım, modal/onay/hiçbir şey yok. Doğrudan toast: \"Hesap silme süreci başlatıldı\". Yanlışlıkla tıklayan biri büyük dert!",
    hint: "Confirm modal şart.",
    reveal: "\"Hesabı Sil\" doğrudan action — `confirm()` veya delete-confirmation modal flow olmalı."
  },
  {
    id: "P-SAC-4", chapter: "ch2", reporter: "deniz", date: "16 May, 08:35", status: "Açık",
    category: "Kontrast", page: "Hesap", pageGroup: "Hesap",
    subject: "Tehlikeli Bölge metni kırmızı arka planda yine soluk",
    body: "Tehlikeli Bölge başlığının altındaki açıklama `text-red-300` — kırmızımsı arka planda görünmüyor.",
    hint: "Pastel kırmızı + soluk metin.",
    reveal: "`text-red-300` — `text-red-700` olmalı."
  },
  {
    id: "P-SAC-5", chapter: "ch2", reporter: "sema", date: "16 May, 08:45", status: "Açık",
    category: "Görsel", page: "Hesap", pageGroup: "Hesap",
    subject: "Kaydet butonu büyük",
    body: "Aynı.",
    hint: "h-8+py-3.",
    reveal: "Aynı."
  },

  // ===== 21. BİLDİRİM AYARLARI =====
  {
    id: "P-SNT-1", chapter: "ch2", reporter: "sema", date: "16 May, 10:00", status: "Açık",
    category: "Görsel", page: "Bildirim Ayarları", pageGroup: "Bildirim Ayarları",
    subject: "2. toggle satırı sıkışık",
    body: "Aynı tutarsızlık.",
    hint: "Aynı.",
    reveal: "`i === 1` (b) için `p-3`, diğerleri `p-4`."
  },
  {
    id: "P-SNT-2", chapter: "ch2", reporter: "deniz", date: "16 May, 10:08", status: "Açık",
    category: "Kontrast", page: "Bildirim Ayarları", pageGroup: "Bildirim Ayarları",
    subject: "Toggle açıklamaları okunmuyor",
    body: "Her toggle'ın altında küçük açıklama var ama soluk gri.",
    hint: "Aynı.",
    reveal: "`text-slate-300`."
  },
  {
    id: "P-SNT-3", chapter: "ch2", reporter: "sema", date: "16 May, 10:18", status: "Açık",
    category: "Görsel / Hizalama", page: "Bildirim Ayarları", pageGroup: "Bildirim Ayarları",
    subject: "Toggle topu çerçeveden taşıyor",
    body: "Toggle 12×7 (48×28px), içindeki yuvarlak top 5×5 (20×20px). Açıkken `left-6` deniyor — top dışarı taşıyor!",
    hint: "Hesap yapılınca toplam 24+20 = 44, container 48 — sınırda ama dot pozisyonu yanlış.",
    reveal: "Toggle: `w-12 h-7` + dot `w-5 h-5 left-6`. `left-6` = 24px, dot 20px → 44px, container 48px tamam ama görsel sıkışık. `w-11 h-6` + dot `w-4 h-4` daha temiz."
  },

  // ===== 22. GİZLİLİK =====
  {
    id: "P-SPR-1", chapter: "ch2", reporter: "deniz", date: "16 May, 11:00", status: "Açık",
    category: "Kontrast", page: "Gizlilik", pageGroup: "Gizlilik",
    subject: "Checkbox açıklamaları soluk",
    body: "Aynı.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "P-SPR-2", chapter: "ch2", reporter: "murat", date: "16 May, 11:08", status: "Açık",
    category: "Erişilebilirlik", page: "Gizlilik", pageGroup: "Gizlilik",
    subject: "Select kutusunda focus yok",
    body: "Aynı.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "P-SPR-3", chapter: "ch2", reporter: "sema", date: "16 May, 11:15", status: "Açık",
    category: "Görsel", page: "Gizlilik", pageGroup: "Gizlilik",
    subject: "Kaydet büyük",
    body: "Aynı.",
    hint: "h-8+py-3.",
    reveal: "Aynı."
  },

  // ===== 23. FATURALAMA =====
  {
    id: "P-SBL-1", chapter: "ch2", reporter: "sema", date: "16 May, 13:00", status: "Açık",
    category: "Görsel", page: "Faturalama", pageGroup: "Faturalama",
    subject: "Planı Değiştir butonu büyük",
    body: "Aynı.",
    hint: "h-8+py-3.",
    reveal: "Aynı."
  },
  {
    id: "P-SBL-2", chapter: "ch2", reporter: "berk", date: "16 May, 13:10", status: "Yeni",
    category: "UX", page: "Faturalama", pageGroup: "Faturalama",
    subject: "Uzun fatura tablolarında başlıklar kayboluyor",
    body: "Fatura geçmişi tablosunda 5 satır var, ileride 50 olunca aşağı kaydırınca tablo başlıkları (\"Tarih, Plan, Tutar...\") yukarı kaybolacak. Sticky olmalı.",
    hint: "thead sticky.",
    reveal: "`<thead>` sticky değil — `position: sticky; top: 0` veya Tailwind `sticky top-0` eklenmeli."
  },
  {
    id: "P-SBL-3", chapter: "ch2", reporter: "sema", date: "16 May, 13:18", status: "Açık",
    category: "Görsel / Hizalama", page: "Faturalama", pageGroup: "Faturalama",
    subject: "\"Durum\" sütunu hizasız",
    body: "Tablo başlığı text-center ama hücreler text-left. Başlık ortalanmış ama içeriği sola yapışık — utanç verici görünüyor.",
    hint: "Header ile cell text-align tutarsız.",
    reveal: "th: `text-center`, td: `text-left` — ikisi de aynı (örn. `text-left`) olmalı."
  },
  {
    id: "P-SBL-4", chapter: "ch2", reporter: "deniz", date: "16 May, 13:25", status: "Açık",
    category: "Kontrast", page: "Faturalama", pageGroup: "Faturalama",
    subject: "Plan kartında \"/ay\" yazısı görünmüyor",
    body: "Mor gradient plan kartında \"₺199/ay\" yazısının \"/ay\" kısmı `text-indigo-200` — gradient'te kayboluyor.",
    hint: "Açık ton + açık gradient.",
    reveal: "`text-indigo-200` mor gradient'te yetersiz, `text-white/80` olmalı."
  },

  // ===== 24. HAKKIMIZDA =====
  {
    id: "P-ABT-1", chapter: "ch2", reporter: "sema", date: "17 May, 09:00", status: "Açık",
    category: "Görsel", page: "Hakkımızda", pageGroup: "Hakkımızda",
    subject: "Stats kartlarından 2.'si yine küçük",
    body: "Aynı tutarsızlık (3 kart, 2.'si farklı).",
    hint: "i === 1.",
    reveal: "Aynı."
  },
  {
    id: "P-ABT-2", chapter: "ch2", reporter: "deniz", date: "17 May, 09:10", status: "Açık",
    category: "Kontrast", page: "Hakkımızda", pageGroup: "Hakkımızda",
    subject: "Hero altyazısı gradient'te yine soluk",
    body: "Aynı.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "P-ABT-3", chapter: "ch2", reporter: "deniz", date: "17 May, 09:18", status: "Açık",
    category: "Kontrast", page: "Hakkımızda", pageGroup: "Hakkımızda",
    subject: "Misyon ve Vizyon paragraflarımız okunmuyor",
    body: "Beyaz arka planda `text-slate-300`.",
    hint: "Aynı.",
    reveal: "`text-slate-300` — `text-slate-700`."
  },

  // ===== 25. KARİYER =====
  {
    id: "P-CAR-1", chapter: "ch2", reporter: "sema", date: "17 May, 11:00", status: "Açık",
    category: "Görsel", page: "Kariyer", pageGroup: "Kariyer",
    subject: "3. iş ilanı kartı küçük",
    body: "Aynı pattern.",
    hint: "i === 2.",
    reveal: "`p-3` for i=2."
  },
  {
    id: "P-CAR-2", chapter: "ch2", reporter: "sema", date: "17 May, 11:08", status: "Açık",
    category: "Görsel", page: "Kariyer", pageGroup: "Kariyer",
    subject: "Başvur butonu büyük",
    body: "Aynı.",
    hint: "h-8+py-3.",
    reveal: "Aynı."
  },
  {
    id: "P-CAR-3", chapter: "ch2", reporter: "sema", date: "17 May, 11:15", status: "Açık",
    category: "Görsel", page: "Kariyer", pageGroup: "Kariyer",
    subject: "İş kartı logosu yine yumurta",
    body: "Pozisyon kartlarındaki şirket logosu `w-12 h-10` — oval.",
    hint: "Avatar problemi.",
    reveal: "`w-12 h-10`."
  },
  {
    id: "P-CAR-4", chapter: "ch2", reporter: "deniz", date: "17 May, 11:25", status: "Açık",
    category: "Kontrast", page: "Kariyer", pageGroup: "Kariyer",
    subject: "Lokasyon ve iş tipi soluk",
    body: "Aynı.",
    hint: "Aynı.",
    reveal: "Aynı."
  },

  // ===== 26. İLETİŞİM =====
  {
    id: "P-CON-1", chapter: "ch2", reporter: "murat", date: "17 May, 14:00", status: "Açık",
    category: "Erişilebilirlik", page: "İletişim", pageGroup: "İletişim",
    subject: "Form fokusları yok",
    body: "Aynı.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "P-CON-2", chapter: "ch2", reporter: "aylin", date: "17 May, 14:08", status: "Açık",
    category: "Form / Type", page: "İletişim", pageGroup: "İletişim",
    subject: "E-posta yine type=text",
    body: "Aynı.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "P-CON-3", chapter: "ch2", reporter: "sema", date: "17 May, 14:15", status: "Açık",
    category: "Görsel", page: "İletişim", pageGroup: "İletişim",
    subject: "Sağdaki iletişim kartlarından 2.'si küçük",
    body: "Telefon kartı diğerlerinden farklı padding.",
    hint: "p-3 outlier.",
    reveal: "Telefon kartı `p-3`, diğerleri `p-5`."
  },
  {
    id: "P-CON-4", chapter: "ch2", reporter: "deniz", date: "17 May, 14:22", status: "Açık",
    category: "Kontrast", page: "İletişim", pageGroup: "İletişim",
    subject: "İletişim kartı başlıkları (\"E-POSTA\", \"TELEFON\") soluk",
    body: "Aynı.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "P-CON-5", chapter: "ch2", reporter: "sema", date: "17 May, 14:30", status: "Açık",
    category: "Görsel", page: "İletişim", pageGroup: "İletişim",
    subject: "Gönder butonu büyük",
    body: "Aynı.",
    hint: "h-8+py-3.",
    reveal: "Aynı."
  },
  {
    id: "P-CON-6", chapter: "ch2", reporter: "aylin", date: "17 May, 14:38", status: "Açık",
    category: "Form / Validation", page: "İletişim", pageGroup: "İletişim",
    subject: "Boş form gönderilebiliyor",
    body: "Aynı.",
    hint: "Aynı.",
    reveal: "Aynı."
  },

  // ===== 27. BLOG =====
  {
    id: "P-BLG-1", chapter: "ch2", reporter: "sema", date: "18 May, 09:00", status: "Açık",
    category: "Görsel", page: "Blog", pageGroup: "Blog",
    subject: "2. blog yazı kartı sıkışık",
    body: "Aynı pattern.",
    hint: "i === 1.",
    reveal: "Aynı."
  },
  {
    id: "P-BLG-2", chapter: "ch2", reporter: "berk", date: "18 May, 09:08", status: "İncelemede",
    category: "Tailwind / JIT", page: "Blog", pageGroup: "Blog",
    subject: "Bazı blog kart görselleri renksiz",
    body: "Bazı kartların gradient'i gözükmüyor — yine dynamic class purge problemi.",
    hint: "from-X-${(i+3)*100} dynamic.",
    reveal: "`from-indigo-${(i+3)*100} to-fuchsia-${(i+3)*100}` — JIT bunu compile edemez, build'de purge."
  },
  {
    id: "P-BLG-3", chapter: "ch2", reporter: "deniz", date: "18 May, 09:15", status: "Açık",
    category: "Kontrast", page: "Blog", pageGroup: "Blog",
    subject: "Blog yazı altyazıları soluk",
    body: "Aynı.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "P-BLG-4", chapter: "ch2", reporter: "berk", date: "18 May, 09:22", status: "Açık",
    category: "UX", page: "Blog", pageGroup: "Blog",
    subject: "Karta tıkladığımda tıkladığımı anlamıyorum",
    body: "cursor:pointer var ama active state yok.",
    hint: "active:bg yok.",
    reveal: "Card click feedback eksik."
  },

  // ===== 28. BLOG YAZISI =====
  {
    id: "P-BPT-1", chapter: "ch2", reporter: "deniz", date: "18 May, 11:00", status: "Açık",
    category: "Görsel / Image", page: "Blog Yazısı", pageGroup: "Blog Yazısı",
    subject: "Cover image distorted",
    body: "Yazının üstündeki kapak görsel `object-cover` yok — ileride gerçek görsel kullanılırsa esner.",
    hint: "object-cover yok.",
    reveal: "Cover image'da `object-cover` yok."
  },
  {
    id: "P-BPT-2", chapter: "ch2", reporter: "aylin", date: "18 May, 11:08", status: "Açık",
    category: "Layout / URL", page: "Blog Yazısı", pageGroup: "Blog Yazısı",
    subject: "Yazı içindeki uzun URL satır kırılmıyor",
    body: "Aynı.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "P-BPT-3", chapter: "ch2", reporter: "aylin", date: "18 May, 11:15", status: "Açık",
    category: "Layout / Word break", page: "Blog Yazısı", pageGroup: "Blog Yazısı",
    subject: "Bir paragraftaki span uzun kelimeyle taşıyor",
    body: "Yazı içeriğinde span olarak konmuş uzun kelime yan tarafa kayıyor.",
    hint: "break-words yok.",
    reveal: "Span'de `break-words` yok."
  },
  {
    id: "P-BPT-4", chapter: "ch2", reporter: "sema", date: "18 May, 11:22", status: "Açık",
    category: "Görsel", page: "Blog Yazısı", pageGroup: "Blog Yazısı",
    subject: "Yorumlardan 2.'si farklı padding'de",
    body: "Aynı.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "P-BPT-5", chapter: "ch2", reporter: "deniz", date: "18 May, 11:30", status: "Açık",
    category: "Kontrast", page: "Blog Yazısı", pageGroup: "Blog Yazısı",
    subject: "Tarih ve okuma süresi soluk",
    body: "Aynı.",
    hint: "Aynı.",
    reveal: "Aynı."
  },

  // ===== 29. YARDIM =====
  {
    id: "P-HLP-1", chapter: "ch2", reporter: "sema", date: "18 May, 14:00", status: "Açık",
    category: "Görsel", page: "Yardım", pageGroup: "Yardım",
    subject: "3. yardım kartı sıkışık",
    body: "Aynı.",
    hint: "i === 2.",
    reveal: "Aynı."
  },
  {
    id: "P-HLP-2", chapter: "ch2", reporter: "deniz", date: "18 May, 14:08", status: "Açık",
    category: "Kontrast", page: "Yardım", pageGroup: "Yardım",
    subject: "Kart açıklamaları soluk",
    body: "Aynı.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "P-HLP-3", chapter: "ch2", reporter: "berk", date: "18 May, 14:15", status: "Yeni",
    category: "UX", page: "Yardım", pageGroup: "Yardım",
    subject: "Hover'da shadow ekleniyor ama bütün kart oturmuş gibi duruyor",
    body: "Karta hover ettiğimde shadow geliyor ama scale veya translate yok — geçiş çok ani, hareket eksik.",
    hint: "hover:scale veya translate eksik.",
    reveal: "`hover:shadow-lg` var ama `hover:-translate-y-0.5` veya benzeri micro-interaction yok."
  },

  // ===== 30. SSS =====
  {
    id: "P-FAQ-1", chapter: "ch2", reporter: "sema", date: "18 May, 16:00", status: "Açık",
    category: "Görsel", page: "SSS", pageGroup: "SSS",
    subject: "2. SSS satırı küçük",
    body: "Aynı.",
    hint: "i === 1.",
    reveal: "Aynı."
  },
  {
    id: "P-FAQ-2", chapter: "ch2", reporter: "deniz", date: "18 May, 16:08", status: "Açık",
    category: "Kontrast", page: "SSS", pageGroup: "SSS",
    subject: "Cevap metinleri soluk",
    body: "Aynı.",
    hint: "Aynı.",
    reveal: "Aynı."
  },
  {
    id: "P-FAQ-3", chapter: "ch2", reporter: "sema", date: "18 May, 16:15", status: "Açık",
    category: "Görsel / Animasyon", page: "SSS", pageGroup: "SSS",
    subject: "+ ve − ikonları statik — açıldığında animasyon yok",
    body: "Bir SSS açtığımda + işareti − oluyor ama anında değişiyor, geçiş yok. Genelde ikonlar dönerek açılır.",
    hint: "transition yok.",
    reveal: "`+`/`-` icon transition yok — `transition-transform` ve `rotate` eklenebilir."
  },
  {
    id: "P-FAQ-4", chapter: "ch2", reporter: "can", date: "18 May, 16:22", status: "Açık",
    category: "🚨 Console", page: "SSS", pageGroup: "SSS",
    subject: "Search input'a yazınca Console hata atıyor",
    body: "SSS sayfasındaki arama input'una yazıyorum, hiçbir şey değişmiyor ama Console'da React warning'i: \"You provided a value prop to a form field without an onChange handler\". Tipik controlled input hatası.",
    hint: "value=\"\" + onChange yok.",
    reveal: "FaqPage search: `value=\"\"` ama `onChange` yok — controlled component warning."
  },
];
