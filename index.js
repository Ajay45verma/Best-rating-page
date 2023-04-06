const ratbtn = document.getElementsByClassName("btn_common");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btnarr = [];
btn1.addEventListener('click', function() {
    btnarr[0] = 1;
    btn1.style.backgroundColor = 'coral';
});
btn2.addEventListener('click', function() {
    if (btnarr[0] === 1) {
        btnarr[1] = 1;
        btn2.style.backgroundColor = 'coral';
    }
});
btn3.addEventListener('click', function() {
    if (btnarr[1] === 1) {
        btnarr[2] = 1;
        btn3.style.backgroundColor = 'coral';
    }
});
btn4.addEventListener('click', function() {
    if (btnarr[2] === 1) {
        btnarr[3] = 1;
        btn4.style.backgroundColor = 'coral';
    }
});
btn5.addEventListener('click', function() {
    if (btnarr[3] === 1) {
        btnarr[4] = 1;
        btn5.style.backgroundColor = 'coral';
    }
});

let sum = 0;
// for(let i=0;i<btnarr.length;i++){
//     sum=sum+btnarr[i];
// }
const point = document.getElementById("point");
// point.innerHTML=sum;

// function changebg(btn) {
//     if (btn.style.backgroundColor === 'coral') {
//         btn.style.backgroundColor = 'rgb(179, 172, 172)';
//     } else {

//         btn.style.backgroundColor = 'coral';
//     }
//     //btn.style.backgroundColor = 'coral';
// }
const sub = document.getElementById("sub");
let x = document.getElementById("thankblock");
let y = document.getElementById("ratblock");
y.style.display = "block";
x.style.display = "none";

function aftersub() {
    // let x=document.getElementById("ratblock");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    if (y.style.display === "block") {
        y.style.display = "none";
    }
    for (let i = 0; i < btnarr.length; i++) {
        sum = sum + btnarr[i];
    }
    //const point=document.getElementById("point");
    point.innerHTML = sum;
}