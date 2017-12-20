Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

console.log([3,4,5].diff([3,4,5]));
