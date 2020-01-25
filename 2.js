function minMax(arr){
var newArr = [];

for(i=0; i<arr.length; i++){
if(arr[0]=='a'){
  newArr.push(arr[0]);
  arr.reverse();
  newArr.push(arr[0]);
  console.log(newArr);
} else{
  arr.shift();
}
}
}

var data = ['h','g','a','b','d','f']; 
var dataLain = ['a','b','c','d']; 
minMax(data);
minMax(dataLain);
