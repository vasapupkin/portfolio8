export const navItems = [
  { name: "Über mich", link: "#about" },
  { name: "Projekte", link: "#projects" },
  { name: "Referenzen", link: "#testimonials" },
  { name: "AI", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Hallo! Ich bin Oleg, ein Full-Stack-Entwickler mit über 10 Jahren Erfahrung in unterschiedlichen Branchen.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/ol.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Ich arbeite vorzugsweise remote & weltweit.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mein Techstack.",
    description: "Ich versuche mich immer weiter zu verbessern.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Ich beherrsche diverse Sprachen.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Meine aktuellsten Weiterbildungen waren über 3D, AI & Blockchain.",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b4.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Interessiert an einer Zusammenarbeit? Zögern Sie nicht mich zu kontaktieren.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Portfolio Webseite",
    des: "Die Landing-Page für mein Profil als Fullstack-Entwickler. Mit der 3D- und ChatGPT-Integration für die Analyse meines Profils für die angebotenen Projekte. Ich habe CI/CD-Infrastruktur anhand von git, GitHub und Vercel implementiert, sowie den Einsatz von Cursor.ai.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "",
    stack: "JavaScript, TypeScript, Tailwind CSS, Node.js , Next.js, openai.js, aceternity ui, VS Code, Cursor AI, git, GitHub, Vercel, GoDaddy.",
  },
  {
    id: 2,
    title: "SaaS-Lösung für die Analyse von Ausgaben",
    des: "Die SaaS-Anwendung für die Analyse der Ausgaben anhand von AI mit integrierten Dashboard und der Möglichkeit sich zu registrieren und anzumelden. Unterschiedliche Daten-Import sowie -Export Möglichkeiten mit Hilfe der Datenbank in der Azure Cloud.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
    stack: "JavaScript, TypeScript, Tailwind CSS, node.js, React.js, openai.js, aceternity ui, Authentifizierung.js, mssql.js, VS Code, git, GitHub, Azure, Vercel, Godaddy.",
  },
  {
    id: 3,
    title: "SaaS-Lösung für das Erstellen von No-Code-Webseiten",
    des: "Die SaaS-Lösung mit einer Web3-Integration sowie dazugehörender Smart-Contract-Infrastruktur. Die Lösung ermöglicht jedem Benutzer einen no-code Aufbau der eigenen Webseite mit den gängigen Layout-Komponenten sowie einer Integration von Crypto-Wallets inklusive aktueller Infrastruktur für unterschiedliche Blockchains - wie zum Beispiel CEX, Marketplaces, usw.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
    stack: "JavaScript, TypeScript, Tailwind CSS, node.js , Next.js, openai.js, aceternity ui, web3.js, Authentifizierung.js, mssql.js, Solidity, Cairo, VS Code, Docker, Kubernetes,  Loadbalancer, git, GitHub, Azure, Vercel, GoDaddy.",
  },
  {
    id: 4,
    title: "Bibliotheken-Management",
    des: "Die Anwendung für die Verwaltung von Bibliotheken. Erfassung von Bestellungen, Bücherrückgabe, Schnittstellen zu Hardware, Mahnungen, etc. Ebenso User-Management inklusive Mehr-Factor-Authentifizierung.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    stack: "C#, HTML, JavaScript, JQuery, Ajax, MVC, ASO.net core, Entity Framework Core, LINQ, Identity, JSON, Cryptography, Routing, Azure, Visual Studio, git, GitHub.",
  },
  {
    id: 5,
    title: "Internes User-Management-System für eine Autovermietung",
    des: "Die Anwendung hat den kompletten Prozess der Autovermietung von der Verbuchung bis hin zur Rückgabe des Fahrzeugs verwaltet und organisiert.  Ebenfalls: Erfassung von Kundendaten, Erfassung von Fahrzeugdaten inklusive aller Schäden, Kontrolle des Standortes des Fahrzeuges über GPS und dazugehöriger Meldungen, Erfassung der Versicherungsfälle, Erstellung & Versand von Rechnungen.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
    stack: "C#, HTML, JavaScript, JQuery, ajax, MVC, asp.net core, Entity Framework Core, LINQ, Identity, JSON, Cryptography, Routing, Azure, Visual Studio, git, GitHub.",
  },
  {
    id: 6,
    title: "SaaS-Lösung mit Zielgruppe Vermögensverwalter für die Postbox/Kundezugang",
    des: "Darstellung der Kundenportfolios anhand unterschiedlicher Charts und Dashboards. Darstellung der Performance, des Vermögens sowie der Bestände & Umsätze. Kundenpostbox für die Übertragung von unterschiedlichen Dokumenten an die Kunden. Andocken des internen Portfolio-Management-Systems für die Datenübertragung.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
    stack: "JavaScript, TypeScript, Tailwind CSS, node.js, React.js, Chart.js, Websocket, react-use-websocket.js, Authentifizierung.js, mssql.js, Multi-Faktor-Authentifizierung, VS Code, Azure.",
  },
  {
    id: 7,
    title: "App für Nachhaltigkeits-Reporting",
    des: "Eine interne Anwendung, welche für Kunden ein Nachhaltigkeits-Reporting erstellt und versendet. Eine Anbindung an die Postbox sowie an das Portfolio-Management-System und Crystal-Report-Designer ist gegeben.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
    stack: "C#, HTML, JavaScript, JQuery, ajax, MVC, asp.net core, Entity Framework Core, LINQ, Identity, JSON, Cryptography, Routing, MongoDB, Azure, Visual Studio, git, GitHub.",
  },
  {
    id: 8,
    title: "App für die Erstellung einer Kostentransparenz",
    des: "Eine interne Anwendung, welche für die Kunden eine ex-ante bzw. ex-post Kostentransparenz erstellt und versendet. Eine Anbindung an die Postbox sowie an das Portfolio-Management-System und Crystal-Report-Designer ist gegeben.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    stack: "C#, HTML, JavaScript, JQuery, ajax, MVC, asp.net core, Entity Framework Core, LINQ, Identity, JSON, Cryptography, Routing, MongoDB, Azure, Visual Studio, git, GitHub.",
  },
  {
    id: 9,
    title: "Reporting-Plattform",
    des: "Eine interne Anwendung, welche für Kunden die monatliche, jährliche, sowie quartalsweise Erstellung des Reporting ermöglicht. Die Anwendung hat ein User-Management-System sowie ein Berechtigungssystem.  Das Reporting beinhaltet Performance-Auswertungen, Bestände, Asset-Allocation sowie Erträge und Aufwendungen. Eine Anbindung an die Postbox sowie an das Portfolio-Management-System und Crystal-Report-Designer ist vorhanden.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    stack: "C#, HTML, JavaScript, JQuery, ajax, MVC, asp.net core, Entity Framework Core, LINQ, Identity, JSON, Cryptography, Routing, MongoDB, Azure, Visual Studio.",
  },
  {
    id: 10,
    title: "App für das Reporting von illiquiden Assets",
    des: "Eine interne Anwendung, welche für Kunden die monatliche, jährliche, sowie quartalsweise Erstellung des Reporting für illiquide Assets ermöglicht. Die Anwendung ermöglicht die Verbuchung von illiquiden Assets größtenteils Kundenbeteiligungen und die Darstellung der Bestände, Kosten sowie Erfassung der Kurse und Performance.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    stack: "C#, HTML, JavaScript, JQuery, ajax, MVC, asp.net core, Entity Framework Core, LINQ, Identity, JSON, Cryptography, Routing, MongoDB, Azure, Visual Studio.",
  },
  {
    id: 11,
    title: "Das Rechnungsmanagement für die VV-Gebühr und Performance-Fee",
    des: "Eine interne Anwendung, welche das Rechnungsmanagement übernimmt. Erfassung und Berechnung der Rechnungsbeträge sowie weitere Erstellung der PDFs samt Versand an Kunden sowie Übertragung an DATEV.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    stack: "C#, HTML, JavaScript, JQuery, ajax, MVC, asp.net core, Entity Framework Core, LINQ, Identity, JSON, Cryptography, Routing, MongoDB, Azure, Visual Studio.",
  },
  {
    id: 12,
    title: "Urlaubstool",
    des: "Eine interne Anwendung für die Beantragung von Urlaub. Mit Usermanagement und einem Urlaubsfreigabesystem sowie Vertretungssystem für die Mitarbeiter durch Vorgesetze. Ebenso die Erfassung von Stammdaten der Mitarbeiter und allen Informationen zu dem genommen, verbliebenen, bezahlten und unbezahlten Urlaub. Darüber hinaus auch ein Compliance-konformes Archivierungssystem für die Urlaubsanträge.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    stack: "JavaScript, TypeScript, Tailwind CSS, node.js, React.js, Authentifizierung.js, mssql.js, VS Code, git, GitHub, Azure.",
  },

  {
    id: 13,
    title: "Warn-/Prüf-App für Mifid 2 Restriktionen sowie Mifir Meldungen",
    des: "Eine interne Anwendung, welche die allgemeinen und besonderen Anlagerestriktionen prüft. Verlustschwellen werden überwacht. Nachhaltigkeitskriterien sowie die vorgegebenen Zielmärkte und erlaubten Strategien werden für die Kunden überprüft. Darüber hinaus werden auch die MIfir-Meldungen im XML-Format erstellt.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    stack: "C#, HTML, JavaScript, ",
  },
  {
    id: 14,
    title: "Entwicklung von Schnittstellen für die Anbindung von Banken",
    des: "Entwicklung von Schnittstellen für den Empfang von Bankdaten sowie weiterer Verarbeitung und Zuordnung in einem Portfolio-Management-System. Ebenso: Migration der Daten zwischen unterschiedlichen Portfolio Management Systemen.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    stack: "JavaScript, node.js, react.js, express.js, CRUD-API, Authentifizierung, mssql.js, XML, excel.js, VWD, Expersoft",
  },
  {
    id: 15,
    title: "Einführung eines DMS",
    des: "Anbindung eines Dokumentenmanagementsystem an die vorhandene Umgebung. Verknüpfung mit dem Portfolio-Management-System & CRM. Erkennen und Auslesen von Bankbelegen und automatische Ablage im DMS.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    stack: "JavaScript, MSSQL, VWD Cobra ELO",
  },
  {
    id: 16,
    title: "Entwicklung von Handelssystemen",
    des: "Entwicklung von unterschiedlichen Trading-Strategien anhand verschiedener Indikatoren der technischen, fundamentalen sowie Makro-Analyse. Backtesten sowie Testen auf statistische Signifikanz. Optimierung über Transaktionskosten, Anzahl der Trades, Perfomance und max. Drawdowns. Bereinigen von Daten und grafische Darstellung.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    stack: "Python,  MSSQL, VWD, Bloomberg, Morningstar",
  },
  {
    id: 17,
    title: "Datenschutzmanagementsystem",
    des: "EEine interne Anwendung für das Datenschutzmanagement, Usermanagement und das Anlegen von Verarbeitungstätigkeiten im Verarbeitungsverzeichnis. Definieren des Löschkonzepts. Workflows für die Risikofolgeabschätzung. Recherche in Gesetzbüchern. Ablage von ADV für Geschäftspartner. Dokumentation von Verstößen und Lösch- sowie Auskunftsanfragen. Unterlagen für die Datenschutzinformationen für die Webseite, Mitarbeiten, Kunden und Bewerber.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    stack: ".net WPF, Entity Framework, MySql",
  },
  {
    id: 18,
    title: "Compliance-Management-System",
    des: "Eine interne Anwendung für das Compliance-Management-System in der Vermögenverwaltung. Dokumentation und Prüfungsverlauf von WPHG sowie Jahresabschlussprüfungen. Workflows für die interne Revision. MaRisk sowie Auslagerungsmanagement. Prüfung und Dokumentation der MiFid Regelungen.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    stack: ".net WPF, Entity Framework, MySql",
  },
  {
    id: 19,
    title: "Anti-Bot-System mit AI",
    des: "Auslesen der Daten von Telegram, Twitter/X & Discord sowie aus unterschiedlichen Blocachains inklusive auswerten der Daten in Bezug auf den Verdacht auf Bots. Auswertungen erfolgten mit intern entwickelten ML-Systemen zur Erkennung von Bot-Verhalten. Eine API für die Prüfung anhand von Userdaten, ob es sich um einen Bot oder einen reellen User handelt.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    stack: " JavaScript, TypeScript, Tailwind CSS, node.js , Next.js, openai.js, aceternity ui, web3.js, Puperteer.js, Selenium.js, Appium.js, Authentifizierung.js, mssql.js, Solidity, Cairo, VS Code, Docker, Kubernetes,  Loadbalancer, Browserstack, webdriverio,  git, GitHub, Azure, Vercel, GoDaddy",
  },  {
    id: 20,
    title: "Webinar-Plattform",
    des: "Eine interne Anwendung für die Erstellung von Webinaren. Zugriff von Mitarbeitern auf unterschiedliche Lernmodule, welche intern erstellt werden. Hochladen von Lern-Videos sowie Erstellen von Abschlusstests für bestimmte Webinare und ein Archivierungssystem mit erreichten Leistungen der Mitarbeiter.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    stack: ".net WPF, Entity Framework, MySql",
  },
  
  
];

