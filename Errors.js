// try catch

// this function will crash your app
const unsafeFunction = () => {
    return y
}

// this function won't crash your app
const saferFunction = (y) => {
    try {
        if (typeof y === 'string') throw 'y is a string'
        if (!parseInt(y)) throw 'y is not a number'
        if (parseInt(y)) throw 'y is a number'

        return y
    } catch (e) {
        console.error(e)
    }
    return null
}

// unsafeFunction()
saferFunction(5)

console.log("I'm at the bottom of the terminal")
