export const addtask = (descricion, token) => {
  var url = 'https://todolist-node-production.up.railway.app/task';

  var userData = {
    description: descricion
  };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `'Barer ${token}'`,
    },
  })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
};
