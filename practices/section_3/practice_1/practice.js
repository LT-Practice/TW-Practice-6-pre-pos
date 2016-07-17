function create_updated_collection(collection_a, object_b) {
  // for (var i = 0; i < collection_a.length; i++) {
  //   for (var j = 0; j < object_b.value.length; j++) {
  //     if (collection_a[i].key == object_b.value[j]) {
  //       collection_a[i].count = collection_a[i].count - 1;
  //     }
  //   }
  // }
  // return collection_a;

  //方法二:
  collection_a.forEach(function(element) {
    if (isExist(element.key, object_b.value)) {
      element.count--;
    }
  });
  return collection_a;
}

function isExist(element, object) {
  for (var i = 0; i < object.length; i++) {
    if (element == object[i]) {
      return true;
    }
  }
  return false;
}

module.exports = create_updated_collection;
