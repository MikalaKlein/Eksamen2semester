// JavaScript Document
var modal = document.getElementById('simpleModal');
// Åbner modal knappen (laver HTML obejkter om til JavaScript objekter. )
var modalBtn = document.getElementById('modalBtn');
// Lukker modal knappen (laver HTML obejkter om til JavaScript objekter. ) 
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Venter på handling fra brugeren 
modalBtn.addEventListener ('click', openModal);

// Venter på handling fra brugeren  
closeBtn.addEventListener ('click', closeModal);

// Venter på handling fra brugeren 
window.addEventListener('click', outsideClick);


// Åbner modalen og displayer indholdet på siden og displayer det som "grid".  
function openModal() {
	modal.style.display = 'grid';
}

//Lukker modalen og display sættes til none, så modalen ikke er synlig på siden.  
function closeModal(){
	modal.style.display ='none';
}

// Lukker modalen og display sættes til none, så modalen ikke er synlig på siden. Funktionen sker, hvis brugeren klikker udenfor modalen.
function outsideClick(e){
	if(e.target == modal){
	modal.style.display = 'none';
  }
}