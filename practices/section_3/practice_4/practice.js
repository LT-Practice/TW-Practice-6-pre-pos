function create_updated_collection(collection_a, object_b) {
  // var c = [];
  //
  // for (var i = 0; i < collection_a.length; i++) {
  //   var exist = false;
  //   var char = collection_a[i].length > 2 ? collection_a[i].substring(0, 1) : collection_a[i];
  //   var count = collection_a[i].length > 2 ? count = collection_a[i].substring(2) : 1;
  //
  //   for (var j = 0; j < c.length; j++) {
  //     if (c[j].key == char) {
  //       c[j].count += count;
  //       exist = true;
  //     }
  //   }
  //
  //   if (!exist) {
  //     var sum = {};
  //     sum.key = char;
  //     sum.count = count;
  //     c.push(sum);
  //   }
  // }
  //
  // for (var i = 0; i < c.length; i++) {
  //   for (var j = 0; j < object_b.value.length; j++) {
  //     if (c[i].key == object_b.value[j]) {
  //       c[i].count -= parseInt(c[i].count / 3);
  //     }
  //   }
  // }
  //
  // return c;

  //方法二：
  var c = [];
  collection_a.forEach(function(element) {
    isExist(element, c);
  });
  same_elements(c, object_b.value);
  return c;
}

function same_elements(arr, obj) {
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


function isExist(element, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (element > 1) {
      if (element[0] == arr[i].key) {
        arr[i].count += parseInt(element.substring(2));
        break;
      }
    } else if (element == arr[i].key) {
      arr[i].count++;
      break;
    }
  }
  var str = {};
  if (element.length > 1 && i === arr.length) {
    str.key = element[0];
    str.count = parseInt(element.substring(2));
    arr.push(str);
  } else if (element.length = 1 && i === arr.length) {
    str.key = element;
    str.count = 1;
    arr.push(str);
  }
  return true;
}

module.exports = create_updated_collection;
