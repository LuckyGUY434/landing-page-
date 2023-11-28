document.addEventListener("DOMContentLoaded", function() {   
    
    const addBookButton = document.getElementById("button")
    const popoutScreen = document.querySelector(".user-input")
    const closeScreenBtn = document.getElementById("exit-button")
    const MyLibary = [];
    
    function Book(title, author, page, read){
        this.title = title;
        this.author = author;
        this.page = page;
        this.read = read;
        
    }
    
    function addBookToLibary(){
        let title = document.querySelector("#title").value
        let author = document.querySelector("#author").value
        let pages = document.querySelector("#pages").value
        let read = document.querySelector("#myCheckbox").checked ? "Yes" : "No";
        let newBook = new Book(title, author, pages, read)
        MyLibary.push(newBook)
        display()
    }

    function display() {
        let libraryContainer = document.querySelector(".libary");
        libraryContainer.innerHTML = ''; 
    
        for (let i = 0; i < MyLibary.length; i++) {
            let book = MyLibary[i];
    
            let bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
    
            let title = document.createElement('h3');
            title.textContent = `${book.title}`;
            title.setAttribute('id', 'card-header')
    
            let author = document.createElement('p');
            author.textContent = `Author: ${book.author}`;
            author.setAttribute('id', 'author-content')

    
            let pages = document.createElement('p');
            pages.textContent = `Pages: ${book.page}`;
            pages.setAttribute('id', 'pages-content')

    
            let readStatus = document.createElement('p');
            readStatus.textContent = `Read: ${book.read }`;
            readStatus.setAttribute('id', 'read-content')

            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.setAttribute('id', 'remove-button');
    
            removeButton.addEventListener('click', function() {
                MyLibary.splice(i, 1); 
                display(); 
            });
    
    
            bookCard.appendChild(title);
            bookCard.appendChild(author);
            bookCard.appendChild(pages);
            bookCard.appendChild(readStatus);
            bookCard.appendChild(removeButton);
    
            libraryContainer.appendChild(bookCard);
        }
    }
    
    addBookButton.addEventListener("click", function(){
        popoutScreen.style.display = "grid"
        
    })
    
    closeScreenBtn.addEventListener("click", function(){
        popoutScreen.style.display = "none"
    })
    
    popoutScreen.addEventListener("submit", function(event){
        event.preventDefault(); 
        popoutScreen.style.display = "none";
        addBookToLibary();
        popoutScreen.reset();
    });

});