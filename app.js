const contentArr = ['Developer','Designer','Freelancer'];
let textString;
let flag =false;
let index =0;
let speed = 400;

let i = 0;
const typing= () => {
    if(flag){
        textString = contentArr[index].substring(0,i);
        document.querySelector('.type').textContent = textString;
        i--;
        if(textString ===''){
            flag = false;
            speed *=2;
            if (index>=0 && index<2){
                index++;
            }
            else if (index === 2){
                index=0;
            }
        }
    }else
    {
    textString = contentArr[index].substring(0,i);
    document.querySelector('.type').textContent = textString;
    i++;
    if(textString ===contentArr[index]){
        flag = true;
        speed /= 2.5;
    }
    }
}

var myVar = setInterval(typing, speed);