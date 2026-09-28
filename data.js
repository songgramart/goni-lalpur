যেconst DEFAULT_DATA = {
  site: {
    name: "Goni Communication",
    owner: "Md Songgram Hossain",
    phone: "01521790585",
    intro: "গণী কমিউনিকেশনে আপনাকে স্বাগতম। আমি ইন্টারনেট টেকনিশিয়ান। জরুরি প্রয়োজনে আমাকে কল করুন। যেকোনো সেবা দিতে আমরা আপনাদের জন্য প্রস্তুত আছি।",
    description: "আমি Goni Communication-এর একজন Internet Technician। Internet connection, fiber, router এবং সাধারণ network troubleshooting সংক্রান্ত সেবায় আপনাদের সহযোগিতা করার চেষ্টা করি।"
  },

  technicians: [
    {
      id: 1,
      name: "Md Songgram Hossain",
      role: "Internet Technician",
      phone: "01521790585",
      whatsapp: "01521790585",
      image: "songgram.jpg"
    },
    {
      id: 2,
      name: "Md Imran Ali",
      role: "Junior Technician",
      phone: "01521790585",
      whatsapp: "01521790585",
      image: "imran-ali.png"
    },
    {
    id: 3,
    name: "Md Rubel Hossain",
    role: "Junior Technician",
    phone: "01759735850",
    whatsapp: "01759735850",
    image: "rubel.jpg"
    }
  ],

  services: [
    {
      id: 1,
      icon: "🌐",
      title: "Internet Support",
      text: "ইন্টারনেট সংযোগ ও সাধারণ connection troubleshooting সহায়তা।"
    },
    {
      id: 2,
      icon: "📡",
      title: "Router Support",
      text: "Router setup, Wi-Fi এবং basic network configuration সহায়তা।"
    },
    {
      id: 3,
      icon: "🔌",
      title: "Fiber / ONU",
      text: "Fiber connection, ONU এবং network-side troubleshooting সম্পর্কিত সহায়তা।"
    }
  ],

  apps: [
    {
      id: 1,
      icon: "📱",
      title: "Fing",
      text: "Network scanning ও device discovery-এর জন্য।",
      url: "https://www.fing.com/products/fing-app/"
    },
    {
      id: 2,
      icon: "💻",
      title: "Termius",
      text: "SSH/Telnet server management-এর জন্য।",
      url: "https://termius.com/download"
    },
    {
      id: 3,
      icon: "⚡",
      title: "Speedtest",
      text: "Internet speed test করার জন্য।",
      url: "https://www.speedtest.net/apps"
    }
  ],

  packages: [
    {
      id: 1,
      speed: "20 Mbps",
      name: "ULTRA-20",
      price: "550",
      features: [
        "Reliable home internet",
        "Browsing and social media",
        "Local customer support"
      ]
    },
    {
      id: 2,
      speed: "30 Mbps",
      name: "MEGA-30",
      price: "750",
      features: [
        "HD streaming and study",
        "Multiple connected devices",
        "Local customer support"
      ]
    },
    {
      id: 3,
      speed: "60 Mbps",
      name: "SPEED-60",
      price: "990",
      features: [
        "Streaming and gaming",
        "Homes and small offices",
        "Local customer support"
      ]
    },
    {
      id: 4,
      speed: "80 Mbps",
      name: "BOOST-GC",
      price: "1190",
      features: [
        "High-speed streaming",
        "Multiple devices",
        "Homes and small offices"
      ]
    }
  ]
};


function getData() {
  const raw = localStorage.getItem("goniCMS");

  if (!raw) {
    localStorage.setItem("goniCMS", JSON.stringify(DEFAULT_DATA));
    return structuredClone(DEFAULT_DATA);
  }

  try {
    const d = JSON.parse(raw);
  if (Array.isArray(d.technicians) && d.technicians[0]) {
    if (d.technicians[0].image === "songgram.jpg") {
      d.technicians[0].image = "songgram(1).jpg";
  }
}
    // পুরোনো data থাকলে packages automatically যোগ হবে
    if (!Array.isArray(d.packages)) {
      d.packages = structuredClone(DEFAULT_DATA.packages);
    }

    // পুরোনো data-তে site/technicians/services/apps না থাকলে default নেওয়া হবে
    if (!d.site) {
      d.site = structuredClone(DEFAULT_DATA.site);
    }

    if (!Array.isArray(d.technicians)) {
      d.technicians = structuredClone(DEFAULT_DATA.technicians);
    }

    if (!Array.isArray(d.services)) {
      d.services = structuredClone(DEFAULT_DATA.services);
    }

    if (!Array.isArray(d.apps)) {
      d.apps = structuredClone(DEFAULT_DATA.apps);
    }

    // নতুন data browser-এ save করে রাখা
    localStorage.setItem("goniCMS", JSON.stringify(d));

    return d;

  } catch (e) {
    localStorage.setItem("goniCMS", JSON.stringify(DEFAULT_DATA));
    return structuredClone(DEFAULT_DATA);
  }
}


function saveData(d) {
  localStorage.setItem("goniCMS", JSON.stringify(d));
}
