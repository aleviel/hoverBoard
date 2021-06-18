document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('#board')
    const NUMBER_OF_BLOCKS = 2208;
    const COLORS_ARRAY = ['#f1f1f1', '#BE7FB6', '#8570B5', '#5865B1', '#5E8AC7', '#5AC8C9', '#67C297']
    let isDraw = false;

    document.addEventListener('mousedown', () => {
        isDraw = true
    })
    document.addEventListener('mouseup', () => {
        isDraw = false
    })

    for (let i = 0; i < NUMBER_OF_BLOCKS; i++) {
        const block = document.createElement('div');
        block.classList.add('square');
        board.appendChild(block);

        block.addEventListener('mouseover', (event) => {
            drawInRandomColor(COLORS_ARRAY, event.target)
        })
        block.addEventListener('mouseleave', (event) => {
            resetElementColor(event.target)
        })
    }

    function drawInRandomColor(colorArray, element) {
        const color = colorArray[Math.floor(Math.random() * COLORS_ARRAY.length)]
        if (isDraw) {
            element.style.background = color;
            element.style.boxShadow = `0 0 2px ${color}, 0 0 8px ${color}`;
        }
    }

    function resetElementColor(element) {
        element.style.background = '';
        element.style.boxShadow = '';
    }
})
