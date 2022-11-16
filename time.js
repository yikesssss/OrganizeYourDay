function myFunction() {
  var p = document.getElementById("time");
  p.innerHTML = twentyfourHour();
}

/*function twelveHour() {
  let Hour = d.getHours();
  let Minute = addZero(d.getMinutes());
  
  var result = Hour + ":" + Minute;
  return result;
}*/

function twentyfourHour(){
    let Hour2 = d.getHours();
    let Minute = addZero(d.getMinutes());
    
    var result = Hour2 + ":" + Minute;
    return result;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i;
}

