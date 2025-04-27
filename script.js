const resultText = document.getElementById("result");
const btn = document.getElementById("check-btn");
const input = document.getElementById("text-input");

const clearingString = (string) => {
  const regex = /[^a-zA-Z0-9]/gi;
  const result = string.replace(regex, "");
  return result;
}

const palindromeCheck = (string) => {
  let isPalindrome = false;
  if(string.length === 1) return isPalindrome = true;
  const str1 = string.toLowerCase().split("").join("");
  const str2 = string.toLowerCase().split("").reverse().join("");
  console.log(str2);
  if(str2 === str1){
    return isPalindrome = true;
  } else {
    return isPalindrome;
  }
}

btn.addEventListener("click", ()=> {
  const str = input.value;
  const hasil = clearingString(str);
  const reverseText = palindromeCheck(hasil);
  if(reverseText && str ){
    result.textContent = `${str} is a palindrome`;
  } else if(!str) {
    alert("Please input a value");
  } else {
    result.textContent = `${str} is not a palindrome`;
  }
})