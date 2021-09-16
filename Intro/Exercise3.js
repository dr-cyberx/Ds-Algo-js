function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); //O(1)

    var middleIndex = Math.floor(items.length / 2); 
    var index = 0; 

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

// Big O : O(1 + n/2 + 100)
// minified : O(n)