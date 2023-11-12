const quotes = [{
    text: "If you close your eyes how do you sleep?",
    author: "Ethan Montgomery"
},{
    text: "If I was six how old was I?",
    author: "Liam Anderson"
},{
    text: "Sorry I'm eating grapes",
    author: "Ren Ishikawa"
},{
    text: "How does it exist if you can't see it",
    author: "Ren Ishikawa"
},{
    text: "I know by boobies",
    author: "Emma Sullivan"
},{
    text: "Do you want me to crochet it a face?",
    author: "Ava Campbell"
},{
    text: "Sandwiches - fine. Fine. Deal with that.",
    author: "Evelyn Cooper"
},{
    text: "It's like high jump but the bar gets higher and you've got to get over it?",
    author: "Sebastian Cheshire"
},{
    text: "What is rizz?",
    author: "Benedict Thornton"
},{
    text: "People often liken me to drinking a glass of water backwards",
    author: "Emma Sullivan"
},{
    text: "Stuff can't happen simultaneously",
    author: "Ethan Montgomery"
},{
    text: "I can answer this question, what was the question?",
    author: "Reginald Middleton"
},{
    text: "You can never be wrong about stuff",
    author: "Ethan Montgomery"
}];

const quote = quotes[new Date().getSeconds() % quotes.length];

document.getElementsByClassName("text_quote")[0].textContent = quote.text;
document.getElementsByClassName("text_quoteAuthor")[0].textContent = quote.author;

document.getElementsByClassName("blob")[0].setAttribute("style", "filter: hue-rotate(" + Math.random() * 360 + "deg) brightness(0.7)");
