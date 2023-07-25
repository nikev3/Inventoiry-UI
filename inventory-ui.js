const log = document.querySelector('#log');

function listAll() {
  // Fetch all items from the inventory
  fetch('http://localhost:3000/inventory/retrieve-all', {
    method: 'GET', // Use the GET method to retrieve data
  })
    .then((response) => response.text())
    .then((text) => (log.innerHTML = text));
}

function listItem() {
  const itemName = document.querySelector('#list-item-name').value;
  // Fetch a specific item from the inventory
  fetch('http://localhost:3000/inventory/', {
    method: 'GET', // Use the GET method to retrieve data
  })
    .then((response) => response.text())
    .then((text) => (log.innerHTML = text));
}

function addNewItem() {
  const itemName = document.querySelector('#add-item-name').value;
  const itemCount = +document.querySelector('#add-item-count').value;
  // Add a new item to the inventory
  fetch('http://localhost:3000/inventory/', {
    method: 'POST', // Use the POST method to add data
    body: JSON.stringify({
      name: itemName, // Use the itemName from the input field
      count: itemCount, // Use the itemCount from the input field
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text())
    .then((text) => (log.innerHTML = text));
}

function increaseItemCount() {
  const itemName = document.querySelector('#change-item-name').value;
  // Increase the item count in the inventory
  fetch('http://localhost:3000/inventory/', {
    method: 'PUT', // Use the PUT method to update data
    body: JSON.stringify({
      name: itemName, // Use the itemName from the input field
      change: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text())
    .then((text) => (log.innerHTML = text));
}

function decreaseItemCount() {
  const itemName = document.querySelector('#change-item-name').value;
  // Decrease the item count in the inventory
  fetch('http://localhost:3000/inventory/', {
    method: 'PUT', // Use the PUT method to update data
    body: JSON.stringify({
      name: itemName, // Use the itemName from the input field
      change: -1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text())
    .then((text) => (log.innerHTML = text));
}

function removeItem() {
  const itemName = document.querySelector('#remove-item-name').value;
  // Remove an item from the inventory
  fetch('http://localhost:3000/inventory/', {
    method: 'DELETE', // Use the DELETE method to remove data
    body: JSON.stringify({
      name: itemName, // Use the itemName from the input field
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text())
    .then((text) => (log.innerHTML = text));
}

// Event listeners for the buttons
document.querySelector('#list-all-button').addEventListener('click', listAll);
document.querySelector('#list-item-button').addEventListener('click', listItem);
document.querySelector('#add-item-button').addEventListener('click', addNewItem);
document
  .querySelector('#increase-item-button')
  .addEventListener('click', increaseItemCount);
document
  .querySelector('#decrease-item-button')
  .addEventListener('click', decreaseItemCount);
document.querySelector('#remove-item-button').addEventListener('click', removeItem);
