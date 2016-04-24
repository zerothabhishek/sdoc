var $hamburger = $('#menu-toggle');
var $sidebar = $('#sidebar-wrapper');
var $main = $('#main');

var open_sidebar = function(){
  $sidebar.show();
  //$hamburger.addClass('sidebar-right');
}

var close_sidebar = function(){
  $sidebar.hide();
  //$hamburger.removeClass('sidebar-right');
}

var activate_hamburger = function(){

  $hamburger.click(function(e) {
    e.preventDefault();
    if($sidebar.is(':visible')){
      close_sidebar()
    }else{
      open_sidebar();
    }
  });

  $overall = $('.overall-wrapper');
  if($overall.width() > 992) { // Bootstrap medium and large
    open_sidebar();
  }
}
