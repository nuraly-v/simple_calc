function displayIt(what) {
    let writingGround = document.getElementById('display');
    let historyGround = document.getElementById('history');

    // if (writingGround.innerText != null) {
    //     writingGround.innerText = '';
    // }
    writingGround.innerText = writingGround.innerText + what;


    if (writingGround.innerText.slice(-1) === '=') {
        historyGround.innerText = writingGround.innerText.slice(0, -1);
        let result = calcIt(writingGround.innerText.slice(0,-1));
        writingGround.innerText = result;
    }

    if (what === 'Clear') {
        writingGround.innerText = '';
        historyGround.innerText = '';
    }
}

function calcIt(the_key) {
    return eval(the_key);
}