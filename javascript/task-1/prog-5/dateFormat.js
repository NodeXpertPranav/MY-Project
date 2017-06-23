class DateFormat{
   dateFunction(){
           let d = new Date();
           let day = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
           let showday=d.getDay();
           document.write("Today is "+day[showday]+"<br>");

           let hh=d.getHours();
           let mm=d.getMinutes();
           let ampm=hh>=12?'pm':'am';
           hh = hh % 12;
           hh = hh ? hh : 12;
           if(mm<10){
              mm="0"+mm;
           }
          document.write("Current Time is  "+hh+":"+mm+ampm+"<br>");

          let date=d.getDate();
          let month=d.getMonth()+1;
          let year=d.getFullYear();
          let today;
          if(date<10){
               date="0"+date;
          }

          if(month<10){
               month="0"+month;
          }
          today = month+'-'+date+'-'+year;
          document.write(today+"<br>");
          today = month+'/'+date+'/'+year;
          document.write(today+"<br>");
          today = date+'-'+month+'-'+year;
          document.write(today+"<br>");
          today = date+'/'+month+'/'+year;
         document.write(today+"<br>");

   }
}
function myFunction() {
     let square = new DateFormat();
     square.dateFunction();
}
