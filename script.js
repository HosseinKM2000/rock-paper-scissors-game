const enterPage = document.querySelector('.enter-page');
const startButton = document.querySelector('.button-start');
const inputName = document.querySelector('.input-name');
const container = document.querySelector('.container');
const userName = document.querySelector('.user-head > h2');
const selectButton = document.querySelectorAll('.select > div');
const userChooseResult = document.querySelector('.choose-one');
const computerChooseResult = document.querySelector('.choose-two'); 
const userGraid = document.querySelector('.user-head > span');
const computerGraid = document.querySelector('.computer-head > span');
const banner = document.querySelector('.banner-box');
const titleEnd = document.querySelector('.banner > h2');
const medals = document.querySelectorAll('.banner-box > img');
let graid_1 = 0;
let graid_2 = 0;


startButton.addEventListener('click',(e) => {
    if(userName.length != 0){
        enterPage.style = 'display:none';
        container.style = 'display:flex';
        userName.textContent = inputName.value;
    }else{
        alert('Please enter userName')
    }
})


selectButton.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation()
        const userChoose = e.target.getAttribute('data-v');
        let computerChoose = Math.random().toString();
        computerChoose = computerChoose.substr(computerChoose.length-2,2); 
        computerChoose = Number(computerChoose);
        setGame(userChoose,computerChoose);
        setResult(userChoose,computerChoose);
        clearGame();

        if(graid_1 == 10)
             {
                banner.style = 'display:flex';
                medals.forEach(img => img.style = 'display:block');
                titleEnd.textContent = 'YOU WIN';
                titleEnd.style = 'color:#1cb811';
             }else if(graid_2 == 10)
             {
                banner.style = 'display:flex';
                medals.forEach(img => img.style = 'display:none');
                titleEnd.textContent = 'YOU LOST';
                titleEnd.style = 'color:red';
             }
        })
})


function setGame(valu_1,valu_2)
{
    switch(valu_1)
    {
        case 'stone':
            userChooseResult.setAttribute('src','./img/stone.png');
        break
        case 'paper':
            userChooseResult.setAttribute('src','./img/paper (1).png');
        break
        case 'scissors':
            userChooseResult.setAttribute('src','./img/scissors.png');
    }
 

   if(valu_2 < 33)
   {
    computerChooseResult.setAttribute('src','./img/paper (1).png');
   }else if(valu_2 >= 33 && valu_2 <=  66)
   {
    computerChooseResult.setAttribute('src','./img/scissors.png');
   }else if(valu_2 > 66)
   {
    computerChooseResult.setAttribute('src','./img/stone.png');
   }
}

function setResult(value_1,value_2)
{
    let computerChoose;
    if(value_2 < 33)
    {
        computerChoose = 'paper';
    }else if(value_2 >= 33 && value_2 <=  66)
    {
        computerChoose = 'scissors';
    }else if(value_2 > 66)
    {
        computerChoose = 'stone';
    }

    if(value_1 == 'stone' && computerChoose == 'paper')
    {
       computerGraid.textContent = ++graid_2;
    }else if(value_1 == 'stone' && computerChoose == 'scissors')
    {
        userGraid.textContent = ++graid_1;

    }else if(value_1 == 'paper' && computerChoose == 'stone')
    {
        userGraid.textContent = ++graid_1;

    }else if(value_1 == 'paper' && computerChoose == 'scissors')
    {
        computerGraid.textContent = ++graid_2;
    }else if(value_1 == 'scissors' && computerChoose == 'stone')
    {
        computerGraid.textContent = ++graid_2;

    }else if(value_1 == 'scissors' && computerChoose == 'paper')
    {
        userGraid.textContent = ++graid_1
    }

}

function clearGame()
{
    setTimeout(() => {
        computerChooseResult.removeAttribute('src');
        userChooseResult.removeAttribute('src')
    }, 1000);
}

window.addEventListener('keydown',(e)=> {
    if(e.code == 'Enter')
    {
    enterPage.style = 'display:none';
    container.style = 'display:flex';
    userName.textContent = inputName.value;
    console.log('ok')
    }
})
