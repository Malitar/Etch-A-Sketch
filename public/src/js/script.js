/**
 * DRAWS THE GRID
 */
function drawDivs(amountToDraw = 16){
    const grid = document.querySelector('.grid-container');
    const calcedHeight = 100/amountToDraw;
    for(let i = 0; i < amountToDraw; i++){
        const gridBoxesOuter = document.createElement('div');
        gridBoxesOuter.classList.add(`grid-box-outer`);
        for(let j = 0; j < amountToDraw; j++){
            const gridBoxesInner = document.createElement('div');
            gridBoxesInner.classList.add(`grid-box-inner`, `grid-box-${i}-inner-${j}`);
            gridBoxesInner.setAttribute('data-key', `${i}${j}`);
            //gridBoxesInner.style.height = `${calcedHeight}em`;
            //gridBoxesInner.style.width = `${calcedHeight}em`;
            gridBoxesOuter.appendChild(gridBoxesInner);
        }
        grid.appendChild(gridBoxesOuter);
    }
}
/**
 * FUNCTION TO CLEAR THE CURRENT FIELD
 */
function clearDivs(){
    let grid = document.querySelector(`.grid-container`);
    let gridBox = document.querySelector(`.grid-box-outer`);
    //let gridBoxChilds = document.querySelector(`.grid-box-inner`);

    let outerChild = grid.lastElementChild;
    let child = gridBox.lastElementChild;

    while(outerChild){
        //remove inner childs
        while(child) {
            gridBox.removeChild(child);
            child = gridBox.lastElementChild;
        }
        //remove outer childs after
        grid.removeChild(outerChild);
        outerChild = grid.lastElementChild;
    }    
}

/**
 * MOUSEOVER EVENT TO TOGGLE CLASS TO PAINT THE DIVS
 */
function mouseHover(gridBox){
    const gridBoxSelect = gridBox.target;
    gridBoxSelect.classList.toggle('mouseHoverEffect');
}


/**
 * LOGIC
 * 
 * START TO CALL FUNCTIONS 
 * AND DRAW THE FIELD
 */

drawDivs();
const gridInner = document.querySelectorAll('.grid-box-inner');
gridInner.forEach(gridElement => gridElement.addEventListener('mouseover', mouseHover));

const btn = document.querySelector(`.btn`);
btn.addEventListener('click', function() {
    let userInput = -1;
    do {
        userInput = prompt();
    } while(!(userInput <= 100 && userInput > 0));
    clearDivs();
    drawDivs(userInput);
    const gridInner = document.querySelectorAll('.grid-box-inner');
    gridInner.forEach(gridElement => gridElement.addEventListener('mouseover', mouseHover));
});