const questions = [
"I set a personal example by doing what I expect of others",
"Talk about future trends that will influence how our work gets done.",
"Seek out challenging opportunities that test my own skills and abilities.",
"Develop cooperative relationships among the people I work with",
"Praise people for job well done.",
"Spend time and energy making certain that the people I work with adhere to the principles and standards that we have agreed on",
"Describe a compelling image of what our future could be like.",
"Challenge people to try out new and innovative ways to do their work.",
"Actively listen to diverse points of view.",
"Make it a point to let people know about my confidence in their abilities.",
"Follow through on promises and commitments I make.",
"Appeal to others to share an exciting vision of the future.",
"Search outside the formal boundaries of the organization for innovative ways to improve what we do.",
"Treat others with dignity and respect.",
"Makes sure that people are creatively rewarded for their contributions to the success of projects.",
"Asks for feedback on how my actions affect other people\'s performance.",
"Show others how their long-term interests can be realized by enlisting in a common vision.",
"Ask, \"what can we learn?\" when things don\'t go as expected.",
"Support the decisions that people make on their own.",
"Publicly recognize people who exemplify commitment to shared values.",
"Build consensus around a common set of values for running our organization.",
"Paint the \"big picture\" of what we aspire to accomplish.",
"Make certain that we set achievable goals, make concrete plans, and establish measurable milestones for the projects and programs that we work on",
"Give people a great deal of freedom and choice in deciding how to do their work.",
"Find ways to celebrate accomplishments.",
"I am clear about the philosophy of leadership.",
"Speak with genuine conviction about the higher meaning and purpose of our work.",
"Experiment and take risks, even when there is a chance of failure.",
"Ensure that people grow in their jobs by learning new skills and developing themselves.",
"Give the members of the team lots of appreciation and support for their contributions."
]

let scores = []

const groupings ={
  "Challenging the Process - Desire for Improvement": [2, 7, 12, 17, 22, 27],
  "Inspiring a Shared Vision - Visioning and Influencing Commitment": [1, 6, 11, 16, 21, 26],
  "Encouraging Others to Action - Enabling People": [3, 8, 13, 18, 23, 28], 
  "Modeling the Way - Walking the Talk": [0, 5, 10, 15, 20, 25],
  "Encouraging the Heart - Building Esteem": [4, 9, 14, 19, 24, 29]
}


//0 is <=15, 1 is 16-21, <=22
const explanations ={
  "Challenging the Process - Desire for Improvement": [
	"High Scores 22 and above: In this area a high score indicates that you are leading your people in a manner that looks beyond simply getting the daily work done. You are encouraging them to question current practices and try new ways to get better results. Also, that your reaction to failure in these instances is focused on learning rather than \"punishing\". What is most important is that you are consistent in the range of behaviours that seek improvement in your and your teams performance.",
	"Mid Level Scores - 16 to 21: This indicates that you are aware of the need to work at improving how your people deliver results, but there is no strong commitment to developing an improvement oriented culture. You will make decisions on occasion to change things for the better; however this is probably more due to circumstances and is reactive rather than a focused approach.",
	"Low Scores - 15 and below: This indicates that your focus is on dealing more with the day to day operational work and solving problems after they happen. There is little focus on systems and process improvement and possibly that fire fighting is making you risk averse, so there is little chance for you and your people to sit back and look at how things could be improved."
	],
  "Inspiring a Shared Vision - Visioning and Influencing Commitment": [
	"High Scores 22 and above: This indicates that vision about your business and its purpose, but most important is that there is a sharing of this vision and purpose with your people, and very possibly your suppliers as well, and that you help them to find their place in positively contributing to how it is achieved.",
	"Mid Level Scores - 16 to 21: Here the indication is that you have thought about the vision and business purpose and do give some priority to communicating it, but it is not clearly understood across the number of people who are stakeholders, therefore the commitment you need is difficult to get.",
	"Low Scores - 15 and below: This usually indicates that you are more focused on the day-to-day and that you have not considered in any significant way where the business is going and how you need to get your people involved in it."
	],
  "Encouraging Others to Action - Enabling People": [
	"High Scores 22 and above: This is an indication that you consistently work at ensuring that your people and stakeholders know what to do, how to do it and that you actively encourage them to take necessary action to achieve their objectives. You also seek to develop people and know how to get cooperation from others.",
	"Mid Level Scores - 16 to 21: This indicates that you are aware of the need to train and develop people and do so with some success. Your ability to develop effective working relationships with others is at risk across the range of different types of people you have to deal with: It is possible that your success is limited to those you like personally.",
	"Low Scores - 15 and below: This indicates that it is likely that your people have a high level of dependence on you, and you are consistently having to make decisions for them and even do some of the work for them."
	],
  "Modeling the Way - Walking the Talk": [
	"High Scores 22 and above: This indicates that there is consistency between what you say and what you do. It is also indicative that you actively encourage your people to follow your example and people tend to find you reliable because you do what you say.",
	"Mid Level Scores - 16 to 21: This indicates that you know what is required and that you do follow through some of the time; however it is not consistent enough to ensure that all your people can use you as a role model.",
	"Low Scores - 15 and below: This indicates that there is not enough commitment demonstrated through your actions to what you ask of others, and they would experience difficulty following your leadership example."
	],
  "Encouraging the Heart - Building Esteem": [
	"High Scores 22 and above: This indicates that people are recognized by you as effective and valued contributors to the business: You are able to convey to them that they are special and important, and you find ways to reward their efforts.",
	"Mid Level Scores - 16 to 21: This indicates that you are able to recognize and value people, however it is not across the spread of people you have to work with, and therefore able to get the best performance from only some of them.",
	"Low Scores - 15 and below: This indicates that you have difficulty communicating positively about the capabilities of your people, and they are therefore unable to realize their full potential under your leadership."
	]
}


