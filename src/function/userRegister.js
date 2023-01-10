export const userRegister = (name, email, password, age) => {

  var url = 'https://todolist-node-production.up.railway.app/user/register';
  
  var userData = {
    name: name,
    email: email,
    password: password,
    age: parseInt(age)
  };

  console.log(userData);

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
};