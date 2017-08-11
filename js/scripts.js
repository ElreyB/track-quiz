$(document).ready(function(){
  $(".track-form").submit(function(event){
    event.preventDefault();

    var sizeInput = parseInt($("#size").val());
    var photoInput = parseInt($("input:radio[name=photo]:checked").val());
    var interestInput = parseInt($("#interest").val());
    var logoInput = parseInt($("input:radio[name=logo]:checked").val());
    var codeInput = parseInt($("#code").val());

    if (isNaN(sizeInput)) {
      $(".help-inline").show();
    }else if (isNaN(photoInput)) {
      $(".help-inline").show();
    }else if (isNaN(interestInput)) {
      $(".help-inline").show();
    }else if (isNaN(interestInput)){
      $(".help-inline").show();
    }else if (isNaN(logoInput)){
      $(".help-inline").show();
    }else if (isNaN(codeInput)){
      $(".help-inline").show();
    }else{
      $("#design, #ruby, #csharp, .track-form, .page-header, .intro").hide();
    }

    var result = sizeInput + photoInput + interestInput + logoInput + codeInput;
    console.log(sizeInput);
    console.log(photoInput);
    console.log(interestInput);
    console.log(logoInput);
    console.log(codeInput);
    console.log(result);

    if (result <= 5){
      $("#csharp, .panel").show();
    }else if (result > 5 && result <=10){
      $("#ruby, .panel").show();
    }else if (result >= 11){
      $("#design, .panel").show();
    }

  });

// to return to survey
  $("#return").click(function(){
    $("#design, #ruby, #csharp, .panel").hide();
    $(".track-form").show();
  });
});
