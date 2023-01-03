const addButton = document.getElementById('add');
let container = document.querySelector('.container')

const updateLSData = () => {
    const textAreaData = document.querySelectorAll('textArea')
    // console.log(textAreaData)
    const notes = [];

    textAreaData.forEach((note)=>{
       return notes.push(note.value)
    })
    console.log(notes);

    localStorage.setItem('notes', JSON.stringify(notes))
}


const addNewNote = (text = "") => {
    let note = document.createElement('div');
    note.classList.add('note')

    
    
    const htmlData = ` 

    <div class="operation">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
        
    <div class="main ${text? 'hidden' : ''} "></div>
    <textarea class=" ${text? '' : 'hidden'}"></textarea>`;

    note.insertAdjacentHTML('afterbegin', htmlData)
    // console.log(note);

    //    Getting the References 
    let editButton = note.querySelector('.edit');
    let delButton = note.querySelector('.delete');
    let mainDiv = note.querySelector('.main');
    let textArea = note.querySelector('textArea');

    // Deleting the node 
    delButton.addEventListener('click', () => {
        note.remove();
    })

    // Toggle the Edit button
    editButton.addEventListener('click', () => {
        textArea.classList.toggle('hidden')
       mainDiv.classList.toggle('hidden')
    })

    textArea.addEventListener('change',(event)=> {
       const value = event.target.value;
       mainDiv.innerHTML = value;

       updateLSData();
    })

    container.appendChild(note);
}

// To get the data from Local Storage 
 const notes = JSON.parse(localStorage.getItem('notes'))

 if(notes){
    notes.forEach((note)=> {
        return addNewNote(note)
    })
 }
// console.log(getItemForNotes)


addButton.addEventListener('click', addNewNote)
addNewNote();
