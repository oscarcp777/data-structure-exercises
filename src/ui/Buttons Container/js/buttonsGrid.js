document.getElementById('btn5')
    .addEventListener('click', (event) => {
        const diff = {
            '1': '4', 
            '2': '1', 
            '3': '2', 
            '4': '7', 
            '6': '3', 
            '7': '8', 
            '8': '9', 
            '9': '6' 
        }
        Array(9).fill().forEach((_, index) => {
            if (index !== 4) {
                let text = document.getElementById(`btn${index+1}`).innerText;
                document.getElementById(`btn${index+1}`).innerText = diff[text];
            }
        })
    })
