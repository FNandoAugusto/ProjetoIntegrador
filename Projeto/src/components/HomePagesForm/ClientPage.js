for(var i = 0; i < 4;i++){
  $('.rva-container').append('<div class="rva-week-row col-sm">'+$('.rva-week-row').html()+'</div>');
}

$('.rva-week-row').hover(function(){
  $(this).addClass('rva-week-row-hovered');
},function(){
  $(this).removeClass('rva-week-row-hovered');
});

export default ClientPage.js