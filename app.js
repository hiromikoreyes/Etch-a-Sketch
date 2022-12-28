//functions
function hoverEffect(pixel){
    // Add the class .hover, to the pixel elements that the mouse is hovering over
    
    pixel.classList.add('hover');
}


function unHoverEffect(pixel){
    // Remove the class .hover, to the pixel elements that the mouse is hovering over
    
    pixel.classList.remove('hover');
}




const pixelContainer = document.querySelector('#grid');


//init 2d array

let gridArray = new Array(16);

for (i = 0; i < 16; i ++){
    gridArray[i] = new Array(16);
}

//init pixel elements

for (i = 0; i < 16; i ++){

    for (j = 0; j < 16; j++){
        gridArray[i][j] = document.createElement('div');
        gridArray[i][j].classList.add('pixel')
        pixelContainer.appendChild(gridArray[i][j]);
    }
}


//add event listeners

const pixels = document.querySelectorAll('.pixel');


/*
Darkens the pixel that you hover over.
*/
pixels.forEach( pixel => {
    pixel.addEventListener('mouseover', () => hoverEffect(pixel))
});
pixels.forEach( pixel => {
    pixel.addEventListener('mouseout', () => unHoverEffect(pixel))
});
