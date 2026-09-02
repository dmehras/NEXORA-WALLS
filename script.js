/* ============ DATA ============ */
const CATEGORIES = [
  {id:'featured', label:'Featured', icon:'⭐'},
  {id:'trending', label:'Trending', icon:'🔥'},
  {id:'newest', label:'Newest', icon:'🆕'},
  {id:'oled', label:'OLED', icon:'⚫'},
  {id:'ips', label:'IPS', icon:'🖥'},
  {id:'anime', label:'Anime', icon:'🎌'},
  {id:'movies', label:'Movie', icon:'🎬'},
  {id:'gaming', label:'Gaming', icon:'🎮'},
];

/* Real uploaded wallpapers. Images live in /images/wallpapers/ in this repo.
   To add more later: copy the file into that folder, then add a new object
   below with a unique id — no other code needs to change. */
// ============ PREMIUM SETTINGS ============
// Add a wallpaper ID to PREMIUM_WALLPAPER_IDS to make it paid.
// Replace each empty gumroadUrl with that wallpaper's Gumroad product URL.
const PREMIUM_PRICE = '₹79';
const PREMIUM_WALLPAPER_IDS = new Set([30, 31, 25, 26, 20, 16, 35, 17, 5, 9, 8, 7, 18, 13, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 72, 73, 74, 75, 76, 77, 78, 79, 105, 106, 107, 108, 109, 110, 111, 112, 113]);
const GUMROAD_LINKS = {
  5: 'https://imdeepmehra.gumroad.com/l/udujxj',
  7: 'https://imdeepmehra.gumroad.com/l/hignlp',
  8: 'https://imdeepmehra.gumroad.com/l/enueho',
  9: 'https://imdeepmehra.gumroad.com/l/prmapp',
  13: 'https://imdeepmehra.gumroad.com/l/wyrigf',
  16: 'https://imdeepmehra.gumroad.com/l/iysamp',
  17: 'https://imdeepmehra.gumroad.com/l/vggbnv',
  18: 'https://imdeepmehra.gumroad.com/l/iujikn',
  20: 'https://imdeepmehra.gumroad.com/l/xklpmb',
  25: 'https://imdeepmehra.gumroad.com/l/awdzah',
  26: 'https://imdeepmehra.gumroad.com/l/bmbvxs',
  30: 'https://imdeepmehra.gumroad.com/l/zzdnal',
  31: 'https://imdeepmehra.gumroad.com/l/jsgztv',
  35: 'https://imdeepmehra.gumroad.com/l/bbhnuc',
  55: 'https://imdeepmehra.gumroad.com/l/jijfwh',
  56: 'https://imdeepmehra.gumroad.com/l/bvdcv',
  57: 'https://imdeepmehra.gumroad.com/l/gmxyfc',
  58: 'https://imdeepmehra.gumroad.com/l/ighqcq',
  59: 'https://imdeepmehra.gumroad.com/l/lbdstv',
  60: 'https://imdeepmehra.gumroad.com/l/eqawjk',
  61: 'https://imdeepmehra.gumroad.com/l/bhglc',
  62: 'https://imdeepmehra.gumroad.com/l/ednsl',
  63: 'https://imdeepmehra.gumroad.com/l/fiudnb',
  64: 'https://imdeepmehra.gumroad.com/l/oaeepz',
  72: 'https://imdeepmehra.gumroad.com/l/sksgv',
  73: 'https://imdeepmehra.gumroad.com/l/uggxxq',
  74: 'https://imdeepmehra.gumroad.com/l/kqjcke',
  75: 'https://imdeepmehra.gumroad.com/l/ycqhcm',
  76: 'https://imdeepmehra.gumroad.com/l/hwowo',
  77: 'https://imdeepmehra.gumroad.com/l/zvyqc',
  78: 'https://imdeepmehra.gumroad.com/l/qsdtz',
  79: 'https://imdeepmehra.gumroad.com/l/xyingy',
  105: 'https://imdeepmehra.gumroad.com/l/eghakz',
  106: 'https://imdeepmehra.gumroad.com/l/odtwht',
  107: 'https://imdeepmehra.gumroad.com/l/nvotdz',
  108: 'https://imdeepmehra.gumroad.com/l/pyhnha',
  109: 'https://imdeepmehra.gumroad.com/l/uxxiep',
  110: 'https://imdeepmehra.gumroad.com/l/dsktkw',
  111: 'https://imdeepmehra.gumroad.com/l/thmkvq',
  112: 'https://imdeepmehra.gumroad.com/l/dovmxh',
  113: 'https://imdeepmehra.gumroad.com/l/sqautx'
};


