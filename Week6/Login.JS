var Arr = [
    {
        id: 1,
        User_Name: "Huan",
        Password: "nauh279"
    },
    {
        id: 2,
        User_Name: "Huan1",
        Password: "huan2791"
    },
    {
        id: 3,
        User_Name: "Huan2",
        Password: "huan2792"
    },
]

function Login(User_Name, Password) {
    console.log(User_Name,Password)
    var result = true;
    for(i = 0; i < Arr.length; i++){
        if(User_Name == Arr[i].User_Name){
            if(Password == Arr[i].Password){
                result =  true
                break
            }else{
                result = false
                continue
            } 
        }else{
            result = false
            continue
            
        }
    }
    if(result == true){
        document.write("<b>Trang Chính</b>");
    }else{
        alert("Tên người dùng hoặc mật khẩu không chính xác!")
    }
}
function Clear(){
    document.getElementById("User_Name").value = ''
    document.getElementById("Password").value = ''
}