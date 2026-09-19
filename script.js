const audio=document.getElementById('music');
const btn=document.getElementById('musicBtn');
const mini=document.getElementById('musicMini');
const text=document.getElementById('musicText');
const surprise=document.getElementById('surpriseBtn');
const note=document.getElementById('hiddenNote');

async function toggleMusic(){
  if(audio.paused){
    try{
      await audio.play();
      btn.classList.add('playing');
      text.textContent='Pause his lullaby';
      mini.textContent='Ⅱ';
    }catch(e){text.textContent='Tap again to play';}
  }else{
    audio.pause();
    btn.classList.remove('playing');
    text.textContent='Play his lullaby';
    mini.textContent='♫';
  }
}
btn.addEventListener('click',toggleMusic);
mini.addEventListener('click',toggleMusic);
surprise.addEventListener('click',()=>{
  note.classList.toggle('show');
  surprise.textContent=note.classList.contains('show')?'Close the surprise ✦':'Open your little surprise ✦';
});
