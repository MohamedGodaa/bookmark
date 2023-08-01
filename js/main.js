var bookNameInput = document.getElementById('bookName');
var webSiteUrlInput = document.getElementById('webSiteUrl');

var bookList=[];
if(localStorage!=null)
{
    bookList = JSON.parse(localStorage.getItem('storge'));
    displayList(bookList)
}
function addInformation(){
    if(validateUrl()== true)
    {
        var newBook={
            name:bookNameInput.value,
            webSite:webSiteUrlInput.value
        }
        bookList.push(newBook)
        displayList()
        claerForm()
        console.log(bookList)
        localStorage.setItem('storge',JSON.stringify(bookList));
    }
    else
    {
        alert('Web Url is Not Validate')
    }
}


function displayList()
{
    var cartona='';
    for(var i=0;i<bookList.length;i++){
        cartona+=`
        <tr>
            <td>${i+1}</td>
            <td>${bookList[i].name}</td>
            <td><a href="http://${bookList[i].webSite}" target="_blank" style="background-color: #9eb23b;color:#fff;" rel="noopener noreferrer" class="btn"><i class="fa-regular fa-eye" style="color: #14a800;padding-right: 5px;"></i>Visit</a></td>
            <td><button onclick="deleteBook(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can" style="color: #ffffff;padding-right: 5px;"></i>Delete</button></td>
        </tr>`
    }
    document.getElementById('tableData').innerHTML = cartona ;
}

function claerForm()
{
    bookNameInput.value='';
    webSiteUrlInput.value='';
}

function deleteBook(x)
{
    bookList.splice(x,1);
    localStorage.setItem('storge',JSON.stringify(bookList));
    displayList(bookList);
}
function validateUrl()
{
    var regex =/^[a-z]{3,}\.co/;
    return regex.test(webSiteUrlInput.value);
}
