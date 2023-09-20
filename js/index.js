const hamburger = document.getElementById("hamburger");
const moreBtns = document.getElementsByClassName("see-more");
const lessBtns = document.getElementsByClassName("see-less");

Array.from(moreBtns).map((btn)=>{
  btn.addEventListener("click", seeMoreEveLis)
})

Array.from(lessBtns).map((btn)=>{
  btn.addEventListener("click", seeLessEveLis)
})

hamburger.addEventListener("click", burgerClicked)

function seeMoreEveLis(ev){
  const groupId = ev.target.dataset.group
  console.log(groupId, `is the group ID ${groupId}`)
  const el = document.getElementById(groupId);
  el.classList.remove("no-height");
  el.classList.add("full-height");
  ev.target.classList.toggle("fade")
}

function seeLessEveLis(ev){
  const groupId = ev.target.dataset.group
  const counterpartId = ev.target.dataset.counterpart
  const el = document.getElementById(groupId);
  const counterpart = document.getElementById(counterpartId);
  el.classList.remove("full-height");
  el.classList.add("no-height");
  setTimeout(()=>counterpart.classList.toggle("fade"), 1000)
}

function burgerClicked(ev){
  const replacement = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/></svg>`
  const burger = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`
  const menuId = ev.target.parentElement.dataset.targ;
  // console.log(menuId, "<========Menu ID")
  const menu = document.getElementById(menuId);
  if(menu.classList.contains("no-height")){
    menu.classList.replace("no-height", "full-height");
    ev.target.parentElement.innerHTML = replacement;
  }else{
    menu.classList.replace("full-height", "no-height");
    ev.target.parentElement.innerHTML = burger;
  }
}