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

var templates = [
	"A @who will @verb @context because of @adjective @noun.",  // 1;
	"Due to @adjective @noun, a @who will @verb @context.",
	"A @who will @verb @context cause of @adjective @noun.",
	"Thanks to the @noun, a @who will @verb @context.",
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
corpus.who = [
	"speaking AI" , //"Eine sprechende KI"
	"amusing intelligence",
	"intelligent assistant",
	"personal intelligent assistant",
	"logical intelligence" ,
	"intelligent robot" ,
	"observing AI" ,  //= visual-spatial
	"detecting AI", //= visual-spatial
	"social intelligence" ,
	"social AI",
	"ethical AI",
	"emotional intelligence",
	"man-machine cooperation",
	"man-AI collaboration"
		]

corpus.context = [  // Wishes? Forsights
	"during work", //"auf der Arbeit"
	"in your friendships",
	"in public places",
	"at the office",
	"in your family",
//	"during sports",
	"during your leisure time",
	"in your household",
	"in public",
	"at university",
	"at evening school",
	"at your human intelligence jobs",
	"during the holidays",
	"in your health care"
]

corpus.verb = [
	"empower you",
	"strengthen you",
	"help you",
	"enhance your creativity",
	"need your creativity",

	"provide you essential infos",
	"give you informations",
	"give you fascinating insights",

	"help you make the right decisions",
	"support you to decide",

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

	"replace you",
	"be better than you",
	"tell you what's important",
	"tell you what's right"
]

corpus.adjective = [
	"enormous",
	"ground-breaking",
	"radical",
	"improved",
	"comprehensive",
	"aligned"
]

corpus.noun = [
	"changes in society",
	"social changes",
	"changes in law",
	"data privacy acts" ,
	"AI laws" ,
	"jumps in technology",
	"technological developments",
	"communication possibilities",
	"information technologies",
	"communications systems",
	"human computation power",
	"neuromorphig computing power",
	"AI managed companies",
	"communication technologies"
]
