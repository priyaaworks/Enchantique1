



document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("contactForm"),t=document.getElementById("successMsg");e.addEventListener("submit",function(n){n.preventDefault();let l=document.getElementById("name").value.trim(),a=document.getElementById("email").value.trim(),s=document.getElementById("message").value.trim();l&&a&&s?(t.innerText=`Thank you, ${l}! Your message has been sent successfully. 💌`,t.style.display="block",e.reset(),setTimeout(()=>{t.style.display="none"},4e3)):(t.style.display="none",alert("Please fill in all fields!"))})});const backBtn=document.querySelector(".back-to-home a");backBtn.addEventListener("click",function(e){let t=confirm("Are you sure you want to go back to the Home page?");t||e.preventDefault()});
  

  // service worker
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worler Registered'))
    .catch(err=> console.log('Service worker registration failed', err));
}
const box = document.querySelector('.box');
let pos = 0;

function animate() {
  pos++;
  box.style.left = pos + 'px';
  if (pos < 300) {
    requestAnimationFrame(animate);
  }
}

animate();