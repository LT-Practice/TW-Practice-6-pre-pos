function count_same_elements(collection) {
  // var sum_list = [];
  // for (var i = 0; i < collection.length; i++) {
  //   var summary = 1;
  //   var name = collection[i].substring(0, 1);
  //   if (collection[i].indexOf("-") > -1 || collection[i].indexOf(":") > -1 || collection[i].indexOf("[") > -1) {
  //     summary = collection[i].substring(2);
  //     summary = parseInt(summary);
  //   }
  //   var exsit = false;
  //   for (var k = 0; k < sum_list.length; k++) {
  //     if (sum_list[k].name == name) {
  //       sum_list[k].summary = sum_list[k].summary + summary;
  //       exsit = true;
  //     }
  //   }
  //   if (!exsit) {
  //     var temp = {};
  //     temp.name = name;
  //     temp.summary = summary;
  //     sum_list.push(temp);
  //   }
  // }
  // return sum_list;

  //方法二：
  var result_arr = [];
  var resq = /-/;
  var resp = /[/\d/]/;
  var resr = /:/;
  collection.forEach(function(element) {
    var str = {};
    if (isExist(element, result_arr) === false) {
      if (resp.test(element) || resq.test(element) || resr.test(element)) {
        str.name = element[0];
        str.summary = parseInt(element.substring(2));
        result_arr.push(str);
      } else {
        str.name = element;
        str.summary = 1;
        result_arr.push(str);
      }
    }
  });
  return result_arr;
}

function isExist(element, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (element.length > 1) {
      if (element[0] === arr[i].name) {
        arr[i].summary += parseInt(element.substring(2));
        return true;
      }
    } else if (element === arr[i].name) {
      arr[i].summary++;
      return true;
    }
  }
  return false;
}

module.exports = count_same_elements;
