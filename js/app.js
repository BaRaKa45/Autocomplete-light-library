let input1 = new autocomplete('autocomplete');

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    console.log(data);
  input1.setData(data.map(function (item) {
    return item.name;
  }));
});

let input2 = new autocomplete('autocomplete');
input2.setData(['France', 'Allemagne', 'Angleterre', 'Autriche', 'Espagne', 'Italie', 'Pologne', 'Suede', 'Croatie', 'Belgique', 'Suisse']);
