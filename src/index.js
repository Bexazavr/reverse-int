module.exports = function reverse (n) {  
  const str = n.toString();
  let arr = [];
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (Number(str[i]) || Number(str[i]) === 0) {arr.push(str[i]);console.log(str[i])} 
  }
  return Number(arr.join(''));
}