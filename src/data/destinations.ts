import type { Lang } from "@/i18n/I18nProvider";

export type Comment = {
  author: { en: string; ar: string };
  rating: number;
  text: { en: string; ar: string };
  date: { en: string; ar: string };
};

type L = { en: string; ar: string };

export type Destination = {
  id: string;
  name: L;
  category: "emergency" | "clinic" | "service" | "amenity";
  floor: L;
  wing: L;
  walkMinutes: number;
  x: number;
  y: number;
  path: Array<[number, number]>;
  icon: string;
  description: L;
  hours: L;
  isOpen24: boolean;
  phone: string;
  rating: number;
  tips: L[];
  comments: Comment[];
};

export const ENTRANCE: [number, number] = [200, 540];

export type StartPoint = {
  id: string;
  name: L;
  description: L;
  x: number;
  y: number;
  icon: string;
};

export const START_POINTS: StartPoint[] = [
  {
    id: "main-entrance",
    name: { en: "Main Entrance", ar: "المدخل الرئيسي" },
    description: { en: "South lobby, taxi drop-off", ar: "الردهة الجنوبية، نقطة الأجرة" },
    x: 200,
    y: 540,
    icon: "🚪",
  },
  {
    id: "ae-entrance",
    name: { en: "A&E Entrance", ar: "مدخل الطوارئ" },
    description: { en: "North side, ambulance bay", ar: "الجهة الشمالية، منطقة الإسعاف" },
    x: 80,
    y: 130,
    icon: "🚑",
  },
  {
    id: "parking-a",
    name: { en: "Parking A", ar: "موقف السيارات A" },
    description: { en: "East visitor parking", ar: "موقف الزوار الشرقي" },
    x: 360,
    y: 470,
    icon: "🅿️",
  },
  {
    id: "alfatah-entrance",
    name: { en: "Alfatah Entrance", ar: "مدخل الفاتح" },
    description: { en: "West side of complex", ar: "الجهة الغربية من المجمع" },
    x: 60,
    y: 350,
    icon: "🏛️",
  },
  {
    id: "outpatient-lobby",
    name: { en: "Outpatient Lobby", ar: "ردهة العيادات الخارجية" },
    description: { en: "Central check-in area", ar: "منطقة التسجيل الوسطى" },
    x: 200,
    y: 320,
    icon: "🛋️",
  },
];

export const getStartPoint = (id: string | null | undefined): StartPoint =>
  START_POINTS.find((s) => s.id === id) ?? START_POINTS[0];

export const localized = (l: L, lang: Lang) => l[lang];


