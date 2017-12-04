var nums = [45, 24, 35, 31, 40, 38, 11];

function maxProfit(arr){
  var comparable = 0;
  for(var x = 0; x < arr.length; x++){
    for(var y = arr.length - 1; y !== x; y--){
      var difference = arr[x] - arr[y];

      if(difference < comparable){
        comparable = difference;
      }
    }
  }
  if(comparable > 0)
  {
    return -1
  }
  return -comparable;
}
