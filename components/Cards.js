// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardsHolder = document.querySelector(".cards-container")

axios.get(" https://lambda-times-api.herokuapp.com/articles")
.then(response =>{
    // console.log(response.data.articles)
    const topicCard = Object.entries(response.data.articles)
    // nested array (fiveArray)
    console.log(topicCard)  
    topicCard.forEach(fiveArray =>{
        fiveArray.forEach(data =>{
    
        })

    })
 })


function cardsMaker () {
    const card = document.createElement("div")
    const headLine = document.createElement("div")
    const author = document.createElement("div")
    const imgContainer = document.createElement("div")
    const image = document.createElement("img")
    const authorName = document.createElement("span")

    card.classList.add("card")
    headLine.classList.add("headline")
    author.classList.add("author")
    imgContainer.classList.add("img-container")

    // headLine.textContext = data.headline
    // image.src = data.authorPhoto
    // authorName.textContent = data.authorName


    imgContainer.appendChild(image)
    author.appendChild(imgContainer)
    author.appendChild(authorName)
    card.appendChild(headLine)
    card.appendChild(author)

    return card

}
cardsHolder.appendChild(cardsMaker())
console.log(cardsHolder)