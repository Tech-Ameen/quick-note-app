// i will store the whole note into a variable
const noteApp = document.querySelector(".noteapp");
// this is for button
const createBtn = document.querySelector(".btn");
// we would then create the input box
let notes = document.querySelectorAll(".input-box");

function storeNote(){
    noteApp.innerHTML = localStorage.getItem("notes");
}

//to save to local storage                                                  
function saveToLocalStorage() {
    localStorage.setItem("notes", noteApp.innerHTML);
}

// declaring a function that would be called when the button is clicked
createBtn.addEventListener("click", ()=> { 
    // creating a 'p' element inside a variable
    let inputBox = document.createElement("p");
    // also an 'img' element
    let img = document.createElement("img");
    // now declaring a class name for the 'p' element created
    inputBox.className = "input-box";
    // now setting attributes for the element
    inputBox.setAttribute("contenteditable", "true");
    // now declaring the source folder for the image created
    img.src = "images/delete icon.png";
    // now i would append each variable to it's root variable
    noteApp.appendChild(inputBox).appendChild(img);
})

//now making the remove image function once clicked
noteApp.addEventListener("click", function(deleteIcon){
    if(deleteIcon.target.tagName === "IMG"){
        deleteIcon.target.parentElement.remove();
        saveToLocalStorage();
    }
    else if(deleteIcon.target.tagName === "p"){
        notes = docment.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                saveToLocalStorage();
            }
        })
    }
})























