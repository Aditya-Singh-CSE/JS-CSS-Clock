const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
  const display = document.querySelector("h1");

  function setDate() {
    const now = new Date();

    let seconds = now.getSeconds();
    let secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    let mins = now.getMinutes();
    let minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    let hour = now.getHours();
    let hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    // To display time digitally
    // Set AM or PM accordingly
    let period = "AM";
    if(hour > 12){
        hour = hour-12;
        period = "PM";
    }
    if(hour == 0){
        hour = 12;
        period = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    mins = mins < 10 ? "0" + mins : mins;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.innerHTML = hour+":"+mins+":"+seconds +" "+period;


  }

  setInterval(setDate, 1000);

  setDate();


