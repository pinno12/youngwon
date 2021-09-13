AOS.init();

function copyAccount(val) {
  /* Get the text field */
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(val);
  alert("복사되었습니다:)");
  
}
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


$('.ui.accordion')
  .accordion()
;
$('.ui.sticky')
  .sticky({
    context: '#context'
  })
;
$('.tool-tip').popup();

function bg_change(color) {
  $(".ui.button.full-width.items").removeClass("bg-e");
  document.getElementById(color).classList.add("bg-e");
  document.getElementById("item-name").textContent = color;
  document.getElementById("item-name2").textContent = color;
}

$('.ui.checkbox')
  .checkbox()
  ;

$('.input-field').focus(function () {
  $(this).prev().addClass('focus');


  if ($(this).val().length == '') {
    $(this).prev().addClass('has-value');
  }


});
$('.input-field').blur(function () {
  $(this).prev().removeClass('focus');
  if ($(this).val() == 0) {
    $(this).prev().removeClass('has-value');
  }
});


//구현 필요: 회원 가입 되어 있을 때
var links = document.querySelectorAll('.guest');
for (var i = 0; i < links.length; i++) {
  links[i].href = "./join.html"
  // 안되 어있을 땐 본래 링크 유지 links[i].href = links[i].href        
}


