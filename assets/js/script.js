const translations = {
  en: {
    navTop: "Top",
    navAbout: "About Me",
    navProjects: "Projects",
    navContact: "Contact",
    homeTitle: "Hi. I'm <strong>Luka Mikulić</strong>.",
    homeText: "I'm a Junior Software Developer and Enthusiast in Cybersecurity and AI.",
    homeButton: "Learn more about my Work",
    aboutTitle: "About Me",
    aboutText: "I started programming a few years ago through simple experiments and it quickly grew into something I genuinely enjoy. That curiosity eventually led me to earn a <b>Bachelor’s degree</b> (September, 2025) in Computer Science at the University of Rijeka. Along the way, I’ve worked on several projects — mostly academic and personal ones — which gave me the chance to explore different ideas and technologies. These experiences have helped me develop adaptability and a fast-learning mindset. In addition to my academic journey, my previous work experiences gave me the chance to collaborate closely with colleagues and clients, which helped me strengthen my ability to work in teams and further develop my communication skills. Today, my main interests lie in <b>software development</b> and in exploring how <b>artificial intelligence</b> can be applied to create and improve applications.",
    aboutButton: "See some of my recent work",
    projectsTitle: "Here's some of my Projects",
    catanTitle: "Catan Simulator",
    catanText: "A <b>Python</b> application that recreates the Catan board game with advanced map generation, rule validation and game simulations. It features automatic balanced map generation (resources, numbers and harbors) following official Catan rules and includes simulations to evaluate the best settlement spots and expected yields. The project also supports a bot player that can autonomously play the game to a target victory point score.",
    cannonTitle: "CannonBall Simulation",
    cannonText: "Built in the <b>Haxe</b> programming language using OpenFL, this interactive 2D simulation models real-world physics including gravity, air resistance (based on projectile diameter), wind, mass, velocity and launch angle/height. It features trajectory comparison with and without drag, as well as a target practice mode where the user inputs target coordinates and attempts to hit it.",
    somniaTitle: "Somnia 360°",
    somniaText: "A responsive website built for <b>Somnia 360°</b>, showcasing services, image and video galleries and an integrated contact form with direct email functionality. The project is primarily front-end but also includes a simple back-end feature for handling messages.",
    fraudDetectorTitle: "AI Real-time Fraud Detector",
    fraudDetectorText: "Production style real-time fraud detection platform for card payment transactions, built with <b>Python</b>, FastAPI, Kafka, TensorFlow, PostgreSQL, Docker, and Streamlit. Uses Autoencoder neural networks for anomaly detection and live transaction monitoring through a distributed streaming architecture, with integrated testing, scalable microservices design, and realistic financial data simulation.",
    passwordTitle: "CLI Password Manager",
    passwordText: "A secure and high-performance <b>C++</b> Password Manager built with AES-256-GCM encryption, a Master-Password-based security model and full session protection. All credentials are stored locally in an encrypted SQLite database. The project includes secure memory wiping, a slow key-derivation function (KDF), auto-lock mechanism, encrypted import/export functionality, high-entropy password generation and a color-coded CLI interface.",
    crowdTitle: "Crowdfunding Startup - Django App",
    crowdText: "A <b>Django web application</b> with user authentication, role-based authorization (admin and regular user) and full CRUD functionality. The system includes user management, data browsing with filtering and search, as well as a RESTful API for secure CRUD operations.",
    additionalText1: `<span style="font-weight: 600;">Looking for more?</span> Check out my Systems & Data Projects, including the <a href="https://github.com/luksha14/CryptoDataEngine" target="_blank" style="color: #2c918a; text-decoration: underline;">Crypto Data Engine</a>, <a href="https://github.com/luksha14/Linux_System_Programming_Project" target="_blank" style="color: #2c918a; text-decoration: underline;">Linux System Programming Project</a> and the <a href="https://github.com/luksha14/JournalOfClimate_DataParser" target="_blank" style="color: #2c918a; text-decoration: underline;">PDF Data Parser</a>.`,
    additionalText2: `You can find all my other projects and contributions directly on my <a href="https://github.com/luksha14?tab=repositories" target="_blank" style="color: #2c918a; font-weight: 700; text-decoration: underline;">GitHub Profile</a>.`,
    contactTitle: "Contact Me",
    contactText: "If you’d like to collaborate or just learn more about what I do, don’t hesitate to email me at:",
    contactFind: "Find me on:",
    watchVideo: "🎬 Watch Video",
    contactButton: "Contact me",
  },

  hr: {
    navTop: "Početak",
    navAbout: "O meni",
    navProjects: "Projekti",
    navContact: "Kontakt",
    homeTitle: "Bok! Ja sam <strong>Luka Mikulić</strong>.",
    homeText: "Ja sam junior software developer i entuzijast u području kibernetičke sigurnosti i umjetne inteligencije.",
    homeButton: "Saznajte više o mom radu",
    aboutTitle: "O meni",
    aboutText: "Programiranjem sam se počeo baviti prije nekoliko godina kroz jednostavne programske zadatke koji su brzo prerasli u nešto što me istinski ispunjava. Ta znatiželja dovela me do stjecanja <b>Baccalaureus diplome</b> (rujan 2025.) iz informatike na Sveučilištu u Rijeci. Tijekom studija radio sam na više projekata – uglavnom akademskih i osobnih – koji su mi omogućili istraživanje različitih ideja i tehnologija. Ta iskustva pomogla su mi razviti prilagodljivost i brzinu učenja. Osim akademskog puta, prijašnja radna iskustva omogućila su mi suradnju s kolegama i klijentima, čime sam dodatno razvio vještine timskog rada i komunikacije. Danas me najviše zanima <b>software development</b> i primjena <b>umjetne inteligencije</b> u stvaranju i unaprjeđivanju aplikacija.",
    aboutButton: "Pogledajte moje projekte",
    projectsTitle: "Neki od mojih projekata",
    catanTitle: "Catan Simulator",
    catanText: "Aplikacija napisana u <b>Pythonu</b> koja kreira društvenu igru Catan uz napredno postavljanje mape, provjeru pravila i simulacije igre. Uključuje automatsko balansiranje resursa, brojeva i luka prema službenim pravilima te omogućava simulacije koje izračunavaju najbolja mjesta za naselja i očekivane prinose. Projekt podržava i bot igrača koji može samostalno igrati do ciljanog broja pobjedničkih bodova.",
    cannonTitle: "CannonBall Simulacija",
    cannonText: "Napravljen u programskom jeziku <b>Haxe</b> koristeći OpenFL, ovaj interaktivni 2D simulator prikazuje realnu fiziku uključujući gravitaciju, otpor zraka (ovisno o promjeru projektila), vjetar, masu, brzinu i kut/visinu lansiranja. Omogućuje usporedbu putanja sa i bez otpora zraka te način vježbe gađanja mete s korisničkim unosom koordinata.",
    somniaTitle: "Somnia 360°",
    somniaText: "Responzivna web stranica izrađena za <b>Somnia 360°</b>, s prikazom usluga, galerijom slika i videa te ugrađenim kontakt obrascem koji omogućuje izravan e-mail kontakt. Projekt je prvenstveno front-end ali uključuje i jednostavnu back-end funkcionalnost za obradu poruka.",
    fraudDetectorTitle: "AI Real-time Fraud Detector",
    fraudDetectorText: "Production style sustav za detekciju prijevara u stvarnom vremenu za kartične transakcije, razvijen pomoću <b>Python-a</b>, FastAPI-ja, Kafke, TensorFlowa, PostgreSQL-a, Dockera i Streamlita. Koristi Autoencoder neuronske mreže za detekciju anomalija i praćenje transakcija uživo kroz distribuiranu streaming arhitekturu, uz integrirano testiranje, skalabilni microservices dizajn i simulaciju realnih financijskih podataka.",
    passwordTitle: "CLI Password Manager",
    passwordText: "Siguran i visokoučinkovit Password Manager u <b>C++</b> jeziku izgrađen s AES-256-GCM enkripcijom, sigurnosnim modelom temeljenim na master lozinci i potpunom zaštitom sesije. Svi podaci pohranjeni su lokalno u enkriptiranoj SQLite bazi. Projekt uključuje sigurno brisanje memorije, KDF za derivaciju ključa, auto-lock mehanizam, enkriptirani export/import, generator sigurnih lozinki i CLI sučelje obogaćeno bojama.",
    crowdTitle: "Crowdfunding Startup - Django aplikacija",
    crowdText: "<b>Django web aplikacija</b> s korisničkom autentifikacijom, autorizacijom uloga (admin i korisnik) te potpunom CRUD funkcionalnošću. Sustav omogućuje upravljanje korisnicima, pretraživanje i filtriranje podataka te RESTful API za sigurne CRUD operacije.",
    additionalText1: `<span style="font-weight: 600;">Želite vidjeti više?</span> Pogledajte moje Systems & Data projekte, uključujući <a href="https://github.com/luksha14/CryptoDataEngine" target="_blank" style="color: #2c918a; text-decoration: underline;">Crypto Data Engine</a>, <a href="https://github.com/luksha14/Linux_System_Programming_Project" target="_blank" style="color: #2c918a; text-decoration: underline;">Linux System Programming Project</a> i <a href="https://github.com/luksha14/JournalOfClimate_DataParser" target="_blank" style="color: #2c918a; text-decoration: underline;">PDF Data Parser</a>.`,
    additionalText2: `Sve ostale projekte možete pronaći na mom <a href="https://github.com/luksha14?tab=repositories" target="_blank" style="color: #2c918a; font-weight: 700; text-decoration: underline;">GitHub profilu</a>.`,
    contactTitle: "Kontakt",
    contactText: "Ako želite surađivati ili saznati više o onome što radim, slobodno mi se javite na e-mail:",
    contactFind: "Pronađite me na:",
    watchVideo: "🎬 Pogledajte video",
    contactButton: "Kontaktirajte me",

  },

  de: {
    navTop: "Start",
    navAbout: "Über mich",
    navProjects: "Projekte",
    navContact: "Kontakt",
    homeTitle: "Hallo! Ich bin <strong>Luka Mikulić</strong>.",
    homeText: "Ich bin ein Junior Softwareentwickler und interessiere mich für Cybersicherheit und KI.",
    homeButton: "Mehr über meine Arbeit erfahren",
    aboutTitle: "Über mich",
    aboutText: "Ich begann vor einigen Jahren mit dem Programmieren durch einfache Experimente – schnell wurde daraus eine echte Leidenschaft. Diese Neugier führte mich schließlich zu meinem <b>Bachelor-Abschluss</b> (September 2025) in Informatik an der Universität Rijeka. Während meines Studiums arbeitete ich an mehreren Projekten – hauptsächlich akademischen und persönlichen – die mir ermöglichten, verschiedene Ideen und Technologien zu erkunden. Diese Erfahrungen haben mir geholfen, Anpassungsfähigkeit und eine schnelle Lernfähigkeit zu entwickeln. Durch die Arbeit neben meinem Studium, lernte ich eng mit Kolleg*innen und Kund*innen zusammenzuarbeiten, wodurch ich meine Team- und Kommunikationsfähigkeiten weiter ausbauen konnte. Heute liegt mein Hauptinteresse in der <b>Softwareentwicklung</b> und darin, wie <b>KI</b> zur Entwicklung und Optimierung von Apps eingesetzt werden kann.",
    aboutButton: "Einige meiner letzten Projekte ansehen",
    projectsTitle: "Hier sind einige meiner Projekte",
    catanTitle: "Catan Simulator",
    catanText: "Eine <b>Python</b>-App, die das Brettspiel Catan mit fortschrittlicher Landkartengenerierung, Regelüberprüfung und Spielsimulationen nachbildet. Sie beinhaltet eine automatische, ausgewogene Landkartenverteilung (Ressourcen, Zahlen, Häfen) nach den offiziellen Regeln, plus Simulationen zur Analyse der besten Siedlungsplätze. Im Projekt ist auch ein Bot-Spieler inkludiert, der das Spiel autonom spielt, bis die gesetzte Zielpunktzahl erreicht ist.",
    cannonTitle: "CannonBall Simulation",
    cannonText: "Erstellt in der Programmiersprache <b>Haxe</b> mit OpenFL, ist diese interaktive 2D-Simulation eine realistische physikalische Darstellung von Schwerkraft, Luftwiderstand, Wind, Masse, Geschwindigkeit und Abschusswinkel. Sie bietet den Vergleich von Flugbahnen mit und ohne Luftwiderstand sowie einen Zielmodus, in dem der Benutzer Koordinaten eingibt und versucht, das Ziel zu treffen.",
    somniaTitle: "Somnia 360°",
    somniaText: "Eine vollständig responsive Website, die für Somnia 360° entwickelt wurde. Sie präsentiert die angebotenen Dienstleistungen, enthält umfangreiche Bilder- und Videogalerien und verfügt über ein integriertes Kontaktformular mit direkter E-Mail-Funktionalität. Das Projekt ist primär Frontend-orientiert, beinhaltet aber auch ein schlankes Backend-Feature zur effizienten Nachrichtenverarbeitung.",
    fraudDetectorTitle: "AI Real-time Fraud Detector",
    fraudDetectorText: "Production Style Echtzeit-Betrugserkennungssystem für Kreditkartentransaktionen, entwickelt mit <b>Python</b>, FastAPI, Kafka, TensorFlow, PostgreSQL, Docker und Streamlit. Nutzt Autoencoder-Neuronale Netze zur Anomalieerkennung und Live-Überwachung von Transaktionen innerhalb einer verteilten Streaming-Architektur, inklusive integrierter Tests, skalierbarem Microservices-Design und realistischer Finanzdatensimulation.",
    passwordTitle: "CLI Password Manager",
    passwordText: "Ein sicherer und leistungsstarker <b>C++</b> Passwort-Manager, entwickelt mit AES-256-GCM Verschlüsselung, einem Master-Passwort-Sicherheitsmodell und vollständigem Session-Schutz. Alle Zugangsdaten werden lokal in einer verschlüsselten SQLite-Datenbank gespeichert. Das Projekt umfasst sicheres Memory-Wiping, eine langsame Key-Derivation-Function (KDF), einen Auto-Lock Mechanismus, verschlüsselten Export/Import, einen Generator für sichere Passwörter und ein farbcodiertes CLI-Interface.",
    crowdTitle: "Crowdfunding Startup - Django App",
    crowdText: "Eine Django Web-Anwendung mit Benutzerauthentifizierung, rollenbasierter Autorisierung (Admin und reguläre*r Benutzer*in) und voller CRUD-Funktionalität. Das System umfasst Benutzerverwaltung, Datenrecherche mit Filter- und Suchfunktionen sowie die Möglichkeit, Objekte hinzuzufügen, zu bearbeiten und zu löschen. Zusätzlich habe ich eine RESTful API unter Verwendung des Django REST Frameworks implementiert, die gesicherte Endpunkte für grundlegende CRUD-Operationen mit Authentifizierung bereitstellt.",
    additionalText1: `<span style="font-weight: 600;">Möchten Sie mehr sehen?</span> Werfen Sie meine Systems & Data Projekte, darunter das <a href="https://github.com/luksha14/CryptoDataEngine" target="_blank" style="color: #2c918a; text-decoration: underline;">Crypto Data Engine</a>, das <a href="https://github.com/luksha14/Linux_System_Programming_Project" target="_blank" style="color: #2c918a; text-decoration: underline;">Linux System Programming Project</a> und den <a href="https://github.com/luksha14/JournalOfClimate_DataParser" target="_blank" style="color: #2c918a; text-decoration: underline;">PDF Data Parser</a>.`,
    additionalText2: `Alle meine weiteren Projekte finden Sie auf meinem <a href="https://github.com/luksha14?tab=repositories" target="_blank" style="color: #2c918a; font-weight: 700; text-decoration: underline;">GitHub-Profil</a>.`,
    contactTitle: "Kontakt",
    contactText: "Wenn Sie mit mir zusammenarbeiten oder mehr über meine Arbeit erfahren möchten, schreiben Sie mir gerne eine E-Mail:",
    contactFind: "Finden Sie mich auf:",
    watchVideo: "🎬 Video ansehen",
    contactButton: "Kontaktiere mich",
  }
};

