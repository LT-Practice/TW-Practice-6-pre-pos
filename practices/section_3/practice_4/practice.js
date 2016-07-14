function create_updated_collection(collection_a, object_b) {
  var c = [];

  for (var i = 0; i < collection_a.length; i++) {
    var exist = false;
    var char = collection_a[i].length > 2 ? collection_a[i].substring(0, 1) : collection_a[i];
    var count = collection_a[i].length > 2 ? count = collection_a[i].substring(2) : 1;

    for (var j = 0; j < c.length; j++) {
      if (c[j].key == char) {
        c[j].count += count;
        exist = true;
      }
    }

    if (!exist) {
      var sum = {};
      sum.key = char;
      sum.count = count;
      c.push(sum);
    }
  }

  for (var i = 0; i < c.length; i++) {
    for (var j = 0; j < object_b.value.length; j++) {
      if (c[i].key == object_b.value[j]) {
        c[i].count -= parseInt(c[i].count / 3);
      }
    }
  }

  return c;
}

module.exports = create_updated_collection;
