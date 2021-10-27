const quoteTag = document.querySelector('.quote')
const authorTag = document.querySelector('.author')
const randomTag = document.querySelector('button')

let data = []

// Lets load in the real data
fetch("/json/quotes.json").then(function (response){
return response.json()
}).then(function (jsonData){
    data = jsonData
    getQuote()
})
// fetch("/json/quotes.json").then(response => response.json()).then(data => console.log(data))



const getQuote = function () {

    if (data.length > 0) {
        // Get a random quote
        // and put it in the site
        // quoteTag.innerHTML = data[Math.floor(Math.random() * data.length)]

        const randomNumber = Math.floor(Math.random() * data.length)
        const randomQuote = data[randomNumber]

        quoteTag.innerHTML = randomQuote.quote
        authorTag.innerHTML = randomQuote.author
    }


}


// Run get Quote on click of a random image

randomTag.addEventListener('click', function () {
    getQuote()
})