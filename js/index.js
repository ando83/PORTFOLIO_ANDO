            // Scroll Navbar(changement couleur)//
const nav = document.querySelector('.navBtn')
const header = document.querySelector('header');
let height = header.clientHeight;
window.addEventListener("scroll", () =>{
  if(window.scrollY > height){
	  nav.classList.add('scroll');
  }
  else{
   nav.classList.remove('scroll')
  } 
});

              //Animation texte au scroll//
window.addEventListener("scroll",()=>{
	let text = document.querySelector('.paragraphe1');
	let textPosition = text.getBoundingClientRect().top;
	let windowPosition = window.innerHeight;
    if(textPosition<windowPosition){
		text.classList.add('active');
	}else{
		text.classList.remove('active');
	}
})

window.addEventListener("scroll",()=>{
	let text = document.querySelector('.paragraphe2');
	let textPosition = text.getBoundingClientRect().top;
	let windowPosition = window.innerHeight;
    if(textPosition<windowPosition){
		text.classList.add('active1');
	}else{
		text.classList.remove('active1');
	}
})

              // PORTFOLIO //
