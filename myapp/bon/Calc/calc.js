$(document).ready(function(){
  //stores inputs from user to calc
  var inputs=[""];
  //string to store current input
  var totalString;
  //array for validation w/o .
  var operators1=["+", "-", "*", "/"];
  //operators array with the . for validation
  var operators2=["."];
  //num for validation
  var nums=[0,1,2,3,4,5,6,7,8,9];
  //total
  var total=0;
  
  function getValue(input){
    if(operators2.includes(inputs[inputs.length-1]===true && input===".")){
      console.log("duplicate '.' ");
    }
    else if(inputs.length===1 && operators1.includes(input)===false){
      inputs.push(input);
    }
    else if (operators1.includes(inputs[inputs.length-1])===false){
      inputs.push(input);
    }
    else if(nums.includes(Number(input))){
      inputs.push(input);
    }
    update();
  }
  
  function update(){

    if(inputs.length>27 && total>=9999999999999){
      //inputs=inputs.substring(0,13);
      $("#steps").html("Digit Limit Met");
      inputs=[""];
      total=[""];
      update();
    }
    totalString=inputs.join("");
    $("#display").html(totalString);

  }
  
  function getTotal(){
    totalString=inputs.join("");
    total=eval(totalString);
    if(total>=9999999999999){
      $("#steps").html("Digit Limit Met");
    }
    else{
      $("#steps").html(total);
    }
    //$("#display").html("");
    
  }
  
  $("a").on("click", function(){
    if(this.id==="deleteAll"){
      inputs=[""];
      total=[""];
      $("#steps").html("0");
      update();
    }
    else if (this.id==="backOne"){
      inputs.pop();
      update();
    }
    else if(this.id==="total"){
      getTotal();
      
    }
    else{
      if(inputs[inputs.length-1].indexOf("+", "-", "/", "*")===-1){
         getValue(this.id);
         }
      else{
        getValue(this.id);
      }
    }
  });
  
});