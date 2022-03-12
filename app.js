let stop = document.querySelector(".stop");
let pause = document.querySelector(".pause");
let play = document.querySelector(".play");
let containerFluid = document.querySelector(".container-fluid ")
let milisecond = document.querySelector(".milisecond")
let second = document.querySelector(".second")
let minute = document.querySelector(".minute")

let msec = 0;
let sec = 0;
let min = 0;
console.log(10 % 60);

containerFluid.addEventListener("click", (e) => {

    if (e.target.parentElement == play || e.target.parentElement.parentElement == play) {
        play.hidden = true
        pause.hidden = false

        stopWatch = setInterval(() => {
            milisecond.innerHTML = ((+milisecond.innerText + 1) % 100).toString().padStart(2, "0");
            if (milisecond.innerHTML == 99) {
                second.innerHTML = ((+second.innerText + 1) % 60).toString().padStart(2, "0");
            }
            if (second.innerText == 59) {
               min++;
                if ((min % 100) == 0) {
                    minute.innerHTML = (+minute.innerText + 1).toString().padStart(2, "0");
                }
           }
        }, 10);


        // stopWatch = setInterval(() => {
        //     msec = msec + 1
        //     if (milisecond.innerText <  9 || milisecond.innerText==0) {
            
        //         milisecond.innerHTML = "0" + msec % 100
        //     }else { milisecond.innerHTML = msec % 100 }

        //     if (milisecond.innerHTML == 99) {
        //         sec = sec + 1
        //         second.innerText < 10 || second.innerText == 0 ? second.innerText = "0" + sec % 60 : second.innerText = (sec % 60)
        //         if (second.innerText == 59 && milisecond.innerText ==99) {
        //             min = min + 1
        //             console.log(min);
        //             minute.innerText < 9 ? minute.innerText = "0" + min % 60 : minute.innerText = min % 60
        //         }
        //     }
        // }, 10);
    }
    else if (e.target.parentElement == pause || e.target.parentElement.parentElement == pause) {
        play.hidden = false
        pause.hidden = true

        clearInterval(stopWatch);

    }
    else if (e.target.parentElement == stop || e.target.parentElement.parentElement == stop) {

        milisecond.innerHTML = "00";
        second.innerHTML = "00";
        minute.innerHTML = "00";
        msec = 0
        sec = 0
        min = 0
        play.hidden = false
        pause.hidden = true
        clearInterval(stopWatch);
    }
});



