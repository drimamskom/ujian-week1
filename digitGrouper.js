function digitsGrouper(numbers) {
  var Group=[];
  
  for(i=0 ; i< 4 ; i++){
    Group.push([]);
  }
  //console.log(Group);
  
  for(i=0;i<numbers.length;i++){
    var x = numbers[i].toString();
    var y = Number(x);
    //console.log(x);
    if(x.length===1){
      Group[0].push(y);
    }else if(x.length===2){
     Group[1].push(y);
    }else if(x.length===3){
     Group[2].push(y);
    }else if(x.length===4){
     Group[3].push(y);
    }
  }
  
  return Group;
}

console.log(digitsGrouper([1, 12, 13, 0, 88, 123, 456])); // [ [ 1, 0 ], [ 12, 13, 88 ], [ 123, 456 ], [] ]
console.log(digitsGrouper([1234, 8, 2, 543, 1, 11, 222, 7654])); // [ [ 8, 2, 1 ], [ 11 ], [ 543, 222 ], [ 1234, 7654 ] ]
console.log(digitsGrouper([111, 1, 6, 5, 5, 555, 111, 11, 55, 5555])); // [ [ 1, 6, 5, 5 ], [ 11, 55 ], [ 555, 111 ], [ 1111, 5555 ] ]
console.log(digitsGrouper([])); // [ [], [], [], [] ]
console.log(digitsGrouper([0, 00, 000, 0000])); // [ [ 0, 0, 0, 0 ], [], [], [] ]
