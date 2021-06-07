const formCreate = document.getElementById("createForm");
const BOOK_TITLE_CREATE_ID = "bookTitleCreate";
const BOOK_TITLE_AUTHOR_ID = "bookAuthorCreate";
const BOOK_YEAR_CREATE_ID = "releaseYearCreate";
const BOOK_YEAR_COMPLETE_ID = "alreadyReadCreate";
const toReadContainer = document.getElementById("toReadContainer");
const finishReadContainer = document.getElementById("finishReadContainer");


const changeFinishStatus = (element) =>{
    const bookId = element.dataset.id;
    changeComplegeStatus(bookId);
    saveToLocalStorage();
    renderBooks();
}

const moveToUnfinish = () =>{

}

formCreate.addEventListener("submit", (e)=>{
    event.preventDefault();
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