
function average(numbers) {
  //return numbers.reduce((p, c)=> p + c, 0) / numbers.length;


  var total = 0;// variable to store total sum of array:numbers
  var count = 0;// total elements in array:numbers
  var n = numbers.length;//length of array:numbers
  for(let i=0;i<n;++i) {
      if(isNaN(numbers[i])) continue;//check to skip NaN: not a Number
      total += numbers[i];
      count++;
  }
  
  //rounded to 2 digits after decimal
  var average = ((total / count).toFixed(1));
  return average; 
}

module.exports = {average};
