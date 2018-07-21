$(document).ready(function(){
  var randQuote;
  var author;
  getQuote();
  function getQuote(){
    var url="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
      $.getJSON(url, function(data){
      $(".quote").html('"'+data.quoteText+'"');
      $(".author").html('-'+data.quoteAuthor);
      randQuote=data.quoteText;
      });
  };
    
    $("#tweet").on("click", function(){
      window.open("https://twitter.com/intent/tweet?text="+ randQuote);
    });
  
    $("#newQuote").on("click", function(){
      getQuote();
    });
});