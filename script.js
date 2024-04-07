const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}
 function render(){
    let libraryEl=document.querySelector(".libraryBook")
    libraryEl.innerHTML=" "
    for(let i=0;i<myLibrary.length;i++){
        console.log(myLibrary[i])

        let book=myLibrary[i]
        let bookEl=document.createElement("div");
        bookEl.innerHTML=`
        <div class="cards">
        <div class="card-header">
        <h3 class= "title">${book.title}</h3>

        <h5 class="author">${book.author}</h5>
        </div>
        <div class="card-body">
        <p>${book.pages} pages</p>
        <p class="read-status">${book.read?"Read":"Not Read Yet"}</p>
        </div>
        </div>
        
        
        `;
        libraryEl.appendChild(bookEl);

    }
 }


function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#readStatus").checked;
    let adeed = new Book(title, author, pages, read)

    myLibrary.push(adeed)

    console.log(myLibrary)
    render()

}

// const newBookButton = document.querySelector("#new-book-btn")


// newBookButton.addEventListener("click", function () {
//     const addBook = document.querySelector("#new-book-form")
//     // addBook.classList.add("showPopup");
//     console.log(addBook);

// })

document.querySelector("#new-book-form").addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary()

})

const newpop=document.querySelector(".pop")


function showPopup(){
    newpop.classList.add("showPopup")

}
function removePopup(){
    newpop.classList.remove("showPopup")
}