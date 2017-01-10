'use strict';
const foregroundColor = '#d2d2d2';
const backgroundColor = '#20202f';
const borderColor     = '#222430';
const cursorColor     = '#97979b';
const black           = '#302f39';
const red             = '#da637e';
const green           = '#b1b792';
const yellow          = '#ab93b9';
const blue            = '#7787a3';
const magenta         = '#ac8ac1';
const cyan            = '#83a29e';
const white           = '#b1b8c3';
const lightBlack      = '#666569';
const lightRed        = '#f0a3a3';
const lightGreen      = '#c7e6b8';
const lightYellow     = '#cbb6d7';
const lightBlue       = '#96b6d8';
const lightMagenta    = '#d2bbe4';
const lightCyan       = '#a7c3bf';
const lightWhite      = '#cdcdcd';

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor,
	cursorColor,
	colors: {
		black,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white,
		lightBlack,
		lightRed,
		lightGreen,
		lightYellow,
		lightBlue,
		lightMagenta,
		lightCyan,
		lightWhite
	},
	css: `
		${config.css}
		.tab_active:before {
			border-color: rgba(255, 106, 193, 0.25);
		}
	`
});
