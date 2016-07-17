function create_updated_collection(collection_a, object_b) {
  // var c = [];
  // var sum = {};
  // var choose = true;
  // for (var i = 0; i < collection_a.length; i++) {
  //   if (choose) {
  //     sum = {
  //       key: collection_a[i],
  //       count: 0
  //     }
  //     choose = false;
  //   }
  //   sum.count++;
  //   if (collection_a[i] != collection_a[i + 1]) {
  //     c.push(sum);
  //     choose = true;
  //   }
  // }
  //
  //
  //
  // for (var i = 0; i < c.length; i++) {
  //   for (x = 0; x < object_b.value.length; x++) {
  //     if (c[i].key == object_b.value[x]) {
  //       if (c[i].count / 3 > 0) {
  //         c[i].count -= parseInt(c[i].count / 3);
  //       }
  //     }
  //
  //   }
  // }
  //
  // return c;

  //方法二：
  var c = [];
  collection_a.forEach(function(element) {
    var str = {};
    if (isExist(element, c) == false) {
      str.key = element;
      str.count = 1;
      c.push(str);
    }
  });
  same_element(c, object_b.value);
  return c;
}

function isExist(element, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (element == arr[i].key) {
      arr[i].count++;
      return true;
    }
  }
  return false;
}

function same_element(arr, obj) {
  arr.forEach(function(element) {
    if (isExist_obj(element.key, obj)) {
      element.count -= parseInt(element.count / 3);
    }
  });
  return true;
}

function isExist_obj(ele, obj) {
  for (var i = 0; i < obj.length; i++) {
    if (ele == obj[i]) {
      return true;
    }
  }
  return false;
}
module.exports = create_updated_collection;
