let addNoteBtn = document.getElementById("addNote");


displayNote();
addNoteBtn.addEventListener("click", () => {
    addNewNote();
});


function displayNote(){
    let data = JSON.parse(localStorage.getItem('notes')) || [];
    

    data.map((note,index)=>{
        addNewNote(note,index);
    })
}



function addNewNote(note="",index=null){
    
    
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
    let div=divElement.querySelector('#divA');
    let textArea=divElement.querySelector('#areaA');
    editBtn.addEventListener("click", (e)=>{ 
        if(e.target.innerText === "Save"){
            e.target.innerText = "Edit";
            e.target.style.backgroundColor = "rgb(7, 255, 220)";
            
            toLocalstorage(textArea.value,index);
            
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
        let data = JSON.parse(localStorage.getItem('notes')) || [];
        data.splice(index,1);
        localStorage.setItem('notes', JSON.stringify(data));
        document.getElementById("allNotes").innerHTML = "";
        displayNote()
    });


    if(note){
        editBtn.innerText = "edit";
        editBtn.style.backgroundColor = " rgb(7, 255, 220)";
        div.classList.toggle('hiden');
        textArea.classList.toggle('hiden');
    }

    parentNode.appendChild(divElement);
    
   
}


function toLocalstorage(value,index){
    
    let data=JSON.parse(localStorage.getItem('notes')) || [];    
    if(index == null){        
        data.push(value);        
    }else{
        data.splice(index,1,value);
    }        
    localStorage.setItem('notes', JSON.stringify(data));   
    document.getElementById("allNotes").innerHTML = "";
    displayNote();
}