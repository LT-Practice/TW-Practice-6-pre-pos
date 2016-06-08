function count_same_elements(collection) {
  var result = {};//创建一个sum object来存储每一条相同字母和数量。
  var result_list = [];//创建一个JSON数组来存放所有sum对象。
  var test = true;
  for(var i = 0 ; i<collection.length-1 ; i++){
    if(test){
      result = {key:collection[i],count:0};
      test = false;
    }
    result.count++;//统计相同字母的数量。
    if(collection[i] != collection[i+1]){
      result_list.push(result);//将sum数据存入sum_list中。
      test = true;
    }
  }
  var letter = collection[collection.length-1].substring(0,1);
  var num =parseInt(collection[collection.length-1].substring(collection[collection.length-1].length-1));
  var result2 = {key:letter,count:num};
  result_list.push(result2);
  return result_list;
}

module.exports = count_same_elements;
