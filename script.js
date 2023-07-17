let my_library = [];
const shelf = document.querySelector('.shelf');
const submit_book = document.querySelector('#submit-book');
const form = document.querySelector('.popup-content');

function create_addBook(title,author,pages,read)
{
    const book = new Book(title, author, pages, read);
    my_library.push(book);
    const block =  createBlock(book);
    shelf.appendChild(block);
    
}
//constructor
function Book(title,author,pages,read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}
function createBlock(book)
{
    const i = my_library.indexOf(book);
    const B = document.createElement('div');
    const one = document.createElement('div');
    const two = document.createElement('div');
    const three = document.createElement('div');
    const four = document.createElement('div');
    const five = document.createElement('div');
    const toggle = document.createElement('input');
    const label = document.createElement('label');
    
    const Delete = document.createElement('button');
    Delete.textContent = "DELETE BOOK";
    Delete.classList.add("Del-btn");
    Delete.id = 'd_'+i.toString();
    Delete.addEventListener('click',()=>{
        let index = Delete.id.substring(2);
        let b_id = 'b_'+index;
        shelf.removeChild(document.getElementById(b_id));
        my_library.splice(parseInt(index),1);
        console.log(my_library);
    })
    label.textContent = "Read";
    toggle.type = 'checkbox';
    toggle.id = 'toggle_'+i.toString();
    label.setAttribute('for','toggle_'+i.toString());
    toggle.checked = book.read;
    B.classList.add('block');
    B.id = 'b_'+i.toString();
    
    one.textContent = book.title;
    two.textContent = 'By: '+ book.author;
    three.textContent = `Pages: ${book.pages}`;
    four.appendChild(label);
    four.appendChild(toggle);
    five.appendChild(Delete);
    
    B.appendChild(one);
    B.appendChild(two);
    B.appendChild(three);
    B.appendChild(four);
    B.appendChild(five);
    return B;
}
Book.prototype.info = function(){
   
    return `The ${this.title} by ${this.author} , ${this.pages} pages read = ${this.read}`;
}

create_addBook("karma Yog" , "Swami Vivekananda" , 300 , true);
create_addBook("Bhakti Yog" , "Swami Vivekananda" , 100 , true);
create_addBook("Raja Yog" , "Swami Vivekananda" , 400 , false);
create_addBook("Gyaan Yog" , "Swami Vivekananda" , 300 , false);


// my_library.forEach((book)=>{
   
//     const B = createBlock(book);
//     shelf.appendChild(B);
// });

document.querySelector('#new-book').addEventListener('click',()=>{
    document.querySelector('.popup').style.display = "flex";
})
document.querySelector('#cancel').addEventListener('click',()=>{
    document.querySelector('.popup').style.display = "none";
    form.reset();
})
form.addEventListener("change", () => {
    submit_book.disabled = !form.checkValidity()
});
form.addEventListener('submit',(event) =>{
    event.preventDefault();
    const titleValue = document.getElementById('Title').value;
    const authorValue = document.getElementById('Author').value;
    const pagesValue = document.getElementById('Pages').value;
    const readValue = document.getElementById('Read').checked;
    
    create_addBook(titleValue,authorValue,pagesValue,readValue);
    document.querySelector('.popup').style.display = "none";
    form.reset();
})


// for (const element of Del_btns) {
//     element.addEventListener('click', () => {
//        let elm_id = element.id;
//        let b_id = 'b'+elm_id.substring(1);
//        let index = parseInt(b_id.toString(2));
//        shelf.removeChild(document.getElementById(b_id));
//        my_library.splice(index,1);
//        console.log(my_library);
//     });
//   }
