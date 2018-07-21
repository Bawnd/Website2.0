$(document).ready(function(){
  let randQuote;
  let randNum;
  let randAuthor;
  let quote;
  let author;
  
  getQuote();
  function getQuote(){
    quote =["Ready to roll out!", "I fear no enemy, for the Khala is my strength. I fear not Death, for our Strength is eternal", "MORTAR COMBAT", "It's not who I am underneath, but what I do that defines me.", "Just because one can, doesn't mean one should", "You either die a hero, or live long enough to see yourself become a villan", "Everything negative - pressure, challenges - is all an opportunity for me to rise.", "You don't get to choose not to pay a price, you only get to choose which price you pay", "I can accept failure, everyone fails at something. But I can't accept not trying."];
    author=["-Seige Tank", "-Fenix", "-Mortar Team", "-Batman", "-Batman", "-Harvey Dent", "-Kobe Bryant", "-Jordan Peterson", "-Michael Jordan"];
    randNum = Math.floor((Math.random()*quote.length));
    randQuote = quote[randNum];
    randAuthor= author[randNum];
    
    $(".quote").text(randQuote);
    $(".author").text(randAuthor);
        }
  $("#newQuote").on("click", function(){
    getQuote();
  });
  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text="+randQuote+" "+author);
  });
});