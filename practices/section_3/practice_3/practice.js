function create_updated_collection(collection_a, object_b) {
  var c = [];
  var sum = {};
  var choose = true;
  for (var i = 0; i < collection_a.length; i++) {
    if (choose) {
      sum = {
        key: collection_a[i],
        count: 0
      }
      choose = false;
    }
    sum.count++;
    if (collection_a[i] != collection_a[i + 1]) {
      c.push(sum);
      choose = true;
    }
  }



  for (var i = 0; i < c.length; i++) {
    for (x = 0; x < object_b.value.length; x++) {
      if (c[i].key == object_b.value[x]) {
        if (c[i].count / 3 > 0) {
          c[i].count -= parseInt(c[i].count / 3);
        }
      }

    }
  }

  return c;
}
module.exports = create_updated_collection;
