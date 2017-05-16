var exports = module.exports = {};

//use this prototype to create the other functions
exports.distance = function(v,t){
  return v*t;
};
exports.distance2 = function(a,t,v){
  return (a*(t*t)/2)+(v*t);
};

exports.velocity = function(d,t){
  return d/t;
};
exports.velocity2 = function(){};

exports.time = function(d,v){
  return d/v;
};
exports.time = function(){};

exports.acceleration = function(v,t){
  return v/t;
};
