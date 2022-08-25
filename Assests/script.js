let add=document.querySelector('.add');

function addbook(){
    let form=document.querySelector('form');
    form.style.visibility='visible';
 
}

function exitform(){
    let form=document.querySelector('form');
    form.style.visibility='hidden';
}

let library=[];
let title=document.querySelector('.title');
function book(title,author,pages,readornot){
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.readornot=readornot

}
function addbookstolibrary(){

}


function save(){
    let body=document.querySelector('.body');
    let books=document.querySelector('.books');
    let book=document.createElement('div');
    let form=document.querySelector('form');
    form.style.visibility='hidden';
    book.style.width='200px';
    book.style.height='200px';
    book.style.backgroundColor='red';
    book.style.position='absolute';
    book.style.top='100px';
    book.style.left='100px';
    books.appendChild(book);
    body.appendChild(books);
    
}
  
