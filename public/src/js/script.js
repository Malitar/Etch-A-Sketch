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
            gridBoxesInner.classList.add(`grid-box-inner`);
            gridBoxesOutter.appendChild(gridBoxesInner);
        }
        grid.appendChild(gridBoxesOutter);
    }
}

//Call functions
drawDivs();