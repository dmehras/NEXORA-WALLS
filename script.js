/* ============ DATA ============ */
const CATEGORIES = [
  {id:'featured', label:'Featured', icon:'⭐'},
  {id:'trending', label:'Trending', icon:'🔥'},
  {id:'newest', label:'Newest', icon:'🆕'},
  {id:'anime', label:'Anime', icon:'🎌'},
  {id:'gaming', label:'Gaming', icon:'🎮'},
  {id:'movies', label:'Movies', icon:'🎬'},
  {id:'tvshows', label:'TV Shows', icon:'📺'},
  {id:'superheroes', label:'Superheroes', icon:'🦸'},
  {id:'fantasy', label:'Fantasy', icon:'🐉'},
  {id:'cars', label:'Cars', icon:'🚗'},
  {id:'bikes', label:'Bikes', icon:'🏍'},
  {id:'space', label:'Space', icon:'🌌'},
  {id:'nature', label:'Nature', icon:'🌿'},
  {id:'landscapes', label:'Landscapes', icon:'🏔'},
  {id:'animals', label:'Animals', icon:'🐺'},
  {id:'technology', label:'Technology', icon:'💻'},
  {id:'abstract', label:'Abstract', icon:'🎨'},
  {id:'minimal', label:'Minimal', icon:'🟣'},
  {id:'dark', label:'Dark', icon:'🟢'},
  {id:'neon', label:'Neon', icon:'💜'},
  {id:'aesthetic', label:'Aesthetic', icon:'❤️'},
  {id:'seasonal', label:'Seasonal', icon:'🎄'},
];

const TITLE_WORDS = {
  anime:['Shadow Blade Hero','Ultra Instinct Warrior','Sakura Nightfall','Crimson Katana','Spirit Realm'],
  gaming:['Cyber Arena','Neon Battleground','Pixel Uprising','Quantum Raid','Void Protocol'],
  movies:['Midnight Reel','Silver Screen Dusk','Cinematic Horizon','Noir Skyline','Film Grain City'],
  tvshows:['Binge Night','Episode Zero','Series Finale Glow','Season Premiere','Streaming Dusk'],
  superheroes:['Iron Skyline','Caped Guardian','Vigilante Dawn','Hero Ascend','Justice Nightfall'],
  fantasy:['Dragon Peak','Enchanted Ruins','Mystic Forest','Ancient Sorcery','Elven Twilight'],
  cars:['Turbo Nightdrive','Chrome Velocity','Street Racer Dusk','Hypercar Skyline','Midnight Circuit'],
  bikes:['Chrome Roadster','Desert Rider','Night Highway','Café Racer Glow','Speed Trail'],
  space:['Nebula Drift','Galactic Horizon','Starfield Odyssey','Orbit Zero','Cosmic Bloom'],
  nature:['Emerald Canopy','Misty Valley','Golden Meadow','Whispering Pines','Wild Bloom'],
  landscapes:['Alpine Sunrise','Coastal Cliffside','Desert Mirage','Highland Fog','Canyon Glow'],
  animals:['Lone Wolf Dusk','Arctic Fox Trail','Falcon Flight','Tiger Eyes','Wild Stallion'],
  technology:['Circuit Bloom','Data Stream Core','Quantum Core','Synth Interface','Neural Grid'],
  abstract:['Fluid Motion','Chroma Wave','Geometric Drift','Ink Bloom','Prism Flow'],
  minimal:['Quiet Space','Simple Form','Negative Space','Clean Slate','Soft Contrast'],
  dark:['Obsidian Depths','Void Silence','Blackout Glow','Shadow Field','Eclipse Mode'],
  neon:['Neon Pulse City','Electric Dreams','Synthwave Grid','Retro Neon Drift','Vapor Nights'],
  aesthetic:['Golden Hour Mood','Soft Pastel Dream','Vintage Frame','Cozy Nostalgia','Dreamy Haze'],
  seasonal:['Winter Frost Glow','Autumn Ember','Spring Bloom Field','Summer Heatwave','Snowfall Dusk'],
  featured:['Signature Series','Studio Pick','Editors Choice','Premium Select','Curated Frame'],
  trending:['Viral Wave','Rising Frame','Popular Pulse','Trend Setter','Hot Right Now'],
  newest:['Fresh Drop','Just Released','New Arrival','Latest Frame','Recently Added'],
};

function seedRandom(seed){
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function buildWallpapers(){
  const list = [];
  const pool = ['anime','gaming','movies','tvshows','superheroes','fantasy','cars','bikes','space','nature','landscapes','animals','technology','abstract','minimal','dark','neon','aesthetic','seasonal'];
  const resolutions = ['8K','4K','4K','4K','1440p','1080p'];
  const orientations = ['landscape','landscape','portrait','landscape','square'];
  let id = 1;
  pool.forEach((cat, ci) => {
    const words = TITLE_WORDS[cat];
    words.forEach((title, wi) => {
      const seed = id * 17;
      const r = seedRandom(seed);
      const res = resolutions[Math.floor(seedRandom(seed+1)*resolutions.length)];
      const orient = orientations[Math.floor(seedRandom(seed+2)*orientations.length)];
      const w = orient === 'portrait' ? 800 : orient === 'square' ? 900 : 1200;
      const h = orient === 'portrait' ? 1200 : orient === 'square' ? 900 : 800;
      const downloads = Math.floor(seedRandom(seed+3) * 48000) + 200;
      const views = downloads + Math.floor(seedRandom(seed+4) * 90000);
      const daysAgo = Math.floor(seedRandom(seed+5) * 300);
      const sizeMB = (seedRandom(seed+6) * 9 + 1.2).toFixed(1);
      const imgSeed = `nexora-${cat}-${wi}-${id}`;
      list.push({
        id,
        title,
        category: cat,
        featured: ci % 4 === 0,
        trending: downloads > 30000,
        resolution: res,
        orientation: orient,
        img: `https://picsum.photos/seed/${imgSeed}/${w}/${h}`,
        downloads,
        views,
        daysAgo,
        size: sizeMB + ' MB',
        tags: [cat, res.toLowerCase(), orient, 'desktop', '4k wallpaper'],
      });
      id++;
    });
  });
  return list;
}

const WALLPAPERS = buildWallpapers();

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
      window.scrollTo({top:0, behavior:'smooth'});
    });
  });
}

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
    if(btn.dataset.sort==='downloads') state.category='trending';
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
