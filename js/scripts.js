$(document).ready(function() {
  $("#form-letter").submit(function(event){
    var inputName = $("input#their-name").val();
    var inputTrait = $("input#trait").val();
    var inputAdj1= $("#adjective1").val();
    var inputPhysFeat= $("#physical-feature").val();
    var inputFeeling= $("#feeling").val();
    var inputNoun1= $("#noun1").val();
    var inputNoun2= $("#noun2").val();
    var inputAdj2= $("#adjective2").val();
    var inputYourName= $("#your-name").val();

    $(".their-name").text(inputName);
    $(".trait").text(inputTrait);
    $(".adjective1").text(inputAdj1);
    $(".physical-feature").text(inputPhysFeat);
    $(".feeling").text(inputFeeling);
    $(".noun1").text(inputNoun1);
    $(".noun2").text(inputNoun2);
    $(".adjective2").text(inputAdj2);
    $(".your-name").text(inputYourName);

    $("#letter").show();
    event.preventDefault();
  });
});