export const DESTINATIONS: Destination[] = [
  {
    id: "ae",
    name: { en: "Accident & Emergency", ar: "الحوادث والطوارئ" },
    category: "emergency",
    floor: { en: "Ground Floor", ar: "الطابق الأرضي" },
    wing: { en: "North Wing", ar: "الجناح الشمالي" },
    walkMinutes: 2,
    x: 80,
    y: 110,
    path: [
      [200, 540],
      [200, 420],
      [120, 420],
      [120, 250],
      [80, 250],
      [80, 110],
    ],
    icon: "🚑",
    description: {
      en: "24/7 urgent care — dedicated A&E entrance",
      ar: "رعاية عاجلة على مدار الساعة — مدخل خاص للطوارئ",
    },
    hours: {
      en: "Open 24 hours · 7 days a week",
      ar: "مفتوح ٢٤ ساعة · ٧ أيام في الأسبوع",
    },
    isOpen24: true,
    phone: "+973 1728 8888",
    rating: 4.4,
    tips: [
      {
        en: "Use the dedicated A&E entrance on the north side.",
        ar: "استخدم مدخل الطوارئ المخصص في الجهة الشمالية.",
      },
      {
        en: "Bring your CPR / National ID card to register quickly.",
        ar: "أحضر بطاقة الهوية الوطنية لتسريع التسجيل.",
      },
      {
        en: "Triage may reorder your queue based on severity.",
        ar: "قد يتم تغيير ترتيب الدور حسب درجة الحالة.",
      },
    ],
    comments: [
      {
        author: { en: "Fatima A.", ar: "فاطمة ع." },
        rating: 5,
        text: {
          en: "Staff was very fast and kind during a late-night visit.",
          ar: "الطاقم كان سريعاً ولطيفاً جداً خلال زيارة ليلية متأخرة.",
        },
        date: { en: "2 weeks ago", ar: "قبل أسبوعين" },
      },
      {
        author: { en: "Ahmed K.", ar: "أحمد ك." },
        rating: 4,
        text: {
          en: "Triage was efficient. Wait time was about 25 minutes.",
          ar: "الفرز كان فعّالاً. وقت الانتظار حوالي ٢٥ دقيقة.",
        },
        date: { en: "1 month ago", ar: "قبل شهر" },
      },
    ],
  },
  {
    id: "radiology",
    name: { en: "Radiology", ar: "الأشعة" },
    category: "clinic",
    floor: { en: "Floor 2", ar: "الطابق الثاني" },
    wing: { en: "East Wing", ar: "الجناح الشرقي" },
    walkMinutes: 5,
    x: 320,
    y: 200,
    path: [
      [200, 540],
      [200, 420],
      [300, 420],
      [300, 280],
      [320, 280],
      [320, 200],
    ],
    icon: "🩻",
    description: {
      en: "X-Ray, MRI, CT and ultrasound imaging",
      ar: "الأشعة السينية، الرنين المغناطيسي، الأشعة المقطعية والموجات فوق الصوتية",
    },
    hours: {
      en: "Sun – Thu · 7:30 AM – 8:00 PM",
      ar: "الأحد – الخميس · ٧:٣٠ ص – ٨:٠٠ م",
    },
    isOpen24: false,
    phone: "+973 1728 8101",
    rating: 4.6,
    tips: [
      {
        en: "Bring your referral letter from the requesting doctor.",
        ar: "أحضر خطاب الإحالة من الطبيب المعالج.",
      },
      {
        en: "Avoid metal jewelry on MRI appointment days.",
        ar: "تجنّب ارتداء المجوهرات المعدنية في أيام الرنين المغناطيسي.",
      },
      {
        en: "Fasting may be required for some abdominal scans.",
        ar: "قد يتطلب بعض فحوصات البطن الصيام.",
      },
    ],
    comments: [
      {
        author: { en: "Mariam S.", ar: "مريم س." },
        rating: 5,
        text: {
          en: "MRI was on time and the technicians explained every step.",
          ar: "الرنين كان في الموعد والفنيون شرحوا كل خطوة.",
        },
        date: { en: "3 weeks ago", ar: "قبل ٣ أسابيع" },
      },
      {
        author: { en: "Yousif H.", ar: "يوسف ح." },
        rating: 4,
        text: {
          en: "Clean, modern equipment. Reception desk a bit busy in mornings.",
          ar: "أجهزة حديثة ونظيفة. الاستقبال مزدحم نسبياً في الصباح.",
        },
        date: { en: "2 months ago", ar: "قبل شهرين" },
      },
    ],
  },
  {
    id: "clinics",
    name: { en: "Outpatient Clinics", ar: "العيادات الخارجية" },
    category: "clinic",
    floor: { en: "Floor 1", ar: "الطابق الأول" },
    wing: { en: "Central", ar: "المنطقة الوسطى" },
    walkMinutes: 4,
    x: 200,
    y: 160,
    path: [
      [200, 540],
      [200, 420],
      [200, 280],
      [200, 160],
    ],
    icon: "🩺",
    description: {
      en: "Specialist consultation clinics",
      ar: "عيادات استشارية متخصصة",
    },
    hours: {
      en: "Sun – Thu · 8:00 AM – 4:00 PM",
      ar: "الأحد – الخميس · ٨:٠٠ ص – ٤:٠٠ م",
    },
    isOpen24: false,
    phone: "+973 1728 8200",
    rating: 4.3,
    tips: [
      {
        en: "Arrive 15 minutes before your appointment.",
        ar: "احضر قبل موعدك بـ ١٥ دقيقة.",
      },
      {
        en: "Check the screen near reception for your room number.",
        ar: "تحقق من الشاشة بجانب الاستقبال لمعرفة رقم الغرفة.",
      },
      {
        en: "Closed Friday & Saturday for non-urgent visits.",
        ar: "مغلق يومي الجمعة والسبت للزيارات غير العاجلة.",
      },
    ],
    comments: [
      {
        author: { en: "Layla R.", ar: "ليلى ر." },
        rating: 5,
        text: {
          en: "Doctor took the time to listen and explain my treatment plan.",
          ar: "الطبيب أعطاني وقتاً للاستماع وشرح خطة العلاج.",
        },
        date: { en: "1 week ago", ar: "قبل أسبوع" },
      },
      {
        author: { en: "Hassan M.", ar: "حسن م." },
        rating: 4,
        text: {
          en: "Smooth check-in process when you book online first.",
          ar: "إجراءات التسجيل سلسة عند الحجز المسبق عبر الإنترنت.",
        },
        date: { en: "1 month ago", ar: "قبل شهر" },
      },
    ],
  },
  {
    id: "alfatah",
    name: { en: "Alfatah Building", ar: "مبنى الفاتح" },
    category: "clinic",
    floor: { en: "Separate Block", ar: "مبنى منفصل" },
    wing: { en: "West Side", ar: "الجهة الغربية" },
    walkMinutes: 6,
    x: 90,
    y: 320,
    path: [
      [200, 540],
      [200, 420],
      [120, 420],
      [120, 320],
      [90, 320],
    ],
    icon: "🏛️",
    description: {
      en: "Alfatah specialty services block",
      ar: "مبنى خدمات الفاتح التخصصية",
    },
    hours: {
      en: "Sun – Thu · 8:00 AM – 3:00 PM",
      ar: "الأحد – الخميس · ٨:٠٠ ص – ٣:٠٠ م",
    },
    isOpen24: false,
    phone: "+973 1728 8350",
    rating: 4.2,
    tips: [
      {
        en: "Use the covered walkway from the main lobby.",
        ar: "استخدم الممر المغطى من الردهة الرئيسية.",
      },
      {
        en: "Ask reception for the correct floor for your specialty.",
        ar: "اسأل الاستقبال عن الطابق المناسب لتخصصك.",
      },
      {
        en: "Wheelchair access available at the side entrance.",
        ar: "مدخل جانبي متاح لكراسي المعاقين.",
      },
    ],
    comments: [
      {
        author: { en: "Noor A.", ar: "نور ع." },
        rating: 4,
        text: {
          en: "Helpful staff, easy to find once you follow the signs.",
          ar: "طاقم متعاون، يسهل الوصول باتباع اللافتات.",
        },
        date: { en: "3 weeks ago", ar: "قبل ٣ أسابيع" },
      },
      {
        author: { en: "Khalid B.", ar: "خالد ب." },
        rating: 5,
        text: {
          en: "Quieter than the main building — comfortable waiting area.",
          ar: "أهدأ من المبنى الرئيسي — منطقة انتظار مريحة.",
        },
        date: { en: "2 months ago", ar: "قبل شهرين" },
      },
    ],
  },
  {
    id: "pharmacy",
    name: { en: "Pharmacy", ar: "الصيدلية" },
    category: "service",
    floor: { en: "Ground Floor", ar: "الطابق الأرضي" },
    wing: { en: "Main Lobby", ar: "الردهة الرئيسية" },
    walkMinutes: 1,
    x: 280,
    y: 480,
    path: [
      [200, 540],
      [280, 540],
      [280, 480],
    ],
    icon: "💊",
    description: {
      en: "Prescriptions and medical supplies",
      ar: "الوصفات الطبية والمستلزمات الطبية",
    },
    hours: {
      en: "Open 24 hours · 7 days a week",
      ar: "مفتوحة ٢٤ ساعة · ٧ أيام في الأسبوع",
    },
    isOpen24: true,
    phone: "+973 1728 8050",
    rating: 4.5,
    tips: [
      {
        en: "Have your prescription QR code or paper ready.",
        ar: "جهّز رمز الوصفة QR أو الورقة الطبية.",
      },
      {
        en: "Number-ticket system — take a ticket near the entrance.",
        ar: "نظام أرقام — اسحب تذكرة من بجانب المدخل.",
      },
      {
        en: "Some specialty medications may take 24h to prepare.",
        ar: "بعض الأدوية التخصصية قد تستغرق ٢٤ ساعة للتحضير.",
      },
    ],
    comments: [
      {
        author: { en: "Sara T.", ar: "سارة ت." },
        rating: 5,
        text: {
          en: "Open at 2 AM — saved me on an emergency refill!",
          ar: "مفتوحة في الثانية فجراً — أنقذتني في حالة طارئة!",
        },
        date: { en: "5 days ago", ar: "قبل ٥ أيام" },
      },
      {
        author: { en: "Omar J.", ar: "عمر ج." },
        rating: 4,
        text: {
          en: "Friendly pharmacists, queue moves quickly off-peak.",
          ar: "صيادلة ودودون، الدور يتحرك بسرعة خارج أوقات الذروة.",
        },
        date: { en: "3 weeks ago", ar: "قبل ٣ أسابيع" },
      },
    ],
  },
];

export const CATEGORIES = [
  { id: "all", emoji: "📍", key: "catAll" as const },
  { id: "emergency", emoji: "🚑", key: "catEmergency" as const },
  { id: "clinic", emoji: "🩺", key: "catClinics" as const },
  { id: "service", emoji: "💊", key: "catServices" as const },
];
