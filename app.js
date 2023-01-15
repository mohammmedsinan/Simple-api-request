function getApiData() {
  //get and display data from the backend
  fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        // create a new div element
        const newDiv = document.createElement('div');
        // const Button = document.createElement('button');
        // and give it some content
        const newContent = document.createTextNode(element.username);
        // add the text node to the newly created div
        newDiv.appendChild(newContent);
        // add the newly created element and its content into the DOM
        const div = document.querySelector('div');
        document.body.insertBefore(newDiv, div);
      });
    });
}
getApiData();

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: '21321',
      username: document.querySelector('input').value,
      name: document.querySelector('input').value,
    }),
  }).then((e) => {
    // create a new div element
    const newDiv = document.createElement('div');
    // const Button = document.createElement('button');
    // and give it some content
    const newContent = document.createTextNode(document.querySelector('input').value);
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    // add the newly created element and its content into the DOM
    const div = document.querySelector('div');
    document.body.insertBefore(newDiv, div);
  });
});
