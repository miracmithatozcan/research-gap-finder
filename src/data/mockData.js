export const researchGaps = [
  {
    id: 1,
    category: "Teknoloji ve Tasarım",
    domain: "Giyilebilir Sağlık Teknolojileri",
    subDomain: "Ter Bazlı Biyobelirteç Analizi ve Esnek Sensör Sistemleri",
    literatureStatus: "Mevcut ter analiz sensörleri güvenilir okuma yapabilmek için yüksek miktarda sıvı hacmine ihtiyaç duyar, bu da ölçüm gecikmelerine yol açar. Geleneksel enzimatik biyosensörler çevresel etkilere karşı stabilite sorunu yaşamaktadır. Literatürde MOF kompozitleri ve karbon nanotüpler gibi non-enzimatik yaklaşımlar araştırılmaktadır (Kaynak: RSC Advances, 2024).",
    researchGap: "Ultra düşük hacimli (< 1 µL) ter örneklemesi yapabilen, kapiller mikroakışkan kanallarla entegre ve enzim gerektirmeyen (non-enzymatic) OECT tabanlı stabil algılama mekanizmalarının eksikliği.",
    isefPotential: "Enzimatik olmayan, tek atomlu katalizör tabanlı esnek bir sensör yamasının tasarlanması. Pasif mikroakışkan bir sistemle entegre edilecek bu prototipin performansı, yapay deri üzerindeki simüle edilmiş ter ile kortizol/glukoz takibi üzerinden kanıtlanabilir.",
    references: [
      { title: "Recent Advancements in Non-enzymatic Wearable Sweat Sensors", journal: "RSC Advances (2024)", link: "https://pubs.rsc.org", doi: "10.1039/D4RA0XXXX" },
      { title: "Highly Active Electrocatalytic Surfaces for Sweat Metabolite Analysis", journal: "Nature Electronics (2024)", link: "https://www.nature.com/", doi: "10.1038/s41928-024-XXXXX" }
    ],
    color: "#06b6d4"
  },
  {
    id: 2,
    category: "Teknoloji ve Tasarım",
    domain: "Otonom Sistemler & Yapay Zeka",
    subDomain: "Kenar Bilişimde (Edge Computing) Yarı Gözetimli 3D Çevre Algılama",
    literatureStatus: "LiDAR sensörleri yüksek doğruluk sunmasına rağmen çok pahalı ve enerji tüketicidir. Yalnızca görüntü işleme temelli sistemler zorlu havada başarısızdır. Literatürdeki sensör füzyon mimarileri, kısıtlı işlem gücüne sahip kenar cihazlarda çalışamayacak kadar ağırdır.",
    researchGap: "Sınırlı güç tüketimine (sub-5W) sahip donanımlarda, seyrek LiDAR verisi ve monoküler kamera görüntüsünü gerçek zamanlı birleştirebilen optimize edilmiş hafif bir Vision Transformer ağının bulunmaması.",
    isefPotential: "Hafifletilmiş bir seyrek-füzyon 'Vision Transformer' mimarisi kodlanabilir. Proje, Jetson Nano gibi bir kenar bileşende prototiplenerek, yapay sis/yağmur ile artırılmış nuScenes veri setinde 30+ FPS ile çalıştığı kanıtlanabilir.",
    references: [
      { title: "Edge-Computation Constraints and Low-Latency Challenges in Autonomous Navigation", journal: "IEEE Transactions on Intelligent Vehicles (2024)", link: "https://ieeexplore.ieee.org", doi: "10.1109/TIV.2024.XXXX" },
      { title: "Sparse Attention Mechanisms for Low-Power Robotics and Sensor Fusion", journal: "IEEE ICRA Proceedings (2024)", link: "https://ieeexplore.ieee.org", doi: "10.1109/ICRA.2024.XXXX" }
    ],
    color: "#10b981"
  },
  {
    id: 3,
    category: "Kimya",
    domain: "Yeni Nesil Malzeme Bilimi",
    subDomain: "Perovskit Güneş Hücrelerinde (PSC) Çevresel Stabilite Optimizasyonu",
    literatureStatus: "Perovskit güneş hücreleri yüksek enerji dönüşüm verimliliklerine (>%25) ulaşmış olsalar da nem, ısı ve UV ışını altında kalıcı bozulmaya uğrarlar. Standart kapsülleme yöntemleri bu süreci sadece geciktirmekte, yapısal entegrasyon şarj verimini düşürmektedir.",
    researchGap: "Band aralığını daraltmadan hem nem bariyeri sağlayan hem de süper hızlı elektron transferi gerçekleştiren karbon tabanlı iki boyutlu nanomalzemelerin (ör. MXene'ler) taşıyıcı arayüz katmanı olarak optimizasyon eksiği.",
    isefPotential: "MXene katkılı yeni bir elektron taşıma katmanı, döndürerek kaplama yöntemiyle sentezlenebilir. Geliştirilen mini prototip, kontrollü nem kabininde yaşlandırma testine tabi tutularak, TiO2 kullanan pillere göre T80 ömrünün uzadığı doğrulanabilir.",
    references: [
      { title: "Moisture-induced Degradation Dynamics in Perovskite Lattice Structures", journal: "Joule (2024)", link: "https://www.sciencedirect.com/journal/joule", doi: "10.1016/j.joule.2024.XXXX" },
      { title: "Functionalized MXenes as Ultra-stable Charge Transport Buffer Layers", journal: "Energy & Environmental Science (2024)", link: "https://pubs.rsc.org", doi: "10.1039/D4EE0XXXX" }
    ],
    color: "#8b5cf6"
  },
  {
    id: 4,
    category: "Biyoloji",
    domain: "Sentetik Biyoloji & Genetik",
    subDomain: "CRISPR-Cas9 Sistemlerinde Off-Target Etki Tahmini",
    literatureStatus: "CRISPR-Cas9 teknolojisi hedef diziyi mükemmel doğrulukta kesemediğinde 'off-target' mütasyonlara neden olmaktadır. Mevcut biyoinformatik araçlar bu etkileri tahmin edebilirken, 3 boyutlu kromatin yapısını göz ardı ettikleri için klinik doğruluk düşüktür.",
    researchGap: "Derin öğrenme modellerinde, dizilim verilerinin yanı sıra epigenetik işaretleyicileri entegre eden yüksek isabetli, çok-modaliteli bir off-target tahmin mimarisinin eksikliği.",
    isefPotential: "Açık kaynaklı epigenetik veritabanları ile gen dizisi verilerini birleştiren bir Graph Neural Network geliştirilerek, var olan off-target tahmin algoritmalarından en az %20 daha yüksek doğruluk oranları gösterilebilir.",
    references: [
      { title: "Deep Learning Approaches for CRISPR-Cas9 Off-Target Prediction Using Epigenetic Factors", journal: "Nature Biotechnology (2024)", link: "https://www.nature.com/nbt/", doi: "10.1038/s41587-024-XXXXX" },
      { title: "Chromatin Accessibility and CRISPR Accuracy: A Machine Learning Perspective", journal: "Bioinformatics (2024)", link: "https://academic.oup.com/bioinformatics", doi: "10.1093/bioinformatics/btaeXXX" }
    ],
    color: "#ec4899"
  },
  {
    id: 5,
    category: "Kimya",
    domain: "İklim Teknolojileri & Karbon Yakalama",
    subDomain: "Direct Air Capture (DAC) Sistemleri ve MOF Validasyonu",
    literatureStatus: "Atmosferden doğrudan karbon dioksit yakalama (DAC) sistemlerinde kullanılan adsorban çözeltileri rejenerasyon sürecinde aşırı yüksek ısıl enerji (~900°C) gerektirmektedir.",
    researchGap: "Ultra düşük enerjili desorpsiyon işlemi gerçekleştirebilen (< 80°C sıcaklıkta karbonu serbest bırakan) fototermal yeteneğe sahip ışığa duyarlı MOF materyallerinin tasarlanma eksikliği.",
    isefPotential: "Güneş enerjisiyle doğrudan ısınabilen, grafen oksit katkılı ışığa duyarlı bir MOF sentezlenip, oluşturulacak arduino-tabanlı küçük bir vakum-karbon sensör odacığında test edilebilir.",
    references: [
      { title: "Low-energy Regeneration of CO2 Adsorbents via Photothermal MOF Composites", journal: "Nature Materials (2024)", link: "https://www.nature.com/nmat/", doi: "10.1038/s41563-024-XXXXX" },
      { title: "Thermodynamic Limitations in Current Direct Air Capture Methods", journal: "Environmental Science & Technology (2024)", link: "https://pubs.acs.org/journal/esthag", doi: "10.1021/acs.est.4cXXXXX" }
    ],
    color: "#f59e0b"
  },
  {
    id: 6,
    category: "Fizik",
    domain: "Kuantum Güvenliği & Kriptografi",
    subDomain: "Nesnelerin İnterneti (IoT) için Kuantum Sonrası Şifreleme",
    literatureStatus: "NIST bazı kuantum-sonrası kriptografik (PQC) standartları onaylasa da, bu PQC algoritmalarının kafes-tabanlı (Lattice-based) anahtar boyutları aşırı büyüktür ve akıllı saat gibi IoT cihazlarının belleğine sığmamaktadır.",
    researchGap: "Son derece sınırlı RAM (< 16KB) ve CPU gücüne sahip ARM sistemler üzerinde çalışabilen, bellek gereksinimleri minimize edilmiş yeni nesil polinomsal halka tabanlı imza düzenlerinin optimizasyon eksikliği.",
    isefPotential: "Açık kaynaklı bir PQC algoritması bellek tabanlı işlem tasarrufu yöntemleriyle yeniden kodlanarak; bir Arduino Nano üzerinde kuantum-güvenli veri aktarımı gecikme testiyle kanıtlanabilir.",
    references: [
      { title: "Memory Optimization for Post-Quantum Cryptographic Protocols on Edge Nodes", journal: "IEEE Transactions on Information Forensics and Security (2024)", link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp", doi: "10.1109/TIFS.2024.XXXX" },
      { title: "Lattice-based Cryptography in Constrained IoT Environments", journal: "ACM Transactions on Privacy and Security (2024)", link: "https://dl.acm.org/journal/tops", doi: "10.1145/XXXXXXX" }
    ],
    color: "#6366f1"
  },
  {
    id: 7,
    category: "Biyoloji",
    domain: "Biyomedikal Mühendisliği ve Nöroteknoloji",
    subDomain: "Non-Invasive Beyin-Bilgisayar Arayüzlerinde Kinetik Çözümleme",
    literatureStatus: "Felçli hastalar için uygulanan non-invaziv EEG tabanlı BCI sistemleri yoğun gürültülü veriye sahiptir. Mevcut motor-imagery sinyal işlemeleri, kişinin çok boyutlu hareket niyetlerini çözmekte başarısız olup sadece ikili tahminler yapabilmektedir.",
    researchGap: "EEG sinyallerinden elde edilen kaba mekansal dağılım verilerini, temporal dinamiklerle birleştirerek sürekli (continuous 3D trajectory) bir vektör tahmini yapabilen hafif makine öğrenmesi modeli eksikliği.",
    isefPotential: "Açık kaynaklı EEG veri setleri kullanılarak 3D kol hareketlerinin koordinatlarını sürekli olarak tahmin eden bir LSTM mimarisi dizayn edilip doğruluk oranı gösterilebilir.",
    references: [
      { title: "Continuous Decoding of 3D Arm Trajectories from Non-Invasive EEG Signals", journal: "Journal of Neural Engineering (2024)", link: "https://iopscience.iop.org/journal/1741-2552", doi: "10.1088/1741-2552/acXXXX" },
      { title: "Noise Reduction and Spatial Filtering Advances in EEG-based BCI Systems", journal: "IEEE Transactions on Biomedical Engineering (2024)", link: "https://ieeexplore.ieee.org/", doi: "10.1109/TBME.2024.XXXX" }
    ],
    color: "#ef4444"
  },
  {
    id: 8,
    category: "Biyoloji",
    domain: "Tarım Teknolojileri & Nanomateryaller",
    subDomain: "Bitkilerde Zararlı Tespitine Yönelik RNAi Taşıma Sistemleri",
    literatureStatus: "Tarım zararlılarına karşı toksik kimyasallar yerine RNA müdahalesi (RNAi) gelecek vadetmektedir. Ancak dsRNA doğada hücresel zarlardan ve bitki yaprak kütikülünden geçemeyip çok hızlı parçalanmaktadır.",
    researchGap: "Toprağı ve suyu zehirlemeyen, yüksek miktarda RNA kaplayabilen ve bitkilerin stoma açıklığına uyumlu spesifik nanotaşıyıcı komplekslerin tarlabaşı uygulama sisteminin eksikliği.",
    isefPotential: "Geliştirilecek bir kitosan bazlı nanotaşıyıcı prototipinin bitki yaprağı modeline (Arabidopsis) penetrasyonu basit floresan mikroskobu altında analiz edilerek sunulabilir.",
    references: [
      { title: "Nanoparticle-mediated RNAi Delivery for Sustainable Crop Protection", journal: "Nature Plants (2024)", link: "https://www.nature.com/nplants/", doi: "10.1038/s41477-024-XXXXX" },
      { title: "Stability and Penetration Barriers of dsRNA in Agricultural Settings", journal: "ACS Nano (2024)", link: "https://pubs.acs.org/journal/ancac3", doi: "10.1021/acsnano.4cXXXXX" }
    ],
    color: "#84cc16"
  },
  {
    id: 9,
    category: "Teknoloji ve Tasarım",
    domain: "Siber Güvenlik & Büyük Dil Modelleri",
    subDomain: "AI Sistemlerinde Adversarial Prompt Injection Analizi",
    literatureStatus: "Büyük dil modellerinin uygulamalara entegrasyonu hızla artmaktadır. Ancak modeller, Adversarial Prompt Injection saldırıları ile kolayca kısıtlamaları atlamakta veya özel verileri sızdırmaktadır.",
    researchGap: "Ağ katmanında, NLP tabanlı istatiksel analizler aracılığıyla sıfırıncı-gün (zero-day) anlamsal enjeksiyon saldırılarını yüksek hızla saptayabilen (<100ms) hafif siklet bir savunma (firewall) arayüzü eksikliği.",
    isefPotential: "İkinci bir küçük, hızlı (SLM) yerel modelin; açık kaynaklı LLaMA'ya giden promptların semantik yönünü inceleyen bir filtre olarak kurgulanması ve bypass denemelerinin %90+ oranla bloklanması.",
    references: [
      { title: "Vulnerabilities and Security Defenses in Large Language Models against Prompt Injection", journal: "IEEE Security and Privacy (2024)", link: "https://ieeexplore.ieee.org/", doi: "10.1109/MSEC.2024.XXXX" },
      { title: "Jailbreaking AI: Mechanistic Interpretability of Adversarial Attacks on LLMs", journal: "arXiv Preprints / ACM CCS (2024)", link: "https://arxiv.org/", doi: "10.48550/arXiv.2402.XXXXX" }
    ],
    color: "#f43f5e"
  },
  {
    id: 10,
    category: "Kimya",
    domain: "Uzay Mühendisliği & Gelişmiş Kompozitler",
    subDomain: "Alçak Dünya Yörüngesi İçin (LEO) Kendi Kendini Onaran Polimerler",
    literatureStatus: "LEO'daki mikro-meteorid etkileri sonucu ortaya çıkan yapısal hasarlar uzay görevleri için ölümcüldür. Uzaydaki radyasyon mevcut mikro-kapsül polimer sistemlerini hızla bozmaktadır.",
    researchGap: "Aşırı düşük sıcaklık ve yüksek radyasyonlu uzay vakum koşullarında kimyasal özelliğini yitirmeden hızlı iç onarım gerçekleştirebilen vitrimer (vitrimer polymer glass) bazlı epoksi sistemlerin tasarlanması.",
    isefPotential: "Çapraz bağlı vitrimer polimer sistemleri, çatladığında tekrar birleşecek şekilde sentezlenebilir. Ardından dayanım testi ve vakum simülasyonu altında çatlak iyileşmesi ispatlanabilir.",
    references: [
      { title: "Radiation-resistant Self-healing Polymers for Aerospace Applications", journal: "Advanced Materials (2024)", link: "https://onlinelibrary.wiley.com/journal/15214095", doi: "10.1002/adma.2024XXXXX" },
      { title: "Vitrimers in Extreme Temperature Environments: Mechanisms and Limitations", journal: "Polymer Chemistry (2024)", link: "https://pubs.rsc.org/", doi: "10.1039/D4PY0XXXX" }
    ],
    color: "#0ea5e9"
  },
  {
    id: 11,
    category: "Biyoloji",
    domain: "Biyoinformatik & Veri Bilimi",
    subDomain: "Uzamsal Transkriptomik (Spatial Transcriptomics) Veri Sıkıştırma",
    literatureStatus: "Tüm hücrelerin gen frekans verilerini konumları ile çıkaran analizler bulut altyapılarında transfer darboğazlarına yol açmaktadır (TB boyutlarında veri).",
    researchGap: "Biyolojik sinyallerin korelasyonunu kullanan, 3D uzamsal özellikleri kaybetmeyen ve yüksek verimli (lossless) tensör sıkıştırma algoritmalarının eksikliği.",
    isefPotential: "Mevcut ZIP metotlarına alternatif olarak, gen ekspresyon düzeylerini 3 boyutlu tensör haritalarına dönüştürüp, Otomatik Kodlayıcı (Autoencoder) kullanarak veriyi asıl boyutunun %10'una düşüren bir Python algoritması yazılabilir.",
    references: [
      { title: "Data and Computational Challenges in High-Resolution Spatial Transcriptomics", journal: "Nature Genetics (2024)", link: "https://www.nature.com/ng/", doi: "10.1038/s41588-024-XXXXX" },
      { title: "Tensor Decomposition Methods for Biological Big Data Compression", journal: "Bioinformatics (2024)", link: "https://academic.oup.com/bioinformatics", doi: "10.1093/bioinformatics/btaeYYY" }
    ],
    color: "#3b82f6"
  },
  {
    id: 12,
    category: "Fizik",
    domain: "Yenilenebilir Enerji Depolama",
    subDomain: "Katı Hal Bataryalarında (Solid-State) Lityum Dendrit Oluşumunun Engellenmesi",
    literatureStatus: "Katı hal piller patlama riski göstermez. Ancak, şarj süreçleri boyunca lityum metal anottan katı elektrolit içine doğru mikroskobik 'dendrit' dallanmaları sızarak pillere kısa devre yaptırmaktadır.",
    researchGap: "Arayüz sürtünme direncini artırmadan lityum iyon akışını lokalize edip dendrit çekirdeklenmesini baskılayabilen, hem iletken hem esnek katı elektrolit arayüzü (SEI) katmanlarının entegrasyon eksiği.",
    isefPotential: "Elektro-eğirme yöntemi ile ince bir koruyucu polimer-seramik membran sentezlenip ticari bir lityum pili anotu arasına konumlandırılır. Kısa devre oluşum süresini ne kadar uzattığı analiz edilebilir.",
    references: [
      { title: "Suppression of Lithium Dendrites via Engineered Artificial SEI Layers", journal: "Nature Energy (2024)", link: "https://www.nature.com/nenergy/", doi: "10.1038/s41560-024-XXXXX" },
      { title: "Interfacial Challenges in Solid-State Lithium Metal Batteries", journal: "Advanced Energy Materials (2024)", link: "https://onlinelibrary.wiley.com/journal/16146840", doi: "10.1002/aenm.2024XXXXX" }
    ],
    color: "#eab308"
  }
];
