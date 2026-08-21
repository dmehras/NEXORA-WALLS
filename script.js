:root{
    --bg:#0d0d0d;
    --bg-alt:#141416;
    --panel: rgba(255,255,255,0.04);
    --panel-border: rgba(255,255,255,0.08);
    --blue:#00c8ff;
    --purple:#7b5cff;
    --text:#ffffff;
    --text-dim: rgba(255,255,255,0.55);
    --text-dimmer: rgba(255,255,255,0.35);
    --radius: 16px;
    --grad: linear-gradient(135deg,var(--blue),var(--purple));
  }
  *{box-sizing:border-box; margin:0; padding:0;}
  html{scroll-behavior:smooth;}
  body{
    background:var(--bg);
    color:var(--text);
    font-family:'Segoe UI', 'Inter', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    overflow-x:hidden;
  }
  ::selection{background:var(--blue); color:#000;}
  ::-webkit-scrollbar{width:10px;}
  ::-webkit-scrollbar-track{background:var(--bg);}
  ::-webkit-scrollbar-thumb{background:linear-gradient(var(--blue),var(--purple)); border-radius:10px;}
  a{color:inherit; text-decoration:none;}
  button{font-family:inherit; cursor:pointer;}

  /* ============ LANDING PAGE ============ */
  #landing{
    position:fixed; inset:0; z-index:999;
    display:flex; align-items:center; justify-content:center;
    flex-direction:column;
    background: radial-gradient(ellipse at 30% 20%, rgba(123,92,255,0.20), transparent 55%),
                radial-gradient(ellipse at 70% 80%, rgba(0,200,255,0.18), transparent 55%),
                #060608;
    overflow:hidden;
    transition: opacity 1.2s ease, visibility 1.2s;
  }
  #landing.hide{ opacity:0; visibility:hidden; pointer-events:none; }
  .particle{
    position:absolute; border-radius:50%;
    background: radial-gradient(circle, rgba(0,200,255,0.9), rgba(0,200,255,0) 70%);
    filter:blur(1px);
    animation: floatUp linear infinite;
    opacity:0.7;
  }
  .particle:nth-child(3n){ background: radial-gradient(circle, rgba(123,92,255,0.9), rgba(123,92,255,0) 70%); }
  @keyframes floatUp{
    0%{ transform:translateY(10vh) translateX(0); opacity:0; }
    10%{ opacity:0.8; }
    90%{ opacity:0.6; }
    100%{ transform:translateY(-110vh) translateX(30px); opacity:0; }
  }
  .landing-inner{ position:relative; z-index:2; text-align:center; padding:20px; }
  .landing-logo{
    font-size:clamp(56px,12vw,160px);
    font-weight:800;
    letter-spacing:8px;
    background:linear-gradient(90deg,#fff,var(--blue) 45%,var(--purple) 90%);
    -webkit-background-clip:text; background-clip:text; color:transparent;
    filter: blur(14px);
    opacity:0;
    animation: sharpen 1.6s ease forwards 0.2s;
  }
  @keyframes sharpen{
    to{ filter:blur(0); opacity:1; }
  }
  .landing-tag{
    margin-top:18px; font-size:clamp(14px,2vw,20px); color:var(--text-dim);
    letter-spacing:2px; text-transform:uppercase;
    opacity:0; animation: fadeUp 1s ease forwards 1s;
  }
  .landing-sub{
    margin-top:10px; font-size:15px; color:var(--text-dimmer);
    opacity:0; animation: fadeUp 1s ease forwards 1.3s;
  }
  @keyframes fadeUp{
    from{ opacity:0; transform:translateY(14px); }
    to{ opacity:1; transform:translateY(0); }
  }
  #enterBtn{
    margin-top:52px;
    width:180px; height:180px; border-radius:50%;
    border:1px solid rgba(0,200,255,0.4);
    background: radial-gradient(circle at 35% 30%, rgba(0,200,255,0.25), rgba(123,92,255,0.12) 60%, transparent 75%);
    color:#fff; font-size:16px; letter-spacing:4px; font-weight:700;
    display:flex; align-items:center; justify-content:center;
    position:relative;
    opacity:0; animation: fadeUp 1s ease forwards 1.7s;
    transition: transform .4s ease, box-shadow .4s ease;
    box-shadow: 0 0 40px rgba(0,200,255,0.15);
  }
  #enterBtn:hover{
    transform:scale(1.08);
    box-shadow: 0 0 80px rgba(0,200,255,0.45), 0 0 120px rgba(123,92,255,0.3);
  }
  #enterBtn .ripple{
    position:absolute; inset:-2px; border-radius:50%;
    border:1px solid rgba(0,200,255,0.5);
    animation: ripple 2.4s ease-out infinite;
  }
  #enterBtn .ripple:nth-child(2){ animation-delay:0.8s; }
  #enterBtn .ripple:nth-child(3){ animation-delay:1.6s; }
  @keyframes ripple{
    0%{ transform:scale(1); opacity:0.6; }
    100%{ transform:scale(1.6); opacity:0; }
  }

  /* ============ MAIN SITE ============ */
  #site{ max-width:1920px; margin:0 auto; padding:0 40px; }
  header#topbar{
    position:sticky; top:0; z-index:200;
    background:rgba(13,13,13,0.65);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-bottom:1px solid var(--panel-border);
  }
  .topbar-inner{
    max-width:1920px; margin:0 auto; padding:16px 40px;
    display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap;
  }
  .brand{ display:flex; flex-direction:column; }
  .brand-name{
    font-size:34px; font-weight:800; letter-spacing:3px;
    background:linear-gradient(90deg,#fff,var(--blue));
    -webkit-background-clip:text; background-clip:text; color:transparent;
  }
  .brand-sub{ font-size:12px; color:var(--text-dimmer); letter-spacing:1px; margin-top:3px;}
  .topbar-right{ display:flex; align-items:center; gap:14px; flex-wrap:wrap; }
  .search-wrap{ position:relative; }
  .search-wrap input{
    width:260px; padding:10px 40px 10px 16px; border-radius:999px;
    background:var(--panel); border:1px solid var(--panel-border); color:#fff; font-size:14px;
    outline:none; transition:border .3s, box-shadow .3s;
  }
  .search-wrap input:focus{ border-color:var(--blue); box-shadow:0 0 0 3px rgba(0,200,255,0.15); }
  .search-wrap .icon{ position:absolute; right:14px; top:50%; transform:translateY(-50%); opacity:0.6; font-size:14px; }
  .icon-btn{
    width:38px; height:38px; border-radius:50%; border:1px solid var(--panel-border);
    background:var(--panel); display:flex; align-items:center; justify-content:center;
    font-size:16px; transition:all .25s;
  }
  .icon-btn:hover{ border-color:var(--blue); box-shadow:0 0 14px rgba(0,200,255,0.35); transform:translateY(-2px); }
  .pill-btn{
    padding:9px 16px; border-radius:999px; border:1px solid var(--panel-border);
    background:var(--panel); color:#fff; font-size:13px; font-weight:600; transition:all .25s;
    white-space:nowrap;
  }
  .pill-btn:hover, .pill-btn.active{ border-color:transparent; background:var(--grad); box-shadow:0 0 18px rgba(0,200,255,0.4); }

  .layout{ padding:26px 0 60px; }

  /* SIDEBAR TOGGLE TAB */
  #sidebarToggle{
    position:fixed; left:0; top:50%; transform:translateY(-50%);
    z-index:250; background:var(--grad); border:none; color:#fff;
    padding:18px 10px; border-radius:0 14px 14px 0; writing-mode:vertical-rl;
    font-size:12px; font-weight:800; letter-spacing:2px; cursor:pointer;
    box-shadow:0 0 24px rgba(0,200,255,0.4); transition: left .4s ease, box-shadow .3s;
  }
  #sidebarToggle:hover{ box-shadow:0 0 34px rgba(0,200,255,0.65); }
  #sidebarToggle.shifted{ left:260px; }

  #sidebarBackdrop{
    position:fixed; inset:0; z-index:240; background:rgba(4,4,6,0.6); backdrop-filter:blur(4px);
    opacity:0; pointer-events:none; transition:opacity .35s ease;
  }
  #sidebarBackdrop.show{ opacity:1; pointer-events:auto; }

  /* SIDEBAR (off-canvas) */
  aside#sidebar{
    position:fixed; top:0; left:-280px; width:260px; height:100vh; z-index:260;
    background:var(--bg-alt); border-right:1px solid var(--panel-border);
    padding:100px 14px 20px; overflow-y:auto;
    transition:left .4s ease; box-shadow:14px 0 50px rgba(0,0,0,0.5);
  }
  aside#sidebar.open{ left:0; }
  aside#sidebar::-webkit-scrollbar{ width:6px; }
  .cat-item{
    display:flex; align-items:center; gap:10px; padding:10px 12px; border-radius:10px;
    font-size:14px; color:var(--text-dim); cursor:pointer; transition:all .2s; margin-bottom:2px;
  }
  .cat-item:hover{ background:rgba(255,255,255,0.06); color:#fff; transform:translateX(3px); }
  .cat-item.active{ background:linear-gradient(90deg, rgba(0,200,255,0.18), rgba(123,92,255,0.1)); color:#fff; border-left:2px solid var(--blue); }
  .cat-emoji{ width:20px; text-align:center; }
  .sidebar-divider{ height:1px; background:var(--panel-border); margin:12px 0; }

  /* MAIN CONTENT */
  main#content{ flex:1; min-width:0; }
  .filters-row{ display:flex; gap:10px; flex-wrap:wrap; margin-bottom:22px; align-items:center; }
  .filters-row select{
    background:var(--panel); border:1px solid var(--panel-border); color:#fff; padding:9px 12px;
    border-radius:10px; font-size:13px; outline:none;
  }
  .section-title{ font-size:22px; font-weight:800; margin-bottom:4px; }
  .section-sub{ font-size:13px; color:var(--text-dimmer); margin-bottom:18px; }

  .grid{
    column-width:420px; column-gap:24px;
  }
  @media(max-width:900px){ .grid{ column-width:320px; } }
  @media(max-width:640px){ .grid{ column-width:100%; } .search-wrap input{ width:150px; } aside#sidebar{ width:80vw; left:-85vw; } }

  .card{
    break-inside:avoid; margin-bottom:18px; border-radius:var(--radius);
    overflow:hidden; position:relative; background:var(--panel-border);
    border:1px solid var(--panel-border);
    cursor:pointer;
    opacity:0; transform:translateY(24px);
    animation:cardIn .6s ease forwards;
    transition: box-shadow .35s ease, border-color .35s ease;
  }
  .card:hover{ box-shadow:0 0 32px rgba(0,200,255,0.28); border-color:rgba(0,200,255,0.5); }
  @keyframes cardIn{ to{ opacity:1; transform:translateY(0); } }
  .card img{
    width:100%; display:block; transition:transform .6s ease, filter .6s ease;
  }
  .card:hover img{ transform:scale(1.07); }
  .card-overlay{
    position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 45%, transparent 70%);
    opacity:0; transition:opacity .35s ease; display:flex; flex-direction:column; justify-content:flex-end; padding:14px;
  }
  .card:hover .card-overlay{ opacity:1; }
  .card-title{ font-size:16px; font-weight:700; margin-bottom:5px; }
  .card-meta{ font-size:12px; color:var(--text-dim); display:flex; gap:10px; flex-wrap:wrap; }
  .card-dl{
    position:absolute; top:12px; right:12px; width:34px; height:34px; border-radius:50%;
    background:rgba(13,13,13,0.7); backdrop-filter:blur(6px); border:1px solid rgba(255,255,255,0.15);
    display:flex; align-items:center; justify-content:center; font-size:15px;
    opacity:0; transform:translateY(-6px); transition:all .3s;
  }
  .card:hover .card-dl{ opacity:1; transform:translateY(0); }
  .card-dl:hover{ background:var(--grad); box-shadow:0 0 16px rgba(0,200,255,0.5); }
  .card-res-badge{
    position:absolute; top:12px; left:12px; font-size:10px; padding:4px 8px; border-radius:999px;
    background:rgba(13,13,13,0.7); border:1px solid rgba(255,255,255,0.15); letter-spacing:0.5px;
  }
  .skeleton{
    break-inside:avoid; margin-bottom:18px; border-radius:var(--radius); height:280px;
    background:linear-gradient(100deg, #151517 30%, #1d1d20 50%, #151517 70%);
    background-size:200% 100%; animation:shimmer 1.4s infinite;
  }
  @keyframes shimmer{ from{background-position:200% 0;} to{background-position:-200% 0;} }

  .empty-state{ text-align:center; padding:80px 20px; color:var(--text-dimmer); }
  .empty-state .big{ font-size:40px; margin-bottom:12px; }

  /* PAGINATION */
  .pagination{
    display:flex; align-items:center; justify-content:center; gap:8px;
    margin-top:36px; flex-wrap:wrap;
  }
  .page-btn{
    min-width:40px; height:40px; padding:0 12px; border-radius:10px;
    border:1px solid var(--panel-border); background:var(--panel); color:#fff;
    font-size:14px; font-weight:600; transition:all .25s; display:flex; align-items:center; justify-content:center;
  }
  .page-btn:hover:not(:disabled):not(.active){ border-color:var(--blue); box-shadow:0 0 14px rgba(0,200,255,0.3); transform:translateY(-2px); }
  .page-btn.active{ background:var(--grad); border-color:transparent; box-shadow:0 0 18px rgba(0,200,255,0.4); }
  .page-btn:disabled{ opacity:0.35; cursor:not-allowed; }
  .page-ellipsis{ color:var(--text-dimmer); padding:0 4px; font-size:14px; }

  /* SCROLL TOP */
  #scrollTop{
    position:fixed; bottom:28px; right:28px; z-index:150;
    width:48px; height:48px; border-radius:50%; border:1px solid var(--panel-border);
    background:rgba(20,20,22,0.85); backdrop-filter:blur(10px); color:#fff; font-size:18px;
    opacity:0; pointer-events:none; transition:all .3s;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
  }
  #scrollTop.show{ opacity:1; pointer-events:auto; }
  #scrollTop:hover{ box-shadow:0 0 20px rgba(0,200,255,0.5); transform:translateY(-3px); }

  /* ============ WALLPAPER DETAIL MODAL ============ */
  .modal-backdrop{
    position:fixed; inset:0; background:rgba(4,4,6,0.85); backdrop-filter:blur(10px);
    z-index:500; display:flex; align-items:flex-start; justify-content:center;
    opacity:0; pointer-events:none; transition:opacity .35s ease; padding:40px 20px; overflow-y:auto;
  }
  .modal-backdrop.show{ opacity:1; pointer-events:auto; }
  .detail-modal{
    max-width:1100px; width:100%; background:var(--bg-alt); border:1px solid var(--panel-border);
    border-radius:20px; overflow:hidden; transform:translateY(30px); transition:transform .4s ease;
    margin:auto;
  }
  .modal-backdrop.show .detail-modal{ transform:translateY(0); }
  .detail-hero{ position:relative; width:100%; max-height:60vh; overflow:hidden; }
  .detail-hero img{ width:100%; display:block; cursor:zoom-in; }
  .modal-close{
    position:absolute; top:16px; right:16px; width:38px; height:38px; border-radius:50%;
    background:rgba(0,0,0,0.6); border:1px solid rgba(255,255,255,0.2); color:#fff; font-size:18px;
    display:flex; align-items:center; justify-content:center; z-index:5;
  }
  .modal-close:hover{ background:var(--grad); }
  .detail-body{ padding:28px 32px 36px; }
  .detail-top{ display:flex; justify-content:space-between; align-items:flex-start; gap:20px; flex-wrap:wrap; margin-bottom:18px; }
  .detail-title{ font-size:26px; font-weight:800; margin-bottom:8px; }
  .detail-badges{ display:flex; gap:10px; flex-wrap:wrap; font-size:12px; color:var(--text-dim); }
  .detail-badges span{ background:var(--panel); border:1px solid var(--panel-border); padding:4px 10px; border-radius:999px; }
  .detail-actions{ display:flex; gap:10px; flex-wrap:wrap; }
  .btn{
    padding:12px 20px; border-radius:12px; border:none; font-size:14px; font-weight:700;
    display:flex; align-items:center; gap:8px; transition:all .25s;
  }
  .btn-primary{ background:var(--grad); color:#fff; box-shadow:0 0 20px rgba(0,200,255,0.35); }
  .btn-primary:hover{ box-shadow:0 0 34px rgba(0,200,255,0.6); transform:translateY(-2px); }
  .btn-ghost{ background:var(--panel); color:#fff; border:1px solid var(--panel-border); }
  .btn-ghost:hover{ border-color:var(--blue); }
  .btn-ghost.liked{ color:#ff5c8a; border-color:#ff5c8a; }
  .detail-stats{ display:flex; gap:28px; margin:22px 0; flex-wrap:wrap; }
  .stat{ }
  .stat .num{ font-size:20px; font-weight:800; }
  .stat .label{ font-size:11px; color:var(--text-dimmer); text-transform:uppercase; letter-spacing:1px; }
  .detail-desc{ font-size:14px; color:var(--text-dim); line-height:1.7; margin-bottom:18px; }
  .tag-row{ display:flex; gap:8px; flex-wrap:wrap; margin-bottom:26px; }
  .tag{ font-size:12px; padding:6px 12px; border-radius:999px; background:var(--panel); border:1px solid var(--panel-border); color:var(--text-dim); }
  .related-title{ font-size:16px; font-weight:700; margin-bottom:14px; }
  .related-row{ display:flex; gap:14px; overflow-x:auto; padding-bottom:8px; }
  .related-row::-webkit-scrollbar{ height:6px; }
  .related-card{ flex:0 0 150px; border-radius:12px; overflow:hidden; cursor:pointer; border:1px solid var(--panel-border); transition:all .25s; }
  .related-card:hover{ border-color:var(--blue); box-shadow:0 0 16px rgba(0,200,255,0.3); }
  .related-card img{ width:100%; height:100px; object-fit:cover; display:block; }

  /* ============ FULLSCREEN PREVIEW ============ */
  #fullscreenPreview{
    position:fixed; inset:0; background:#000; z-index:900; display:flex; align-items:center; justify-content:center;
    opacity:0; pointer-events:none; transition:opacity .3s ease;
  }
  #fullscreenPreview.show{ opacity:1; pointer-events:auto; }
  #fullscreenPreview img{ max-width:92vw; max-height:92vh; object-fit:contain; transition:transform .25s ease; cursor:zoom-in; }
  #fullscreenPreview img.zoomed{ transform:scale(1.7); cursor:zoom-out; }
  .fs-btn{
    position:absolute; width:46px; height:46px; border-radius:50%; background:rgba(255,255,255,0.06);
    border:1px solid rgba(255,255,255,0.15); color:#fff; font-size:20px; display:flex; align-items:center; justify-content:center;
    backdrop-filter:blur(6px); transition:all .25s;
  }
  .fs-btn:hover{ background:var(--grad); }
  #fsClose{ top:20px; right:20px; }
  #fsPrev{ left:20px; top:50%; transform:translateY(-50%); }
  #fsNext{ right:20px; top:50%; transform:translateY(-50%); }
  .fs-hint{ position:absolute; bottom:20px; left:50%; transform:translateX(-50%); font-size:12px; color:var(--text-dimmer); }

  /* ============ DOWNLOAD TOAST ============ */
  #toast{
    position:fixed; bottom:28px; left:50%; transform:translateX(-50%) translateY(40px);
    background:rgba(20,20,22,0.95); border:1px solid rgba(0,200,255,0.4); padding:14px 24px;
    border-radius:14px; font-size:14px; display:flex; align-items:center; gap:10px; z-index:1000;
    opacity:0; transition:all .4s ease; box-shadow:0 10px 40px rgba(0,0,0,0.5);
  }
  #toast.show{ opacity:1; transform:translateX(-50%) translateY(0); }

  /* ============ FOOTER ============ */
  footer{ border-top:1px solid var(--panel-border); margin-top:20px; padding:60px 0 30px; }
  .footer-grid{ display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:40px; margin-bottom:40px; }
  @media(max-width:900px){ .footer-grid{ grid-template-columns:1fr 1fr; } }
  .footer-logo{ font-size:28px; font-weight:800; margin-bottom:14px; background:linear-gradient(90deg,#fff,var(--blue)); -webkit-background-clip:text; background-clip:text; color:transparent; }
  .footer-about{ font-size:15px; color:var(--text-dim); line-height:1.8; max-width:400px; }
  .footer-heading{ font-size:15px; font-weight:700; letter-spacing:1px; text-transform:uppercase; margin-bottom:18px; color:var(--text-dim); }
  .footer-links a{ display:block; font-size:15px; color:var(--text-dim); margin-bottom:12px; transition:color .2s; }
  .footer-links a:hover{ color:var(--blue); }
  .cf-block{ text-align:center; }
  .cf-heading-box{
    display:inline-block; border:1.5px solid rgba(255,255,255,0.35); border-radius:6px;
    padding:9px 22px; font-size:14px; font-weight:700; letter-spacing:1px; text-transform:uppercase;
    color:#fff; margin-bottom:14px;
  }
  .cf-value a{ font-size:15px; font-weight:600; color:var(--blue); }
  .cf-caption{ font-size:13px; color:var(--text-dim); margin-bottom:16px; }
  .footer-qr img{
    width:100px; height:100px; object-fit:contain; background:#fff; border-radius:12px;
    padding:8px; border:1px solid var(--panel-border); box-shadow:0 0 20px rgba(0,200,255,0.15);
  }
  .footer-links a[href^="mailto"]{ font-size:16px; font-weight:600; color:var(--blue); }
  .footer-bottom{ text-align:center; font-size:13px; color:var(--text-dimmer); padding-top:24px; border-top:1px solid var(--panel-border); }

  /* DONATION */
  .donate-section{ margin:60px 0; }
  .donate-card{
    border-radius:24px; padding:60px 40px; text-align:center; position:relative; overflow:hidden;
    background: radial-gradient(ellipse at 20% 0%, rgba(0,200,255,0.15), transparent 60%),
                radial-gradient(ellipse at 80% 100%, rgba(123,92,255,0.18), transparent 60%),
                var(--panel);
    border:1px solid var(--panel-border);
  }
  .donate-title{ font-size:36px; font-weight:800; margin-bottom:16px; }
  .donate-desc{ font-size:17px; color:var(--text-dim); max-width:620px; margin:0 auto 32px; line-height:1.8; }

  #donateBtn{
    font-size:18px; padding:18px 40px; border-radius:16px;
    background-size:200% 200%;
    background-image: linear-gradient(120deg, var(--blue), var(--purple), var(--blue));
    animation: donateGlow 4s ease infinite, donatePulse 2.4s ease infinite;
  }
  @keyframes donateGlow{
    0%{ background-position:0% 50%; }
    50%{ background-position:100% 50%; }
    100%{ background-position:0% 50%; }
  }
  @keyframes donatePulse{
    0%,100%{ box-shadow:0 0 22px rgba(0,200,255,0.4); }
    50%{ box-shadow:0 0 42px rgba(123,92,255,0.65); }
  }
  #donateBtn:hover{ transform:translateY(-3px) scale(1.04); }

  .donate-popup-backdrop{
    position:fixed; inset:0; background:rgba(4,4,6,0.8); backdrop-filter:blur(10px); z-index:600;
    display:flex; align-items:center; justify-content:center; opacity:0; pointer-events:none; transition:opacity .35s;
  }
  .donate-popup-backdrop.show{ opacity:1; pointer-events:auto; }
  .donate-popup{
    width:100%; max-width:400px; background:var(--bg-alt); border:1px solid var(--panel-border);
    border-radius:20px; padding:32px; text-align:center; position:relative;
    transform:scale(0.9); transition:transform .35s ease;
  }
  .donate-popup-backdrop.show .donate-popup{ transform:scale(1); }
  .qr-box{
    width:180px; height:180px; margin:20px auto; border-radius:16px; background:#fff; padding:10px;
    opacity:0; transform:scale(0.7); animation:qrIn .5s ease forwards .2s;
  }
  @keyframes qrIn{ to{ opacity:1; transform:scale(1); } }
  .qr-box svg{ width:100%; height:100%; }
  .pay-row{ display:flex; align-items:center; justify-content:space-between; background:var(--panel); border:1px solid var(--panel-border); padding:10px 14px; border-radius:10px; margin-bottom:10px; font-size:13px; }
  .copy-btn{ background:none; border:none; color:var(--blue); font-size:12px; font-weight:700; }

  .thank-you{ position:fixed; inset:0; z-index:700; display:flex; align-items:center; justify-content:center; opacity:0; pointer-events:none; transition:opacity .4s; background:rgba(4,4,6,0.7); backdrop-filter:blur(8px); }
  .thank-you.show{ opacity:1; pointer-events:auto; }
  .thank-you-box{ text-align:center; }
  .thank-you-box .emoji{ font-size:60px; animation:pop .6s ease; }
  @keyframes pop{ 0%{transform:scale(0);} 60%{transform:scale(1.2);} 100%{transform:scale(1);} }
  .thank-you-box h3{ margin-top:16px; font-size:22px; }

  .visually-hidden-label{ position:absolute; left:-9999px; }
  @media (prefers-reduced-motion: reduce){
    *{ animation-duration:0.01ms !important; animation-iteration-count:1 !important; transition-duration:0.01ms !important; }
  }

/* ============ PREMIUM WALLPAPERS ============ */
.premium-card-btn{
  background:linear-gradient(135deg,#ffb300,#ff6a00) !important;
  border-color:rgba(255,255,255,.35) !important;
  box-shadow:0 0 18px rgba(255,140,0,.35);
}
.premium-card-btn:hover{
  box-shadow:0 0 24px rgba(255,140,0,.65) !important;
}
