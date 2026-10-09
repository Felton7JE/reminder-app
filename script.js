const reminderInput = document.getElementById('reminder-input');
const addBtn = document.getElementById('add-btn');
const reminderList = document.getElementById('reminder-list');

let reminders = [];

function render() {
    reminderList.innerHTML = '';
    reminders.forEach((r, index) => {
        const li = document.createElement('li');
        
        const textSpan = document.createElement('span');
        textSpan.textContent = r;
        
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'actions';
        
        // Botão Edit
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => {
            const newText = prompt('Edit reminder:', r);
            if(newText) {
                reminders[index] = newText.trim();
                render();
            }
        };
        
        // Botão Delete
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
            reminders.splice(index, 1);
            render();
        };
        
        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);
        
        li.appendChild(textSpan);
        li.appendChild(actionsDiv);
        reminderList.appendChild(li);
    });
}

addBtn.addEventListener('click', () => {
    const text = reminderInput.value.trim();
    if(text) {
        reminders.push(text);
        reminderInput.value = '';
        render();
    }
});
