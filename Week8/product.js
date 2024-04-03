var product = [
    {
        id:"SP1",
        name:"Áo dài thêu họa tiết",
        img:"AoDai/1.jpg",
        price:122000,
    },
    {
        id:"SP2",
        name:"Áo dài truyền thống",
        img:"AoDai/2.jpg",
        price:122000,
    },
    {
        id:"SP3",
        name:"Áo dài trắng",
        img:"AoDai/3.jpg",
        price:122000,
    },
    {
        id:"SP4",
        name:"Áo dài cách tân",
        img:"AoDai/4.jpg",
        price:122000,
    },
    {
        id:"SP5",
        name:"Váy xanh đen",
        img:"AoDai/5.jpg",
        price:122000,
    },
    {
        id:"SP6",
        name:"Váy cam",
        img:"AoDai/6.jpg",
        price:122000,
    },
    {
        id:"SP7",
        name:"Váy công sở",
        img:"AoDai/7.jpg",
        price:122000,
    },
    {
        id:"SP8",
        name:"Áo dài truyền thống",
        img:"AoDai/8.jpg",
        price:122000,
    }
];
//push array to local
function Save(){
    localStorage.setItem('listProduct',JSON.stringify(product))
}
// lay san pham 
function load(){
    product = JSON.parse(localStorage.getItem('listProduct'));
}
// xuat ra san pham ra html 
if (localStorage.getItem("listProduct") != null) {
    load();
}

var listLocal = function(){
    var listproduct ="";
    for(var i in product){
        var data = JSON.parse(JSON.stringify(product[i]))
    var listproduct = '<div class=col-1g-3 col-md-6 col-sm-6 col-6 mt-3">';
    listproduct += '<div class="cart product p-2" style="width:auto">';
    listproduct += '<img class="cart-img-top" src="img/' + data.img +'"alt="...">';
    listproduct += '<div class="cart-title product-title text-center h5" >'+data.name+'</div>';
    listproduct += '<div class="price text center h6">'+data.price+'₫</div>';
    listproduct +=  'span class="text-center and-to-cart btn btn-outline-warning and add-cart" data-id="'+data.id+
                        '"data-name="'+data.name+'" data-img="'+data.img+'"data-price="'+data.price+'" onclick="tks()">';
    // listproduct
    listproduct += '<a>';
    listproduct += '<i class="fas fa-cart-plus"></i>';
    listproduct += '<a>';
    listproduct += '</span>';
    listproduct += '</div>';
    listproduct += '</div>';

    document.getElementById("banchay").innerHTML += listproduct;
    }
    Save();
}
