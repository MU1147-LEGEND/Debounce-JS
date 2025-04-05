// debounce
const input = document.getElementById("input");
const output = document.getElementById("showInput");
const clickInput = document.getElementById("clickInput");
const clickOutput = document.getElementById("clickOutput");
let counter = 0;
let timeOut;

const debounce = (fn, delay) => {
    
    return function (...args) {
        if (timeOut) {
            clearTimeout(timeOut);
        }
        timeOut = setTimeout(() => {
            fn(...args);
            console.log("Executed");
        }, delay);
    };
};

const debouneCalling = debounce((e) => {
    output.textContent = e.target.value;
}, 1000);

input.addEventListener("input", (e) => {
    debouneCalling(e);
});

const debounceCallerforClick = debounce(function () {
    counter++;
    clickOutput.textContent = `Clicked ${counter} times`;
    console.log("clicked", counter);
}, 1000);

clickInput.addEventListener("click", debounceCallerforClick);

// default behaviour of clicking button
// clickInput.addEventListener("click", function(){
//     counter++;
//     clickOutput.textContent = `Clicked ${counter} times`;
// })
