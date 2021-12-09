// Scroll Navbar
var navbar = document.querySelector("nav");
window.addEventListener("scroll",function(){
  if (window.pageYOffset > 40){
	navbar.classList.add('scrolled', 'shadow-3');                  
	navbar.classList.remove('pt-4');                  
  }else{
	navbar.classList.remove('scrolled', 'shadow-3');
	navbar.classList.add('pt-4');
  };
});

// Scroll to Top
var myBtn = document.querySelector(".scrollTop");
window.addEventListener("scroll",function(){
  if (window.pageYOffset > 800){
	myBtn.classList.add('scrollTop-active');                  
  }else{
	myBtn.classList.remove('scrollTop-active');
  };
});