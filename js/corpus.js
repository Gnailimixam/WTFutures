/*
 * WTF Engine
 * https://github.com/soulwire/WTFEngine
 *
 * Copyright 2011, Justin Windle
 * http://blog.soulwire.co.uk/
 * Code Licensed under the MIT licence.
 * https://github.com/soulwire/WTFEngine/blob/master/MIT-LICENSE.txt
 *
 * Concept based on WTFSIMFD
 * http://whatthefuckshouldimakefordinner.com/
 * by Zach Golden
 * http://www.zachgolden.com/
 *
 */

var templates = [ // 6
	"A @who will @verb @context because of @adjective @noun.",  // 1;
	"Due to @adjective @noun, a @who will @verb @context.",
	"A @who will @verb @context.",
	"Thanks to the @adjective @noun, a @who will @verb @context.",
	"In a world of @noun, a @who will @verb @context.",
	"In a @adjective future, a @who will @verb @context."
];

var phrases = [
	"The date is 2024. Just imagine:",
	"In 10 years, you'll see:",
	"This is your future:",
	"The year is 2035 and this is your world:",
	"In 16 years, you can see:",
	"In just 5 years, you'll see:",
	"The date is 2040. Just imagine:"
];

var ask = [
	"Do you like your future?",
	"How do you feel about that?"
];

var labels = [
	"What else might the future bring?",
  "This is crazy, show me another!"
];

/*
	Auto Generated from WTF.csv
*/

corpus = {};
corpus.who = [ //46
	"speaking AI" , //remembering, eloquent,
	"remembering assistant",
	"eloquent intelligence",
	"amusing intelligence",
	"intelligent assistant",
	"personal intelligent assistant",
	"logical intelligence" ,//
	"well-structured AI",
	"planning intelligence",
	"rational assistant",
	"precise AI",
	"trustable AI",
	"complexity grasping assistant",
	"objective AI" ,
  "rational AI",
	"intelligent robot" , //
	"skillful robot",
	"versatile robot",
	"flexible robot",
	"observing AI" ,  //
	"noticing AI",
	"visualising assistant",
	"recognizing intelligence",
	"localizing AI",
	"discovering intelligence",
	"overviewing AI",
	"anticipating AI",
	"identifying intelligence",
	"detecting AI", //= visual-spatial
	"social intelligence" ,
	"social AI",//
	"team-minded AI",
	"empathic assistant",
	"fair intelligence",
	 "unselfish AI" ,
	 "respectful intelligence",
	 "reliable intelligence",
	 "sensitive intelligence",
	"ethical AI", //moral
	"emotional intelligence",//
	"sentient intelligence",
	"gentle AI",
	"caring intelligence",
	"sympathetic AI",
	"man-machine cooperation",
	"man-AI collaboration"
		]

corpus.context = [  // 24
	"during work", //"auf der Arbeit"
	"in your friendships",
	"in public places",
	"at the office",
	"in your family",
	"while spending time with your friends",
	"during your leisure time",
	"at your household tasks", //
	"at cooking",
	"when cleaning your flat",
	"while travelling the world",
	"when gardening",
	"while shopping",
	"while calling your friends",
	"in public",
	"at dealing with strangers",
	"at university",
	"at evening school",
	"at your human intelligence jobs",
	"at your craftsman jobs",
	"during the holidays",
	"when on vacation",
	"when on a date",
	"at looking after your parents",
	"in your health care"
]

corpus.verb = [ //37
	"empower you",//0
	"strengthen you",//1
	"help you",//2
	"enhance your creativity",//3
	"need your creativity",
	"provide you essential informations",
	"give you informations",
	"give you fascinating insights",
	"help you make the right decisions",
	"support you to make the right decision",
	"save you time",
	"give you more free time" ,
	"do the boring stuff" ,
	"save you money",
	"negotiate the best for you",
	"make you become healthier",
	"teach you new stuff",
	"instruct you",
	"transport you",
	"make you more money",
	"organize your tasks",
	"manage your finances",
	"entertain you",
	"solve your problems",
	"do what's good for you",
	"organize your stuff",
	"do your jobs",
	"be your friend",
	"encourage you to be more creative",
	"encourage you to do things voluntarily",
	"encourage you to do the disliked stuff too",
	"replace you",
	"be better than you",
	"be faster than you",
	"tell you what's important",
	"tell you what's right",
	"organize your life",
	"look after your children"
]

corpus.adjective = [ //10
	"enormous",
	"ground-breaking",
	"radical",
	"improved",
	"comprehensive",
	"enhanced",
	"advanced",
	"trend-setting",
	"pioneering",
	"aligned"
]

corpus.noun = [ //14
	"changes in society",
	"social changes",
	"changes in law",
	"data privacy acts" ,
	"AI laws",
	"jumps in technology",
	"technological developments",
	"communication possibilities",
	"information technologies",
	"communications systems",
	"human computation power",
	"neuromorphig computing power",
	"AI managed companies",
	"abilities in mood analysis",
	"communication technologies"
]
