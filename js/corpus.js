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
	"logical intelligence" ,
	"intelligent robot" ,
	"observing AI" ,  //= visual-spatial
	"social intelligence" ,
	"social AI",
	"ethical AI",
	"emotional intelligence",
	"intelligent assistant",
	"man-machine cooperation",
	"man-AI collaboration"
		]

corpus.context = [  // Wishes? Forsights
	"during work", //"auf der Arbeit"
	"in your friendships",
	"in public places",
	"in your family",
//	"during sports",
	"during your leisure time",
	"in your household",
	"in public",
	"at university",
	"at evening school",
	"at your human intelligence jobs",
	"during the holidays"
]

corpus.verb = [
	"help you" , //"Ihnen in der Öffentlichkeit helfen"
	"empower you",
	"give you more free time" ,
	"need your creativity" ,
	"replace you" ,
	"do the boring stuff" ,
	"encourage you to be more creative" ,
	"encourage you to do more things voluntarily" ,
	"enhance your human power",
	"transport you",
	"make you become healthier",
	"teach you new stuff",
	"manage your finances",
	"entertain you",
	"save you time",
	"save you money",
	"organize your tasks",
	"provide you essential infos",
	"instruct you",
	"help you make the right decisions",
	"enhance your creativity"
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
