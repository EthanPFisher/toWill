
let numbers = [6,55,123,75,12,1,8,976,3,54,909,55,634,122,1111,78,10,32,36,82,180]

console.log(quickSort(numbers, 0, numbers.length - 1))

function quickSort(arr, left, right){
    var len = arr.length, 
    pivot,
    partitionIndex;
    // console.log(arr)
 
   if(left < right){
     pivot = right;
     partitionIndex = partition(arr, pivot, left, right);
     
    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
   }
   return arr;
 }

 function partition(arr, pivot, left, right){
    var pivotValue = arr[pivot],
        partitionIndex = left;
 
    for(var i = left; i < right; i++){
     if(arr[i] < pivotValue){
       swap(arr, i, partitionIndex);
       partitionIndex++;
     }
   }
   swap(arr, right, partitionIndex);
   return partitionIndex;
 }
     
 function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
 }