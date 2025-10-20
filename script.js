// Go Move Smart — interacciones
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if(navToggle && navMenu){
  navToggle.addEventListener('click',()=>{
    const open = navMenu.classList.toggle('show');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

const themeToggle = document.getElementById('themeToggle');
if(themeToggle){
  const applyTheme = () => {
    const mode = localStorage.getItem('gomove-theme') || 'light';
    document.body.classList.toggle('dark', mode === 'dark');
  };
  applyTheme();
  themeToggle.addEventListener('click',()=>{
    const current = localStorage.getItem('gomove-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    localStorage.setItem('gomove-theme', next);
    applyTheme();
  });
}

function sendWhatsApp(e){
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const sector = document.getElementById('sector').value.trim();
  const motivo = document.getElementById('motivo').value.trim();
  const msg = `Hola Go Move, soy ${nombre}. Sector: ${sector}. Motivo: ${motivo}. ¿Tienen disponibilidad para una sesión a domicilio?`;
  window.open(`https://wa.me/56984200185?text=${encodeURIComponent(msg)}`,'_blank','noopener');
  return false;
}

function calcKM(e){
  e.preventDefault();
  const d = parseFloat(document.getElementById('distancia').value || '0');
  const base = parseInt(document.getElementById('sesionBase').value || '23000', 10);
  const vk = parseInt(document.getElementById('valorKM').value || '107', 10);
  const totalKM = d * 2; // ida y vuelta
  const costoKM = Math.round(totalKM * vk);
  const total = base + costoKM;
  const out = document.getElementById('calcSalida');
  out.textContent = `Distancia total: ${totalKM.toFixed(1)} km · Costo por km: $${costoKM.toLocaleString('es-CL')} · Total sesión: $${total.toLocaleString('es-CL')} CLP`;
  return false;
}

function leadCapture(e){
  e.preventDefault();
  const email = document.getElementById('leadEmail').value.trim();
  if(!email) return false;
  const subject = 'Suscripción tips Go Move';
  const body = `Hola Felipe, me gustaría recibir tus tips semanales. Mi correo es: ${email}`;
  window.location.href = `mailto:kinepromesasñuble@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return false;
}

// Encuadrado links
const btnEncuadrado = document.getElementById('btnEncuadrado');
const btnEncuadrado2 = document.getElementById('btnEncuadrado2');
const stickyEncuadrado = document.getElementById('stickyEncuadrado');
const openEncuadrado = (e)=>{
  e.preventDefault();
  if(typeof ENCUADRADO_URL === 'string' && ENCUADRADO_URL.startsWith('http'))
    window.open(ENCUADRADO_URL,'_blank','noopener');
  else alert('Reemplaza ENCUADRADO_URL en index.html por tu enlace real de Encuadrado.');
};
[btnEncuadrado, btnEncuadrado2, stickyEncuadrado].forEach(el=> el && el.addEventListener('click', openEncuadrado));

// Comprar buttons (MercadoPago/Checkout)
document.querySelectorAll('.buy-btn').forEach(btn=>{
  btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const link = btn.getAttribute('data-link-mercadopago');
    if(link && link !== '#'){ window.open(link,'_blank','noopener'); }
    else { alert('Pega tu link de pago de MercadoPago/Checkout en data-link-mercadopago.'); }
  });
});

// Basic analytics placeholder
console.log('Go Move Smart loaded');