const WALLPAPERS = [
  {
    id: 1,
    title: 'Boa Hancock',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/boa-hancock-4k-wallpaper.jpg',
    thumb: 'images/wallpapers-thumb/boa-hancock-4k-wallpaper.jpg',
    downloads: 3200,
    views: 9800,
    daysAgo: 3,
    size: '4.6 MB',
    tags: ['anime','one piece','4k','landscape','desktop'],
  },
  {
    id: 2,
    title: 'Cyberpunk Samurai',
    category: 'gaming',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/cyberpunk-samurai-4k-wallpaper.jpg',
    thumb: 'images/wallpapers-thumb/cyberpunk-samurai-4k-wallpaper.jpg',
    downloads: 5400,
    views: 15200,
    daysAgo: 1,
    size: '5.1 MB',
    tags: ['gaming','cyberpunk','neon','4k','landscape'],
  },
  {
    id: 3,
    title: 'Darling in the Franxx',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/darling-in-the-franxx-4k-wallpaper.jpg',
    thumb: 'images/wallpapers-thumb/darling-in-the-franxx-4k-wallpaper.jpg',
    downloads: 2100,
    views: 6400,
    daysAgo: 8,
    size: '4.3 MB',
    tags: ['anime','darling in the franxx','4k','landscape','desktop'],
  },
  {
    id: 4,
    title: 'Goku Blue',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/goku-blue-4k-wallpaper.jpg',
    thumb: 'images/wallpapers-thumb/goku-blue-4k-wallpaper.jpg',
    downloads: 8700,
    views: 24300,
    daysAgo: 2,
    size: '4.9 MB',
    tags: ['anime','dragon ball','goku','4k','landscape'],
  },
  {
    id: 5,
    title: 'Goku Blue OLED',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/goku-blue-oled-4k-wallpaper-preview.jpg',
    downloads: 6300,
    views: 18100,
    daysAgo: 2,
    size: '3.4 MB',
    tags: ['anime','dragon ball','oled','dark','4k'],
  },
  {
    id: 6,
    title: 'Hinata Wedding',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/hinata-wedding-4k-wallpaper.jpg',
    thumb: 'images/wallpapers-thumb/hinata-wedding-4k-wallpaper.jpg',
    downloads: 1450,
    views: 4200,
    daysAgo: 12,
    size: '4.1 MB',
    tags: ['anime','naruto','hinata','4k','landscape'],
  },
  {
    id: 7,
    title: 'NieR: Automata — 2B',
    category: 'gaming',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/NieR-Automata-2B-4k-wallpaper-preview.jpg',
    downloads: 4700,
    views: 12900,
    daysAgo: 5,
    size: '5.5 MB',
    tags: ['gaming','nier automata','2b','oled','4k','landscape'],
  },
  {
    id: 8,
    title: 'Ryomen Sukuna',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/ryomen-sukuna-4k-wallpaper-preview.jpg',
    downloads: 5900,
    views: 16700,
    daysAgo: 4,
    size: '4.7 MB',
    tags: ['anime','jujutsu kaisen','sukuna','oled','4k','landscape'],
  },
  {
    id: 9,
    title: 'Zenitsu Agatsuma',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/zenitsu-agatsuma-4k-wallpaper-preview.jpg',
    downloads: 3100,
    views: 8900,
    daysAgo: 9,
    size: '4.4 MB',
    tags: ['anime','demon slayer','zenitsu','oled','4k','landscape'],
  },
  {
    id: 10,
    title: 'Zero Two',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/zero-two1-4k-wallpaper.jpg',
    thumb: 'images/wallpapers-thumb/zero-two1-4k-wallpaper.jpg',
    downloads: 2800,
    views: 7600,
    daysAgo: 10,
    size: '4.2 MB',
    tags: ['anime','darling in the franxx','zero two','4k','landscape'],
    featuredOverride: true,
  },
  {
    id: 11,
    title: 'Zero Two — Portrait Glow',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/zero-two-4k-wallpaper.jpg',
    thumb: 'images/wallpapers-thumb/zero-two-4k-wallpaper.jpg',
    downloads: 4100,
    views: 11400,
    daysAgo: 6,
    size: '4.8 MB',
    tags: ['anime','darling in the franxx','zero two','4k','landscape'],
  },
  {
    id: 12,
    title: 'Zero Two & Hiro',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/zero-two-couple-4k-wallpaper.jpg',
    thumb: 'images/wallpapers-thumb/zero-two-couple-4k-wallpaper.jpg',
    downloads: 2500,
    views: 6900,
    daysAgo: 11,
    size: '4.5 MB',
    tags: ['anime','darling in the franxx','zero two','hiro','4k'],
  },
  {
    id: 13,
    title: 'Zero Two OLED',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Zero-Two-OLED-4k-wallpaper-preview.jpg',
    downloads: 3800,
    views: 10200,
    daysAgo: 1,
    size: '3.6 MB',
    tags: ['anime','darling in the franxx','zero two','oled','dark','4k'],
  },
  {
    id: 14,
    title: 'Shinobu Kocho OLED',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Shinobu-Kocho-OLED-4k-wallpaper.jpg',
    thumb: 'images/wallpapers-thumb/Shinobu-Kocho-OLED-4k-wallpaper.jpg',
    downloads: 2900,
    views: 8100,
    daysAgo: 1,
    size: '3.4 MB',
    tags: ['anime','demon slayer','shinobu kocho','oled','dark','4k'],
  },
  {
    id: 15,
    title: 'Shinobu Kocho — Beach',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Shinobu-Kocho-Beach-4k-wallpaper.jpg',
    thumb: 'images/wallpapers-thumb/Shinobu-Kocho-Beach-4k-wallpaper.jpg',
    downloads: 2600,
    views: 7400,
    daysAgo: 1,
    size: '4.5 MB',
    tags: ['anime','demon slayer','shinobu kocho','beach','4k'],
  },
  {
    id: 16,
    title: 'NieR: Automata — 2B OLED',
    category: 'gaming',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Nier-Automata-2B-OLED-4k-wallpaper-preview.jpg',
    downloads: 4200,
    views: 11800,
    daysAgo: 1,
    size: '3.5 MB',
    tags: ['gaming','nier automata','2b','oled','dark','4k'],
  },
  {
    id: 17,
    title: 'Liberty OLED',
    category: 'tvshows',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Liberty-OLED-4k-wallpaper-preview.jpg',
    downloads: 1800,
    views: 5100,
    daysAgo: 1,
    size: '3.3 MB',
    tags: ['tvshows','liberty','oled','dark','4k'],
  },
  {
    id: 18,
    title: 'Kanae Kocho',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Kanae-Kocho-4k-wallpaper-preview.jpg',
    downloads: 2100,
    views: 6000,
    daysAgo: 1,
    size: '4.6 MB',
    tags: ['anime','demon slayer','kanae kocho','oled','4k'],
  },
  {
    id: 19,
    title: "Jeanne d'Arc",
    category: 'gaming',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Jeanne-d-Arc-4k-wallpaper.jpg',
    thumb: 'images/wallpapers-thumb/Jeanne-d-Arc-4k-wallpaper.jpg',
    downloads: 3300,
    views: 9200,
    daysAgo: 1,
    size: '4.7 MB',
    tags: ['gaming','fate','jeanne d\'arc','4k'],
  },
  {
    id: 20,
    title: 'Hitsugaya Toshiro',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/hitsugaya-Toshiro-Bleach-4k-wallpaper-preview.jpg',
    downloads: 2400,
    views: 6800,
    daysAgo: 1,
    size: '4.3 MB',
    tags: ['anime','bleach','hitsugaya toshiro','4k'],
  },
  {
    id: 21,
    title: 'Hinata Hyuga',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Hinata-Hyuga-4k-wallpaper.jpg',
    thumb: 'images/wallpapers-thumb/Hinata-Hyuga-4k-wallpaper.jpg',
    downloads: 2000,
    views: 5700,
    daysAgo: 1,
    size: '4.1 MB',
    tags: ['anime','naruto','hinata hyuga','4k'],
  },
  {
    id: 22,
    title: 'Mikasa — Beach',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Mikasa-Beach-4k-wallpaper.jpg',
    thumb: 'images/wallpapers-thumb/Mikasa-Beach-4k-wallpaper.jpg',
    downloads: 3600,
    views: 9900,
    daysAgo: 1,
    size: '4.8 MB',
    tags: ['anime','attack on titan','mikasa','beach','4k'],
  },
  {
    id: 23,
    title: 'Hinata — Beach',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Hinata-Beach-4k-wallpaper.jpg',
    thumb: 'images/wallpapers-thumb/Hinata-Beach-4k-wallpaper.jpg',
    downloads: 2300,
    views: 6500,
    daysAgo: 1,
    size: '4.4 MB',
    tags: ['anime','naruto','hinata','beach','4k'],
  },
  {
    id: 24,
    title: 'Kawaii Cat Girl OLED',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/kawaii-cat-girl-OLED-4k-wallpaper.png',
    thumb: 'images/wallpapers-thumb/kawaii-cat-girl-OLED-4k-wallpaper.jpg',
    downloads: 1500,
    views: 4300,
    daysAgo: 0,
    size: '3.2 MB',
    tags: ['anime','catgirl','kawaii','oled','dark','4k'],
  },
  {
    id: 25,
    title: 'Gojo — Neon',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Gojo-Neon-preview.jpg',
    downloads: 2900,
    views: 8200,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['anime','jujutsu kaisen','gojo','neon','4k'],
  },
  {
    id: 26,
    title: 'Sukuna — Neon',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Sukuna-Neon-preview.jpg',
    downloads: 3100,
    views: 8700,
    daysAgo: 0,
    size: '4.1 MB',
    tags: ['anime','jujutsu kaisen','sukuna','neon','4k'],
  },
  {
    id: 27,
    title: 'KPop Demon Hunter',
    category: 'movies',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Kpop-Demon-Hunter.jpg',
    thumb: 'images/wallpapers-thumb/Kpop-Demon-Hunter.jpg',
    downloads: 2200,
    views: 6100,
    daysAgo: 0,
    size: '4.3 MB',
    tags: ['movies','kpop demon hunter','4k'],
  },
  {
    id: 28,
    title: 'Monkey D. Luffy',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Moneky-D-Luffy.jpg',
    thumb: 'images/wallpapers-thumb/Moneky-D-Luffy.jpg',
    downloads: 3400,
    views: 9100,
    daysAgo: 0,
    size: '4.2 MB',
    tags: ['anime','one piece','luffy','4k'],
  },
  {
    id: 29,
    title: 'Naruto Uzumaki OLED',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Naruto-Uzumaki-OLED.jpg',
    thumb: 'images/wallpapers-thumb/Naruto-Uzumaki-OLED.jpg',
    downloads: 3700,
    views: 9900,
    daysAgo: 0,
    size: '3.5 MB',
    tags: ['anime','naruto','naruto uzumaki','oled','dark','4k'],
  },
  {
    id: 30,
    title: 'Pain OLED',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Pain-OLED-preview.jpg',
    downloads: 2600,
    views: 7300,
    daysAgo: 0,
    size: '3.6 MB',
    tags: ['anime','naruto','pain','oled','dark','4k'],
  },
  {
    id: 31,
    title: 'Coyote Starrk',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Coyote-Starrk-Bleach-preview.jpg',
    downloads: 1900,
    views: 5400,
    daysAgo: 0,
    size: '4.2 MB',
    tags: ['anime','bleach','coyote starrk','4k'],
  },
  {
    id: 32,
    title: 'Grimmjow Jaegerjaquez',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Grimmjow-Jaegerjaquez-Bleach.jpg',
    thumb: 'images/wallpapers-thumb/Grimmjow-Jaegerjaquez-Bleach.jpg',
    downloads: 2500,
    views: 6800,
    daysAgo: 0,
    size: '4.4 MB',
    tags: ['anime','bleach','grimmjow','4k'],
  },
  {
    id: 33,
    title: 'Nelliel Tu Odelschwanck',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Nelliel-Tu-Odelschwanck-Bleach.jpg',
    thumb: 'images/wallpapers-thumb/Nelliel-Tu-Odelschwanck-Bleach.jpg',
    downloads: 1700,
    views: 4900,
    daysAgo: 0,
    size: '4.1 MB',
    tags: ['anime','bleach','nelliel','4k'],
  },
  {
    id: 34,
    title: 'Ulquiorra Cifer',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Ulquiorra-Cifer-Bleach.jpg',
    thumb: 'images/wallpapers-thumb/Ulquiorra-Cifer-Bleach.jpg',
    downloads: 2800,
    views: 7600,
    daysAgo: 0,
    size: '4.3 MB',
    tags: ['anime','bleach','ulquiorra','4k'],
  },
  {
    id: 35,
    title: 'Yonko Monkey D. Luffy',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Yonko-Monkey-D-Luffy-preview.jpg',
    downloads: 3900,
    views: 10500,
    daysAgo: 0,
    size: '4.6 MB',
    tags: ['anime','one piece','luffy','yonko','4k'],
  },
  {
    id: 36,
    title: 'Akaza',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Akaza.jpg',
    thumb: 'images/wallpapers-thumb/Akaza.jpg',
    downloads: 2100,
    views: 5900,
    daysAgo: 0,
    size: '4.2 MB',
    tags: ['anime','demon slayer','akaza','4k'],
  },
  {
    id: 37,
    title: 'Boruto',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Boruto.jpg',
    thumb: 'images/wallpapers-thumb/Boruto.jpg',
    downloads: 1900,
    views: 5300,
    daysAgo: 0,
    size: '4.1 MB',
    tags: ['anime','boruto','naruto','4k'],
  },
  {
    id: 38,
    title: 'Car',
    category: 'movies',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Car.jpg',
    thumb: 'images/wallpapers-thumb/Car.jpg',
    downloads: 1600,
    views: 4400,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['movies','car','4k'],
  },
  {
    id: 39,
    title: 'Chinese Girl',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Chinese-Girl.jpg',
    thumb: 'images/wallpapers-thumb/Chinese-Girl.jpg',
    downloads: 1800,
    views: 4900,
    daysAgo: 0,
    size: '4.2 MB',
    tags: ['anime','portrait','4k'],
  },
  {
    id: 40,
    title: 'Doctor Doom',
    category: 'movies',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Doctor-Doom.jpg',
    thumb: 'images/wallpapers-thumb/Doctor-Doom.jpg',
    downloads: 2400,
    views: 6600,
    daysAgo: 0,
    size: '4.3 MB',
    tags: ['movies','marvel','doctor doom','4k'],
  },
  {
    id: 41,
    title: 'Himiko Toga',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Himiko-Toga.jpg',
    thumb: 'images/wallpapers-thumb/Himiko-Toga.jpg',
    downloads: 2700,
    views: 7400,
    daysAgo: 0,
    size: '4.1 MB',
    tags: ['anime','my hero academia','himiko toga','oled','4k'],
  },
  {
    id: 42,
    title: 'NieR — 2B',
    category: 'gaming',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Nier-2b.jpg',
    thumb: 'images/wallpapers-thumb/Nier-2b.jpg',
    downloads: 2900,
    views: 8000,
    daysAgo: 0,
    size: '4.3 MB',
    tags: ['gaming','nier automata','2b','4k'],
  },
  {
    id: 43,
    title: 'NieR — 2B Battle',
    category: 'gaming',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Nier-2b-battle.jpg',
    thumb: 'images/wallpapers-thumb/Nier-2b-battle.jpg',
    downloads: 3100,
    views: 8500,
    daysAgo: 0,
    size: '4.5 MB',
    tags: ['gaming','nier automata','2b','battle','4k'],
  },
  {
    id: 44,
    title: 'Anime Girl',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Anime-girl.jpg',
    thumb: 'images/wallpapers-thumb/Anime-girl.jpg',
    downloads: 1700,
    views: 4600,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['anime','portrait','4k'],
  },
  {
    id: 45,
    title: 'Anime Girl — Butterfly',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Anime-Girl-Buterfly.jpg',
    thumb: 'images/wallpapers-thumb/Anime-Girl-Buterfly.jpg',
    downloads: 1900,
    views: 5100,
    daysAgo: 0,
    size: '4.1 MB',
    tags: ['anime','portrait','butterfly','4k'],
  },
  {
    id: 46,
    title: 'Crowned Wraith',
    category: 'gaming',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Crowned-Wraith.jpg',
    thumb: 'images/wallpapers-thumb/Crowned-Wraith.jpg',
    downloads: 2200,
    views: 6000,
    daysAgo: 0,
    size: '4.3 MB',
    tags: ['gaming','apex legends','wraith','4k'],
  },
  {
    id: 47,
    title: 'Cute Anime Girl',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Cute-Anime-Girl.jpg',
    thumb: 'images/wallpapers-thumb/Cute-Anime-Girl.jpg',
    downloads: 2000,
    views: 5500,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['anime','portrait','cute','4k'],
  },
  {
    id: 48,
    title: 'Giyu Tomioka',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Giyu-Tomioka.jpg',
    thumb: 'images/wallpapers-thumb/Giyu-Tomioka.jpg',
    downloads: 2500,
    views: 6900,
    daysAgo: 0,
    size: '4.2 MB',
    tags: ['anime','demon slayer','giyu tomioka','4k'],
  },
  {
    id: 49,
    title: 'Kyojuro Rengoku',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Kyojuro-Rengoku.jpg',
    thumb: 'images/wallpapers-thumb/Kyojuro-Rengoku.jpg',
    downloads: 3300,
    views: 9000,
    daysAgo: 0,
    size: '4.4 MB',
    tags: ['anime','demon slayer','kyojuro rengoku','4k'],
  },
  {
    id: 50,
    title: 'Escanor — Lion Sin',
    category: 'anime',
    featured: true,
    trending: false,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Escanor-Lion-Sin.jpg',
    thumb: 'images/wallpapers-thumb/Escanor-Lion-Sin.jpg',
    downloads: 2800,
    views: 7700,
    daysAgo: 0,
    size: '4.3 MB',
    tags: ['anime','seven deadly sins','escanor','4k'],
  },
  {
    id: 51,
    title: 'Toji Fushiguro',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Toji-Fushiguro.jpg',
    thumb: 'images/wallpapers-thumb/Toji-Fushiguro.jpg',
    downloads: 2000,
    views: 5600,
    daysAgo: 0,
    size: '4.2 MB',
    tags: ['anime','jujutsu kaisen','toji fushiguro','4k'],
  },
  {
    id: 52,
    title: 'Mitsuri Kanroji',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Mitsuri-Kanroji.jpg',
    thumb: 'images/wallpapers-thumb/Mitsuri-Kanroji.jpg',
    downloads: 1900,
    views: 5300,
    daysAgo: 0,
    size: '4.1 MB',
    tags: ['anime','demon slayer','mitsuri kanroji','4k'],
  },
  {
    id: 53,
    title: 'Tengen Uzui',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Tengen-Uzui.jpg',
    thumb: 'images/wallpapers-thumb/Tengen-Uzui.jpg',
    downloads: 2100,
    views: 5900,
    daysAgo: 0,
    size: '4.3 MB',
    tags: ['anime','demon slayer','tengen uzui','4k'],
  },
  {
    id: 54,
    title: 'Regal Dark Fantasy',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Regal-Dark-Fantasy.jpg',
    thumb: 'images/wallpapers-thumb/Regal-Dark-Fantasy.jpg',
    downloads: 1700,
    views: 4700,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['dark fantasy','regal','oled','4k'],
  },
  {
    id: 55,
    title: 'Guns Baddie — Neon Action',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Guns-Baddie-preview.jpg',
    downloads: 1800,
    views: 4900,
    daysAgo: 0,
    size: '3.8 MB',
    tags: ['neon','action','baddie','4k'],
  },
  {
    id: 56,
    title: 'Yuta Okkotsu — Realistic Dark',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Yuta-Okkotsu-preview.jpg',
    downloads: 2200,
    views: 6100,
    daysAgo: 0,
    size: '4.1 MB',
    tags: ['anime','jujutsu kaisen','yuta okkotsu','4k'],
  },
  {
    id: 57,
    title: 'Suguru Geto — Dark Realistic',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Suguru-Geto-preview.jpg',
    downloads: 2000,
    views: 5600,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['anime','jujutsu kaisen','suguru geto','oled','4k'],
  },
  {
    id: 58,
    title: 'Girl Baddie — Neon Street',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Girl-Baddie-preview.jpg',
    downloads: 1900,
    views: 5200,
    daysAgo: 0,
    size: '3.9 MB',
    tags: ['neon','street','baddie','cinematic','4k'],
  },
  {
    id: 59,
    title: 'Doctor Doom — Cosmic Power',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Doctor-Doom-Universal-preview.jpg',
    downloads: 2100,
    views: 5800,
    daysAgo: 0,
    size: '4.2 MB',
    tags: ['marvel','doctor doom','cosmic','4k'],
  },
  {
    id: 60,
    title: 'Crowned Shadow — Dark Fantasy',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Crowned-Shadow-preview.jpg',
    downloads: 1700,
    views: 4700,
    daysAgo: 0,
    size: '3.9 MB',
    tags: ['dark fantasy','crowned','shadow','4k'],
  },
  {
    id: 61,
    title: 'Madara Uchiha — Dark Realistic',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Madara-Uchiha-preview.jpg',
    downloads: 2600,
    views: 7200,
    daysAgo: 0,
    size: '4.3 MB',
    tags: ['anime','naruto','madara uchiha','oled','4k'],
  },
  {
    id: 62,
    title: 'Gyomei Himejima — Realistic',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Gyomei-Himejima-preview.jpg',
    downloads: 1900,
    views: 5300,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['anime','demon slayer','gyomei himejima','4k'],
  },
  {
    id: 63,
    title: 'Itachi Uchiha — Sharingan',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Itachi-Uchiha-preview.jpg',
    downloads: 2800,
    views: 7700,
    daysAgo: 0,
    size: '4.2 MB',
    tags: ['anime','naruto','itachi uchiha','sharingan','oled','4k'],
  },
  {
    id: 64,
    title: 'Zenitsu Agatsuma — Golden Aura',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Zenitsu-Agatsuma-Premium-preview.jpg',
    downloads: 2300,
    views: 6400,
    daysAgo: 0,
    size: '4.1 MB',
    tags: ['anime','demon slayer','zenitsu agatsuma','oled','4k'],
  },
  {
    id: 65,
    title: 'Obito Uchiha',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Obito-Uchiha.jpg',
    thumb: 'images/wallpapers-thumb/Obito-Uchiha.jpg',
    downloads: 2400,
    views: 6600,
    daysAgo: 0,
    size: '4.1 MB',
    tags: ['anime','naruto','obito uchiha','4k'],
  },
  {
    id: 66,
    title: 'Shanks',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Shanks.jpg',
    thumb: 'images/wallpapers-thumb/Shanks.jpg',
    downloads: 2500,
    views: 6900,
    daysAgo: 0,
    size: '4.2 MB',
    tags: ['anime','one piece','shanks','4k'],
  },
  {
    id: 67,
    title: 'Hidden Leaf Shinobi',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Hidden-Leaf-Shinobi.jpg',
    thumb: 'images/wallpapers-thumb/Hidden-Leaf-Shinobi.jpg',
    downloads: 2100,
    views: 5800,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['anime','naruto','hidden leaf','shinobi','oled','4k'],
  },
  {
    id: 68,
    title: 'Best Trio of Hidden Leaf',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Best-Trio-of-Hidden-Leaf.jpg',
    thumb: 'images/wallpapers-thumb/Best-Trio-of-Hidden-Leaf.jpg',
    downloads: 2200,
    views: 6100,
    daysAgo: 0,
    size: '4.1 MB',
    tags: ['anime','naruto','hidden leaf','trio','oled','4k'],
  },
  {
    id: 69,
    title: 'Akaza — Upper Moon',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Akaza-Uper-Moon.jpg',
    thumb: 'images/wallpapers-thumb/Akaza-Uper-Moon.jpg',
    downloads: 2300,
    views: 6300,
    daysAgo: 0,
    size: '4.1 MB',
    tags: ['anime','demon slayer','akaza','upper moon','4k'],
  },
  {
    id: 70,
    title: 'Kakashi Hatake',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Kakashi-Hatake.jpg',
    thumb: 'images/wallpapers-thumb/Kakashi-Hatake.jpg',
    downloads: 2600,
    views: 7100,
    daysAgo: 0,
    size: '4.2 MB',
    tags: ['anime','naruto','kakashi hatake','oled','4k'],
  },
  {
    id: 71,
    title: 'Portgas D. Ace',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Portgas-D-Ace.jpg',
    thumb: 'images/wallpapers-thumb/Portgas-D-Ace.jpg',
    downloads: 2400,
    views: 6600,
    daysAgo: 0,
    size: '4.1 MB',
    tags: ['anime','one piece','portgas d ace','oled','4k'],
  },
  {
    id: 72,
    title: 'Cinematic Oni Samurai',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Cinematic-Oni-Samurai-preview.jpg',
    downloads: 1800,
    views: 4900,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['samurai','oni','cinematic','oled','4k'],
  },
  {
    id: 73,
    title: 'Crimson Hooded Undead King',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Crimson-Undead-King-preview.jpg',
    downloads: 1700,
    views: 4700,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['dark fantasy','undead king','4k'],
  },
  {
    id: 74,
    title: 'Crowned in Shadows',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Crowned-in-Shadow-preview.jpg',
    downloads: 1800,
    views: 4900,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['dark fantasy','crowned','shadows','oled','4k'],
  },
  {
    id: 75,
    title: 'Goku Black',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Goku-Black-preview.jpg',
    downloads: 2200,
    views: 6100,
    daysAgo: 0,
    size: '4.1 MB',
    tags: ['anime','dragon ball','goku black','4k'],
  },
  {
    id: 76,
    title: 'Haloed Winged Angel',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Haloed-Wings-Battle-Angel-preview.jpg',
    downloads: 1900,
    views: 5200,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['angel','fantasy','battle','oled','4k'],
  },
  {
    id: 77,
    title: 'Haloed Winged Sniper',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Haloed-Wing-Battle-Angel-Sniper-preview.jpg',
    downloads: 1800,
    views: 5000,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['angel','sniper','fantasy','oled','4k'],
  },
  {
    id: 78,
    title: 'Ichigo Kurosaki',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Ichigo-Kurosaki-preview.jpg',
    downloads: 2500,
    views: 6900,
    daysAgo: 0,
    size: '4.2 MB',
    tags: ['anime','bleach','ichigo kurosaki','oled','4k'],
  },
  {
    id: 79,
    title: 'Majin Vegeta',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Majin-Vegeta-preview.jpg',
    downloads: 2300,
    views: 6300,
    daysAgo: 0,
    size: '4.1 MB',
    tags: ['anime','dragon ball','majin vegeta','oled','4k'],
  },
  {
    id: 80,
    title: 'Muzan Kibutsuji',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Muzan-Kibutsuji.jpg',
    thumb: 'images/wallpapers-thumb/Muzan-Kibutsuji.jpg',
    downloads: 2100,
    views: 5800,
    daysAgo: 0,
    size: '3.3 MB',
    tags: ['anime','demon slayer','muzan kibutsuji','4k'],
  },
  {
    id: 81,
    title: 'Shinobu Kocho — Peach Blossom',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Shinobu-Kocho-Peach-Blossom.jpg',
    thumb: 'images/wallpapers-thumb/Shinobu-Kocho-Peach-Blossom.jpg',
    downloads: 2000,
    views: 5600,
    daysAgo: 0,
    size: '4.6 MB',
    tags: ['anime','demon slayer','shinobu kocho','peach blossom','4k'],
  },
  {
    id: 82,
    title: 'Nezuko Kamado — Peach Blossom',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Nezuko-Kamado-Peach-Blossom.jpg',
    thumb: 'images/wallpapers-thumb/Nezuko-Kamado-Peach-Blossom.jpg',
    downloads: 2400,
    views: 6600,
    daysAgo: 0,
    size: '6.1 MB',
    tags: ['anime','demon slayer','nezuko kamado','peach blossom','4k'],
  },
  {
    id: 83,
    title: 'Mitsuri Kanroji — Peach Blossom',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Mitsuri-Kanroji-Peach-Blossom.jpg',
    thumb: 'images/wallpapers-thumb/Mitsuri-Kanroji-Peach-Blossom.jpg',
    downloads: 2200,
    views: 6100,
    daysAgo: 0,
    size: '5.2 MB',
    tags: ['anime','demon slayer','mitsuri kanroji','peach blossom','4k'],
  },
  {
    id: 84,
    title: 'Kokushibo — Six Eyes',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Kokushibo-Six-Eyes.jpg',
    thumb: 'images/wallpapers-thumb/Kokushibo-Six-Eyes.jpg',
    downloads: 2300,
    views: 6300,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['anime','demon slayer','kokushibo','upper moon','4k'],
  },
  {
    id: 85,
    title: 'Kanao Tsuyuri — Peach Blossom',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Kanao-Tsuyuri-Peach-Blossom.jpg',
    thumb: 'images/wallpapers-thumb/Kanao-Tsuyuri-Peach-Blossom.jpg',
    downloads: 1900,
    views: 5300,
    daysAgo: 0,
    size: '4.2 MB',
    tags: ['anime','demon slayer','kanao tsuyuri','peach blossom','4k'],
  },
  {
    id: 86,
    title: 'Confident Anime Girl',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Confident-Anime-Girl.jpg',
    thumb: 'images/wallpapers-thumb/Confident-Anime-Girl.jpg',
    downloads: 1800,
    views: 5000,
    daysAgo: 0,
    size: '180 KB',
    tags: ['anime','girl','oled','4k'],
  },
  {
    id: 87,
    title: 'Crimson-Eyed Dark Sailor',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Crimson-Eyed Dark-Sailor.jpg',
    thumb: 'images/wallpapers-thumb/Crimson-Eyed Dark-Sailor.jpg',
    downloads: 1700,
    views: 4700,
    daysAgo: 0,
    size: '210 KB',
    tags: ['dark fantasy','sailor','oled','4k'],
  },
  {
    id: 88,
    title: 'Gojo Satoru — Hollow Purple',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Gojo-Saturo-Hallow-Purlpe.jpg',
    thumb: 'images/wallpapers-thumb/Gojo-Saturo-Hallow-Purlpe.jpg',
    downloads: 2600,
    views: 7200,
    daysAgo: 0,
    size: '285 KB',
    tags: ['anime','jujutsu kaisen','gojo satoru','hollow purple','oled','4k'],
  },
  {
    id: 89,
    title: 'Guts — Berserk',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Guts-Berserk.jpg',
    thumb: 'images/wallpapers-thumb/Guts-Berserk.jpg',
    downloads: 2200,
    views: 6100,
    daysAgo: 0,
    size: '292 KB',
    tags: ['anime','berserk','guts','oled','4k'],
  },
  {
    id: 90,
    title: 'Lone Tree — Misty Forest',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Lone-Tree-Misty-Forest.jpg',
    thumb: 'images/wallpapers-thumb/Lone-Tree-Misty-Forest.jpg',
    downloads: 1600,
    views: 4400,
    daysAgo: 0,
    size: '228 KB',
    tags: ['nature','forest','misty','oled','4k'],
  },
  {
    id: 91,
    title: 'Monochrome Conifer Forest',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Monochrome-Conifer-Forest.jpg',
    thumb: 'images/wallpapers-thumb/Monochrome-Conifer-Forest.jpg',
    downloads: 1500,
    views: 4200,
    daysAgo: 0,
    size: '212 KB',
    tags: ['nature','forest','monochrome','oled','4k'],
  },
  {
    id: 92,
    title: 'Neon Cyber Dragon',
    category: 'gaming',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Neon-Cyber-Dragon.jpg',
    thumb: 'images/wallpapers-thumb/Neon-Cyber-Dragon.jpg',
    downloads: 1900,
    views: 5200,
    daysAgo: 0,
    size: '235 KB',
    tags: ['neon','cyberpunk','dragon','oled','4k'],
  },
  {
    id: 93,
    title: 'Rain-Soaked Oni',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Rain-Soaked-Oni.jpg',
    thumb: 'images/wallpapers-thumb/Rain-Soaked-Oni.jpg',
    downloads: 1800,
    views: 4900,
    daysAgo: 0,
    size: '666 KB',
    tags: ['oni','rain','dark fantasy','oled','4k'],
  },
  {
    id: 94,
    title: 'Six Paths of Pain',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Six-Path-Of-Pain.jpg',
    thumb: 'images/wallpapers-thumb/Six-Path-Of-Pain.jpg',
    downloads: 2400,
    views: 6600,
    daysAgo: 0,
    size: '182 KB',
    tags: ['anime','naruto','pain','six paths','oled','4k'],
  },
  {
    id: 95,
    title: 'Sukuna — Aura Pose',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Sukuna-Aura-Pose.jpg',
    thumb: 'images/wallpapers-thumb/Sukuna-Aura-Pose.jpg',
    downloads: 2700,
    views: 7400,
    daysAgo: 0,
    size: '310 KB',
    tags: ['anime','jujutsu kaisen','sukuna','oled','4k'],
  },
  {
    id: 96,
    title: 'Ultra Instinct Goku',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Ultra-Instict-Goku.jpg',
    thumb: 'images/wallpapers-thumb/Ultra-Instict-Goku.jpg',
    downloads: 2500,
    views: 6900,
    daysAgo: 0,
    size: '568 KB',
    tags: ['anime','dragon ball','goku','ultra instinct','4k'],
  },
  {
    id: 97,
    title: 'Solitary Road Beneath Radiant Skies',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Solitary-Road-Beneath-Radiant-Skies.jpg',
    thumb: 'images/wallpapers-thumb/Solitary-Road-Beneath-Radiant-Skies.jpg',
    downloads: 1500,
    views: 4100,
    daysAgo: 0,
    size: '591 KB',
    tags: ['nature','road','sky','landscape','4k'],
  },
  {
    id: 98,
    title: 'Demon Queen — Elder',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Demon-Queen-Elder.jpg',
    thumb: 'images/wallpapers-thumb/Demon-Queen-Elder.jpg',
    downloads: 1700,
    views: 4700,
    daysAgo: 0,
    size: '266 KB',
    tags: ['dark fantasy','demon queen','4k'],
  },
  {
    id: 99,
    title: 'Serene Golden Grassland',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Serene-Golden-Grassland.jpg',
    thumb: 'images/wallpapers-thumb/Serene-Golden-Grassland.jpg',
    downloads: 1400,
    views: 3900,
    daysAgo: 0,
    size: '425 KB',
    tags: ['nature','grassland','golden','landscape','4k'],
  },
  {
    id: 100,
    title: 'Cai Lin — Medusa',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Cai-Lin-Medusa.jpg',
    thumb: 'images/wallpapers-thumb/Cai-Lin-Medusa.jpg',
    downloads: 1600,
    views: 4400,
    daysAgo: 0,
    size: '338 KB',
    tags: ['fantasy','medusa','cai lin','4k'],
  },
  {
    id: 101,
    title: 'Neon Arcane Marksman',
    category: 'gaming',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Neon-Arcane-Marksman.jpg',
    thumb: 'images/wallpapers-thumb/Neon-Arcane-Marksman.jpg',
    downloads: 1900,
    views: 5200,
    daysAgo: 0,
    size: '451 KB',
    tags: ['gaming','neon','arcane','marksman','4k'],
  },
  {
    id: 102,
    title: 'Demon Queen — Younger',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Demon-Queen-Younger.jpg',
    thumb: 'images/wallpapers-thumb/Demon-Queen-Younger.jpg',
    downloads: 1700,
    views: 4700,
    daysAgo: 0,
    size: '291 KB',
    tags: ['dark fantasy','demon queen','4k'],
  },
  {
    id: 103,
    title: 'Android 18',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/android-18.jpg',
    thumb: 'images/wallpapers-thumb/android-18.jpg',
    downloads: 2100,
    views: 5800,
    daysAgo: 0,
    size: '399 KB',
    tags: ['anime','dragon ball','android 18','4k'],
  },
  {
    id: 104,
    title: 'Luminous Rift Over the Silent Lake',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/wallpapers/Luminous-Rift-Over-the-Silent-Lake.jpg',
    thumb: 'images/wallpapers-thumb/Luminous-Rift-Over-the-Silent-Lake.jpg',
    downloads: 1500,
    views: 4100,
    daysAgo: 0,
    size: '455 KB',
    tags: ['nature','lake','landscape','4k'],
  },
  {
    id: 105,
    title: 'Shinobu Kocho — Purple Moon',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Shinobu-Kocho-v3-preview.jpg',
    downloads: 2100,
    views: 5800,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['anime','demon slayer','shinobu kocho','purple moon','4k'],
  },
  {
    id: 106,
    title: 'Vegito — OLED',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Vegito-OLED-preview.jpg',
    downloads: 2600,
    views: 7200,
    daysAgo: 0,
    size: '4.1 MB',
    tags: ['anime','dragon ball','vegito','oled','4k'],
  },
  {
    id: 107,
    title: 'Mitsuri Kanroji — OLED',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Mitsuri-Kanroji-OLED-preview.jpg',
    downloads: 2000,
    views: 5500,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['anime','demon slayer','mitsuri kanroji','oled','4k'],
  },
  {
    id: 108,
    title: 'Nezuko Kamado — OLED',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Nezuko-Kamado-OLED-preview.jpg',
    downloads: 2300,
    views: 6400,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['anime','demon slayer','nezuko kamado','oled','4k'],
  },
  {
    id: 109,
    title: 'Rei Ayanami — OLED',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Rei-Ayanami-OLED-preview.jpg',
    downloads: 1900,
    views: 5300,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['anime','evangelion','rei ayanami','oled','4k'],
  },
  {
    id: 110,
    title: 'Kanao Tsuyuri — OLED',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Kanao-Tsuyuri-OLED-preview.jpg',
    downloads: 1900,
    views: 5300,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['anime','demon slayer','kanao tsuyuri','oled','4k'],
  },
  {
    id: 111,
    title: 'Crimson Gothic Queen',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Crimson-Gothic-Queen-preview.jpg',
    downloads: 1700,
    views: 4700,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['dark fantasy','gothic','queen','4k'],
  },
  {
    id: 112,
    title: 'Shiva & Parvati — Eternal Divine Love',
    category: 'movies',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Shiva-Parvati-Torn-Paper-preview.jpg',
    downloads: 1800,
    views: 5000,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['torn paper art','shiva','parvati','divine','4k'],
  },
  {
    id: 113,
    title: 'Granolah — Dragon Ball Super',
    category: 'anime',
    featured: true,
    trending: true,
    resolution: '4K',
    orientation: 'landscape',
    img: 'images/premium-previews/Granolah-OLED-preview.jpg',
    downloads: 2000,
    views: 5500,
    daysAgo: 0,
    size: '4.0 MB',
    tags: ['anime','dragon ball','granolah','oled','4k'],
  },
];