export const testimonials = [
  {
    quote:
      "Im Laufe der Jahre hat Oleg bei uns viele Projekte umgesetzt. Er zeichnete sich immer durch eine hohe Motivation und einen großen Einsatz aus. Er hat für uns Handelssysteme, Datenschutzsysteme, Reporting und Urlaubstools entwickelt. Wir hoffen sehr, dass wir in der Zukunft wieder die Möglichkeit haben werden zusammen zu arbeiten.",
    name: "Franz",
    title: "Geschäftführer",
  },
  {
    quote:
      "Wir hatten ein anspruchsvolles und erfolgreiches Blockchain-Projekt gestartet und umgesetzt. Oleg agierte als Full-Stack-Entwickler und hat hervorragende Arbeit in Back- & Front-End- sowie insbesondere in der Smart-Contract-Entwicklung geleistet. Unser Tech Stack bestand aus Next.js, Express.js, Node.js, wbe3.js sowie Solidity.",
    name: "Leo",
    title: "Head of Development",
  },
  {
    quote:
      "Wir haben zusammen mit Oleg an dem Projekt für die Bibliotheken gearbeitet. Er brachte einen sehr tiefen Technologie-Stack mit und wir haben einiges davon lernen können. Wir entwickelten in C# mit Entity Framework und zahlreichen weiteren Frameworks. Oleg zeigte sich immer als führender Entwickler.",
    name: "David",
    title: "Head of Entwicklung",
  },

];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Microsoft Developer 2021",
    desc: "Zertifizierter Microsoft-Web-App-Entwickler.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Master Abschluss 2016",
    desc: "Master in Stochastic Engineering an der FH München.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Bachelor Abschluss 2013",
    desc: "Bachelor in VWL an der LMU München.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Abitur 2008",
    desc: "Allgemeines Abitur am Bayern Kolleg in Augsburg.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/vasapupkin",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "",
  },
];
