let input1 = new autocomplete('name', 3, true);

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
  input1.setData(data.map(function (item) {
    return item.name;
  }));
});

let input2 = new autocomplete('country', 1);
input2.setData(['France', 'Allemagne', 'Angleterre', 'Autriche', 'Espagne', 'Italie', 'Pologne', 'Suede', 'Croatie', 'Belgique', 'Suisse']);
