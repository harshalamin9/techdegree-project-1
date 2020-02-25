/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
var text ;
var text1

/*** 
 * `quotes` array 
***/
let quotes = [
  { 
    quote: "Even the best planning is not so omniscient as to get it right the first time.",
    author: "Fred Brooks",
  },
    
  { 
    quote: "The best way to get a project done faster is to start sooner",
    author: "Jim Highsmith",
  },
  { 
    quote: "Program testing can be used to show the presence of bugs, but never to show their absence!",
    author: "Edsger Dijkstra",
  },
  { 
    quote: "Correctness is clearly the prime quality. If a system does not do what it is supposed to do, then everything else about it matters little.",
    author: "Bertrand Meyer",
  },
  { 
    quote: "Conceptual integrity is the most important consideration in system design.",
    author: "Fred Brooks",
  },
  { 
    quote: "Hiring people to write code to sell is not the same as hiring people to design and build durable, usable, dependable software.",
    author: "Larry Constantine",
  },
  { 
    quote: "A good way to stay flexible is to write less code.",
    author: "John Ousterhout",
  },
  { 
    quote: "Simplicity is prerequisite for reliability",
    author: "Edsger W.Dijkstra",
  },
  { 
    quote: "Optimism is an occupational hazard of programming: feedback is the treatment.",
    author: "Kent Beck",
  },
  { 
    quote: "It's better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive.",
    author: "Steve McConnell",
  },
];



/***
 * `getRandomQuote` function
***/

function getRandomQuote()
{
  var randomnumber = Math.floor(Math.random() * quotes.length) + 1;
   for (var i = 0; i <=quotes.length; i+=1)
  { 
  
    if (i === randomnumber)
  {
  text = quotes[i].quote;
  text1 =  "- By "+ quotes[i].author;
  
  }
    
  }
}


/***
 * `printQuote` function
***/
function printQuote()
{ 
   getRandomQuote();
  document.getElementById("quote-box").innerHTML = "<p>"+text+"</p>"+ "<i>"+  "<P align = 'right'>"+text1+"</P>" + "</i>";
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
