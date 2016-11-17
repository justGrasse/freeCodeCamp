function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

    itemList = [];
    for (var i in arr1){ itemList.push(arr1[i][1]); }
    console.log("Item List: "+itemList);

    for (var i = 0; i < arr2.length; i++){
        // If the item exists
        if (itemList.indexOf(arr2[i][1])>=0){
            idx = itemList.indexOf(arr2[i][1]);
            arr1[idx][0] += arr2[i][0];
        } else {
          itemList.push(arr2[i][1]);
          arr1.push(arr2[i]);
        }    
    }

    console.log(arr1);
    return arr1;

}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);