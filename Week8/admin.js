var productAdmin = function(){
    var listProduct1 = "";
    for (var i in product){
        var data = JSON.parse(JSON.stringify(product[i]));
    var listProduct1 = '<tr>';
        listProduct1+='<td>' + data.id + '</td>';
        listProduct1+='<td>' + data.name + '</td>';
        listProduct1+='<td><img src="../img'+ data.img + '" alt="" style="width: 50px;"></td>';
        listProduct1+='<td>'+ data.price + '</td>';
        
        listProduct1+= '<td><button onclick="updateProduct('
        +i+')" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
        listProduct1+='<button onclick="deleteProduct('
        +i+')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
        listProduct1+='</tr>';
      document.getElementById('product-admin').innerHTML += listProduct1;
    }
    //save()
}

var addProduct = function(){
    var Product = {
        id : "SP" + parseInt(product.length+1),
        name : document.getElementById("name").value,
        img : document.getElementById("img").value,
        price : document.getElementById("price").value
    }
        product.push(Product);
        localStorage.setItem('listProduct',JSON.stringify(product));
        //save
    window.location.reload();
    }

    //delete
    var deleteProduct = function (i) {
        product.splice(i, 1);
        localStorage.setItem('listProduct',JSON.stringify(product));
        window.location.reload();
    }

    //edit
    var updateProduct = function(i){
        var k = product[i];
        document.getElementById('idd').value = k.id;
        document.getElementById('named').value = k.name;
        document.getElementById('imgd').value = k.img;
        document.getElementById('priced').value = k.price;
        document.getElementById('idd').setAttribute("disabled","disabled");
        document.getElementById('submitUpdate').innerHTML = 
        '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate('+1+')">Đồng ý </button>'
    }
    var submitUpdate = function(i){
        var k = product[i];
        k.id = document.getElementById('idd').value;
        k.name = document.getElementById('named').value;
        k.img = document.getElementById('imgd').value;
        k.price = document.getElementById('priced').value;

        localStorage.setItem('listProduct', JSON.stringify(product));
        window.location.reload();
    }

