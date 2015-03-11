$(function(){
  $('#kyokuriTopNavBar > ul > li > a').on('click', function(event){
    if(!$(this).data('targetelem')){
      return true;
    }
    event.preventDefault();
    var top = $($(this).data('targetelem')).position().top;
    $('body').animate({ scrollTop: top+'px' }, 'slow')
  })
  $('#topBtn').on('click',function(){
    $('body').animate({ scrollTop: '0px' }, 'slow')
  })
})
