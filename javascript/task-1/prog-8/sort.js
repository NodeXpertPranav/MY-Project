class Sorting{
  sort(){
  let  john   = { name: "John Smith", age: 23 };
  let  mary   = { name: "Mary Key", age: 18 };
  let  bob    = { name: "Bob-small", age: 6 };
  let  people = [ john, mary, bob ]
  let  byName=people.slice(0);
    byName.sort(function(a, b){
      var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      if (nameA < nameB) //sort string ascending
          return -1
      if (nameA > nameB)
          return 1
      return 0 //default return value (no sorting)
  });
    document.write(byName[0].name+"<br>");
    document.write(byName[1].name+"<br>");
    document.write(byName[2].name+"<br>");
    console.log(byName[2]);

  }
}
function myFunction(){
  let obj=new Sorting();
  obj.sort();
}
