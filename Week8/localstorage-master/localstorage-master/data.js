var products=[
    {
    id:1,
    name:"váy ",
  
    price:"250.000",
    image:"https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfxk8ak614hj9a"
    },
    {
    id:2,
    name:"Áo sơ mi nữ",
   
    price:"200.000",
    image:"https://down-vn.img.susercontent.com/file/sg-11134201-22100-mcxr2dfjngiv6b"
    },
    {
    id:3,
    name:"Áo Khoác",
    
    price:"270.000",
    image:"https://pos.nvncdn.com/af3c03-152482/ps/20240105_eKcQr4W6UU.jpeg"
    },
    {
    id:4,
    name:"Áo thun",
    
    price:"300.000",
    image:"https://down-vn.img.susercontent.com/file/sg-11134201-7qvdb-lgg6tpkuke6838"
    }
]

function listProducts(){
    for(let i=0; i<= products.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+products[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<div class="card-title">'+products[i].name + '</h5>';
        demo += '<p class="card-text">'+products[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("products").innerHTML+= demo;


    }
   
        localStorage.setItem('listProduct',JSON.stringify(products));
        
        localStorage.getItem('listProduct',JSON.stringify(products));
    
    

}