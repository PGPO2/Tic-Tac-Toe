var counter=0;
var arrayEven=[];
var arrayOdd=[];
var colour;
const winningCombinations = [
  ['button1', 'button2', 'button3'],
  ['button4', 'button5', 'button6'],
  ['button7', 'button8', 'button9'],
  ['button1', 'button4', 'button7'],
  ['button2', 'button5', 'button8'],
  ['button3', 'button6', 'button9'],
  ['button1', 'button5', 'button9'],
  ['button3', 'button5', 'button7']
];

function arraysHaveCommonElements(array, winningCombinations,colour) {
    for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];
        if (combination.every(item => array.includes(item))) {
            console.log(colour + " win");
            return true; // Return true if any winning combination matches
        }
    }
    return false; // Return false if no winning combination matches
}


function addUniqueValueToArray(arrayEven,arrayOdd, whatClass, counter,current) {
        if(counter%2===0){
            if (arrayEven.indexOf(whatClass) === -1) {
                arrayEven.push(whatClass);
            }
            colour="Purple"
            $(current).addClass("hasbeenclickedEven")
            // var after=current.className
            // console.log(after)
            if(arraysHaveCommonElements(arrayEven, winningCombinations,colour)){
                $(".all").off("click");
                $(".winnerDisplay p").text("Purple Wins")

            }
        }
        else if(counter%2!=0){
            if (arrayOdd.indexOf(whatClass) === -1) {
                arrayOdd.push(whatClass);
                
            }
            colour="green";
            $(current).addClass("hasbeenclickedOdd")
            if(arraysHaveCommonElements(arrayOdd, winningCombinations,colour)){
                $(".all").off("click");
                $(".winnerDisplay p").text("Green Wins")

            }
        }
        console.log(arrayEven)
        console.log(arrayOdd)
        
}

$(".all").click(function(){
    var whatClass=this.className.split(' ')[0];
    console.log("." + whatClass)
    counter++
    var current=this
    addUniqueValueToArray(arrayEven,arrayOdd, whatClass, counter,current)
    console.log(counter)
})