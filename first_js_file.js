let money = 0
let clickpower = 1
let firstupgradebought = false
let betterbuttonbought = false
let thirdupgradebought = false
let mode = 'clicking'





const textEl = document.getElementById('text')

document.addEventListener('keydown', event => {
    if (mode === 'clicking') {
        if (event.key === 'Enter' && !event.repeat) {
            money += clickpower
            updateDisplay()
        } else if (event.key === 'b' && !event.repeat) {
            buy()
        }
    } else if (mode === 'buying') {
        if (event.key === '1' && !event.repeat) {
            if (money >= 100 && !firstupgradebought) {
                clickpower += 1
                money -= 100
                firstupgradebought = true
                alert('you bought the first upgrade')
            } else {
                alert('cannot buy the first upgrade')
            }
            mode = 'clicking'
            updateDisplay()

        } else if (event.key === '2' && !event.repeat) {
            if (money >= 500 && !betterbuttonbought) {
                clickpower += 3.5
                money -= 500
                betterbuttonbought = true
                alert('you bought the better button')
            } else {
                alert('cannot buy the better button')
            }
            mode = 'clicking'
            updateDisplay()

        } else if (event.key === '3' && !event.repeat) {
            if (money >= 1250 && !thirdupgradebought) {
                clickpower += 5.5
                money -= 1250
                thirdupgradebought = true
                alert('you bought the third upgrade')
            } else {
                alert('cannot buy the third upgrade')
            }
            mode = 'clicking'
            updateDisplay()
        }
    }
})

updateDisplay()



function updateDisplay() {
    textEl.innerHTML = `<br>type b to buy upgrades and press Enter for money:<br>you have $${money}`
}

function buy() {
    mode = 'buying'
    textEl.innerHTML += '<br>1 | first upgrade | $100'
    textEl.innerHTML += '<br>2 | better button | $500'
    textEl.innerHTML += '<br>3 | third upgrade | $1250'
    textEl.innerHTML += '<br>what will you buy (press associated number): '
}
