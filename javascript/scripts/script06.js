const gugudanContainer = document.getElementById("gugudan-container");

for (let dan = 2; dan <= 9; ++dan) {
    gugudanContainer.innerHTML += `<div style="font-weight: bold; color: red;">${dan}단</div>`;
}

for (let gop = 1; gop <= 9; ++gop) {
    for (let dan = 2; dan <= 9; ++dan) {
        gugudanContainer.innerHTML += `<div>${dan} * ${gop} = ${dan * gop}</div>`;
    }
}
