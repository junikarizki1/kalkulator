let display = document.getElementById("screen");

const wipe = () => {
    display.value = "";
}

const back = () =>{
    display.value = display.value.slice(0, -1);
}

const tampil = (n) => {
    display.value += n;
}

const calc = () => {
    display.value = eval(display.value)
}