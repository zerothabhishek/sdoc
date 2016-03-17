var $hamburger = $('.hamburger');
var $container = $('.container');
var $panel     = $('.panel-frame');
var $main      = $('.main-frame');


var on_desktop = function(){
  var body_width = $('body').width();
  return body_width && body_width > 800;
}

var panel_closed = function(){
  return !$panel.is(':visible');
}

var open_hamburger = function(){
  $hamburger.removeClass('hamburger-closed');
  $hamburger.addClass('hamburger-open');
}

var close_hamburger = function(){
  $hamburger.removeClass('hamburger-open');
  $hamburger.addClass('hamburger-closed');
}

var hide_panel = function(){
  $panel.hide();
  close_hamburger();

  if(on_desktop()){ $main.addClass('full-width');         }
  else{             $panel.removeClass('panel-overlay');  }
}

var show_n_hide = function(){

  $hamburger.bind('click', function(e){

    var closed = panel_closed();
    if (closed){

      // Show -----------------------------------------------

      open_hamburger();
      $panel.show();

      if (on_desktop()){  $main.removeClass('full-width');  }
      else{               $panel.addClass('panel-overlay'); }

    }else{

      // Hide -----------------------------------------------

      close_hamburger();
      $panel.hide();

      if(on_desktop()){ $main.addClass('full-width');         }
      else{             $panel.removeClass('panel-overlay');  }
    }

    e.preventDefault();
  }); 
}


var hamburger_open_for_desktop = function(){
  if(on_desktop()){
    open_hamburger()
  }
}

$(document).ready(function(){
  show_n_hide();
  hamburger_open_for_desktop();
});
