function collect_same_elements(collection_a, object_b) {
  // var result = [];
  // for(var i = 0;i<collection_a.length;i++){
  //   for(var j = 0;j<object_b.value.length;j++){
  //     if (collection_a[i].key == object_b.value[j]) {
  //       result.push(collection_a[i].key);
  //     }
  //   }
  // }
  // return result;

  //方法二：
  var result = [];
  collection_a.forEach(function(element) {
    if (isExist(element.key, object_b.value)) {
      result.push(element.key);
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
