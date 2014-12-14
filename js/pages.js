$(document).ready(function(){
$('.slides').slick({

accessibility:true,
infinite: true,
speed: 300,
slidesToShow: 1,
centerMode: true,
variableWidth: true,
dots:true,

});	

$('.arrow').on('click',function(){
if ($(this).hasClass('right')){
$('.slides').slickNext()
} else {
$('.slides').slickPrev()
}
})

});