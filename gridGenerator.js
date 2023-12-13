let button, x, y, id;

for(let i=0; i<1800; i++){

    button = document.createElement('button');
    document.getElementById('gridContainer').appendChild(button);
    button.className = 'buttons';

    x = Math.floor(i / 60);
    y = i % 60;
    id = 'g';
    if(x < 10) id = id + '0' + String(x);
    else id = id + String(x);
    if(y < 10) id = id + '0' + String(y);
    else id = id + String(y);

    button.id = id;

    button.onclick = function() { buttonClick(this.id); };
}

function buttonClick(buttonId){

    let i = parseInt(buttonId[1] + buttonId[2]);
    let j = parseInt(buttonId[3] + buttonId[4]);

    document.getElementById(buttonId).style.backgroundColor = 'rgb(254, 127, 45)';
    grid[i][j] = 1;
}