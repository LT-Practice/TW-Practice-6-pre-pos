function count_same_elements(collection) {
  var sum = {};//创建一个sum object来存储每一条相同字母和数量。
  var result_list = [];//创建一个JSON数组来存放所有sum对象。
  var test = true;
  for(var i = 0 ; i<collection.length ; i++){
      if(test){
        sum = {key:collection[i],count:0};
        test = false;
      }
      sum.count = sum.count+1;//统计相同字母的数量。
      if(collection[i]!=collection[i+1]){
        result_list.push(sum);//将sum数据存入sum_list中。
        test = true;
      }
  }
  return result_list
}

module.exports = count_same_elements;