// Apply premium flags after the wallpaper catalog is loaded.
WALLPAPERS.forEach(w => {
  w.premium = PREMIUM_WALLPAPER_IDS.has(w.id);
  w.price = PREMIUM_PRICE;
  w.gumroadUrl = GUMROAD_LINKS[w.id] || '';
});

/* ============ STATE ============ */
const PAGE_SIZE = 24;
let state = {
  category: 'featured',
  search: '',
  sort: 'newest',
  resolution: '',
  orientation: '',
  priceFilter: '',
  page: 1,
};

/* ============ LANDING PAGE ============ */
window.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'nexora-enter') {
    document.getElementById('landing').classList.add('hide');
    document.body.style.overflow = 'auto';
  }
});
document.body.style.overflow = 'hidden';
setTimeout(()=>{ document.body.style.overflow='hidden'; }, 0);

/* ============ SIDEBAR ============ */
function renderSidebar(){
  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = CATEGORIES.map(c => `
    <div class="cat-item ${state.category===c.id?'active':''}" data-cat="${c.id}">
      <span class="cat-emoji">${c.icon}</span><span>${c.label}</span>
    </div>
  `).join('') + `<div class="sidebar-divider"></div>
    <div class="cat-item" data-cat="favorites"><span class="cat-emoji">❤️</span><span>Favorites</span></div>
    <div class="cat-item" data-cat="downloads-tab"><span class="cat-emoji">⬇</span><span>Downloads</span></div>`;

  sidebar.querySelectorAll('.cat-item').forEach(el => {
    el.addEventListener('click', () => {
      const cat = el.dataset.cat;
      if(cat === 'favorites'){ state.category='__favorites__'; }
      else if(cat === 'downloads-tab'){ state.category='__downloads__'; }
      else { state.category = cat; }
      state.priceFilter = '';
      document.querySelectorAll('.quick-filter-btn').forEach(b=>b.classList.remove('active'));
      if(cat === 'oled') document.getElementById('filterOled')?.classList.add('active');
      else if(cat === 'featured') document.getElementById('filterNewest')?.classList.add('active');
      state.page = 1;
      renderSidebar();
      renderGrid();
      closeSidebar();
      window.scrollTo({top:0, behavior:'smooth'});
    });
  });
}

