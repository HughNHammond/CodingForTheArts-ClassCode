let testArray = ["fruit", "banana", "chocolate", "sandwich"];

function setup() {
    console.log(testArray)
    console.log(testArray[2]);
    testArray.splice(2, 1);
    console.log("spliced!")
    console.log(testArray)
    console.log(testArray[2]);
}