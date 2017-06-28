class Intersect {


  intersect(a,b){
     let c=[];
     let k=0;
     for(let i=0;i<a.length;i++){
       for(let j=0;j<b.length;j++){
         if(a[i]===b[j]){
           c[k]=a[i];
           k++;
         }
       }
     }
     document.write(c.toString());
  }

}
function myFunction() {
  let a = document.getElementById("text1").value;
  let ar1 = a.split(" ");
  let b = document.getElementById("text2").value;
  let ar2 = b.split(" ");
  let obj = new Intersect();
  obj.intersect(ar1,ar2);
}
