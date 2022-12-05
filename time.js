window.addEventListener('load', () => {
  loadTime();
  setInterval(loadTime, 1000)
})


function loadTime() {
  var d = new Date();
  var hour = d.getHours() < 10 ? '0'+d.getHours : d.getHours();

  var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();

  var seconds = d.getSeconds() < 10 ? '0'+d.getSeconds() : d.getSeconds();

  var result = `${hour}:${minutes}:${seconds}`

  document.getElementById('time').innerHTML = result;
} 
