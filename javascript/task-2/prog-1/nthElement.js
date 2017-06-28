class FindElement {


  findElement(c,b){
          document.write(b+"th element of array is= "+c[b-1]);
     }

}
function myFunction() {
  let a = document.getElementById("text1").value;
  let b = parseInt(document.getElementById("text2").value);
  let c = a.split(" ");
  let obj = new FindElement();
  obj.findElement(c,b);
}
