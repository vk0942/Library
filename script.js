const myLibrary = [1,2];
let content = document.querySelector('.content');

const add_book = document.querySelector('#add-book');
const submit = document.querySelector('#submit');
const form = document.querySelector('.form');
const deletebutton = document.querySelectorAll('.delete-btn');
const book_form = document.querySelector('#book-form');
const cancel_btn = document.querySelector('#cancel');
function Book(name,author,pages,read){
    this.name = name || '';
    this.author = author || '';
    this.pages = pages || 0;
    this.read=read || false;
    this.info  = function() {
        let string = this.name + " by " + this.author + " , " + this.pages+ " , " + (this.read? "Read already ":"not yet read");
        console.log(string);
    };
}

deletebutton.forEach(item => {
    item.addEventListener('click',function() {
        //Find the parent card element
        const card = item.closest('.card');
        //remove the card element from the DOM
        card.remove();
    })
})

function fillBooks()
{
    let book = myLibrary[myLibrary.length-1];
        let card = document.createElement('div');
        let t1 = document.createElement('span');
        let t2 = document.createElement('div');
        let t3 = document.createElement('div');
        let t4 = document.createElement('div');
        let t5 = document.createElement('div');
        let b1 = document.createElement('button');
        b1.textContent = 'Delete Book';
        b1.classList.add('delete-btn');
        t1.textContent = book.name;
        t2.textContent = "By :- " + book.author;
        t3.textContent = "Pages :-  " + book.pages;
        let t4_label = document.createElement('label');
        let t4_input = document.createElement('input');
        t4_input.type = 'checkbox';
        t4_input.id="read";
        t4_label.textContent  = "Read ? ";
        t4_input.checked = book.read;
        t4.appendChild(t4_label);
        t4.appendChild(t4_input);
        t5.appendChild(b1);
        card.classList.add('card');
        t1.classList.add('name');
        t2.classList.add('author');
        t3.classList.add('pages');
        t4.classList.add('read');
        t5.classList.add('delete');
        card.appendChild(t1);
        card.appendChild(t2);
        card.appendChild(t3);
        card.appendChild(t4);
        card.appendChild(t5);
        content.appendChild(card);
        b1.addEventListener('click',() => {
            content.removeChild(card);
        })
}

function addBookToLibrary(){
    
    let new_book = new Book();
    new_book.name = document.querySelector('#book-name').value;
    new_book.author= document.querySelector('#author-name').value;
    new_book.pages = document.querySelector('#pages-id').value;
    new_book.read = document.querySelector('#read-id').checked;
    myLibrary.push(new_book);
    form.style.display = "none";
    fillBooks();
}


book_form.addEventListener('submit', function(event){
    event.preventDefault();
    if(this.checkValidity()){
        addBookToLibrary();
    }else{
        this.reportValidity();
    }
})
cancel_btn.addEventListener('click',() => {
    event.preventDefault();
    form.style.display="none";
})
add_book.addEventListener('click' ,() =>{
    document.querySelector('#book-name').value = "";
    document.querySelector('#author-name').value = "";
    document.querySelector('#pages-id').value = "";
    document.querySelector('#read-id').checked = false;
    form.style.display="flex";
})
