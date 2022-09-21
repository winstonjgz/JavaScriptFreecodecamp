function smallestCommons(arr) {
  var min1, max;
    if ( arr[0] > arr[1] ) {
        min1 = arr[1];
        max = arr[0];
    } else {
        min1 = arr[0];
        max = arr[1];
    }

    function range(min1, max) {
        var arr = [];
        for (var i = min1; i <= max; i++) {
            arr.push(i);
        }
        return arr;
    }

    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);   
    }

    var multiple = min1;
    range(min1, max).forEach(function(n) {
        multiple = lcm(multiple, n);
    });

    return multiple;
    
}

smallestCommons([1,5]);
smallestCommons([1, 13]);