/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
const modalControler = document.getElementById('modal__controler')
const modalOpen = document.getElementById('button__modal-open')
const modalClose = document.getElementById('button__modal-close')

function closeModal () {

    modalControler.style.display = 'none';

}

function openModal () {

    modalControler.style.display = 'flex';
    
}

function closeModalBody(event) {

    if(event.target == modalControler){
        closeModal()
    }
}

window.addEventListener('click', closeModalBody)
modalOpen.addEventListener('click', openModal)
modalClose.addEventListener('click', closeModal)

