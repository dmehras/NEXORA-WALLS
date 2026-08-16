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
    img: 'images/wallpapers/goku-blue-oled-4k-wallpaper.jpg',
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
    img: 'images/wallpapers/NieR-Automata-2B-4k-wallpaper.jpg',
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
    img: 'images/wallpapers/ryomen-sukuna-4k-wallpaper.jpg',
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
    img: 'images/wallpapers/zenitsu-agatsuma-4k-wallpaper.jpg',
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
    img: 'images/wallpapers/Zero-Two-OLED-4k-wallpaper.jpg',
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
    img: 'images/wallpapers/Nier-Automata-2B-OLED-4k-wallpaper.jpg',
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
    img: 'images/wallpapers/Liberty-OLED-4k-wallpaper.jpg',
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
    img: 'images/wallpapers/Kanae-Kocho-4k-wallpaper.jpg',
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
    img: 'images/wallpapers/hitsugaya-Toshiro-Bleach-4k-wallpaper.jpg',
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
    downloads: 2300,
    views: 6500,
    daysAgo: 1,
    size: '4.4 MB',
    tags: ['anime','naruto','hinata','beach','4k'],
  },
];

/* ============ STATE ============ */
let state = {
  category: 'featured',
  search: '',
  sort: 'newest',
  resolution: '',
  orientation: '',
};

/* ============ LANDING PAGE ============ */
function initParticles(){
  const field = document.getElementById('particleField');
  const frag = document.createDocumentFragment();
  for(let i=0;i<40;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random()*5+2;
    p.style.width = size+'px';
    p.style.height = size+'px';
    p.style.left = Math.random()*100+'%';
    p.style.animationDuration = (Math.random()*14+10)+'s';
    p.style.animationDelay = (Math.random()*10)+'s';
    frag.appendChild(p);
  }
  field.appendChild(frag);
}
initParticles();

document.getElementById('enterBtn').addEventListener('click', () => {
  document.getElementById('landing').classList.add('hide');
  document.body.style.overflow = 'auto';
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

  switch(state.sort){
    case 'downloads': list.sort((a,b)=>b.downloads-a.downloads); break;
    case 'views': list.sort((a,b)=>b.views-a.views); break;
    case 'az': list.sort((a,b)=>a.title.localeCompare(b.title)); break;
    default: list.sort((a,b)=>a.daysAgo-b.daysAgo);
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
  const list = getFiltered();

  const titleInfo = SECTION_TITLES[state.category];
  const catObj = CATEGORIES.find(c=>c.id===state.category);
  document.getElementById('sectionTitle').textContent = titleInfo ? titleInfo[0] : (catObj ? catObj.icon+' '+catObj.label : 'Wallpapers');
  document.getElementById('sectionSub').textContent = titleInfo ? titleInfo[1] : `${list.length} wallpapers in this category.`;

  if(list.length === 0){
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  grid.innerHTML = list.map((w, i) => `
    <div class="card" data-id="${w.id}" style="animation-delay:${Math.min(i*0.04,0.6)}s">
      <span class="card-res-badge">${w.resolution}</span>
      <button class="card-dl" data-dl="${w.id}" title="Quick download">⬇</button>
      <img src="${w.img}" alt="${w.title}" loading="lazy">
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
      triggerDownload(parseInt(btn.dataset.dl));
    });
  });
}

/* ============ SEARCH / FILTERS ============ */
document.getElementById('searchInput').addEventListener('input', (e) => {
  state.search = e.target.value;
  renderGrid();
});
document.getElementById('resFilter').addEventListener('change', e => { state.resolution = e.target.value; renderGrid(); });
document.getElementById('orientFilter').addEventListener('change', e => { state.orientation = e.target.value; renderGrid(); });
document.getElementById('sortFilter').addEventListener('change', e => { state.sort = e.target.value; renderGrid(); });

document.querySelectorAll('.pill-btn[data-sort]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pill-btn[data-sort]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const map = {newest:'newest', downloads:'downloads', views:'views'};
    state.sort = map[btn.dataset.sort];
    document.getElementById('sortFilter').value = state.sort;
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
      <img src="${w.img}" alt="${w.title}" id="detailHeroImg">
    </div>
    <div class="detail-body">
      <div class="detail-top">
        <div>
          <div class="detail-title">${w.title}</div>
          <div class="detail-badges">
            <span>${CATEGORIES.find(c=>c.id===w.category)?.icon||''} ${w.category}</span>
            <span>${w.resolution}</span>
            <span>${w.size}</span>
            <span>${timeAgo(w.daysAgo)}</span>
          </div>
        </div>
        <div class="detail-actions">
          <button class="btn btn-primary" id="detailDownloadBtn">⬇ Download 4K</button>
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
      <div class="detail-desc">A premium ${w.resolution} desktop wallpaper from our ${w.category} collection. Optimized for crisp detail and clean color across ultra-wide and standard monitors — free for personal use.</div>
      <div class="tag-row">${w.tags.map(t=>`<span class="tag">#${t}</span>`).join('')}</div>
      <div class="related-title">Related Wallpapers</div>
      <div class="related-row">
        ${related.map(r=>`<div class="related-card" data-id="${r.id}"><img src="${r.img}" alt="${r.title}"></div>`).join('')}
      </div>
    </div>
  `;

  document.getElementById('detailBackdrop').classList.add('show');
  document.getElementById('detailCloseBtn').addEventListener('click', closeDetail);
  document.getElementById('detailHeroImg').addEventListener('click', () => openFullscreen(w.id));
  document.getElementById('detailPreviewBtn').addEventListener('click', () => openFullscreen(w.id));
  document.getElementById('detailDownloadBtn').addEventListener('click', () => triggerDownload(w.id));
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
function openDonate(){ document.getElementById('donatePopup').classList.add('show'); }
function closeDonate(){ document.getElementById('donatePopup').classList.remove('show'); }
document.getElementById('donateBtn').addEventListener('click', openDonate);
document.getElementById('footerDonate').addEventListener('click', (e)=>{ e.preventDefault(); openDonate(); });
document.getElementById('closeDonate').addEventListener('click', closeDonate);
document.getElementById('donatePopup').addEventListener('click', (e)=>{ if(e.target.id==='donatePopup') closeDonate(); });
document.querySelectorAll('.copy-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    navigator.clipboard?.writeText(btn.dataset.copy).catch(()=>{});
    btn.textContent = 'Copied!';
    setTimeout(()=>btn.textContent='Copy', 1500);
  });
});
document.getElementById('confirmDonate').addEventListener('click', () => {
  closeDonate();
  const ty = document.getElementById('thankYou');
  ty.classList.add('show');
  setTimeout(()=>ty.classList.remove('show'), 2200);
});

/* ============ INIT ============ */
renderSidebar();
renderGrid();
