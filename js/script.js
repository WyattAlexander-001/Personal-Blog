// alert('Hello, World!'); // Test that script is linked properly

document.getElementById('openFormBtn').addEventListener('click', function() {
    document.getElementById('entryForm').style.display = 'block';
});

function submitEntry(event) {
    // Prevent the default form submit action
    event.preventDefault();

    // Get the input values
    const title = document.getElementById('entryTitle').value;
    const message = document.getElementById('entryMessage').value;

    // Get current date and time
    const now = new Date();
    const timestamp = now.toLocaleString(); // Converts date and time to a readable string
   
    // Create a new entry div
    const entryDiv = document.createElement('div');
    entryDiv.className = 'entry';

    // Formatted Title
    const entryTitle = document.createElement('h3');
    entryTitle.innerHTML = `<strong>Title:</strong> ${title}`;

    // Formatted Message
    const entryMessage = document.createElement('p');
    entryMessage.innerHTML = `<em>${message}</em>`;

    // Add timestamp
    const entryTimestamp = document.createElement('p');
    entryTimestamp.className = 'timestamp';
    entryTimestamp.innerText = timestamp;

    // Create edit and delete buttons
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        entryDiv.remove();
    };

    // Append title, message, and buttons to the entry div
    entryDiv.appendChild(entryTitle);
    entryDiv.appendChild(entryMessage);
    entryDiv.appendChild(editButton);
    entryDiv.appendChild(deleteButton);

    // Prepend the entry div to the entriesContainer so it appears at the top
    const entriesContainer = document.getElementById('entriesContainer');
    entriesContainer.insertBefore(entryDiv, entriesContainer.firstChild);

    // Clear the form and hide it
    document.getElementById('entryTitle').value = '';
    document.getElementById('entryMessage').value = '';
    document.getElementById('entryForm').style.display = 'none';
}

