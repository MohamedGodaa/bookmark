var bookNameInput = document.getElementById('bookName');
var webSiteUrlInput = document.getElementById('webSiteUrl');

var books = []
if(localStorage =! null)
{
    books = JSON.parse(localStorage.getItem('storge'));
    displayBook(books);
}
function addBook()
{   
    if(validateLink()== true){
            var book = {
        name:bookNameInput.value,
        webSite:webSiteUrlInput.value
        }
    books.push(book);
    displayBook();
    claerForm ();
    localStorage.setItem('storge',JSON.stringify(books));
    }
    else{
        alert('web Site Url Is not validate');
    }
}
function claerForm ()
{
    bookNameInput.value = '';
    webSiteUrlInput.value = '';
}

function displayBook(arr)
{
    var cartona = '';
    for(var i=0 ; i < books.length ; i++)
    {
        cartona+=`
        <tr>
            <td>${i+1}</td>
            <td>${books[i].name}</td>
            <td><a href="http://${books[i].webSite}" target="_blank" style="background-color: #9eb23b;color:#fff;" rel="noopener noreferrer" class="btn"><i class="fa-regular fa-eye" style="color: #14a800;padding-right: 5px;"></i>Visit</a></td>
            <td><button onclick="deleteBook(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can" style="color: #ffffff;padding-right: 5px;"></i>Delete</button></td>
        </tr>`
    } 
    document.getElementById('tableData').innerHTML = cartona ;
}

function deleteBook (bookIndex)
{
    books.splice(bookIndex,1);
    localStorage.setItem('storge',JSON.stringify(books));
    displayBook(books);
}

function validateLink(){
    var regex=/^[a-z]{3,}\.com/;
    return regex.test(webSiteUrlInput.value);
}