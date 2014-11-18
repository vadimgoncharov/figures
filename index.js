'use strict';

var fromCharCode = String.fromCharCode;
var platform = process.platform;
var symbols;

if (platform === 'win32') {
	symbols = {
		tick: '√',
		cross: '×',
		star: '*',
		square: '█',
		squareSmall: '[ ]',
		squareSmallFilled: '[█]',
		circle: '( )',
		circleFilled: '(*)',
		circleDotted: '( )',
		circleDouble: '( )',
		circleCircle: '(○)',
		circleCross: '(×)',
		circlePipe: '(│)',
		circleQuestionMark: '(?)',
		bullet: '*',
		dot: '.',
		line: '─',
		ellipsis: '...',
		pointer: '>',
		info: 'i',
		warning: '‼',
		hamburger: '≡',
		smiley: '☺',
		mustache: '┌─┐',
		heart: main.heart,
		arrowUp: main.arrowUp,
		arrowDown: main.arrowDown,
		arrowLeft: main.arrowLeft,
		arrowRight: main.arrowRight,
		radioOn: '(*)',
		radioOff: '( )',
		checkboxOn: '[×]',
		checkboxOff: '[ ]',
		checkboxCircleOn: '(×)',
		checkboxCircleOff: '( )',
		questionMarkPrefix: '？'
	};
}
else {
	symbols = {
		tick: '✔︎',
		cross: '✖',
		star: '★',
		square: '▇',
		squareSmall: '◻',
		squareSmallFilled: '◼',
		circle: '◯',
		circleFilled: '◉',
		circleDotted: '◌',
		circleDouble: '◎',
		circleCircle: 'ⓞ',
		circleCross: 'ⓧ',
		circlePipe: 'Ⓘ',
		circleQuestionMark: '?⃝',
		bullet: '●',
		dot: '․',
		line: '─',
		ellipsis: '…',
		pointer: '❯',
		info: 'ℹ',
		warning: '⚠',
		hamburger: '☰',
		smiley: '㋡',
		mustache: '෴',
		heart: '♥',
		arrowUp: '↑',
		arrowDown: '↓',
		arrowLeft: '←',
		arrowRight: '→',
		radioOn: '◉',
		radioOff: '◯',
		checkboxOn: '☒',
		checkboxOff: '☐',
		checkboxCircleOn: 'ⓧ',
		checkboxCircleOff: 'Ⓘ',
		questionMarkPrefix: '?⃝',
		};

		if (platform === 'linux') {
  			// the main one doesn't look that good on Ubuntu
  			symbols.questionMarkPrefix = '?';
		}
}

// fix bug with empty symbols in iTerm
Object.keys(symbols).forEach(function(key) {
	symbols[key] = fromCharCode(symbols[key].charCodeAt(0));
});

module.exports = symbols;
