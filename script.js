console.log("hello");
const myassignmemt = document.getElementById("myassignmemt");
console.log(myassignmemt);

let myAnswer = document.getElementById("myAnswer") ;
let rightAnswer;
let numberofassignment = 1;
let correctanswers = 0;
let incorrectanswers = 0;
let sums = [];
let sumsText = "";

assingmentnumber.innerHTML = numberofassignment;
function makesum() {
  let getala = Math.floor((Math.random() * 10) + 1);
  let getalb = Math.floor((Math.random() * 10) + 1);
 rightAnswer = getala * getalb;
  myassignmemt.innerHTML = "opgave =" + getala + "*" + getalb;
    sums.push(numberofassignment +"-. "+ getala + "*" + getalb +  "=" + rightAnswer);
}

myAnswer.addEventListener('keydown',(evt)=>{
  console.log(evt.keyCode);
  if (evt.keyCode == 13) {
    console.log(myAnswer.value);
    if (eval(rightAnswer) == myAnswer.value) {
      console.log("correct");
      answer.innerHTML = "correct";
      numberofassignment++;
      correctanswers++;
      assingmentnumber.innerHTML = numberofassignment;

      waiting();
      makesum();

    }

    else {
      console.log("incorrect");
      answer.innerHTML="incorrect";
      numberofassignment++;
      assingmentnumber.innerHTML = numberofassignment;
      incorrectanswers++;
      waiting();
      makesum();
    }
    for (let i = 0; i < sums.length; i++){
      sumsText += sums[i] + "\n";
    }
    if (numberofassignment > 10) {
      alert("correctanswers = " + correctanswers +"\nincorrectanswers = " + incorrectanswers + "\n" + sumsText
    );




      numberofassignment = 1;
      assingmentnumber.innerHTML = numberofassignment;

    }
  }
})


function waiting() {
myAnswer.value="";
}


makesum();
