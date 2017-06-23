class Validate {

  constructor(x,y,z) {
     this.x=x;
     this.z=z;
     this.y=y;
    }
  validate(){
         let a=this.x;
         let b=this.y;
         let c=this.z;
         console.log(a,b,c);
         let r;
         switch (c) {
    case "+":
        r=a+b;
        break;
    case "-":
        r=a-b;
        break;
    case "*":
        r=a*b;
        break;
    case "/":
        r=a/b;
        break;
        }
        alert(r);
   }
}
function myFunction() {
  let a = parseInt(document.getElementById("number1").value);
  let b = parseInt(document.getElementById("number2").value);
  let c = document.getElementById("number3").value;
   let square = new Validate(a,b,c);
  square.validate();
  
}
