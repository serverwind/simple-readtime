'use strict'

function calcWords() {
    let allPara = document.querySelectorAll('p');
    let allParaLenght = allPara.length;
    let countedWords = 0;

    for (let i = 0; i < allParaLenght; i++) {
        let words = allPara[i].innerHTML;
        let wordCount = words.match(/(\w+)/g).length;
        countedWords += wordCount;
    }

    return countedWords
}

function calcTime() {
	let totalWords = calcWords();
	let readTime = totalWords / 200;

    return readTime
}

function postTime() {
	let countedTime = Math.round(calcTime());
	let timeHTML = document.getElementById('read-time');

	if (countedTime < 1) {
		timeHTML.innerHTML = 1;
	} 
	timeHTML.innerHTML = countedTime;
}
postTime();