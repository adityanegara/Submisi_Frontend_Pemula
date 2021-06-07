const STORAGE_KEY = "BOOKSHELF_APPS";
let books = [];

const isStorageExist = () =>{
    if(typeof(Storage) === undefined){
        alert("Browser Kamu tidak mendukung local storage");
    }else{
        return true;
    }
}

const changeComplegeStatus = (bookId) =>{
    books.forEach(book => {
        if(book.id.toString() == bookId){
            book.isComplete = !book.isComplete;
        }
    });  
}

const deleteBook = (bookId) =>{
    books = books.filter(book=> book.id != bookId);
}




const loadBooksFromStorage = () =>{
    const serializedData = localStorage.getItem(STORAGE_KEY);
    if(serializedData != ""){
        let data = JSON.parse(serializedData);
        if(data !== null){
            books = data;
        }
    }
}

const isKeyExist = (key) =>{
    if(localStorage.getItem(key) === null){
        return false;
    }else{
        return true;
    }
}

const saveToLocalStorage = () =>{
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
}

const renderBooks = () =>{
    emptyContainer();
    books.forEach(book => {
        if(book.isComplete != true){
            toReadContainer.innerHTML += insertBookElement(book);
        }else{
            finishReadContainer.innerHTML += insertBookElement(book);
        }
    });
}

const  emptyContainer =() =>{
    toReadContainer.innerHTML = "";
    finishReadContainer.innerHTML = "";
}

const insertBookElement = (book) =>{
    if(book.isComplete != true){
        return `<div class="card mt-3 bg-light-gray border-0"  >
                    <div class="card-body">
                        <div class="float-start">
                            <h5 class="card-title font-w-700">${book.title}</h5>
                            <h6 class="card-subtitle mt-2 text-muted">By ${book.author}(${book.year})</h6>
                        </div>
                        <div class="float-end mt-2">
                            <button onClick = "changeFinishStatus(this)" data-id="${book.id}" class="btn  btn-green ">Finish</button>
                            <button onClick = "openEditModal(this)" class="btn modal-edit-button btn-secondary-green">Edit</button>
                            <button onClick = "openDeleteModal(this)" data-title  = "${book.title}" data-id="${book.id}" class="btn modal-delete-button btn-secondary-green">Delete</button>
                        </div>
                    </div>
             </div>`
    }else{
        return `<div class="card mt-3 bg-light-gray border-0"  >
                    <div class="card-body">
                        <div class="float-start">
                            <h5 class="card-title font-w-700">${book.title}</h5>
                            <h6 class="card-subtitle mt-2 text-muted">By ${book.author}(${book.year})</h6>
                        </div>
                        <div class="float-end mt-2">
                            <button onClick = "changeFinishStatus(this)" data-id="${book.id}"  class="btn  btn-green ">Unfinish</button>
                            <button onClick = "openEditModal(this)" class="btn modal-edit-button btn-secondary-green">Edit</button>
                            <button onClick = "openDeleteModal(this)" data-title  = "${book.title}" data-id="${book.id}" class="btn modal-delete-button btn-secondary-green">Delete</button>
                        </div>
                    </div>
                </div>`
    }
  
}
