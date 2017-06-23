class Unique{
   constructor(string1){
     this.string1=string1;
   }
   uniqueElement(){
        let a=this.string1;
        let uniq="";
        let count;
        for(let i=0;i<a.length;i++){
          count=0;
          for(let j=0;j<a.length;j++){
              if(a[i]===a[j]){
                count++;
              }
          }
          if(count===1){
            uniq=uniq+a[i];
          }
        }
        document.write(uniq);
  }
}
function myFunction() {
     let str=document.getElementById("text").value;
     let square = new Unique(str);
     square.uniqueElement();
 }
