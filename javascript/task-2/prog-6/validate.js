function numValidate(evt){
   let phone = document.getElementById('text1').value;
   console.log(phone);
   let ph  = phone.match(/(\d{3})(\d{3})(\d{4})/);
   let  USNumber = ph[1] + "-" + ph[2] + "-" + ph[3];
   document.getElementById('text1').value = USNumber;
}
function keypressHandler(evt)
   {
         var charCode = (evt.which) ? evt.which : evt.keyCode;
        //Non-numeric character range
        if (charCode > 31 && (charCode < 48 || charCode > 57))
        {
          document.getElementById('error1').innerHTML = "numbers only";
          return false;
         }
         else {
           document.getElementById('error1').innerHTML = " ";
         }
   }


   function numOnly(evt) {
    //  evt = (evt) ? evt : window.event;
      let charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode >= 48 && charCode <= 57)||(charCode==46)){
           document.getElementById('error2').innerHTML= "";
           return true;

      }
     else {
          document.getElementById('error2').innerHTML="numbers only";
           return false;
     }
   }
