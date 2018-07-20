
const inp = "dummy",
// output { d: 1, u: 1, m: 2, y: 1 }

const calculateFrequency = function(string) {
  var stringArr = string.split("");
  
  function charFreq(char){
    var count = 0;
    for (var index=0; index<stringArr.length; index++){
      if (char==stringArr[index]){
        count+=1;
      }
    }
    return count;
  }

  var set=new Set(stringArr);
  var newStringArr=[...set];
  var output=new Object();
  
  for (var index=0;index<newStringArr.length;index++){
      var char=newStringArr[index];
      output[char]=charFreq(char);
  }  
  console.log(output) ;
};

calculateFrequency(inp);