class Day{
 dayCheck() {

    for (let year = 2014; year <= 2050; year++)
        {
        let day = new Date(year, 0, 1);
        if ( day.getDay() === 0 )

            document.write("1st January is being a Sunday  "+year+"<br>");
        }
  }
}
let obj=new Day();
obj.dayCheck();
