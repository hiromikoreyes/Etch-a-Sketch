const pixelContainer = document.querySelector('#grid');

let gridArray = new Array(16);

for (i = 0; i < 16; i ++){
    gridArray[i] = new Array(16);
}



for (i = 0; i < 16; i ++){

    for (j = 0; j < 16; j++){
        gridArray[i][j] = document.createElement('div');
        gridArray[i][j].classList.add('pixel')
        pixelContainer.appendChild(gridArray[i][j]);
    }

}