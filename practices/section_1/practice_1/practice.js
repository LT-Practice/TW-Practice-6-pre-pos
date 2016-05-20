function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码

  var newArr = [];

collection_a.forEach(function (element) {
   if(isExist(element, collection_b))
    newArr.push(element);
});

return newArr;
}

function isExist(element, object) {
for(var a = 0; a < object.length; a++) {
  if(element === object[a])
    return true;
}

return false;

}

module.exports = collect_same_elements;
