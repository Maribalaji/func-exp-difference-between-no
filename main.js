let a=parseInt(prompt("enter a number"));

let difference=function(a){
    if(a<=13){
        return 13-a;
    }
    else{
        return (a-13)*2;
    }
}
let result=difference(a);
console.log(result);
document.write(`The given number is ${a} <br> Answer ${result}`)