document.addEventListener("DOMContentLoaded", function(){
  // localStorage.removeItem(STORAGE_KEY);
  if(isStorageExist()){
    if(isKeyExist(STORAGE_KEY)){
        loadBooksFromStorage();
        renderBooks();
    }else{
        console.log("Create New Storage");
        localStorage.setItem(STORAGE_KEY, "");
    }
  }
})