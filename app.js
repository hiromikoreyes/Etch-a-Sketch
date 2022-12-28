generateGrid(16,16); //default page


function hoverEffect(pixel){
    // Add the class .hover, to the pixel elements that the mouse is hovering over
    pixel.classList.add('hover');
}


function unHoverEffect(pixel){
    // Remove the class .hover, to the pixel elements that the mouse is hovering over
    pixel.classList.remove('hover');
}


function generateGrid(width, height){
    /*Generate a grid of width by height pixel elements.*/

    //declare container object thingy
    const pixelContainer = document.querySelector('#grid');
    let gridArray = new Array(width);


    //change the css of the pixelContainer
    pixelContainer.setAttribute('style',
    `grid-template-columns: repeat(${width}, 32px);
    grid-template-rows: repeat(${height}, 32px)`)


    //init 2d array
    for (i = 0; i < width; i ++){
        gridArray[i] = new Array(height);
    }


    //init pixel elements
    for (i = 0; i < width; i ++){

        for (j = 0; j < height; j++){
            gridArray[i][j] = document.createElement('div');
            gridArray[i][j].classList.add('pixel')
            pixelContainer.appendChild(gridArray[i][j]);
        }
    }

    createEventListeners();
    
}


function createEventListeners(){
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach( pixel => {
        pixel.addEventListener('mouseover', () => hoverEffect(pixel))
    });
    pixels.forEach( pixel => {
        pixel.addEventListener('mouseout', () => unHoverEffect(pixel))
    });
}


function removeAllPixels(pixelContainer){
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixelContainer.removeChild(pixel);
    });
}


const btnGenerate = document.addEventListener('click', () => {

    width = prompt('width','');
    length = prompt('length','');

    const pixelContainer = document.querySelector('#grid');
    removeAllPixels(pixelContainer);
    generateGrid(width,length);
});

