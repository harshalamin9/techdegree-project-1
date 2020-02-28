/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
  





/*** 
 * `quotes` array 
 * -- 10 quotes ,most with year and citation and some without year and citation
***/
let quotes = [
  { 
    quote: "Even the best planning is not so omniscient as to get it right the first time.",
    author: "Fred Brooks",
    year: 2004,
    citation: "Digit Magazine",
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
    year: 2008,
    citation: "PC Quest",
  },
  { 
    quote: "Hiring people to write code to sell is not the same as hiring people to design and build durable, usable, dependable software.",
    author: "Larry Constantine",
    year: 2004,
    citation: "Data Quest",
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
    year: 2015,
    citation: "Digit Magazine",
  },
  { 
    quote: "It's better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive.",
    author: "Steve McConnell",
    year: 2014,
    citation: "PC World Magazine",
  },
];



/***
 * `getRandomQuote` function
 * function returns a random object with the index number of randomnumber variable
***/

function getRandomQuote()
{
  var randomnumber = Math.floor(Math.random() * quotes.length);
  
  return quotes[randomnumber];
}


/***
 * `printQuote` function
 * randomQuote is a local variable, declared for retriving 
 * it prints exactly as per the sample quote
 * if condition for the print function for the quotes with author & year and quotes without author and year 
***/
function printQuote()
{ 
  var randomQuote = getRandomQuote();
  if (randomQuote.year == undefined && randomQuote.citation == undefined)
  {
    document.getElementsByClassName("quote")[0].innerHTML = randomQuote.quote;
    document.getElementsByClassName("source")[0].innerHTML = randomQuote.author; 
    
  } else {
   document.getElementsByClassName("quote")[0].innerHTML = randomQuote.quote;
   document.getElementsByClassName("source")[0].innerHTML = randomQuote.author + ", " + "<i>" + randomQuote.citation + "</i>, " + randomQuote.year;
  }

  
console.log(randomQuote);

}





/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
