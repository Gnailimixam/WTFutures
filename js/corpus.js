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

var templates = ["A @who will @verb at @context because of a @adjective @noun."


];

var phrases = [
	"The date is 2024. Just imagine:",
	"In 10 years, you'll see:",
	"This is your future:",
	"The year is 2035 and this is your world:"
];

var ask = [
	"Do you like your future?",
	"How do you feel about that future?"
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
	"visual-spatial intelligence" ,
	"lingusitic intelligence" ,
	"logical intelligence" ,
	"bodily-kinesthetic intelligence" ,
	"musical intelligence" ,
	"social intelligence" ,
	"emotional intelligence"
		]


corpus.context = [
	"workplace" ,
	"friendships" ,
	"public places" ,
	"families" ,
	"sports" ,
	"leisure time" ,
	"household"
]


corpus.verb = [
	"help people" ,
	"empower humans",
	"make people have more free time" ,
	"need human's creativity" ,
	"replace humans" ,
	"do the boring stuff" ,
	"help people be more flexible" ,
	"encourage people to do more arts" ,
	"encourage humans to do more things voluntarily" ,
	"enhance human power"
]

corpus.adjective = [
	"big",
	"enormously",
	"small",
	"ground-braking",
	"radically",
	"refined"
]

corpus.noun = [
	"society",
	"change in law",
	"change in data privacy" ,
	"new AI law" ,
	"change in human rights" ,
	"leap forward in technology" ,
	"new way of communication",
	"new smart device" ,
	"information technology"
]
