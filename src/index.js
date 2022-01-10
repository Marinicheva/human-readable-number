module.exports = function toReadable (number) {
    let str = String(number);
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let answer = '';
  
    if (str.length == 1) { //1, 2 , 3 ...
      answer = units[number];
  
    } else if (str.length == 2 && str[0] == 1) { // 11, 12, 13 ...
      let i = +str[1];
      answer = tens[i];
  
    } else if (str.length == 2 && str[1] == 0) { // 20, 30, 40 ...
      let i = +str[0] - 2;
      answer = dozens[i];
  
    } else if (str.length == 2) { // 22, 58, 96...
      let i = +str[0] - 2;
      let j = +str[1];
      answer = `${dozens[i]} ${units[j]}`;
  
    } else if (str.length == 3 && str[1] == 0 && str[2] == 0) { //100, 200, 300...
      let i = +str[0];
      answer = `${units[i]} hundred`;
  
    } else if (str.length == 3 && str[1] == 0) { //101, 205, 907
      let i = +str[0];
      let j = +str[2];
      answer = `${units[i]} hundred ${units[j]}`;
  
    } else if (str.length == 3 && str[1] == 1) {//211, 315, 419...
      let i = +str[0];
      let j = +str[2];
      answer = `${units[i]} hundred ${tens[j]}`;
  
    } else if (str.length == 3 && str[2] == 0) {//210, 320, 550...
      let i = +str[0];
      let j = +str[1] - 2;
      answer = `${units[i]} hundred ${dozens[j]}`;
  
    } else {
      let i = +str[0];
      let j = +str[1] - 2;
      let k = +str[2];
      answer = `${units[i]} hundred ${dozens[j]} ${units[k]}`;
    }
    
    console.log(answer);
    return answer; 
};


