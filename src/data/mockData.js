export const researchGaps = [
  // MEVCUT 12 FİKİR
  { id: 1, category: "Teknoloji ve Tasarım", domain: "Giyilebilir Sağlık Teknolojileri", subDomain: "Ter Bazlı Biyobelirteç Analizi ve Esnek Sensör Sistemleri", literatureStatus: "Mevcut ter analiz sensörleri güvenilir okuma yapabilmek için yüksek miktarda sıvı hacmine ihtiyaç duyar...", researchGap: "Ultra düşük hacimli (< 1 µL) ter örneklemesi yapabilen OECT tabanlı stabil algılama mekanizmalarının eksikliği.", isefPotential: "Enzimatik olmayan, tek atomlu katalizör tabanlı esnek bir sensör tasarlanması.", references: [{ title: "Non-enzymatic Wearable Sweat Sensors", journal: "RSC Advances (2024)", link: "https://pubs.rsc.org", doi: "10.1039/D4RA0XXXX" }], color: "#06b6d4" },
  { id: 2, category: "Teknoloji ve Tasarım", domain: "Otonom Sistemler & Yapay Zeka", subDomain: "Kenar Bilişimde Yarı Gözetimli 3D Çevre Algılama", literatureStatus: "LiDAR sensörleri çok enerji tüketicidir. Görüntü temelli sistemler ise zorlu havada başarısızdır.", researchGap: "Sınırlı güç tüketimine (sub-5W) sahip donanımlarda, seyrek LiDAR ve monoküler kamera görüntüsünü birleştiren hafif bir Vision Transformer ağının bulunmaması.", isefPotential: "Hafifletilmiş bir seyrek-füzyon 'Vision Transformer' mimarisi kodlanıp, Jetson Nano gibi bir kenar bileşende 30+ FPS ile çalıştığı kanıtlanabilir.", references: [{ title: "Edge-Computation Constraints", journal: "IEEE Transactions (2024)", link: "https://ieeexplore.ieee.org", doi: "10.1109/TIV.2024.XXXX" }], color: "#10b981" },
  { id: 3, category: "Kimya", domain: "Yeni Nesil Malzeme Bilimi", subDomain: "Perovskit Güneş Hücrelerinde (PSC) Çevresel Stabilite", literatureStatus: "Perovskit hücreleri nem ve UV altında hızla bozulurlar.", researchGap: "Band aralığını daraltmadan hem nem bariyeri sağlayan nanomalzemelerin (ör. MXene'ler) taşıyıcı arayüz katmanı optimizasyon eksiği.", isefPotential: "MXene katkılı yeni bir elektron taşıma katmanı sentezlenerek T80 ömrü uzatılabilir.", references: [{ title: "Moisture-induced Degradation Dynamics", journal: "Joule (2024)", link: "https://www.sciencedirect.com", doi: "10.1016/j.joule.XXXX" }], color: "#8b5cf6" },
  { id: 4, category: "Biyoloji", domain: "Sentetik Biyoloji & Genetik", subDomain: "CRISPR-Cas9 Sistemlerinde Off-Target Etki Tahmini", literatureStatus: "CRISPR off-target tahmin araçları 3 boyutlu kromatin yapısını göz ardı eder.", researchGap: "Epigenetik işaretleyicileri entegre eden yüksek isabetli, çok-modaliteli bir off-target tahmin mimarisinin eksikliği.", isefPotential: "Açık kaynaklı verilerle Gen Dizisi GNN'i geliştirilip tahmin isabeti %20 artırılabilir.", references: [{ title: "Deep Learning Approaches for CRISPR", journal: "Nature Biotechnology (2024)", link: "https://www.nature.com", doi: "10.1038/s41587-XXXX" }], color: "#ec4899" },
  { id: 5, category: "Kimya", domain: "İklim Teknolojileri & Karbon Yakalama", subDomain: "Direct Air Capture (DAC) Sistemleri", literatureStatus: "DAC adsorban çözeltileri ısıtma için aşırı yüksek enerji (~900°C) gerektirmektedir.", researchGap: "Ultra düşük enerjili desorpsiyon işlemi gerçekleştirebilen ışığa duyarlı MOF materyallerinin eksikliği.", isefPotential: "Güneş enerjisiyle rejenere olabilen fototermal grafen katkılı MOF sentezlenebilir.", references: [{ title: "Low-energy Regeneration of CO2", journal: "Nature Materials (2024)", link: "https://www.nature.com", doi: "10.1038/s41563-XXXX" }], color: "#f59e0b" },
  { id: 6, category: "Fizik", domain: "Kuantum Güvenliği & Kriptografi", subDomain: "Nesnelerin İnterneti (IoT) için PQC", literatureStatus: "PQC algoritmalarının kafes-tabanlı anahtar boyutları aşırı büyüktür ve IoT cihazlarına sığmamaktadır.", researchGap: "Sınırlı RAM'e sahip ARM sistemlerde bellek gereksinimleri minimize edilmiş halka tabanlı imza düzenlerinin eksikliği.", isefPotential: "Açık kaynaklı bir PQC algoritmasının in-place bellek yönetimiyle Arduino Nano'da optimize edilmesi.", references: [{ title: "Memory Optimization for Post-Quantum", journal: "IEEE TIFS (2024)", link: "https://ieeexplore.ieee.org", doi: "10.1109/TIFS.2024.XXXX" }], color: "#6366f1" },
  { id: 7, category: "Biyoloji", domain: "Biyomedikal Mühendisliği", subDomain: "Non-Invasive Nöro-kinetik Çözümleme", literatureStatus: "EEG tabanlı sistemler sadece basit ikili kontrol yapabilmektedir.", researchGap: "Temporal dinamiklerle sürekli (continuous 3D trajectory) bir vektör tahmini yapabilen AI modeli eksikliği.", isefPotential: "Açık kaynaklı EEG verisi kullanılarak 3D kol hareketlerini çıkaran bir Spiking Neural Network prototipi.", references: [{ title: "Continuous Decoding of 3D Arm", journal: "Journal of Neural Engineering (2024)", link: "", doi: "10.1088/1741-XXXX" }], color: "#ef4444" },
  { id: 8, category: "Biyoloji", domain: "Tarım Teknolojileri", subDomain: "Bitkilerde Zararlı Tespitine Yönelik RNAi", literatureStatus: "Tarım ilaçları alternatifi olan RNA müdahalesi stoma dışından bitkiye giremeden parçalanmaktadır.", researchGap: "Toprağı zehirlemeyen, kalsiyum fosfat tabanlı nanotaşıyıcıların in-field optimizasyon eksikliği.", isefPotential: "Arabidopsis modeline uyumlu floresan takipli nano-RNAi kompleksi sentezlenmesi.", references: [{ title: "Nanoparticle-mediated RNAi Delivery", journal: "Nature Plants (2024)", link: "", doi: "10.1038/s41477-XXXX" }], color: "#84cc16" },
  { id: 9, category: "Teknoloji ve Tasarım", domain: "Siber Güvenlik & Büyük Dil Modelleri", subDomain: "Adversarial Prompt Injection Savunması", literatureStatus: "Görünmez unicode saldırıları LLM güvenlik bariyerlerini kolayca aşmaktadır.", researchGap: "NLP tabanlı istatistiksel metriklerle zero-day anlamsal enjeksiyonları engelleyen 100ms altı bir Firewall katmanı.", isefPotential: "Küçük bir dil modelini LLaMA-3 önünde çalışacak bir sansürleyici firewall mimarisi (proxy) olarak kodlanması.", references: [{ title: "Vulnerabilities in LLMs", journal: "IEEE Security (2024)", link: "", doi: "10.1109/MSEC.2024.XXXX" }], color: "#f43f5e" },
  { id: 10, category: "Kimya", domain: "Uzay Mühendisliği", subDomain: "Kendi Kendini Onaran Vitrimerler", literatureStatus: "Radyasyon uzaydaki standart polimer kapsülleri hızla degradasyona uğratır.", researchGap: "Aşırı sıcaklık farklarında (-100°C / 150°C) özelliğini yitirmeyen çapraz bağlı vitrimer epoksi sistemlerinin eksikliği.", isefPotential: "Vakum odacığında test edilecek, termal ped eklentili kendi kendine kaynaklanabilen vitrimer zırh katmanı.", references: [{ title: "Radiation-resistant Self-healing", journal: "Advanced Materials (2024)", link: "", doi: "10.1002/adma.XXXX" }], color: "#0ea5e9" },
  { id: 11, category: "Biyoloji", domain: "Biyoinformatik", subDomain: "Uzamsal Transkriptomik Sıkıştırma", literatureStatus: "Moleküler taramalardan çıkan TB boyutlarındaki hücre lokasyon verileri bulutta analiz edilememektedir.", researchGap: "Biyolojik gen korelasyonunu kullanan yüksek verimli (lossy) tensör sıkıştırma algoritmalarının yokluğu.", isefPotential: "Gen frekanslarını 3D matrise çevirip Autoencoder kullanarak veriyi asıl boyutunun %10'una düşüren bir araç tasarımı.", references: [{ title: "Computational Challenges in Spatial Transcriptomics", journal: "Nature Genetics (2024)", link: "", doi: "10.1038/s41588-XXXX" }], color: "#3b82f6" },
  { id: 12, category: "Fizik", domain: "Yenilenebilir Enerji", subDomain: "Katı Hal Bataryalarında Dendrit Engelleme", literatureStatus: "Katı hal pillerinde şarj esnasında lityum metali dendrit üreterek arayüzden sızmaktadır.", researchGap: "Arayüz sürtünmesini artırmadan lityum iyon akışını lokalize eden kompozit bir Katı Elektrolit Arayüzü (SEI) eksikliği.", isefPotential: "Elektro-eğirme yöntemiyle esnek bir polimer-seramik SEI kaplamasının pil döngü ömrünü artırması testi.", references: [{ title: "Suppression of Lithium Dendrites", journal: "Nature Energy (2024)", link: "", doi: "10.1038/s41560-XXXX" }], color: "#eab308" },

  // YENİ EKLENEN DEVASA VERİ TABANI - FİZİK
  {
    id: 13,
    category: "Fizik",
    domain: "Akustik ve Metamateryaller",
    subDomain: "Akustik Pelerinleme (Acoustic Cloaking) ve Gürültü İzolasyonu",
    literatureStatus: "Düşük frekanslı (LFA) gürültülerin engellenmesi için devasa kalınlıkta köpükler gerekmektedir; 100 Hz altı sesler penetrasyon gücü yüksek olduğu için klasik malzemelerle durdurulamaz.",
    researchGap: "Kalınlığı santimetre seviyesinde olup >30 dB düşük frekans sönümlemesi sağlayan çok katmanlı, 3D basılabilir Helmholtz rezonatör tabanlı topolojik akustik metamateryallerin eksikliği.",
    isefPotential: "Matematiksel akustik modelleme (Comsol) ile spiral kanallı kompakt bir metamateryal fayansı tasarlanıp, 3D yazıcı ile basılarak düşük frekanslı ses odalarında test edilebilir.",
    references: [
      { title: "Broadband low-frequency sound absorber using topological metamaterials", journal: "Applied Physics Letters (2024)", link: "", doi: "10.1063/5.XXXX" }
    ],
    color: "#6366f1"
  },
  {
    id: 14,
    category: "Fizik",
    domain: "Kuantum Algılayıcılar",
    subDomain: "Nitrojen-Boşluk Merkezleri (NV Centers) ve Manyetometri",
    literatureStatus: "Elmaslardaki NV (Nitrojen-Vacancy) merkezleri oda sıcaklığında manyetik alan ölçebilir fakat mikrobiyolojik seviyede sinyal-gürültü oranı (SNR) optik odaklanma limitleri sebebiyle zayıftır.",
    researchGap: "Biyolojik hücre kültürleri çevresinde piko-Tesla düzeyinde bölgesel aksiyon potansiyelini (manyetik dalgayı) okuyabilmek için, yönlendirilmiş optik anten geometrisine sahip entegre nano-elmas sensör mimarisi eksikliği.",
    isefPotential: "Plazmonik altın nanopartiküllerle kaplanmış bir nanoelmas dizisi yapılarak (veya simüle edilerek) floresan ışıma oranının %300'e kadar arttığı ve daha hassas manyetik alan okunabildiği ispatlanabilir.",
    references: [
      { title: "Plasmon-enhanced room-temperature quantum sensing", journal: "Nature Photonics (2024)", link: "", doi: "10.1038/s41566-XXXX" }
    ],
    color: "#0ea5e9"
  },
  {
    id: 15,
    category: "Fizik",
    domain: "Optoelektronik ve Fotonik",
    subDomain: "Yonga Üstü Tıbbi Lazer Sensörler",
    literatureStatus: "Giyilebilir optik sensörler kanda fotopletismografi (PPG) okurken deri kalınlığı, melanin seviyesi ve hareket artefaktlarından yüksek oranda etkilenmektedir.",
    researchGap: "Spektrumu değiştirilebilir (tunable) ve deri altı kılcal damarlarının derinliğine göre dalga boyunu dinamik olarak kalibre edebilen ultra minyatürize dikey-kavite (VCSEL) lazer matrisi optimizasyonu.",
    isefPotential: "Farklı ten renkleri ve deri altı yağ oranlarında yapay zeka ile otomatik lümen ve frekans kontrolü sağlayan bir açık kaynak PPG + VCSEL optik modül entegrasyonu kodlanabilir.",
    references: [
      { title: "Dynamically tunable VCSEL arrays for skin-agnostic biometrics", journal: "Optics Express (2024)", link: "", doi: "10.1364/OE.XXXX" }
    ],
    color: "#14b8a6"
  },

  // YENİ EKLENEN DEVASA VERİ TABANI - KİMYA
  {
    id: 16,
    category: "Kimya",
    domain: "Yeşil Kimya ve Geri Dönüşüm",
    subDomain: "Lityum İyon Pillerin Hidrometalurjik Geri Kazanımı",
    literatureStatus: "Atık Lityum pillerden kritik metallerin (Kobalt, Nikel) asit liçi ile çıkarılması, oldukça reaktif ve zehirli bileşikler olan inorganik asitler kullanılarak yapılmaktadır.",
    researchGap: "Organik asitler (örn: askorbik, sitrik asit) ile Derin Ötektik Çözücüler (DES) kombinasyonu kullanılarak 50°C altında dahi %95 verimlilikle kobalt ve lityum çözünmesini sağlayan kinetik model eksikliği.",
    isefPotential: "Limon asidi ve kolin klorür karışımına dayalı yeni bir DES formülasyonu yapılarak akıllı telefon bataryası atıklarından minimum atık su ile yüksek oranda kobalt oksit çökelmesi sağlanabilir.",
    references: [
      { title: "Green Recovery of Spent Li-ion Battery Cathodes via Deep Eutectic Solvents", journal: "ACS Sustainable Chemistry & Engineering (2024)", link: "", doi: "10.1021/acssuschemeng.XXXX" }
    ],
    color: "#84cc16"
  },
  {
    id: 17,
    category: "Kimya",
    domain: "Hidrojen Ekonomisi",
    subDomain: "Katı Hal Hidrojen Depolama Yapıları",
    literatureStatus: "Gaz hidrojen depolamak için >700 bar basınç veya kriyojenik (-253°C) sıcaklıklar gerekmekte, bu da hidrojen araçlarının ticari güvenliğini riske atmaktadır.",
    researchGap: "Oda sıcaklığında tersinir (reversible) hidrojen salımı ve emilimi yapabilen, ağırlıkça %6'dan fazla hidrojen kapasitesine sahip katalizör katkılı magnezyum hidrür (MgH2) alaşımlarının dehidrojenasyon kinetiğindeki yavaşlık.",
    isefPotential: "Karbon nanotüp dokulu bir 3D iskele sistemi üzerinde nikel katalizörlü magnezyum birikimi sağlanarak dehidrojenasyon sıcaklığı 300°C'den 150°C'ye düşürülebilir (deney veya DFT simülasyonu).",
    references: [
      { title: "Kinetics Enhancement of Hydrogen Storage in MgH2 via 3D Nanocarbon Frameworks", journal: "Journal of Materials Chemistry A (2024)", link: "", doi: "10.1039/D4TAXXXXX" }
    ],
    color: "#f59e0b"
  },
  {
    id: 18,
    category: "Kimya",
    domain: "Nanoteknoloji ve Biyomateryaller",
    subDomain: "Geniş Spektrumlu Antiviral / Hidrofobik Kaplamalar",
    literatureStatus: "Hastane yüzeylerinde kullanılan antibakteriyel kaplamalar (gümüş iyon bazlı vb.) çoğu virüse karşı etkisizdir ve mekanik aşınma sonucu kısa sürede silinir.",
    researchGap: "UV ışığı olmaksızın karanlıkta bile ROS (Reaktif Oksijen Türü) üretebilen ve aynı zamanda damlacık tutunmasını engelleyen, poliüretan bazlı, aşınmaya dayanıklı piezo-katalitik kuantum nokta kaplaması eksikliği.",
    isefPotential: "Çinko oksit (ZnO) nanopartiküllerinin rüzgar veya insanların yürüme titreşiminden kaynaklanan piezoelektrik etkiyle ROS üretmesini kullanan bir paspas veya yüzey seramiği kaplaması prototipi.",
    references: [
      { title: "Piezo-catalytic Dark-active Surfaces for Continuous Antiviral Activity", journal: "Advanced Functional Materials (2024)", link: "", doi: "10.1002/adfm.XXXXX" }
    ],
    color: "#ec4899"
  },

  // YENİ EKLENEN DEVASA VERİ TABANI - BİYOLOJİ
  {
    id: 19,
    category: "Biyoloji",
    domain: "Mikrobiyom Mühendisliği",
    subDomain: "Gut-Brain Axis (Bağırsak-Beyin Ekseni) Modellemesi",
    literatureStatus: "Bağırsak florasının depresyon ve Parkinson gibi hastalıklarda rol oynadığı bilinse de, bağırsaktan beyne nörotransmitter geçişini simüle eden gerçekçi in vitro (laboratuvar tüpü) modeller bulunmamaktadır.",
    researchGap: "Kan-beyin bariyeri endotel hücreleri ve bağırsak epitel dokusunu aynı kanallarda birbirine bağlayan, hücresel 'çapraz konuşmayı' mikroakışkan sistemlerle simüle eden 'Organ - on - a - chip' eksikliği.",
    isefPotential: "İki ana odası (bağırsak sızıntı modeli ve kan-beyin bariyeri) olan PDMS mikroakışkan bir çip tasarlanıp, 3D yazıcıyla basılarak flüoresan boyalar (örn: FITC-dextran) üzerinden mikrobiyotik geçirgenlik sıvı dinamiği ile test edilebilir.",
    references: [
      { title: "Microfluidic In Vitro Models of the Gut-Brain Axis", journal: "Nature Biomedical Engineering (2024)", link: "", doi: "10.1038/s41551-XXXX" }
    ],
    color: "#a855f7"
  },
  {
    id: 20,
    category: "Biyoloji",
    domain: "Tarım ve Ekoloji",
    subDomain: "Mikroplastik Parçalayan Yeni Nesil Bakteriler",
    literatureStatus: "Okyanuslarda ve tarım topraklarında mikroplastik kirliliği artmaktadır. Plastik parçalayan keşfedilmiş PETase enzimleri, doğal sıcaklık ve pH farklılıkları altında çok çabuk inaktif hale gelir.",
    researchGap: "PETase enzimlerinin ekstrem çevre koşullarında (örn. okyanus suyu tuzluluğu) verimli çalışmasını sağlayacak protein iskeletini güçlendirilmiş (directed evolution) kimerik dizilerine ihtiyaç vardır.",
    isefPotential: "Biyoinformatik araçlar kullanılarak (AlphaFold2 veya Rosetta) yüksek sıcaklıkta stabil kalabilecek mutasyonlu bir FAST-PETase enzim yapısı önermek ve docking (kenetlenme) analiziyle plastik zincirlerini kırma afinitesini kanıtlamak.",
    references: [
      { title: "Machine-learning-guided directed evolution for plastic degradation", journal: "Nature (2024)", link: "", doi: "10.1038/s41586-XXXX" }
    ],
    color: "#22c55e"
  },
  {
    id: 21,
    category: "Biyoloji",
    domain: "Biyomimikrili Mühendislik",
    subDomain: "Örümcek İpeğinden Esinlenmiş Doku İskeleleri (Scaffolds)",
    literatureStatus: "Yanık tedavilerinde ve kemik doku onarımında kullanılan kolajen iskeleleri düşük mekanik dayanıklılığa sahiptir ve vücut içinde çok erken çözünür.",
    researchGap: "Bakteriyel gen aktarımıyla elde edilmiş rekombinant örümcek ipeği proteinleri kullanılarak (spidroin), memeli kök hücrelerinin (MSC) yapışma ve çoğalma (proliferation) potansiyelini artıran topolojik hiyerarşik 3D doku iskelesi eksikliği.",
    isefPotential: "Biyouyumlu bir nanolif (electrospinning) ünitesiyle, örümcek ipeği ve jelatinin belirli oranlarda birleştirilerek sentetik bir yapay deri matrisi dokunması, dayanıklılık simülasyonlarının gerçekleştirilmesi.",
    references: [
      { title: "Recombinant Spider Silk Scaffolds for Enhanced Tissue Regeneration", journal: "Biomaterials (2024)", link: "", doi: "10.1016/j.biomaterials.XXXX" }
    ],
    color: "#fbbf24"
  },

  // YENİ EKLENEN DEVASA VERİ TABANI - TEKNOLOJİ VE TASARIM
  {
    id: 22,
    category: "Teknoloji ve Tasarım",
    domain: "Robotik & Nöromorfik Sistemler",
    subDomain: "Otonom Sürü (Swarm) Robotlar",
    literatureStatus: "Mikro sürü robotlarının (örneğin yangın aramada veya maden tespitinde) koordinasyonu, hücresel kuleler üzerinden yüksek bant genişlikli merkezi iletişime ihtiyaç duymakta bu da kırsalda çöküşe neden olmaktadır.",
    researchGap: "Çevrelerinden aldıkları sınırlı verilerle merkeze ihtiyaç duymadan kendi kendine çarpışma önleyen ve hedef tespit eden (karınca kolonisi esinli) düşük frekanslı peer-to-peer (P2P) RF optimizasyon algoritmalarının eksikliği.",
    isefPotential: "Üç adet ucuz Arduino veya ESP32 tabanlı mikro araçla merkezi bir sunucu olmaksızın, engellerden kaçan ve odadaki bir objeyi ('besin' mantığı) haritalayan sürü algoritması tasarlamak ve test etmek.",
    references: [
      { title: "Decentralized Swarm Intelligence via Low-Bandwidth Networks", journal: "IEEE Transactions on Robotics (2024)", link: "", doi: "10.1109/TRO.2024.XXXX" }
    ],
    color: "#f43f5e"
  },
  {
    id: 23,
    category: "Teknoloji ve Tasarım",
    domain: "İnsan-Bilgisayar Etkileşimi (HCI)",
    subDomain: "Haptik Feedback ve VR Arayüzleri",
    literatureStatus: "Mevcut VR sistemleri ve eldivenleri dokunma hissi vermek için ağır titreşim motorları kullanır ve bu da gerçek objelerin pürüzlülüğünü, ısı değişimini veya şeklini hissettiremez.",
    researchGap: "Parmak ucunda yüksek çözünürlüklü sürtünme oluşturmak üzere elektro-statik modülasyonu ve Peltier tabanlı (termal) sıcaklık değişimlerini 2mm kalınlık altında senkronize sunabilen giyilebilir kontrolcü mimarisi eksikliği.",
    isefPotential: "Dokunulan sanal bir taşın veya buzun hissini simüle edebilmek amacıyla 3D yazıcıdan basılmış küçük silikon yüzüklere sıvı-metal kaplama ve ufak bir sıcaklık kontrol devresi yerleştirerek reaksiyon sürelerini kanıtlamak.",
    references: [
      { title: "High-Resolution Electrostatic Haptic Interfaces for Virtual Reality", journal: "Computer Graphics Forum (ACM SIGGRAPH) (2024)", link: "", doi: "10.1111/cgf.XXXX" }
    ],
    color: "#2dd4bf"
  },
  {
    id: 24,
    category: "Teknoloji ve Tasarım",
    domain: "Erişilebilirlik ve Akıllı Asistanlar",
    subDomain: "İşitme Engelliler İçin Dinamik Çevresel Ses İzleme Merkezi",
    literatureStatus: "İşitme cihazları arka plan gürültüsünü filtreleyebiliyor ancak kullanıcılara arkadan gelen spesifik tehdit edici (kornalar, sirenler, bağırmalar) seslerin yönü ve türü hakkında görsel/titreşimli farkındalık sunmuyor.",
    researchGap: "Mikrofon diziliminin (microphone array) aldığı ses vektörlerinden sadece 'tehlike' odaklı verileri ayırt edip, akıllı saatlerde çok yönlü titreşim haritalaması sunabilen, düşük güç tüketimli AI donanım tasarımı eksikliği.",
    isefPotential: "Basit bir yaka mikrofonu modülü ile Tensorflow Lite Audio Classification algoritmasının ESP32 mikrokontrölcü üzerinde çalıştırılması; kornayı algılayıp akıllı bilekliğe (bluetooth) sağdan ya da soldan titreme emri göndermesi.",
    references: [
      { title: "Directional Threat Detection via Edge Audio Intelligence for Accessibility", journal: "ACM Conference on Accessible Computing (ASSETS) (2024)", link: "", doi: "10.1145/XXXXXXX" }
    ],
    color: "#0284c7"
  },
  {
    id: 25,
    category: "Kimya",
    domain: "Deniz Kirliliği & Nanoadsorbanlar",
    subDomain: "Ağır Metal Sızıntısı Filtreleme Tesisleri",
    literatureStatus: "Fabrika atıklarıyla suya karışan ağır metaller (Kurşun, Cıva, Krom) karbon filtrelerden sızabilmekte; mevcut spesifik iyon-değiştiriciler sentetik olmakta ve yüksek maliyet oluşturmaktadır.",
    researchGap: "Meyve kabuklarından (örneğin nar ve portakal) türetilmiş, biyokömür ile manyetik demir oksit nanopartikül kompozitlerinin iç içe geçtiği ve sadece basit bir dış mıknatıs ile sudan tamamen geri toplanabilen yüksek kapasiteli adsorbanların geliştirilmemesi.",
    isefPotential: "Lise/üniversite laboratuvarında mutfak atıklarının piroliz yöntemiyle manyetik biyokömüre dönüştürülmesi ve kirlenmiş sulardan ağır metal (veya metilen mavisi boyası) giderim oranlarının (>%98) tespiti.",
    references: [
      { title: "Magnetic biochar composites derived from agricultural waste for heavy metal removal", journal: "Chemical Engineering Journal (2024)", link: "", doi: "10.1016/j.cej.XXXX" }
    ],
    color: "#c026d3"
  },
  {
    id: 26,
    category: "Fizik",
    domain: "Savunma ve Havacılık Teknolojileri",
    subDomain: "Hiperses (Hypersonic) Hızlarda Termal Bariyer Geçişleri",
    literatureStatus: "Mach 5 uçuş hızlarında uzay ve savunma araçlarının burun kısmında oluşan 2000°C ötesi plazma ısınması termal kalkanlarda aşınma ve radyo iletişimi kaybına (blackout) yol açmaktadır.",
    researchGap: "Elektromanyetik dalgaları zayıflatmayan ve yüksek ablasyon (ısıl buharlaşma) direncine sahip, Zirkonyum Diborür (ZrB2) katkılı seramik-matris Ultra Yüksek Sıcaklık (UHTC) kompozit katmanlarının dielektrik özelliklerinin optimize edilememesi.",
    isefPotential: "Küçük ölçekli sentetik UHTC kompozit disk numunelerinin oluşturulması ve bilgisayar simülasyonlarında (ANSYS) elektromanyetik geçirgenliklerinin (radar dalgası kaybının) incelenmesi ile iletişimi kesmeyen kalkan modelinin tasarlanması.",
    references: [
      { title: "Dielectric optimization of UHTC for hypersonic vehicle radomes", journal: "Journal of the European Ceramic Society (2024)", link: "", doi: "10.1016/j.jeurceramsoc.XXXX" }
    ],
    color: "#f97316"
  },
  {
    id: 27,
    category: "Teknoloji ve Tasarım",
    domain: "Veri Depolama & Fotonik",
    subDomain: "DNA Tabanlı Bilgi Depolama Çözücüleri (Decoding)",
    literatureStatus: "DNA üzerine petabaytlarca veri yazılabiliyor olsa da, bu verinin sıralayıcı cihazlardan (Nanopore sequencing vb.) geçip okunması sırasında kaymalar ve silişler (insertion/deletion errors) oluştuğu için orijinal metni geri çağırmak zordur.",
    researchGap: "Nanopore sinyallerinden okunan gürültülü DNA varyantlarını klasik yöntemlere (Viterbi vs.) kıyasla 10 kat daha hızlı analiz edebilecek Transformer tabanlı hata telafisi (error-correction) dekoder mimarilerinin bulunmaması.",
    isefPotential: "Yapay zeka modellerinin hatalı ve parçalanmış DNA baz okuma dosyalarını alıp veri (örneğin bir JPEG fotoğrafı) kurtarma yüzdelerini artıracak bir açık kaynak hata kontrol kodu algoritması önermek.",
    references: [
      { title: "Transformer-based error correction for Nanopore DNA storage reading", journal: "Nature Communications (2024)", link: "", doi: "10.1038/s41467-XXXX" }
    ],
    color: "#64748b"
  },
  {
    id: 28,
    category: "Biyoloji",
    domain: "Kanserde Erken Tanı",
    subDomain: "Likit Biyopsi (Sıvı Biyopsi) ve Serbest Tümör DNA'sı (ctDNA)",
    literatureStatus: "Kan yoluyla alınan likit biyopsilerde kanda gezen serbest tümör DNA'sı oranı yüz milyonda bir seviyesinde olduğundan klasik PCR (Polimeraz Zincir Reaksiyonu) veya dizileme testleri kanseri evre 1'de kaçırır.",
    researchGap: "Sağlıklı hücre DNA'sını baskılayarak kanserli bölge mutasyonlarını (örn: KRAS, p53) spesifik olarak sinyal amplifikasyonuna (çoğalmaya) iten CRISPR-Cas12a entegreli manyetik zenginleştirme (magnetic enrichment) kiti metodolojisi zayıftır.",
    isefPotential: "Basit ve maliyetsiz CRISPR/Cas12a aktivasyonunu kullanarak sentetik kanser DNA numunelerinde florometrik renk değiştiren kağıt tabanlı (paper-based) hızlı tanı sensörü geliştirmek.",
    references: [
      { title: "CRISPR-Cas12a powered amplification strategy for ultra-sensitive ctDNA detection", journal: "Biosensors and Bioelectronics (2024)", link: "", doi: "10.1016/j.bios.XXXX" }
    ],
    color: "#1d4ed8"
  }
];
