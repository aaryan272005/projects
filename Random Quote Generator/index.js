const quotes = [
    "If you greatly desire something, have the guts to stake everything on obtaining it.",
    "Every big problem was at one time a wee disturbance.",
    "Deeds, not stones, are the true monuments of the great.",
    "If it weren't for my lawyer, I'd still be in prison. It went a lot faster with two people digging.",
    "The older I get, the more I feel almost beautiful...",
    "Whatever you may be sure of, be sure of this-that you are dreadfully like other people.",
    "The nice thing about egotists is that they don't talk about other people.",
    "Music makes one feel so romantic - at least it always gets on one's nerves - which is the same thing nowadays.",
    "A good hockey player plays where the puck is. A great hockey player plays where the puck is going to be.",
    "Reading this book is like waiting for the first shoe to drop.",
    "From the moment I picked up your book until I laid it down, I was convulsed with laughter. Some day I intend reading it.",
    "Lack of money is no obstacle. Lack of an idea is an obstacle.",
    "Sometimes you feel other people's pain worse than your own. We're armored against our own troubles. We can't afford to give in to despair. Then you see someone else struggling, and it breaks your... heart.",
    "Suicidal glory is the luxury of the irresponsible. We're not giving up. We're waiting for a better opportunity to win."
]
const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")
function generateQuote() {
    if(usedIndexes.size >= quotes.lengeth){
        usedIndexes.clear()
    }

    while (true){
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if(usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break

    }
}
