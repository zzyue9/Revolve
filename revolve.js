// 定义动画的变换和计时  
const letterTumbling = [  
    { transform: 'rotate(0) scale(1)' },  
    { transform: 'rotate(360deg) scale(0)' }  
];  
  
const letterTiming = {  
    duration: 2000,  
    iterations: 1,  
    fill: 'forwards'  
};  
  
// 动画函数  
function animateLetter(element) {  
    return element.animate(letterTumbling, letterTiming).finished;  
}  
  
// 获取所有需要执行动画的元素  
const letterElements = [  
    document.querySelector("#letter1"),  
    document.querySelector("#letter2"),  
    document.querySelector("#letter3")  
];  
  
// 使用 Promise 链依次启动动画  
letterElements.reduce((promiseChain, letter) => {  
    return promiseChain.then(() => animateLetter(letter));  
}, Promise.resolve())  
.then(() => {  
    console.log('ok');  
})  
.catch(error => {  
    console.error(`Error: ${error}`);  
});