let test = new autocomplete('autocomplete');

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    console.log(data);
  test.setData(data.map(function (item) {
    return item.name;
  }));
});
