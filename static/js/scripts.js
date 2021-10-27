const quoteTag = document.querySelector('.quote')
const quoteWrapper = document.querySelector('.quote-wrapper')
const authorTag = document.querySelector('.author')
const randomTag = document.querySelector('.random-button')
const bodyTag = document.querySelector('body')

let data = []

// Lets load in the real data
fetch("/json/quotes.json").then(response => response.json()).then(jsonData => {
    data = jsonData
    getQuote()
})
// fetch("/json/quotes.json").then(function (response) {
//     return response.json()
// }).then(function (jsonData) {
//     data = jsonData
//     getQuote()
// })

const bodyColor = function () {
    const randomColorValue = Math.floor(Math.random() * 360)
    bodyTag.style.backgroundColor = `hsl(${randomColorValue}, 60%, 40%)`
    randomTag.style.color = `hsl(${randomColorValue}, 60%, 40%)`
}

const getQuote = function () {

    if (data.length > 0) {
        // Get a random quote
        // and put it in the site
        // quoteTag.innerHTML = data[Math.floor(Math.random() * data.length)]

        const randomNumber = Math.floor(Math.random() * data.length)
        const randomQuote = data[randomNumber]

        quoteTag.innerHTML = `&ldquo;` + randomQuote.quote + `&rdquo;`
        authorTag.innerHTML = randomQuote.author

        if (randomQuote.quote.length > 100) {
            quoteTag.classList.add("long")
        } else {
            quoteTag.classList.remove("long")
        }
        const randomColorValue = Math.floor(Math.random() * 360)

        bodyTag.style.backgroundColor = `hsl(${randomColorValue}, 60%, 40%)`
        randomTag.style.color = `hsl(${randomColorValue}, 60%, 40%)`
    }

}

// Run get Quote on click of a random image

randomTag.addEventListener('click', function () {
    getQuote()
})

bodyColor()
getQuote()