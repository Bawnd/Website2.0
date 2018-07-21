$(document).ready(function(){ 

   $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/freecodecamp", function(data1){
            if(data1.stream===null){
              $("#fccstatus").html("Free Code Camp is Currently Offline.");
            }
            else{
              ("#fccstatus").html("Free Code Camp is Currently Online.");
            }
          });

  //gets data from all user's following channels
  $.getJSON("https://wind-bow.gomix.me/twitch-api/users/mikrofone/follows/channels", function(data2){
    var url2;
    var onlineURL=[];
    var logo;
    var status;
    var name;
    var check=[];
    for(var i=0;i<data2._total;i++){
        //creates following user URL and stores it in url2
        url2="https://api.twitch.tv/kraken/streams/"+data2.follows[i].channel.display_name+"?client_id=kmjac7dr4p3pxycenbdg2ksxi27uef";
        $.getJSON(url2,function(data3){
            if(data3.stream===null){
            }else{
              logo=data3.stream.channel.logo;
              name=data3.stream.channel.display_name;
              status=data3.stream.channel.status;
              $("#followerInfo").prepend("<div class='row'>" + "<div class='col-md-4'>"+"<img src='"+logo+"'>"+"</div>"+"<div class='col-md-4'>"+name+"</div>"+"<div class='col-md-4'>"+status+"</div></div>");
            }        
        }); 
        
    }
    
  });

});