

let date , p_date ,def , days ,daysr, hours, hoursr, minutes, minutesr, seconds;

function render(){

     date = new Date();
     p_date = new Date(2023, 9, 15, 10, 33, 0);
     def = p_date-date;
    
     days = parseInt( def/(86400000));
     daysr = def%(86400000);
     hours = parseInt(daysr /(3600000));
     hoursr = daysr % (3600000);
     minutes = parseInt(hoursr /(60000));
     minutesr = hoursr % (60000);
     seconds = parseInt(minutesr /(1000));
    
    days = ("00"+days);
    hours = ("0"+hours);
    minutes = ("0"+minutes);
    seconds = ("0"+seconds);


document.getElementById("counter").innerHTML=`
    <div>
    <span>${days[days.length-3]}</span>
    <span>${days[days.length-2]}</span>
    <span>${days[days.length-1]}</span>
    <p>Days</p>
    </div>

    <div>
    <span>${hours[hours.length-2]}</span>
    <span>${hours[hours.length-1]}</span>
    <p>Hours</p>
    </div>

    <div>
    <span>${minutes[minutes.length-2]}</span>
    <span>${minutes[minutes.length-1]}</span>
    <p>Minutes</p>
    </div>

    <div>
    <span>${seconds[seconds.length-2]}</span>
    <span>${seconds[seconds.length-1]}</span>
    <p>Seconds</p>
    </div>
`;
}

setInterval(render,500);
