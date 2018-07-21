
$(document).ready(function(){
  let api = "https://fcc-weather-api.glitch.me/api/current?";
  let long, lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    long = position.coords.longitude;
    lat = position.coords.latitude;  
    api = api+"lat="+lat+"&lon="+long; 
    $("#data").html("latitude: " + lat + "<br>longitude: " + long+"<br>"+api);
      
  $.getJSON(api, function(data){
    
    let weatherType = data.weather[0].description;
    var cTemp = data.main.temp;
    var fTemp;
    var windSpeed=data.wind.speed;
    var city = data.name;
    var tempSwap=true;
    fTemp = Math.round (cTemp*(9/5)+32);
    $("#city").html(city);
    $("#cTemp").html(cTemp);
    $("#fTemp").html(fTemp);
    $("#weatherType").html(weatherType);
    $("#windSpeed").html(windSpeed+" km/h");
    
    $("#cTemp").click(function(){
      if (tempSwap===false){
        $("#cTemp").html(fTemp+"&#8457;");
        tempSwap=true;
      }
      else {
        $("#cTemp").html(cTemp+"&#8451;");
        tempSwap = false;
      }
    });
    
    if(cTemp<5){
      $("body").css("background-image", "url(https://images.unsplash.com/photo-1476458393436-fb857cc4c7b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=69d83a790fbb84ff5f5b47c4334fe059&auto=format&fit=crop&w=1350&q=80)");
            $("body").css("background-repeat", "no-repeat");
      $("body").css("background-position", "center");
      $("body").css("background-attachment", "fixed");
      $("body").css("background-size", "cover");
    }
    else if (5<=cTemp<=15) {
    $("body").css("background-image", "url(https://images.unsplash.com/photo-1508185706820-a0e323b337f0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0fc3657a22366d6ae07132e4191d734b&auto=format&fit=crop&w=634&q=80)");
            $("body").css("background-repeat", "no-repeat");
      $("body").css("background-position", "center");
      $("body").css("background-attachment", "fixed");
      $("body").css("background-size", "cover");
    }
    else if (15<cTemp<=25){
      $("body").css("background-image", "url(https://images.unsplash.com/photo-1508185706820-a0e323b337f0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0fc3657a22366d6ae07132e4191d734b&auto=format&fit=crop&w=634&q=80)");
            $("body").css("background-repeat", "no-repeat");
      $("body").css("background-position", "center");
      $("body").css("background-attachment", "fixed");
      $("body").css("background-size", "cover");
    }
    else {
      $("body").css("background-image", "url(https://images.unsplash.com/photo-1489573280374-2e193c63726c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0559fd244052f3bf766a8350e8925e54&auto=format&fit=crop&w=1350&q=80)");
      $("body").css("background-repeat", "no-repeat");
      $("body").css("background-position", "center");
      $("body").css("background-attachment", "fixed");
      $("body").css("background-size", "cover");
    }
      
    
    
    });    
      
      
      
    });
  }
  
  else {
    console.log("Geolocation is not available.");
  }

});