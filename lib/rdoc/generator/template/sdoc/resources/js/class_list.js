var links_from_tree = function(tree){
  var links = [];

  for (var i=0; i < tree.length; i++) {
    var tree_i = tree[i];
    var name = tree_i[0];
    var path = tree_i[1];

    var url = new URL(window.location.href);
    url.pathname = path;

    var $a = $('<a>');
    $a.attr('href', url.href);
    $a.html(name);

    var $li = $('<li>');
    $li.html($a);

    links.push($li);
  };
  return(links);
}

var attach_class_list = function(tree){
  var links = links_from_tree(tree);
  $('#class-list').html(links);
}