const quotes = [{
    text: "If you close your eyes how do you sleep?",
    author: "Ethan Montgomery"
},{
    text: "If you've got hair you're still naked",
    author: "Ethan Montgomery"
},{
    text: "If I was six how old was I?",
    author: "Liam Anderson"
},{
    text: "Sorry I'm eating grapes.",
    author: "Ren Ishikawa"
},{
    text: "How does it exist if you can't see it?",
    author: "Ren Ishikawa"
},{
    text: "Do you want me to crochet it a face?",
    author: "Ava Campbell"
},{
    text: "Sandwiches. Fine. Fine. Deal with that.",
    author: "Evelyn Cooper"
},{
    text: "It's like high jump but the bar gets higher and you've got to get over it.",
    author: "Sebastian Cheshire"
},{
    text: "What is rizz?",
    author: "Benedict Thornton"
},{
    text: "People often liken me to drinking a glass of water backwards.",
    author: "Emma Sullivan"
},{
    text: "Stuff can't happen simultaneously.",
    author: "Ethan Montgomery"
},{
    text: "I can answer this question - what was the question?",
    author: "Reginald Middleton"
},{
    text: "You can never be wrong about stuff.",
    author: "Ethan Montgomery"
},{
    text: "I am not a SAAS company.",
    author: "Mateo Fernandez"
},{
    text: "Not sure which one that's to, but yeah.",
    author: "Natalia Petrov"
},{
    text: "We've got to go down yoghurt.",
    author: "Lars Andersen"
},{
    text: "Ramekins are more square circles.",
    author: "Arjun Nakamura"
},{
    text: "Better deep than out.",
    author: "Mara Alonzo"
},{
    text: "That's a thing isn't it? 9 women can't give birth in a month.",
    author: "Emma Sullivan"
},{
    text: "Where are we socking, bois?",
    author: "Lina Kowalski"
},{
    text: "My brain hurts, but that sounds like goodness",
    author: "Aiko Fernandes"
},{
    text: "Is mushrooms vegetables?",
    author: "Zubair El-Sayed"
},{
    text: "I'm really spend luxury on you with car park.",
    author: "Aiko Fernandes"
},{
    text: "The shit is out of toilet.",
    author: "Ethan Montgomery"
},{
    text: "what the fuck's a lion?",
    author: "Ethan Montgomery"
}];

const setQuote = () => {
    if (!localStorage.getItem("indexes")) {
        localStorage.setItem("indexes", [...Array(quotes.length).keys()].sort(() => Math.random() - 0.5));
    }

    const indexes = localStorage.getItem("indexes").split(",");

    const index = indexes.pop();
    localStorage.setItem("indexes", indexes)

    const quote = quotes[index];
    document.getElementsByClassName("text_quote")[0].textContent = quote.text;
    document.getElementsByClassName("text_quoteAuthor")[0].textContent = quote.author;
    
    const randomNumber = Math.random();
    document.getElementsByClassName("blob")[0].setAttribute("style", "filter: hue-rotate(" + randomNumber * 360 + "deg) brightness(0.7); filter: webkit-hue-rotate(" + randomNumber * 360 + "deg) brightness(0.7)");
}

setQuote();

document.body.style.cursor = "pointer";
document.body.style.display = "initial";
document.addEventListener("click", setQuote, false);

