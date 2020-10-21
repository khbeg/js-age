var user = prompt('ismingizni yozing')

function welcome(a,b) {
    var a = +prompt("bu yilni kiriting")
    var b = +prompt("tugilgan yilingizni kiriting")
    var age = a-b;
    if (age < 0) {
        alert("hali Tug`ilmabsiz)))")        
    }else{
        return age
    }
    
}alert(user + " yoshingiz "+ welcome());
