// Implement search results display
var $class_list = $('#class-list');

function display_search_results(results){
  if(results.length == 0)  return;

  var links = [];

  $.each(results, function(i, result){

    //result: path, title, snippet, params, namespace
    var path = result.path;
    var url = new URL(window.location.href);
    url.pathname = path;
    var url1 = window.location.origin + path;
    //var _snippet = escapeHTML(result.snippet.replace(/^<p>/, ''))

    var content = "";

    content += "<li class='class-list-item'>"
    content +=   "<a href='" + url1 + "'>"
    if (result.namespace.length > 0) {
      content += "<div class='title'>" + result.namespace  + " "  + result.title  + "</div>"
    }else{
      content +=     "<div class='title'>"     + result.title     + "</div>";
    }
    //content +=     "<div class='title'>"     + result.title     + "</div>";
    //content +=     "<div class='namespace'>" + result.namespace + "</div>";
    //content +=     "<div class='snippet'>"   + _snippet         + "</div>";
    content +=   "</a>"
    content += "</li>"

    //var $a = $('<a>');
    //$a.attr('href', url.href);
    //$a.html(content);

    //var $li = $('<li>');
    //$li.html(content);

    //links.push($li);
    var $content = $(content);
    $class_list.append($content);

  })

  //$('#class-list').html(links);
}

function escapeHTML(html) {
    return html.replace(/[&<>]/g, function(c) {
        return '&#' + c.charCodeAt(0) + ';';
    });
}

function activate_search(){

  var data = search_data; // search_data is a global
  var searcher = new Searcher(data.index);

  searcher.ready(function(results, isLast) {
    display_search_results(results);
  })

  var $searchbox = $('#search-box input');
  $searchbox.on("keyup", function(){

    var search_term = $searchbox.val();
    if(search_term.length > 0){
      $class_list.html('');
      searcher.find(search_term);
    }
  });
}



