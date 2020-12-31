let timer_label = document.getElementById("timer_label");
let timer_div = document.getElementById("timer_div");
let timer_val = document.getElementById("timer_number");
let timer_row = document.getElementById("timer_row");

setTimeout(() => {
  timer_val.style.color = "green";
  timer_val.innerText = "9";
  setTimeout(() => {
    timer_val.style.color = "red";
    timer_val.innerText = "8";
    setTimeout(() => {
      timer_val.style.color = "orange";
      timer_val.innerText = "7";
      setTimeout(() => {
        timer_val.style.color = "green";
        timer_val.innerText = "6";
        setTimeout(() => {
          timer_val.style.color = "red";
          timer_val.innerText = "5";
          setTimeout(() => {
            timer_val.style.color = "orange";
            timer_val.innerText = "4";
            setTimeout(() => {
              timer_val.style.color = "green";
              timer_val.innerText = "3";
              setTimeout(() => {
                timer_val.style.color = "red";
                timer_val.innerText = "2";
                setTimeout(() => {
                  timer_val.style.color = "orange";
                  timer_val.innerText = "1";
                  setTimeout(() => {
                    timer_val.style.color = "blueviolet";
                    timer_val.innerText = "0";
                    setTimeout(() => {
                      timer_row.removeChild(timer_label);
                      timer_div.className = "col-12";
                      timer_val.className = "text-center";
                      timer_val.style.color = "orangered";
                      timer_val.innerText = "Happy Independence Day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
