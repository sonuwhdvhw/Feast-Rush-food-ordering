/* ============================================
   APP.JS — Shared state, auth, cart, utils
   ============================================ */
const ADMIN_EMAIL    = 'sonuch2288@gmail.com';
const ADMIN_PASSWORD = 'Saqlainch@22';
const APP_NAME       = 'FeastRush';

const AppState = {
  get currentUser(){ const u=localStorage.getItem('fr_user'); return u?JSON.parse(u):null; },
  setUser(u){ u?localStorage.setItem('fr_user',JSON.stringify(u)):localStorage.removeItem('fr_user'); },
  get cart(){ const c=localStorage.getItem('fr_cart'); return c?JSON.parse(c):[]; },
  setCart(c){ localStorage.setItem('fr_cart',JSON.stringify(c)); updateCartBadges(); },
  get orders(){ const o=localStorage.getItem('fr_orders'); return o?JSON.parse(o):[]; },
  addOrder(o){ const orders=this.orders; orders.unshift(o); localStorage.setItem('fr_orders',JSON.stringify(orders)); },
  get users(){ const u=localStorage.getItem('fr_users'); return u?JSON.parse(u):[]; },
  addUser(u){ const users=this.users; users.push(u); localStorage.setItem('fr_users',JSON.stringify(users)); },
};

function login(email, password){
  if(email===ADMIN_EMAIL&&password===ADMIN_PASSWORD){
    const u={id:'admin',name:'Admin',email:ADMIN_EMAIL,role:'admin'};
    AppState.setUser(u); return {success:true,user:u};
  }
  const u=AppState.users.find(u=>u.email===email&&u.password===password);
  if(u){
    const s={id:u.id,name:u.name,email:u.email,role:'user',phone:u.phone};
    AppState.setUser(s); return {success:true,user:s};
  }
  return {success:false,error:'Invalid email or password.'};
}

function register(name, email, password, phone){
  if(email===ADMIN_EMAIL) return {success:false,error:'Email already in use.'};
  if(AppState.users.find(u=>u.email===email)) return {success:false,error:'Email already registered.'};
  const u={id:'u_'+Date.now(),name,email,password,phone,role:'user',createdAt:new Date().toISOString()};
  AppState.addUser(u);
  const s={id:u.id,name,email,role:'user',phone};
  AppState.setUser(s); return {success:true,user:s};
}

function logout(){ AppState.setUser(null); window.location.href='index.html'; }

function requireAuth(redirect=true){
  if(!AppState.currentUser){
    if(redirect) window.location.href='auth.html?redirect='+encodeURIComponent(window.location.href);
    return false;
  }
  return true;
}

function requireAdmin(){
  const u=AppState.currentUser;
  if(!u||u.role!=='admin'){ window.location.href='index.html'; return false; }
  return true;
}

// CART
function addToCart(item){
  const cart=AppState.cart;
  const ex=cart.find(i=>i.id===item.id);
  if(ex) ex.qty+=1; else cart.push({...item,qty:1});
  AppState.setCart(cart);
  showToast(item.name+' added to cart 🛒','success');
}
function removeFromCart(id){ AppState.setCart(AppState.cart.filter(i=>i.id!==id)); }
function updateQty(id,delta){
  const cart=AppState.cart;
  const item=cart.find(i=>i.id===id);
  if(!item) return;
  item.qty+=delta;
  AppState.setCart(item.qty<=0?cart.filter(i=>i.id!==id):cart);
}
function clearCart(){ AppState.setCart([]); }
function getCartTotal(){ return AppState.cart.reduce((s,i)=>s+i.price*i.qty,0); }
function getCartCount(){ return AppState.cart.reduce((s,i)=>s+i.qty,0); }
function updateCartBadges(){
  const n=getCartCount();
  document.querySelectorAll('.cart-badge').forEach(el=>{
    el.textContent=n; el.style.display=n>0?'flex':'none';
  });
}

// TOAST
function showToast(msg,type='info',dur=3000){
  let t=document.getElementById('global-toast');
  if(!t){ t=document.createElement('div'); t.id='global-toast'; t.className='toast'; document.body.appendChild(t); }
  const icons={success:'✅',error:'❌',info:'ℹ️',warning:'⚠️'};
  t.innerHTML=`<span>${icons[type]||'ℹ️'}</span><span>${msg}</span>`;
  t.className=`toast ${type}`;
  requestAnimationFrame(()=>t.classList.add('show'));
  clearTimeout(t._t);
  t._t=setTimeout(()=>t.classList.remove('show'),dur);
}

// NAVBAR
function buildNavbar(active=''){
  const user=AppState.currentUser;
  const n=getCartCount();
  const html=`
    <nav class="navbar" id="main-navbar">
      <a href="index.html" class="nav-logo">
        <div class="logo-icon">🍔</div>
        Feast<span class="logo-rush">Rush</span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html" class="${active==='home'?'active':''}">Home</a></li>
        <li><a href="restaurants.html" class="${active==='restaurants'?'active':''}">Restaurants</a></li>
        <li><a href="index.html#how-it-works">How It Works</a></li>
        ${user&&user.role==='admin'?`<li><a href="admin.html" class="${active==='admin'?'active':''}">Dashboard</a></li>`:''}
      </ul>
      <div class="nav-actions">
        <a href="cart.html" class="btn btn-outline btn-sm cart-btn">
          🛒 Cart
          <span class="cart-badge" style="display:${n>0?'flex':'none'}">${n}</span>
        </a>
        ${user
          ?`<span style="font-size:.85rem;color:var(--text-m)">Hi, ${user.name.split(' ')[0]}</span>
            <button class="btn btn-ghost btn-sm" onclick="logout()">Sign Out</button>`
          :`<a href="auth.html" class="btn btn-outline btn-sm">Sign In</a>
            <a href="auth.html?tab=signup" class="btn btn-primary btn-sm">Get Started</a>`
        }
      </div>
    </nav>`;
  const c=document.getElementById('navbar-container');
  if(c) c.innerHTML=html;
  window.addEventListener('scroll',()=>{
    const nav=document.getElementById('main-navbar');
    if(nav) nav.classList.toggle('scrolled',window.scrollY>60);
  });
}

// SCROLL ANIMATIONS
function initScrollAnimations(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
  },{threshold:.1});
  document.querySelectorAll('.animate-on-scroll').forEach(el=>obs.observe(el));
}

// UTILS
function formatCurrency(n){ return '$'+n.toFixed(2); }
function formatDate(iso){ return new Date(iso).toLocaleString('en-US',{month:'short',day:'numeric',year:'numeric',hour:'2-digit',minute:'2-digit'}); }
function generateOrderId(){ return 'FR-'+Date.now().toString(36).toUpperCase(); }

// FLAG MAP
const FLAG_MAP={USA:'🇺🇸',UK:'🇬🇧',Japan:'🇯🇵',India:'🇮🇳',Italy:'🇮🇹',France:'🇫🇷',Mexico:'🇲🇽',China:'🇨🇳',Thailand:'🇹🇭',Australia:'🇦🇺',Brazil:'🇧🇷',UAE:'🇦🇪',Spain:'🇪🇸',Turkey:'🇹🇷'};

document.addEventListener('DOMContentLoaded',()=>{ updateCartBadges(); initScrollAnimations(); });
