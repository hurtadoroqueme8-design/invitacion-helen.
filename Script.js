const target = new Date("2026-10-03T19:00:00-05:00").getTime();
const $ = id => document.getElementById(id);

function updateCountdown(){
  const diff = target - Date.now();
  if(diff <= 0){
    ["days","hours","minutes","seconds"].forEach(id => $(id).textContent="00");
    return;
  }
  const d = Math.floor(diff/86400000);
  const h = Math.floor(diff/3600000)%24;
  const m = Math.floor(diff/60000)%60;
  const s = Math.floor(diff/1000)%60;
  $("days").textContent = String(d).padStart(2,"0");
  $("hours").textContent = String(h).padStart(2,"0");
  $("minutes").textContent = String(m).padStart(2,"0");
  $("seconds").textContent = String(s).padStart(2,"0");
}

setInterval(updateCountdown,1000);
updateCountdown();

$("openBtn").addEventListener("click",()=>{
  $("welcome").style.display="none";
  $("invitation").classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
});

const audio = $("music");

$("musicBtn").addEventListener("click", async ()=>{
  try{
    if(audio.paused){
      await audio.play();
      $("musicBtn").textContent="♫ Pausar música";
    }else{
      audio.pause();
      $("musicBtn").textContent="♫ Activar música";
    }
  }catch(e){
    alert("Añade el archivo evangeline.mp3 a esta carpeta y vuelve a pulsar el botón.");
  }
});
