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
