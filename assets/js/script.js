

const bookTitleInput = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const releaseYear = document.getElementById("releaseYear");
const alreadyRead = document.getElementById("alreadyRead");
const createForm = document.getElementById("createForm");


document.addEventListener("DOMContentLoaded", function(){

  
  createForm.addEventListener("submit", function(event){
    event.preventDefault();
    
  });
});

const modalEditButton = document.querySelector(".modal-edit-button");
const modalEditBackground = document.querySelector(".modal-edit-background");
const modalEditClose = document.querySelector(".modal-edit-close");
modalEditButton.addEventListener("click", function(){
  modalEditBackground.classList.add('modal-edit-background-active');
})
modalEditClose.addEventListener("click", function(){
  modalEditBackground.classList.remove('modal-edit-background-active');
})
const modalDeleteButton = document.querySelector(".modal-delete-button");
const modalDeleteBackground = document.querySelector(".modal-delete-background");
const modalDeleteClose = document.querySelector(".modal-delete-close");

modalDeleteButton.addEventListener("click", function(){
  modalDeleteBackground.classList.add('modal-delete-background-active');  
})

modalDeleteClose.addEventListener("click", function(){
  modalDeleteBackground.classList.remove('modal-delete-background-active');
})