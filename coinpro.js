const coin=document.querySelector('#coin');
const button=document.querySelector('#flip');
const status=document.querySelector('#status');
const heads=document.querySelector('#headsCount');
const tails=document.querySelector('#tailsCount');



let headsCount=0;
let tailsCount=0;



function deferFn(callback,ms)
{
    setTimeout(callback,ms);
}

function processResult(result)
{
    if(result === 'heads')
    {
        headsCount++;
        heads.innerText=headsCount;
    }
    else
    {
        tailsCount++;
        tails.innerText=tailsCount;
    }
    status.innerText=result.toUpperCase();
}

function flipCoin()
{
    coin.setAttribute('class','');
    const random=Math.random();
    const result=random<0.5? 'heads':'tails';
    audio.play();
    deferFn(function()
    {
        coin.setAttribute('class','animate-'+result);
        deferFn(processResult.bind(null,result),2900);
    },100);
    
}
const audio=new Audio();
audio.src="coin-flip-88793.mp3";
button.addEventListener('click',flipCoin);


