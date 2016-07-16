function collect_same_elements(collection_a, collection_b) {
  //
  // var result = [];
  // for(var i = 0;i < collection_a.length;i++){
  //   for(var j = 0;j<collection_b[0].length;j++){
  //     if (collection_a[i]==collection_b[0][j]) {
  //       result.push(collection_a[i]);
  //     }
  //   }
  // }
  // return result;

  //方法二：
  var result = [];
  collection_a.forEach(function(element) {
    if (isExist(element, collection_b[0])) {
      result.push(element);
    }
  });
  return result;
}

function isExist(element, object) {
  for (var i = 0; i < object.length; i++) {
    if (element == object[i]) {
      return true;
    }
  }
  return false;
}

module.exports = collect_same_elements;
