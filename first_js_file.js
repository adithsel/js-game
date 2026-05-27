let money = 0
let clickpower = 1
let firstupgradebought = false
let betterbuttonbought = false
let thirdupgradebought = false
let ultimatebuttonbought = false
let mode = 'clicking'




console.log('ur in the console i see')
console.log('pls dont cheat by changing variables')



const textEl = document.getElementById('text')

document.addEventListener('keydown', event => {
    if (mode === 'clicking') {
        if (event.key === 'Enter' && !event.repeat) {
            money += clickpower
            updateDisplay()
        } else if (event.key === 'b' && !event.repeat) {
            buy()
        } else if (event.key === 'r' && money >= 75000 && firstupgradebought && betterbuttonbought && thirdupgradebought && ultimatebuttonbought && !event.repeat) {
            money = 0
            clickpower = 1
            clickpower *= 1.5
            firstupgradebought = false
            betterbuttonbought = false
            thirdupgradebought = false
            ultimatebuttonbought = false
            textEl.innerHTML += '<br>you rebirthed and multiplied your clickpower by 1.2'
            updateDisplay()
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
        } else if (event.key === '4' && !event.repeat) {
            if (money >= 5000 && !ultimatebuttonbought) {
                clickpower += 12
                money -= 5000
                ultimatebuttonbought = true
                alert('you bought the ultimate button')
            } else {
                alert('cannot buy the ultimate button')
            }
        }   mode = 'clicking'
            updateDisplay()
    }
})

updateDisplay()



function updateDisplay() {
    textEl.innerHTML = `<br>type b to buy upgrades and press Enter for money:<br>you have $${money}`
    if (money >= 75000 && firstupgradebought && betterbuttonbought && thirdupgradebought && ultimatebuttonbought){
        textEl.innerHTML += '<br>press r to rebirth and multiply clickpower by 1.5 and reset money and upgrades'
    }
}
function buy() {
    mode = 'buying'
    textEl.innerHTML += '<br>1 |    first upgrade   | $100  | +1 clickpower'
    textEl.innerHTML += '<br>2 |    better button   | $500  | +3.5 clickpower'
    textEl.innerHTML += '<br>3 | even better button | $1250 | +5.5 clickpower'
    textEl.innerHTML += '<br>4 |   ultimate button  | $5000 | +12 clickpower'
    textEl.innerHTML += '<br>what will you buy (press associated number): '
}