// 🔁 PROMJENA JEZIKA
function setLanguage(lang) {
  const t = translations[lang];
  document.querySelector('a[href="#top"]').textContent = t.navTop;
  document.querySelector('a[href="#about"]').textContent = t.navAbout;
  document.querySelector('a[href="#projects"]').textContent = t.navProjects;
  document.querySelector('a[href="#contact"]').textContent = t.navContact;
  document.querySelector('#top h1').innerHTML = t.homeTitle;
  document.querySelector('#top p').innerHTML = t.homeText;
  document.querySelector('#top .button').textContent = t.homeButton;
  document.querySelector('#about h2').textContent = t.aboutTitle;
  document.querySelector('#about p').innerHTML = t.aboutText;
  document.querySelector('#about footer a').textContent = t.aboutButton;
  document.querySelector('#projects h2').textContent = t.projectsTitle;

  // projekti
  document.querySelector('#catan h3').textContent = t.catanTitle;
  document.querySelector('#catan p').innerHTML = t.catanText;
  document.querySelector('#cannon h3').textContent = t.cannonTitle;
  document.querySelector('#cannon p').innerHTML = t.cannonText;
  document.querySelector('#somnia h3').textContent = t.somniaTitle;
  document.querySelector('#somnia p').innerHTML = t.somniaText;
  document.querySelector('#fraud_detector h3').textContent = t.fraudDetectorTitle;
  document.querySelector('#fraud_detector p').innerHTML = t.fraudDetectorText;
  document.querySelector('#passwordmanager h3').textContent = t.passwordTitle;
  document.querySelector('#passwordmanager p').innerHTML = t.passwordText;
  document.querySelector('#crowd h3').textContent = t.crowdTitle;
  document.querySelector('#crowd p').innerHTML = t.crowdText;
  // dodatni projekti tekst
  const add1 = document.getElementById('additional1');
  const add2 = document.getElementById('additional2');

  if (add1) add1.innerHTML = translations[lang].additionalText1;
  if (add2) add2.innerHTML = translations[lang].additionalText2;


  document.querySelector('#contact h2').textContent = t.contactTitle;
  document.querySelector('#contact header p').textContent = t.contactText;
  document.querySelector('#contact h3').textContent = t.contactFind;
    document.querySelectorAll('.btn-watch').forEach(btn => {
  btn.textContent = translations[lang].watchVideo;
    });


   const contactBtn = document.getElementById('contact-btn');
    if (contactBtn) contactBtn.textContent = translations[lang].contactButton;


  localStorage.setItem('lang', lang);
  document.getElementById('current-lang').src = `images/flag_${lang}.jpeg`;
}

// 🌐 LANGUAGE DROPDOWN LOGIC
document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.language-dropdown');
  const currentLang = document.getElementById('current-lang');
  const menu = dropdown.querySelector('.language-menu');

  currentLang.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) dropdown.classList.remove('active');
  });

  menu.querySelectorAll('img').forEach(flag => {
    flag.addEventListener('click', () => {
      const lang = flag.dataset.lang;
      setLanguage(lang);
      dropdown.classList.remove('active');

      if (lang === 'en') currentLang.textContent = 'EN';
      else if (lang === 'de') currentLang.textContent = 'DE';
      else if (lang === 'hr') currentLang.textContent = 'HR';
    });
  });

  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);

  if (savedLang === 'en') currentLang.textContent = 'EN';
  else if (savedLang === 'de') currentLang.textContent = 'DE';
  else if (savedLang === 'hr') currentLang.textContent = 'HR';
});
