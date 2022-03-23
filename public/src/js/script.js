/**
 * DRAWS THE GRID
 */
function drawDivs(){
    const grid = document.querySelector('.grid-container');
    for(let i = 0; i < 16; i++){
        const gridBoxesOutter = document.createElement('div');
        gridBoxesOutter.classList.add(`grid-box-outter`);
        for(let j = 0; j < 16; j++){
            const gridBoxesInner = document.createElement('div');
            gridBoxesInner.classList.add(`grid-box-inner`, `grid-box-${i}-inner-${j}`);
            gridBoxesInner.setAttribute('data-key', `${i}${j}`);
            gridBoxesOutter.appendChild(gridBoxesInner);
        }
        grid.appendChild(gridBoxesOutter);
    }
}

/**
 * MOUSEOVER EVENT TO TOGGLE CLASS TO PAINT THE DIVS
 */
function mouseHover(gridBox){
    const gridBoxSelect = gridBox.target;
    gridBoxSelect.classList.toggle('mouseHoverEffect');
}


//Call functions

drawDivs();
const gridInner = document.querySelectorAll('.grid-box-inner');
gridInner.forEach(gridElement => gridElement.addEventListener('mouseover', mouseHover));