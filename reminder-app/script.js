document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('reminder-input');
    const addBtn = document.getElementById('add-btn');
    const reminderList = document.getElementById('reminder-list');

    // Add a default item so there's something to see in the screenshot
    addReminderToUI('Finish Hack Club Terra setup');

    addBtn.addEventListener('click', handleAddReminder);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleAddReminder();
        }
    });

    function handleAddReminder() {
        const text = input.value.trim();
        if (text) {
            addReminderToUI(text);
            input.value = '';
            input.focus();
        }
    }

    function addReminderToUI(text) {
        const li = document.createElement('li');
        li.className = 'reminder-item';
        
        const span = document.createElement('span');
        span.textContent = text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"></path>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
        `;
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => {
            li.style.opacity = '0';
            li.style.transform = 'scale(0.95)';
            setTimeout(() => li.remove(), 300);
        };

        li.appendChild(span);
        li.appendChild(deleteBtn);
        reminderList.appendChild(li);
   
   
        ///save mode
    }
});
