function countdown (callback) {
  setTimeout(function () {
    callback();
}, 2000);
};

// setTimeout(countdown, 2000)


function createMultiplier(number){
     return function(value){ return value * number;};
 };

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(multiplierValue, value){
   return multiplierValue * value;
 }

 doublerWithBind = multiplier.bind(null, 2);
 triplerWithBind = multiplier.bind(null, 3);