let index = 0;

const progressElem = document.getElementById("progress");
const questionElem = document.getElementById("question");
const scoreElem = document.getElementById("score");

updateQuestion();

function updateQuestion(){
	questionElem.innerHTML = questions[index++];
}



function submitScore(){
	let score = parseInt(scoreElem.value);
	scoreElem.value = "";
        progressElem.innerHTML = (index+1) + "/" + questions.length
  	scoreElem.focus();
         if (isNaN(score) || score <= 0 || score > 5){
  	alert("Please enter a number between 1-5");
    return;
  }

  scores.push(score);
  if (index >= questions.length){
  	displayResults();
  } else {
  	updateQuestion();
  } 
}

function createTable() {
  let empTable = document.createElement('table');

  let tr = empTable.insertRow(-1);
	

  let th2 = document.createElement('th'); // the header object.
  th2.innerHTML = "Question";
  tr.appendChild(th2);
  
  let th3 = document.createElement('th'); // the header object.
  th3.innerHTML = "Score";
  tr.appendChild(th3);

      // add table to a container.
  return empTable;
}

function displayResults(){
	document.getElementById("inputDiv").style.display = "none";

	resultDiv =  document.getElementById("resultsDiv");
  resultDiv.style.display = "block"

  for (const group in groupings){
  	let header = document.createElement("h3");
    header.innerHTML = group;
    resultsDiv.appendChild(header);
    
    let rowCount = 1;
  	let table = createTable();
    resultsDiv.appendChild(table);
 	
    let total = 0;
    for (const qIndex of groupings[group]){
    	let tr = table.insertRow(-1);

      const cell1 = tr.insertCell(-1);
      const cell2 = tr.insertCell(-1);
      
      cell1.innerHTML = questions[qIndex];
      cell2.innerHTML = scores[qIndex];
      total+=scores[qIndex];
    }
    let tr = table.insertRow(-1);

    const cell1 = tr.insertCell(-1);
    const cell2 = tr.insertCell(-1);
    cell1.innerHTML = "Total";
    cell2.innerHTML = total;
    
    const paragraph = document.createElement("p");
    resultsDiv.appendChild(paragraph);
    let i = 0;
    if (total <= 15){
    	i = 2;
    } else if (total <= 21){
    	i = 1;
    }
    
    paragraph.innerHTML = explanations[group][i];
    
  }
}

function printPage(){
	window.print();
}






