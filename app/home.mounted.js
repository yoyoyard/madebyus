const homeFunc = function () {
  $('.go-to-top').click(function(e) {
    jQuery('html,body').animate({scrollTop:0},0);
  });
}

export default homeFunc
