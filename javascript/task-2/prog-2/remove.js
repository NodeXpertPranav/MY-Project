class Remove {


  remove(c){
    for (let i=0;i<c.length;i++){

               var index;
               let item=c[i];
            switch (item) {
              case 'NaN': index = c.indexOf(item);
                           c.splice(index, 1);
                           break;
              case 'false': index = c.indexOf(item);
                           c.splice(index, 1);
                           break;
              case 'undefined':  index = c.indexOf(item);
                            c.splice(index, 1);
                            break;
              case '0':   index = c.indexOf(item);
                           c.splice(index, 1);
                           break;
              case 'null':  index = c.indexOf(item);
                          c.splice(index, 1);
                          break;
              case '""':  index = c.indexOf(item);
                          c.splice(index, 1);
                          break;
            }

    }
  }

}
function myFunction() {
  let a = document.getElementById("text1").value;
  let c = a.split(" ");
  let obj = new Remove();
  obj.remove(c);
    document.write(c.toString());
}
