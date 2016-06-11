function create_updated_collection(collection_a, object_b) {
  for (var i = 0; i < collection_a.length; i++) {
    for (var j = 0; j < object_b.value.length; j++) {
      if (collection_a[i].key == object_b.value[j]) {
        var x = parseInt(collection_a[i].count / 3);
        collection_a[i].count = collection_a[i].count - x;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
