//in this we are gonna use
///querySelector()
//.Math.Random()
//.lenth
//.createElement()
//.setAttribute()
//.append()
//.getAttribute()
//alert()
//.push()
//setTimeout()
//.querySelectorAll()
//.removeEventListner()
//.textContent


//er are gonna create 12 cards
const cardArray =[
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'cheesburger',
        img:'images/cheeseburger.png'
    },
     {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
     {
        name:'milkshake',
        img:'images/milkshake.png'
    },
     {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'cheesburger',
        img:'images/cheeseburger.png'
    },
     {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
     {
        name:'milkshake',
        img:'images/milkshake.png'
    },
     {
        name:'pizza',
        img:'images/pizza.png'
    }
]
cardArray.sort(()=> 0.5 - Math.random())
const gridDisplay =  document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenIds= []
let cardsWon = []
function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
       const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()
function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenIds[0] 
    const optionTwoId = cardChosenIds[1] 
    console.log("check for match")

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('You have clicked the same image')
    }

   if(cardChosen[0] ==cardChosen[1] ){
    alert('you found a match')
    cards[optionOneId].setAttribute('src','images/white.png')
    cards[optionTwoId].setAttribute('src','images/white.png')
    cards[optionOneId].removeEventListener('click',flipCard)
    cards[optionTwoId].removeEventListener('click',flipCard)
    cardsWon.push(cardChosen)
   }
    else{
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('Sorry Try again')
    }
    resultDisplay.textContent = cardsWon.length
   cardChosen=[]
   cardChosenIds =[]

   if(cardsWon.length == (cardArray.length/2)){

    resultDisplay.innerHTML = "Congratulations you found them all"
   }
}
function flipCard() {
    
    const cardId = this.getAttribute('data-id')
    console.log(cardArray[cardId].name)
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkMatch,500)
    }
}