/* ============ SIDEBAR TOGGLE (off-canvas slide panel) ============ */
function openSidebar(){
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarBackdrop').classList.add('show');
  document.getElementById('sidebarToggle').classList.add('shifted');
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarBackdrop').classList.remove('show');
  document.getElementById('sidebarToggle').classList.remove('shifted');
}
function toggleSidebar(){
  const isOpen = document.getElementById('sidebar').classList.contains('open');
  if(isOpen) closeSidebar(); else openSidebar();
}
document.getElementById('sidebarToggle').addEventListener('click', toggleSidebar);
document.getElementById('sidebarBackdrop').addEventListener('click', closeSidebar);

/* ============ FAVORITES / DOWNLOAD COUNTS (session only) ============ */
let favorites = new Set();
let downloadedIds = new Set();

/* ============ GRID ============ */
function timeAgo(days){
  if(days===0) return 'Today';
  if(days===1) return '1 day ago';
  if(days<30) return days+' days ago';
  const months = Math.floor(days/30);
  return months+' month'+(months>1?'s':'')+' ago';
}
function fmtNum(n){
  if(n>=1000) return (n/1000).toFixed(1)+'K';
  return n;
}

function getFiltered(){
  let list = WALLPAPERS.slice();
  if(state.category === '__favorites__'){
    list = list.filter(w => favorites.has(w.id));
  } else if(state.category === '__downloads__'){
    list = list.filter(w => downloadedIds.has(w.id));
  } else if(state.category === 'featured'){
    list = list.filter(w => w.featured);
  } else if(state.category === 'trending'){
    list = list.filter(w => w.trending);
  } else if(state.category === 'newest'){
    list = list.filter(w => w.daysAgo <= 20);
  } else if(state.category === 'oled'){
    list = list.filter(w => w.tags.includes('oled'));
  } else if(state.category === 'ips'){
    list = list.filter(w => !w.tags.includes('oled'));
  } else {
    list = list.filter(w => w.category === state.category);
  }

  if(state.search.trim()){
    const q = state.search.toLowerCase();
    list = list.filter(w => w.title.toLowerCase().includes(q) || w.category.includes(q) || w.tags.some(t=>t.includes(q)));
  }
  if(state.resolution) list = list.filter(w => w.resolution === state.resolution);
  if(state.orientation) list = list.filter(w => w.orientation === state.orientation);
  if(state.priceFilter === 'premium') list = list.filter(w => w.premium);
  else if(state.priceFilter === 'free') list = list.filter(w => !w.premium);

  switch(state.sort){
    case 'downloads': list.sort((a,b)=>b.downloads-a.downloads); break;
    case 'views': list.sort((a,b)=>b.views-a.views); break;
    case 'az': list.sort((a,b)=>a.title.localeCompare(b.title)); break;
    default: list.sort((a,b)=> (a.daysAgo - b.daysAgo) || (b.id - a.id));
  }
  return list;
}

