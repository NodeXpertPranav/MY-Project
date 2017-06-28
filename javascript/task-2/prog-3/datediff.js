
function myFunction() {
  let a = document.getElementById("date").value;
  let b = document.getElementById("date1").value;
    var d1 = Date.parse(a);
  //  let d= new Date();
    //var someDate = (d.getMonth()+1)  + "." + d.getDay() + "." + d.getFullYear();
    //SimpleDateFormat sdf = new SimpleDateFormat("MM.dd.yyyy");
    //Date d2 = sdf.parse(someDate);
  var d2 = Date.parse(b);

//  var d2 = Date.parse(dd);
  let diff;
  if(d1>d2){
   diff=(d1-d2)/(1000*60*24*60);
  }
  else{
     diff=(d2-d1)/(1000*60*24*60);
  }
  document.write(diff);
}
