const MAX_TEMPERATURE = 1000;
const MIN_TEMPERATURE = 0;
/**
 * Above values will be replaced by maximum, minimum temperature
 * that SENSOR can read
 * I have arbitrarily assumed 1000 and 0 respectively
 */

function average(numbers) {
  //return numbers.reduce((p, c)=> p + c, 0) / numbers.length;


  var total = 0;// variable to store total sum of array:numbers
  var count = 0;// total elements in array:numbers
  var n = numbers.length;//length of array:numbers
  var variation = [];
  for(let i=0;i<n;++i) {
      if(isNaN(numbers[i])) continue;//check to skip NaN: not a Number
      total += numbers[i];
      if(i>0){
        variation.push(numbers[i] - numbers[i-1]);
      }
      count++;
  }

  var min_delta_variation = MAX_TEMPERATURE;
  var max_delta_variation = MIN_TEMPERATURE;

  for(let i=0;i<variation.length;++i){

    min_delta_variation = Math.min(min_delta_variation, variation[i]);
    max_delta_variation = Math.max(max_delta_variation, variation[i]);
    
  } 

  /**
   * In real world scenario variation of 5 unit temperature 
   * is considered a significant change, so if
   * delta variation is greater than 5
   * It means sensor is not reporting 
   * correct temperature
   */
  //rounded to 2 digits after decimal

  var difference_delta_variation = max_delta_variation - min_delta_variation;

  if(difference_delta_variation>= 5){

    // fluctuation is too much
    return NaN;
  }

  var average = ((total / count).toFixed(1));
  return parseFloat(average); 
}

module.exports = {average};
