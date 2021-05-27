//start
//function expression to select elements
const selectElement = (s) => document.querySelector(s);
//open the menu onclick
selectElement(s,'.open').addEventListener('click',() => {
selectElement(s,'.nav-list').classlist.add('active');
});

//close menu click
selectElement(s,'.close').addEventListener('click',() => {
    selectElement(s,'.nav-list').classlist.remove('active');
    });



