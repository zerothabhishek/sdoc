var $hamburger = $('#menu-toggle');
var $sidebar = $('#sidebar-wrapper');
var $main = $('#main');

var open_sidebar = function(){
  $sidebar.show();
}

var close_sidebar = function(){
  $sidebar.hide();
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
}
