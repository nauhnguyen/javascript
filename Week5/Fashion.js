var man = [
    {
        id: "1",
        name:"The Cosmo (Đen) Quần Short Khaki",
        code:"TC1025011BA",
        price: "250.000",
        image: "https://product.hstatic.net/1000096703/product/1a_f7072946317f4eb5bc6c0dfe2289d941_master.jpg"
        
    },
    {
        id: "2",
        name: "Quần Baggy Đen Sang Trọng QQ",
        code: "TC1025011BA",
        price: "398.000",
        image: "https://cf.shopee.vn/file/6464d23c90ea5ca5a782888abbff08a9"
    },
    {
        id: "3",
        name: "The Cosmo (Đen) Quần Short Kaki",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://th.bing.com/th/id/OIP.BD4XGJFGsJKAAwWzr4K_ZAHaHa?rs=1&pid=ImgDetMain1"
    },
    {
        id: "4",
        name: "The Cosmo (Đen) Quần Short Kaki",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://th.bing.com/th/id/R.c13a4edc235cf4494dcd24267a803782?rik=H23nejet2EXHnA&pid=ImgRaw&r=0"
    }
];
var women = [
    {
        id: "1",
        name: "Váy Fashion",
        code: "TC1025011BA",
        price: "250.000",
        image:"https://i.pinimg.com/736x/a2/27/b8/a227b822c3383de0e8b4cf549dada7c0.jpg"
    },
    {
        id: "2",
        name: "Áo Thun Phối Váy Ngắn",
        code: "TC1025011BA",
        price: "320.000",
        image:"https://cdn.gumac.vn/image/01/onpage5/30/cach-phoi-do-voi-chan-vay-ngan111120190907214827.jpg"
    },
    {
        id: "3",
        name: "Áo Thun",
        code: "TC1025011BA",
        price: "200.000",
        image:"https://th.bing.com/th/id/R.6f307fed2cc8a6962c2556c43ba73d88?rik=txHiKhXF1T6utg&pid=ImgRaw&r=0"
    },
    {
        id: "4",
        name: "Áo Khoác",
        code: "TC1025011BA",
        price: "500.000",
        image:"https://th.bing.com/th/id/R.d142c55ad44874a9d9347b422ccbbda0?rik=ug1hFo4SK5U6gw&pid=ImgRaw&r=0"
    }
];
function listProducts(){
    for (let i = 0; i < man.length-1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="'+ man[i].image+'" class="card-img-top" style= "height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';    
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt Mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("man").innerHTML   += demo;           
    }
    for (let i = 0; i < women.length-1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="'+ women[i].image+'" class="card-img-top" style= "height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+women[i].name+'</h5>';
        demo += '<p class="card-text">'+women[i].price+'</p>';    
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt Mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML   += demo;           
    }
}
listProducts();