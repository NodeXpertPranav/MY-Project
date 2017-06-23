class guess{
 guessNo(num) {
   let no=Number((Number(Math.random()))*10);
    if(no==num){
        document.write("the given number matched");
    }
    else {
      document.write("the given number does not matched");
    }
 }
}
function myFunction(){
  
 let num= Number(document.getElementById("text").value);
 const obj=new guess();
 obj.guessNo(num);
}
