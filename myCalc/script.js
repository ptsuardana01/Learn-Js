var display = document.getElementById('display')
var buttons = Array.from(document.querySelectorAll('.button'))
var ac = document.getElementById('all-clear')
console.log(ac);

buttons.map(button =>{
    button.addEventListener('click', (e) =>{
        // console.log(e.target.innerText); 
        //pakai innerText karena mencakup semua text yg ada namun tidak mencakup tag html(hanya text)
        switch(e.target.innerText){
            case '=':
                try {
                    display.innerText = eval(display.innerText)
                } catch {
                    display.innerText = 'Unexpected Error!'
                    ac.style.backgroundColor = 'red'
                    ac.style.color = 'white'
                }
                break
            case 'C':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1)
                    break
                }
            case 'AC':
                display.innerText = ''
                break
            default:
                display.innerText += e.target.innerText
        }
    })
})