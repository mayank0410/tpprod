'use strict';
const game_start = '?'
const secret = function () {
    return Math.trunc(Math.random()*20+1);
}
let secret_num = secret();
let plScore = 20;
let hiScore = [''];
let lifeCount = 5;

document.querySelector('.user-box').addEventListener('click',function() {
    document.querySelector('.user-box').value = '';
})
document.getElementById('rebtn').disabled = true;

let lifeBtn = function () {
    if (lifeCount===4) {
        $('p').find('.life1').css('background-color','darkred');
    } else if (lifeCount===3) {
        $('p').find('.life1').css('background-color','darkred');
        $('p').find('.life2').css('background-color','darkred');
    } else if (lifeCount===2) {
        $('p').find('.life1').css('background-color','darkred');
        $('p').find('.life2').css('background-color','darkred');
        $('p').find('.life3').css('background-color','darkred');
    } else if (lifeCount===1) {
        $('p').find('.life1').css('background-color','darkred');
        $('p').find('.life2').css('background-color','darkred');
        $('p').find('.life3').css('background-color','darkred');
        $('p').find('.life4').css('background-color','darkred');
    } else if (lifeCount===5) {
        $('p').find('.life1').css('background-color','lightgreen')
        $('p').find('.life2').css('background-color','lightgreen');
        $('p').find('.life3').css('background-color','lightgreen');
        $('p').find('.life4').css('background-color','lightgreen');
        $('p').find('.life5').css('background-color','lightgreen');
    } else if (lifeCount===0) {
        $('p').find('.life1').css('background-color','darkred');
        $('p').find('.life2').css('background-color','darkred');
        $('p').find('.life3').css('background-color','darkred');
        $('p').find('.life4').css('background-color','darkred');
        $('p').find('.life5').css('background-color','darkred');
    }
}

document.querySelector('.ch').addEventListener('click', function() {
    $('.user-box').css('visibility','visible');
    document.getElementById('rebtn').disabled = false;
    $('.ch').text('Check');
    $('.sec-num').text(game_start);
    $('.msg').text('Enter Your Number');
    $('.your').text(plScore);
    $('.hi').text(Math.max(...hiScore));
    $('p').find('.life1').css('background-color','lightgreen');
    $('p').find('.life2').css('background-color','lightgreen');
    $('p').find('.life3').css('background-color','lightgreen');
    $('p').find('.life4').css('background-color','lightgreen');
    $('p').find('.life5').css('background-color','lightgreen');
})

document.querySelector('.re').addEventListener('click', function() {
    $('.user-box').css('visibility','hidden');
    document.getElementById('rebtn').disabled = true;
    document.getElementById('rebtn1').disabled = false;
    lifeCount = 5;
    plScore = 20;
    $('.ch').text('Start');
    $('.sec-num').text('');
    document.querySelector('.user-box').value = '';
    $('.msg').text('Number Range 1-20');
    $('.your').text('');
    $('p').find('.life1').css('background-color','black');
    $('p').find('.life2').css('background-color','black');
    $('p').find('.life3').css('background-color','black');
    $('p').find('.life4').css('background-color','black');
    $('p').find('.life5').css('background-color','black');
})

document.querySelector('.re').addEventListener('click', function() {
    const secret = function () {
        return Math.trunc(Math.random()*20+1);
    }
    let secret_num1 = secret();
    secret_num = secret_num1;
    console.log(secret_num);
})

document.querySelector('.ch').addEventListener('click',function() {
    if (document.querySelector('.ch').textContent==='Check') {
        if ((document.querySelector('.user-box').value==='0') || (document.querySelector('.user-box').value>20)) {
            $('.msg').text('Incorrect Range');
            lifeBtn();
        } else if (document.querySelector('.user-box').value==='') {
            $('.msg').text('Enter Number');
            lifeBtn();
        }else if (lifeCount===0) {
            lifeBtn();
            $('.sec-num').text(secret_num);
            $('.msg').text('Game Over, Reset plz.');
            $('.your').text(plScore);
            $('.hi').text(Math.max(...hiScore));
            document.getElementById('rebtn1').disabled = true;
        }else if (document.querySelector('.user-box').value==secret_num) {
            hiScore.push(plScore);
            $('.your').text(plScore);
            $('.hi').text(Math.max(...hiScore));
            $('.sec-num').text(secret_num);
            $('.msg').text('You Win');
            document.getElementById('rebtn1').disabled = true;
            lifeBtn();
        } else if (document.querySelector('.user-box').value<secret_num) {
            plScore = plScore - 3;
            lifeCount = lifeCount-1;
            lifeBtn();
            $('.your').text(plScore);
            $('.hi').text(Math.max(...hiScore));
            $('.msg').text('Guess is LOW');
        } else if (document.querySelector('.user-box').value>secret_num) {
            plScore = plScore - 3;
            lifeCount = lifeCount-1;
            lifeBtn();
            $('.your').text(plScore);
            $('.hi').text(Math.max(...hiScore));
            $('.msg').text('Guess is HIGH');
        }
    }
})

// console.log(secret_num);
