let fruit = [];
function checkExist(nameFruit){
    for (let i = 0; i < fruit.length; i++) {
    if (nameFruit == null || nameFruit == fruit[i]) {
        return true;
    }
}
    return false;
}
function addProduct () {
    let addFruit = document.getElementById('newProduct').value;
    if (checkExist(addFruit)) {
        alert("it's exist ! try again")}
    else{
        fruit.push(addFruit);
        display(fruit);
    }
}
function editProduct(idFruit) {
    let id = idFruit.substr(4, (idFruit.length - 4));
    let newName = prompt('edit name fruit', '' + fruit[id]);
    if(checkExist(newName)){
        alert("is't exist ! try again.");

    }
    else {
        fruit[id] = newName;
        display(fruit);
    }
}
function deleteProduct(idFruit) {
    let id = parseInt(idFruit.substr(6,(idFruit.length -6)));
    for(let i = id ;i <(fruit.length -1);i++){
        let temp = fruit[i];
        fruit[i] = fruit[i+1];
        fruit[i+1] = temp;
    }
    fruit.pop();
    display(fruit);
}
function display(arr) {
    let displayProduct = '<table id = "tbProduct">';

    for (let i = 0; i < arr.length; i++) {
        displayProduct +=
            '<tr>\n' +
            '       <td><h4>' + arr[i] + '</h4></td>\n'+
        '       <td><input type="button" onclick="editProduct(this.id) " id= "edit' + i + '" value="Edit"></td> ' +
        '       <td><input type="button" onclick="deleteProduct(this.id)" id="delete' + i + '" value="Delete"></td>+' +
        '<tr/>';
    }
    displayProduct += '</table>' ;
    document.getElementById('productList').innerHTML = displayProduct;
}

