function cerrarPanel(){
    let panel = document.getElementById('panel-lateral');
    panel.classList.toggle('active');
}


// FUNCION MODAL BROSS
const openModal = document.querySelector(".modal-bross");
const modal = document.querySelector(".m-bross");
const closeModal = document.querySelector(".close-bross");

openModal.addEventListener('click', (e)=>{
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

// 

// FUNCION MODAL GUARDIANES
const openModal2 = document.querySelector(".modal-guardianes");
const modal2 = document.querySelector(".m-guardianes3");
const closeModal2 = document.querySelector(".close-guar");

openModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.add('modal--show');
});

closeModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.remove('modal--show');
});

//
// modal flash 
const openModal1 = document.querySelector(".modal-flash");
const modal1 = document.querySelector(".m-flash");
const closeModal1 = document.querySelector(".close-flash");

openModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.add('modal--show');
});

closeModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.remove('modal--show');
});

// modal barbuie
const openModal3 = document.querySelector(".modal-barbie");
const modal3 = document.querySelector(".m-barbie");
const closeModal3 = document.querySelector(".close-barbie");

openModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.add('modal--show');
});

closeModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.remove('modal--show');
});

// modal megalodon 

const openModal4 = document.querySelector(".modal-megalodon ");
const modal4 = document.querySelector(".m-megalodon");
const closeModal4 = document.querySelector(".close-megalodon");

openModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.add('modal--show');
});

closeModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.remove('modal--show');
});

