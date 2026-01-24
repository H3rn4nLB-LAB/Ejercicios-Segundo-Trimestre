function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function showMax() {
  var a = Number(document.getElementById("max1").value);
  var b = Number(document.getElementById("max2").value);
  document.getElementById("maxResult").innerHTML = "Max: " + max(a, b);
}

function maxOfThree(a, b, c) {
  var m = a;
  if (b > m) m = b;
  if (c > m) m = c;
  return m;
}

function showMaxOfThree() {
  var a = Number(document.getElementById("max3_1").value);
  var b = Number(document.getElementById("max3_2").value);
  var c = Number(document.getElementById("max3_3").value);
  document.getElementById("maxThreeResult").innerHTML = "Max: " + maxOfThree(a, b, c);
}

function isVowel(ch) {
  var vowels = "aeiouAEIOU";
  return vowels.indexOf(ch) !== -1;
}

function checkVowel() {
  var ch = document.getElementById("charInput").value;
  document.getElementById("vowelResult").innerHTML = isVowel(ch);
}

function translate(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (isVowel(ch) || ch === " ") {
      result += ch;
    } else if (/[a-zA-Z]/.test(ch)) {
      result += ch + "o" + ch;
    } else {
      result += ch;
    }
  }
  return result;
}

function translateText() {
  var text = document.getElementById("rovarInput").value;
  document.getElementById("rovarResult").innerHTML = translate(text);
}

function sum(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function multiply(arr) {
  var total = 1;
  for (var i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
}

function showSumMultiply() {
  var values = document.getElementById("arrayInput").value.split(",");
  var nums = [];
  for (var i = 0; i < values.length; i++) {
    nums.push(Number(values[i]));
  }
  document.getElementById("sumResult").innerHTML = "Sum: " + sum(nums);
  document.getElementById("multiplyResult").innerHTML = "Multiply: " + multiply(nums);
}

function reverse(str) {
  var result = "";
  for (var i = str.length - 1; i >= 0; i--) {
    result += str.charAt(i);
  }
  return result;
}

function reverseText() {
  var text = document.getElementById("reverseInput").value;
  document.getElementById("reverseResult").innerHTML = reverse(text);
}

function sortWords() {
  var words = document.getElementById("sortInput").value.split(",");
  words.sort();
  document.getElementById("sortResult").innerHTML = words.join(", ");
}

function findLongestWord(arr) {
  var maxLen = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLen) {
      maxLen = arr[i].length;
    }
  }
  return maxLen;
}

function findLongest() {
  var words = document.getElementById("longestInput").value.split(",");
  document.getElementById("longestResult").innerHTML = "Longest length: " + findLongestWord(words);
}

function filterLongWords(arr, i) {
  var result = [];
  for (var j = 0; j < arr.length; j++) {
    if (arr[j].length > i) {
      result.push(arr[j]);
    }
  }
  return result;
}

function filterWords() {
  var words = document.getElementById("filterInput").value.split(",");
  var len = Number(document.getElementById("filterLength").value);
  document.getElementById("filterResult").innerHTML = filterLongWords(words, len).join(", ");
}

function charFreq(str) {
  var freq = {};
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (freq[ch]) {
      freq[ch]++;
    } else {
      freq[ch] = 1;
    }
  }
  return freq;
}

function showCharFreq() {
  var text = document.getElementById("freqInput").value;
  var result = charFreq(text);
  document.getElementById("freqResult").innerHTML = JSON.stringify(result);
}
