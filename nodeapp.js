

/*var time = 0;
var timer = setInterval(function(){
  time = time + 2;
  console.log(time,'has crossed');
  if(time > 7) {
    clearInterval(timer);
  }
},2000);
*/

var myReadStream = fs.createReadStream(_dirname + './readme.txt');
var myWriteStream = fs.createWriteStream(_dirname + './writeme.txt');


function myfunction() {
  console.log('Inside my function');
}

var func = function(){
  console.log('My function expression');
}

func();
