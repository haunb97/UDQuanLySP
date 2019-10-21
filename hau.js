let fruit = [];
// hàm kiểm tra xem có tên sản phẩm nào nhập vào trùng với tên sản phẩm đã có trong mảng k
function checkExist(nameFruit) {
    for (let i = 0; i < fruit.length; i++) {
        if (nameFruit == null || nameFruit == fruit[i]) {
            return true;
        }
    }
    return false;
}
//lấy tên sản phẩm từ input chuyển lên hàm check ,thêm tên sản phẩm vào mảng fruit,đưa mảng chứa tên sản phẩm xuống display
function addProduct() {
    let addFruit = document.getElementById('newProduct').value;
    if (checkExist(addFruit)) {
        alert("It's exist! Try again.");
    } else {
        fruit.push(addFruit);
        display(fruit);
    }
}
//
function editProduct(idFruit) {
    let id = idFruit.substr(4, (idFruit.length - 4));
    let newName = prompt('Edit name fruit', '' + fruit[id]);
    if (checkExist(newName)) {
        alert("It's exist! Try again.");
    } else {
        fruit[id] = newName;
        display(fruit);
    }
}

function deleteProduct(idFruit) {
    let id = parseInt(idFruit.substr(6, (idFruit.length - 6)));
    for (let i = id; i < (fruit.length - 1); i++) {
        let temp = fruit[i];
        fruit[i] = fruit[i + 1];
        fruit[i + 1] = temp;
    }
    fruit.pop();
    display(fruit);
}
//hàm hiển thị tạo danh sách sản phẩm
function display(arr) {
    let displayProduct = '<table id="tbProduct">';
    for (let i = 0; i < arr.length; i++) {
        displayProduct +=
            ' <tr>\n' +
            '        <td><h4>' + arr[i] + '</h4></td>\n' +
            '        <td><input type="button" onclick="editProduct(this.id)" id="edit' + i + '" value="Edit"></td>\n' +
            '        <td><input type="button" onclick="deleteProduct(this.id)" id="delete' + i + '" value="Delete"></td>\n' +
            '    </tr>'
    }
    displayProduct += '</table>';
    document.getElementById('productList').innerHTML = displayProduct;
}