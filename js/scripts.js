$(document).ready(function(){
$(".form").submit(function(event) {
  event.preventDefault();

  var answer1amount = 0;
  var answer2amount = 0;
  var answer3amount = 0;
  $('input:checkbox[name=answer1]:checked').each(function(){
    answer1amount++;
    var response = $(this).val();

  });
  $('input:checkbox[name=answer2]:checked').each(function(){
    answer2amount++;
    var response = $(this).val();

  });
  $('input:checkbox[name=answer3]:checked').each(function(){
    answer3amount++;
    var response = $(this).val();

  });

if (answer1amount - answer3amount < 0){
  console.log(answer1amount);
  console.log(answer3amount);
  $("#goodending").show();
  $(".goodthings").text(answer3amount);
  $(".badthings").text(answer1amount);
  $(".ending").text(" Good Work!");
}else if (answer1amount - answer3amount > 0){
  $("#badending").show();
  $(".goodthings").text(answer3amount);
  $(".badthings").text(answer1amount);
  $(".ending").text(" You should check outthis link");
} else if (answer2amount > answer1amount || answer2amount > answer3amount){
  $("#badending").show();
  $(".goodthings").text(answer3amount);
  $(".badthings").text(answer1amount);
  $(".symptoms").text(answer2amount);
  $(".ending").text(" You should probably see a doctor");
} else if (answer3amount === answer1amount) {
  $("#zeroending").show();
  $(".goodthings").text(answer3amount);
  $(".badthings").text(answer1amount);
  $(".ending").text(" You have a decent balance of stress and relaxation, but it could always be better!");
}
});
});
