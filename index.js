let addNoteBtn = document.getElementById("addNote");

localStorage.setItem('notes', JSON.stringify(['aman', 'aman1', 'aman2', 'aman3']));
displayNote();
addNoteBtn.addEventListener("click", () => {
    addNewNote();
});


function displayNote(){
    let data = JSON.parse(localStorage.getItem('notes')) || [];
    

    data.map((note)=>{
        addNewNote(note);
    })
}



function addNewNote(note){
    
    
    let parentNode = document.getElementById("allNotes")
    let divElement = document.createElement("div");
    divElement.setAttribute("class", "card");


    divElement.innerHTML = `
            <div class="cardBtn">
                <button id="edit">Save</button>
                <button id="remove">Remove</button>
            </div>            
            <div class="singleNote hiden" id="divA">${note ||""}</div>
            <textarea class="singleNote "  id="areaA">${note||""}</textarea>
            <div class="cardFooter"><p>date</p></div>`

    let editBtn = divElement.querySelector("#edit");
    let removeBtn = divElement.querySelector("#remove");
    editBtn.addEventListener("click", (e)=>{
       
        let div=divElement.querySelector('#divA');
        let textArea=divElement.querySelector('#areaA');
       
        
        if(e.target.innerText === "Save"){
            e.target.innerText = "Edit";
            e.target.style.backgroundColor = "rgb(7, 255, 220)";
            
            
        }else{
            e.target.innerText = "Save";
            e.target.style.backgroundColor = " rgb(76, 255, 5)";
        }
        div.classList.toggle('hiden');
        textArea.classList.toggle('hiden');
        div.innerHTML= textArea.value;
    
    });
    
    removeBtn.addEventListener("click", (e)=>{
        parentNode.removeChild(divElement);
    });


    parentNode.appendChild(divElement);
    
    console.log("aman");
    
}