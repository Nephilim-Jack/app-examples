var userInput = $('#binInput')
var decimalOutput = $('#decOutput')



// Only accepts 0 and 1
function isBinary(eventNum) {
    if (eventNum >= 48 && eventNum <= 49) {
        return true
    } else {
        return false
    }
}

// Reverse String
function reversed(string) {
    var stringList = string.split('')
    stringList = stringList.reverse()

    var newString = stringList.join('')
    return newString
}

// Transform to Decimal
function makeDecimal() {
    var decValue = 0

    for (var i = parseInt(userInput.val().length); i >= 0; i--) {

        intVal = parseInt(reversed(userInput.val())[i])
        if (!intVal) {
            intVal = 0
        }
        console.log(intVal)

        decValue += intVal * (2 ** i)
    }
    decimalOutput.text(decValue)
}

// add event listener
userInput.keypress(function (event) {
    if (!isBinary(event.which)) {
        event.preventDefault()
    }
})

userInput.keyup(function (pevent) {
    makeDecimal()
})

