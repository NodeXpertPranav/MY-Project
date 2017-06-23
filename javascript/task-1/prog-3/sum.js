class Validate {

  constructor(x,y) {
     this.x=x;
     this.y=y;

     }
  validate(){
         let a=this.x;
         let b=this.y;

         let isPrime;
         let sum=0;
         for(let i=a; i<=b; i++)
            {
               isPrime = 1;
               console.log("1");
               for(let j=2; j<=i/2 ;j++)
                  {
                    if(i%j==0)
                      {
                        isPrime = 0;
                      
                        break;
                     }
                  }

              if(isPrime===1)
                 {
                   sum = sum+i;

                }
          }
        document.write(sum);
   }
}
function myFunction() {
  let a = parseInt(document.getElementById("number1").value);
  let b = parseInt(document.getElementById("number2").value);

   let square = new Validate(a,b);
  square.validate();
}