const SECTION_TITLES = {
  featured:['Featured Wallpapers','Hand-picked, studio-quality frames.'],
  trending:['Trending Now','What everyone is downloading right now.'],
  newest:['Newest Wallpapers','Fresh uploads from the last 20 days.'],
  oled:['OLED Wallpapers','True-black optimized picks for OLED displays.'],
  ips:['IPS Wallpapers','Standard wallpapers that look great on any display.'],
  __favorites__:['Your Favorites','Wallpapers you\'ve saved this session.'],
  __downloads__:['Your Downloads','Wallpapers you\'ve downloaded this session.'],
};

function renderGrid(){
  const grid = document.getElementById('grid');
  const empty = document.getElementById('emptyState');
  const fullList = getFiltered();

  const titleInfo = SECTION_TITLES[state.category];
  const catObj = CATEGORIES.find(c=>c.id===state.category);
  document.getElementById('sectionTitle').textContent = titleInfo ? titleInfo[0] : (catObj ? catObj.icon+' '+catObj.label : 'Wallpapers');
  document.getElementById('sectionSub').textContent = titleInfo ? titleInfo[1] : `${fullList.length} wallpapers in this category.`;

  const totalPages = Math.max(1, Math.ceil(fullList.length / PAGE_SIZE));
  if(state.page > totalPages) state.page = totalPages;
  if(state.page < 1) state.page = 1;

  if(fullList.length === 0){
    grid.innerHTML = '';
    empty.style.display = 'block';
    document.getElementById('pagination').innerHTML = '';
    return;
  }
  empty.style.display = 'none';

  const start = (state.page - 1) * PAGE_SIZE;
  const list = fullList.slice(start, start + PAGE_SIZE);

  grid.innerHTML = list.map((w, i) => `
    <div class="card" data-id="${w.id}" style="animation-delay:${Math.min(i*0.04,0.6)}s">
      <span class="card-res-badge ${w.premium ? 'premium-badge' : ''}">${w.premium ? `🔒 PREMIUM · ${w.price}` : w.resolution}</span>
      <button class="card-dl ${w.premium ? 'premium-card-btn' : ''}" data-dl="${w.id}" title="${w.premium ? `Buy for ${w.price}` : 'Quick download'}">${w.premium ? '💳' : '⬇'}</button>
      <img src="${w.thumb || w.img}" alt="${w.title}" loading="lazy">
      <div class="card-overlay">
        <div class="card-title">${w.title}</div>
        <div class="card-meta">
          <span>${w.orientation==='portrait'?'2160×3840':w.orientation==='square'?'2160×2160':'3840×2160'}</span>
          <span>⬇ ${fmtNum(w.downloads)}</span>
          <span>👁 ${fmtNum(w.views)}</span>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
      if(e.target.closest('.card-dl')) return;
      openDetail(parseInt(card.dataset.id));
    });
  });
  grid.querySelectorAll('[data-dl]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleWallpaperAction(parseInt(btn.dataset.dl));
    });
  });

  renderPagination(totalPages);
}

/* ============ PAGINATION ============ */
function goToPage(p){
  state.page = p;
  renderGrid();
  document.querySelector('main#content').scrollIntoView({behavior:'smooth', block:'start'});
}

function renderPagination(totalPages){
  const el = document.getElementById('pagination');
  if(totalPages <= 1){ el.innerHTML = ''; return; }

  const cur = state.page;
  let html = `<button class="page-btn" data-page="${cur-1}" ${cur===1?'disabled':''}>‹ Prev</button>`;

  const pages = [];
  pages.push(1);
  if(cur > 3) pages.push('...');
  for(let p = Math.max(2, cur-1); p <= Math.min(totalPages-1, cur+1); p++) pages.push(p);
  if(cur < totalPages-2) pages.push('...');
  if(totalPages > 1) pages.push(totalPages);

  pages.forEach(p => {
    if(p === '...'){
      html += `<span class="page-ellipsis">…</span>`;
    } else {
      html += `<button class="page-btn ${p===cur?'active':''}" data-page="${p}">${p}</button>`;
    }
  });

  html += `<button class="page-btn" data-page="${cur+1}" ${cur===totalPages?'disabled':''}>Next ›</button>`;
  el.innerHTML = html;

  el.querySelectorAll('.page-btn[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = parseInt(btn.dataset.page);
      if(!isNaN(p) && p >= 1 && p <= totalPages && p !== cur) goToPage(p);
    });
  });
}

/* ============ SEARCH / FILTERS ============ */
document.getElementById('searchInput').addEventListener('input', (e) => {
  state.search = e.target.value;
  state.page = 1;
  renderGrid();
});
document.querySelectorAll('.quick-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.quick-filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const type = btn.dataset.filter;
    if(type === 'premium'){
      state.category = 'featured';
      state.priceFilter = 'premium';
    } else if(type === 'free'){
      state.category = 'featured';
      state.priceFilter = 'free';
    } else if(type === 'oled'){
      state.category = 'oled';
      state.priceFilter = '';
    } else {
      state.category = 'featured';
      state.priceFilter = '';
      state.sort = 'newest';
    }
    state.page = 1;
    renderGrid();
  });
});

document.querySelectorAll('.pill-btn[data-sort]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pill-btn[data-sort]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const map = {newest:'newest', downloads:'downloads', views:'views'};
    state.sort = map[btn.dataset.sort];
    document.getElementById('filterNewest').classList.toggle('active', btn.dataset.sort === 'newest');
    state.page = 1;
    renderGrid();
  });
});

document.getElementById('randomBtn').addEventListener('click', () => {
  const w = WALLPAPERS[Math.floor(Math.random()*WALLPAPERS.length)];
  openDetail(w.id);
});

let darkToggle = true;
document.getElementById('darkModeBtn').addEventListener('click', (e) => {
  darkToggle = !darkToggle;
  document.documentElement.style.filter = darkToggle ? 'none' : 'invert(1) hue-rotate(180deg)';
});

/* ============ DETAIL MODAL ============ */
let currentDetailId = null;
function openDetail(id){
  const w = WALLPAPERS.find(x=>x.id===id);
  if(!w) return;
  currentDetailId = id;
  const related = WALLPAPERS.filter(x=>x.category===w.category && x.id!==w.id).slice(0,8);
  const isFav = favorites.has(w.id);

  document.getElementById('detailModal').innerHTML = `
    <div class="detail-hero">
      <button class="modal-close" id="detailCloseBtn">✕</button>
      <img src="${w.thumb || w.img}" alt="${w.title}" id="detailHeroImg">
    </div>
    <div class="detail-body">
      <div class="detail-top">
        <div>
          <div class="detail-title">${w.title}</div>
          <div class="detail-badges">
            <span>${w.resolution}</span>
            <span>${w.size}</span>
            <span>${timeAgo(w.daysAgo)}</span>
          </div>
        </div>
        <div class="detail-actions">
          <button class="btn btn-primary" id="detailDownloadBtn">${w.premium ? `💳 Buy for ${w.price}` : '⬇ Download 4K'}</button>
          <button class="btn btn-ghost ${isFav?'liked':''}" id="detailFavBtn">${isFav?'❤':'🤍'} Favorite</button>
          <button class="btn btn-ghost" id="detailShareBtn">🔗 Share</button>
          <button class="btn btn-ghost" id="detailPreviewBtn">🖥 Fullscreen</button>
        </div>
      </div>
      <div class="detail-stats">
        <div class="stat"><div class="num">${fmtNum(w.views)}</div><div class="label">Views</div></div>
        <div class="stat"><div class="num">${fmtNum(w.downloads)}</div><div class="label">Downloads</div></div>
        <div class="stat"><div class="num">${w.orientation==='portrait'?'2160×3840':w.orientation==='square'?'2160×2160':'3840×2160'}</div><div class="label">Resolution</div></div>
      </div>
      <div class="detail-desc">${w.premium ? `A premium ${w.resolution} wallpaper upscaled to 8K. Purchase this wallpaper for just ${w.price} and receive the original Zip downloadable file securely through Gumroad.` : `A ${w.resolution} desktop wallpaper from our ${w.category} collection. Optimized for crisp detail and clean color across ultra-wide and standard monitors — free for personal use.`}</div>
      <div class="tag-row">${w.tags.map(t=>`<span class="tag">#${t}</span>`).join('')}</div>
      <div class="related-title">Related Wallpapers</div>
      <div class="related-row">
        ${related.map(r=>`<div class="related-card" data-id="${r.id}"><img src="${r.thumb || r.img}" alt="${r.title}"></div>`).join('')}
      </div>
    </div>
  `;

  document.getElementById('detailBackdrop').classList.add('show');
  document.getElementById('detailCloseBtn').addEventListener('click', closeDetail);
  document.getElementById('detailHeroImg').addEventListener('click', () => openFullscreen(w.id));
  document.getElementById('detailPreviewBtn').addEventListener('click', () => openFullscreen(w.id));
  document.getElementById('detailDownloadBtn').addEventListener('click', () => w.premium ? purchaseWallpaper(w.id) : triggerDownload(w.id));
  document.getElementById('detailShareBtn').addEventListener('click', () => showToast('🔗 Link copied to clipboard!'));
  document.getElementById('detailFavBtn').addEventListener('click', (e) => {
    toggleFavorite(w.id);
    const nowFav = favorites.has(w.id);
    e.currentTarget.classList.toggle('liked', nowFav);
    e.currentTarget.innerHTML = (nowFav?'❤':'🤍') + ' Favorite';
  });
  document.querySelectorAll('.related-card').forEach(c => {
    c.addEventListener('click', () => openDetail(parseInt(c.dataset.id)));
  });
}
function closeDetail(){
  document.getElementById('detailBackdrop').classList.remove('show');
}
document.getElementById('detailBackdrop').addEventListener('click', (e) => {
  if(e.target.id === 'detailBackdrop') closeDetail();
});

function toggleFavorite(id){
  if(favorites.has(id)) favorites.delete(id); else favorites.add(id);
  if(state.category==='__favorites__') renderGrid();
}

/* ============ FULLSCREEN PREVIEW ============ */
let fsList = [];
let fsIndex = 0;
function openFullscreen(id){
  fsList = getFiltered().length ? getFiltered() : WALLPAPERS;
  fsIndex = fsList.findIndex(w=>w.id===id);
  if(fsIndex === -1){ fsList = WALLPAPERS; fsIndex = fsList.findIndex(w=>w.id===id); }
  renderFullscreen();
  document.getElementById('fullscreenPreview').classList.add('show');
}
function renderFullscreen(){
  const w = fsList[fsIndex];
  const img = document.getElementById('fsImage');
  img.src = w.img;
  img.classList.remove('zoomed');
}
function closeFullscreen(){
  document.getElementById('fullscreenPreview').classList.remove('show');
}
document.getElementById('fsClose').addEventListener('click', closeFullscreen);
document.getElementById('fsPrev').addEventListener('click', ()=>{ fsIndex=(fsIndex-1+fsList.length)%fsList.length; renderFullscreen(); });
document.getElementById('fsNext').addEventListener('click', ()=>{ fsIndex=(fsIndex+1)%fsList.length; renderFullscreen(); });
document.getElementById('fsImage').addEventListener('click', (e)=> e.target.classList.toggle('zoomed'));
document.getElementById('fsImage').addEventListener('dblclick', (e)=> e.target.classList.toggle('zoomed'));

document.addEventListener('keydown', (e) => {
  if(document.getElementById('fullscreenPreview').classList.contains('show')){
    if(e.key==='Escape') closeFullscreen();
    if(e.key==='ArrowRight'){ fsIndex=(fsIndex+1)%fsList.length; renderFullscreen(); }
    if(e.key==='ArrowLeft'){ fsIndex=(fsIndex-1+fsList.length)%fsList.length; renderFullscreen(); }
  } else if(document.getElementById('detailBackdrop').classList.contains('show')){
    if(e.key==='Escape') closeDetail();
  }
});

/* ============ DOWNLOAD SYSTEM ============ */
function handleWallpaperAction(id){
  const w = WALLPAPERS.find(x=>x.id===id);
  if(!w) return;
  if(w.premium) purchaseWallpaper(id);
  else triggerDownload(id);
}

function purchaseWallpaper(id){
  const w = WALLPAPERS.find(x=>x.id===id);
  if(!w || !w.premium) return;
  if(w.gumroadUrl){
    window.open(w.gumroadUrl, '_blank', 'noopener,noreferrer');
  } else {
    showToast(`⚠️ Gumroad link not added for "${w.title}" yet.`);
  }
}

function triggerDownload(id){
  const w = WALLPAPERS.find(x=>x.id===id);
  if(!w) return;
  downloadedIds.add(id);
  w.downloads += 1;

  // Actually trigger a file download using the image URL
  const link = document.createElement('a');
  link.href = w.img;
  link.download = w.img.split('/').pop(); // suggests the original filename to the browser
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast(`✅ Thank you for downloading "${w.title}"!`);
  if(state.category==='__downloads__') renderGrid();
}
let toastTimer;
function showToast(msg){
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove('show'), 2600);
}

/* ============ SCROLL TOP ============ */
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('show', window.scrollY > 500);
});
scrollBtn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

/* ============ DONATION ============ */
(() => {
  const donateBtn = document.getElementById('donateBtn');
  const modalRoot = document.getElementById('donatePopup');
  const backdrop = document.getElementById('donateBackdrop');
  const modalCard = document.getElementById('donateModalCard');
  const closeBtn = document.getElementById('closeDonate');
  const copyUpi = document.getElementById('copyUpi');
  const copyLabel = document.getElementById('copyLabel');
  const copyIcon = document.getElementById('copyIcon');
  const copyToast = document.getElementById('copyToast');
  const UPI = 'quincydarth07@upi';
  let toastTimer;

  function burst(){
    if (typeof confetti !== 'function') return;
    const rect = donateBtn.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 70,
      spread: 68,
      origin: { x, y },
      colors: ['#FBBF24', '#F59E0B', '#FB7185', '#FDE68A', '#FFFFFF'],
      ticks: 180,
      gravity: 0.9,
      scalar: 0.85
    });
  }

  function openDonate(){
    modalRoot.classList.add('show');
    backdrop.classList.remove('nxd-leave-fade');
    modalCard.classList.remove('nxd-leave-modal');
    backdrop.classList.add('nxd-enter-fade');
    modalCard.classList.add('nxd-enter-modal');
    document.body.style.overflow = 'hidden';
    burst();
    closeBtn.focus();
  }

  function closeDonate(){
    backdrop.classList.remove('nxd-enter-fade');
    modalCard.classList.remove('nxd-enter-modal');
    backdrop.classList.add('nxd-leave-fade');
    modalCard.classList.add('nxd-leave-modal');
    setTimeout(() => {
      modalRoot.classList.remove('show');
      document.body.style.overflow = '';
    }, 180);
  }

  donateBtn.addEventListener('click', openDonate);
  document.getElementById('footerDonate').addEventListener('click', (e)=>{ e.preventDefault(); openDonate(); });
  closeBtn.addEventListener('click', closeDonate);
  backdrop.addEventListener('click', closeDonate);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalRoot.classList.contains('show')) closeDonate();
  });

  copyUpi.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(UPI);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = UPI;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    copyLabel.textContent = 'Copied';
    copyUpi.classList.add('nxd-copy-flash');
    copyIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>';
    copyToast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      copyToast.classList.remove('show');
      copyLabel.textContent = 'Copy';
      copyUpi.classList.remove('nxd-copy-flash');
      copyIcon.innerHTML = '<rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>';
    }, 1800);
  });
})();

/* ============ INIT ============ */
renderSidebar();
renderGrid();
