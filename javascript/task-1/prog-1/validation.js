class Validate {

  constructor(x) {
     this.x=x;

    }
  validate(){
         let y=this.x;
        if(y%2==0){
          document.write("Entered value is an even number.");
       }
       else if (y%2==1) {
          document.write("Entered value is an odd number.");
        }
       else{
          document.write("Entered value is not a number.");
         }
     }

}
function myFunction() {
  let a = parseInt(document.getElementById("fname").value);
  let square = new Validate(a);
  square.validate();
}
