function count_same_elements(collection) {
  // var result = {};//创建一个sum object来存储每一条相同字母和数量。
  // var result_list = [];//创建一个JSON数组来存放所有sum对象。
  // var test = true;
  // for(var i = 0 ; i<collection.length-1 ; i++){
  //   if(test){
  //     result = {key:collection[i],count:0};
  //     test = false;
  //   }
  //   result.count++;//统计相同字母的数量。
  //   if(collection[i] != collection[i+1]){
  //     result_list.push(result);//将sum数据存入sum_list中。
  //     test = true;
  //   }
  // }
  // var letter = collection[collection.length-1].substring(0,1);
  // var num =parseInt(collection[collection.length-1].substring(collection[collection.length-1].length-1));
  // var result2 = {key:letter,count:num};
  // result_list.push(result2);
  // return result_list;

  //方法二：
  var result_arr = [];
  var resp = /-/;
  collection.forEach(function(element) {
    var str = {};
    if (isExist(element, result_arr) === false) {
      if (resp.test(element)) {
        //方法一：获取某个下标下的字符
        // str.key = element.substring(0, 1);
        // str.count = parseInt(element.substring(2));

        //方法二：将特殊字符拆分，拆分后放在新数组里面，再访问某个下标下的字符
        // arrStr = element.split("");
        // str.key = arrStr[0];
        // str.count = parseInt(arrStr[2]);

        //方法三：直接用下标访问字符串元素里面的某个字符，注意访问的结果都是字符串，要用parseInt()获取数字
        str.key = element[0];
        str.count = parseInt(element[2]);

        result_arr.push(str);
      } else {
        str.key = element;
        str.count = 1;
        result_arr.push(str);
      }

    }
  });

  return result_arr;
}

function isExist(element, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (element === arr[i].key) {
      arr[i].count++;
      return true;
    }
  }
  return false;
}

module.exports = count_same_elements;
