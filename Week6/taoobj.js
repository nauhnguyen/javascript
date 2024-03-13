var arr = [];

function save() {
    var a = {
        name: document.getElementById('name').value,
        id: document.getElementById('id').value,
        prdname: document.getElementById('prdname').value,
        qty: document.getElementById('qty').value,
        price: document.getElementById('price').value
    };

    arr.push(a);
    console.log(arr);
}
function show() {
    var html = "";
    for (var i = 0; i < arr.length; i++) {
        html += "<tr>";
        html += "<td>" + (i + 1) + "</td>";
        html += "<td>" + arr[i].name + "</td>";
        html += "<td>" + arr[i].id + "</td>";
        html += "<td>" + arr[i].prdname + "</td>";
        html += "<td>" + arr[i].qty + "</td>";
        html += "<td>" + arr[i].price + "</td>";
        html += "<td>" + (parseFloat(arr[i].qty) * parseFloat(arr[i].price)) + "</td>";
        html += "</tr>";
    }
    document.getElementById('tbl').innerHTML = html;
}
function reset() {
    document.getElementById('name').value = '';
    document.getElementById('id').value = '';
    document.getElementById('prdname').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('price').value = '';
}