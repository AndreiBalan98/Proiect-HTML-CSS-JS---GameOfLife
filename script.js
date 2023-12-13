let gridH = 30, gridW = 60, chance = 0.1, startStop = 0, ID;

let grid = new Array(gridH), gridNext = new Array(gridH);
for(let i=0; i<gridH; i++){
    grid[i] = new Array(gridW).fill(0);
    gridNext[i] = new Array(gridW).fill(0);
}

function generateButton(){

    fillGrid();
    displayGrid();
}

function fillGrid(){

    for(let i=0; i<gridH; i++){
        for(let j=0; j<gridW; j++){
            grid[i][j] = 0;
            if(Math.random() < chance){
                grid[i][j] = 1;
            }
        }
    }
}

function displayGrid(){

    for(let i=0; i<gridH; i++){
        for(let j=0; j<gridW; j++){
            if(grid[i][j] == 0){
                document.getElementById(generateID(i, j)).style.backgroundColor = 'rgb(116, 198, 157)';
            }else if(grid[i][j] == 1){
                document.getElementById(generateID(i, j)).style.backgroundColor = 'rgb(254, 127, 45)';
            }
        }
    }
}

function generateID(x, y){

    let id = 'g';

    if(x < 10) id = id + '0' + String(x);
    else id = id + String(x);

    if(y < 10) id = id + '0' + String(y);
    else id = id + String(y);

    return id;
}

function startButton(){

    if(startStop == 0){

        startStop = 1;
        ID = setInterval(gameLoop, 50);
    }else if(startStop == 1){

        startStop = 0;
        clearInterval(ID);
    }
}

function gameLoop(){

    a = performance.now();

    clearGridNext();
    for(let i=0; i<gridH; i++){
        for(let j=0; j<gridW; j++){
            if(grid[i][j] == 0 && neighbours(i, j) == 3)
                gridNext[i][j] = 1;
            else if(grid[i][j] == 1){
                switch(neighbours(i, j)){
                    case 0:
                        gridNext[i][j] = 0;
                        break;
                    case 1:
                        gridNext[i][j] = 0;
                        break;
                    case 2: 
                        gridNext[i][j] = 1;
                        break;
                    case 3:
                        gridNext[i][j] = 1;
                        break;
                    case 4:
                        gridNext[i][j] = 0;
                        break;
                    case 5:
                        gridNext[i][j] = 0;
                        break;
                    case 6:
                        gridNext[i][j] = 0;
                        break;
                    case 7:
                        gridNext[i][j] = 0;
                        break;
                    case 8:
                        gridNext[i][j] = 0;
                        break;
                    default:
                        break;
                }
            }
        }
    }

    copyGrids();
    displayGrid();

    b = performance.now();
    console.log('Timp gameLoop: ' + (b - a));
}

function neighbours(x, y){

    let num = 0, m, n;
    for(let i=x-1; i<=x+1; i++){
        for(let j=y-1; j<=y+1; j++){
            if(i == x && j == y) continue;
            m = i; n = j;
            if(i == -1) m = 29;
            if(i == 30) m = 0;
            if(j == -1) n = 59;
            if(j == 60) n = 0;
            
            if(grid[m][n] == 1) num++;
        }
    }

    return num;
}

function clearGridNext(){

    for(let i=0; i<gridH; i++){
        for(let j=0; j<gridW; j++){
            gridNext[i][j] = 0;
        }
    }
}

function copyGrids(){

    for(let i=0; i<gridH; i++){
        for(let j=0; j<gridW; j++){
            grid[i][j] = gridNext[i][j];
        }
    }
}