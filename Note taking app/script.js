const noteInput = document.getElementById('note-input');
const addNoteBtn = document.getElementById('add-note-btn');
const noteList = document.getElementById('note-list');

//loading notes from local storage
const notes = JSON.parse(localStorage.getItem('notes')) || [];

//Displaying
function displayNotes() {
    noteList.innerHTML = '';
    notes.forEach((note, index) => {
        const noteItem = document.createElement('div');
        noteItem.classList.add('note-item');
        noteItem.innerHTML = `
        <p>${note}</p>
        <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        noteList.appendChild(noteItem);
    });
}

//adding new notes 

function addNote() {
    const newNote = noteInput.value.trim();
    if(newNote !== '') {
        notes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(notes));
        noteInput.value = '';
        displayNotes();
    }

}

//Delete a note
function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}

//Event listeners
addNoteBtn.addEventListener('click', addNote);
noteList.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-btn')) {
        const index = parseInt(e.target.getAttribute('data-index'));
        deleteNote(index);
    }
});


//display
displayNotes();