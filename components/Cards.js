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
        const topics = Object.values(response.data.articles)
        topics.forEach((articles) => {
            articles.forEach((article) => {
                cardsHolder.appendChild(cardsMaker(article))
            })
        })
    })
    .catch(error =>{
        console.log(error)
     
})
   
function cardsMaker (article) {
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

    headLine.textContent =article.headline
    image.src = article.authorPhoto
    authorName.textContent = article.authorName

    console.log(headLine)

    imgContainer.appendChild(image)
    author.appendChild(imgContainer)
    author.appendChild(authorName)
    card.appendChild(headLine)
    card.appendChild(author)

    card.addEventListener("click", ()=>{
        console.log(article.headline)
    })

    return card

}

