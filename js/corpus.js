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
	"A @who will @verb @context because of a @adjective @noun.",  // 1;
	"A @who will @verb @context because of a @noun."
];

var phrases = [
	"The date is 2024. Just imagine:",
	"In 10 years, you'll see:",
	"This is your future:",
	"The year is 2035 and this is your world:",
	"In 16 years, you can see:",
];

var ask = [
	"Do you like your future?",
	"How do you feel about that future?",
	"Can You just not wait for it?",
		"How do you feel about that future?",
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
	"man-AI cooperation"
		]

corpus.context = [
	"during work" , //"auf der Arbeit"
	"in your friendships" ,
	"in public places" ,
	"in your family" ,
	"during sports" ,
	"during your leisure time" ,
	"in your household",
	"in public"
]

corpus.verb = [
	"help you" , //"Ihenen in der Öffentlichkeit helfen"
	"empower you",
	"give you more free time" ,
	"need your creativity" ,
	"replace you" ,
	"do the boring stuff" ,
	"help you be more flexible" ,
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
	"give you informations",
	"instruct you"
]

corpus.adjective = [
	"enormous",
	"ground-breaking",
	"radical",
	"improved",
	"extensive"
]

corpus.noun = [
	"change in society",
	"change in law",
	"data privacy act" ,
	"AI law" ,
	"jump forward in technology",
	"way of communication",
	"smart device" ,
	"information technology",
	"communications system"
]
