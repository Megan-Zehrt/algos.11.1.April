// Is n a power of 4



// Non-Recursively

var isPowerOfFour = function(n) {
    
    if(n <= 0){
        return false
    }

    while (n % 4 === 0) {
        n /= 4;
    }

    return n==1
};





// Recursevily

var isPowerOfFour = function(n) {
    if (n <= 0) {
        return false;
    }

    function helper(n) {
        if (n === 1) {
            return true;
        }
        if (n % 4 === 0) {
            return helper(n / 4);
        }
        return false;
    }

    return helper(n);
};