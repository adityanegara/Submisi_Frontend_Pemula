const formCreate = document.getElementById("createForm");
const BOOK_TITLE_CREATE_ID = "bookTitleCreate";
const BOOK_TITLE_AUTHOR_ID = "bookAuthorCreate";
const BOOK_YEAR_CREATE_ID = "releaseYearCreate";
const BOOK_YEAR_COMPLETE_ID = "alreadyReadCreate";
const toReadContainer = document.getElementById("toReadContainer");
const finishReadContainer = document.getElementById("finishReadContainer");
const deleteButton = document.querySelector("#delete-button"); 
const formEdit = document.getElementById("edit-form");

const changeFinishStatus = (element) =>{
    const bookId = element.dataset.id;
    changeComplegeStatus(bookId);
    saveToLocalStorage();
    renderBooks();
}

deleteButton.addEventListener("click", function(){
    modalDeleteBackground.classList.remove('modal-delete-background-active');
    const bookId = this.dataset.id;
    deleteBook(bookId);
    saveToLocalStorage();
    renderBooks();
  })
  


formEdit.addEventListener("submit", (e)=>{
    e.preventDefault();
    modalEditBackground.classList.remove('modal-edit-background-active');
    const book = {
        id: document.getElementById("book-id-edit").value,
        title :  document.getElementById("book-title-edit").value,
        author :  document.getElementById("book-author-edit").value,
        year :  document.getElementById("book-year-edit").value
    }
    editBook(book);
    saveToLocalStorage();
    renderBooks();
})

formCreate.addEventListener("submit", (e)=>{
    e.preventDefault();
    const book = {
        id: +new Date(),
        title :  document.getElementById(BOOK_TITLE_CREATE_ID).value,
        author :  document.getElementById(BOOK_TITLE_AUTHOR_ID).value,
        year :  document.getElementById(BOOK_YEAR_CREATE_ID).value,
        isComplete : document.getElementById(BOOK_YEAR_COMPLETE_ID).checked
    }
    books.push(book);
    saveToLocalStorage();
    renderBooks();
})