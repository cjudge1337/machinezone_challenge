

document.addEventListener("DOMContentLoaded", function() {
  const saleData = JSON.parse(data);

  load(saleData);
  countdownTimer(saleData.saleEndTimestamp, 'sale-timer')
});


function load(saleData) {
  window.data = saleData;

	document.getElementById('sale-header-image').src = saleData.headerImage;
  document.getElementById('blue-image').src = saleData.salesItems[0].image;
  document.getElementById('jumper-image').src = saleData.salesItems[1].image;
  document.getElementById('oliver-image').src = saleData.salesItems[2].image;
  document.getElementById('two-face-image').src = saleData.salesItems[3].image;

  document.getElementById('blue-label').innerHTML = saleData.salesItems[0].label;
  document.getElementById('jumper-label').innerHTML = saleData.salesItems[1].label;
  document.getElementById('oliver-label').innerHTML = saleData.salesItems[2].label;
  document.getElementById('two-face-label').innerHTML = saleData.salesItems[3].label;
}

function countdownTimer(date, id) {
  let end = new Date(date);

  let _second = 1000;
  let _minute = _second * 60;
  let _hour = _minute * 60;
  let _day = _hour * 24;
  let timer;

  function showRemaining() {
    let now = new Date();
    let distance = end - now;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById(id).innerHTML = 'EXPIRED!';
      return;
    }

    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);
    let output = "This sale ends in ";

    output += days + ' days ';
    output += hours + ' hrs ';
    output += minutes + ' mins ';
    output += seconds + ' secs';

    document.getElementById(id).innerHTML = output;
  }

  timer = setInterval(showRemaining, 1000);
}
