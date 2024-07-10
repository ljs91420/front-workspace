const externalTestDiv = document.getElementById('external-test');

externalTestDiv.onclick = function () {
    externalTestDiv.innerText = 'External Test Complete..';
    externalTestDiv.style.fontSize = '35px';
    externalTestDiv.style.fontWeight = 'bold';
}