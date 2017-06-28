function ValidateEmail()
{
    let a = document.getElementById("text1").value;
    let b= document.getElementById("text2").value;

 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a))
  {
    if (/^\d{10}$/.test(b)){
      alert("Email and phone validated");
    }
    else{
      alert("You have entered an invalid phone number!");
      return false;
    }
  }
  else{
    alert("You have entered an invalid email address!");
    return (false);
  }
  //let phoneno = /^\d{10}$/;
}
