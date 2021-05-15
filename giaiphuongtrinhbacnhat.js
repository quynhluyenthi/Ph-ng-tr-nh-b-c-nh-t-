let numbera = +prompt("Nhập hệ số a: ");
let numberb = +prompt("Nhập hệ số b: ");


if(numbera==0){
    if(numberb==0){
        alert("Phương trình có vô số nghiệm");
    }else{
        alert("Phương trình cô nghiệm");
    }
       
}else{
    x=-numbera/numberb;
    alert("Phương trình có nghiệm là " +x);
}