const modalEditBackground = document.querySelector(".modal-edit-background");
const modalEditClose = document.querySelector(".modal-edit-close");
const modalDeleteBackground = document.querySelector(".modal-delete-background");
const modalDeleteClose = document.querySelector(".modal-delete-close");

modalEditClose.addEventListener("click", function(){
  modalEditBackground.classList.remove('modal-edit-background-active');
})

modalDeleteClose.addEventListener("click", function(){
  modalDeleteBackground.classList.remove('modal-delete-background-active');
})

const openEditModal = () =>{
  modalEditBackground.classList.add('modal-edit-background-active');
}

const openDeleteModal = () =>{
  modalDeleteBackground.classList.add('modal-delete-background-active');  
}