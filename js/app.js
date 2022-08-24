// for making selecting DOM elements easier, rather than writing document.querySelector each time
window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);


/* ------------------------------------------
 			navbar functionality
------------------------------------------ */

const hamburgerIcon = $('.hamburger-icon');
const menu = $('.navbar-links');
const settingsBtn = $('.settings button');
const settingsMenu = $('.settings>ul');
const languageBtn = $('.language-btn');
const languagesMenu = $('.languages');
const arabicLanguageBtn = $('.arabic');
const englishLanguageBtn = $('.english');
const themeBtn = $('.theme-btn');
const themesMenu = $('.themes');
const darkThemeBtn = $('.dark');
const lightThemeBtn = $('.light');
let currentLanguage = $('.languages .selected').classList.contains('arabic') ? 'arabic' : 'english';
let currentTheme = $('.themes .selected').classList.contains('light') ? 'light' : 'dark';


hamburgerIcon.addEventListener('click', () => {
	menu.classList.toggle('open');
})

settingsBtn.addEventListener('click', () => {
	settingsMenu.classList.toggle('open');
})

languageBtn.addEventListener('click', () => {
	if (themesMenu.classList.contains('open')) {
		themesMenu.classList.remove('open')
	}
	languagesMenu.classList.toggle('open');
})

themeBtn.addEventListener('click', () => {
	if (languagesMenu.classList.contains('open')) {
		languagesMenu.classList.remove('open')
	}
	themesMenu.classList.toggle('open');
})

arabicLanguageBtn.addEventListener('click', changeLanguage('arabic'));
englishLanguageBtn.addEventListener('click', changeLanguage('english'));
lightThemeBtn.addEventListener('click', changeTheme('light'));
darkThemeBtn.addEventListener('click', changeTheme('dark'));


function changeLanguage(newLanguage) {
	if (newLanguage == currentLanguage) {
		return;
	} else {
		currentLanguage = newLanguage;
		setNewLanguage(newLanguage);
	}
}

function setNewLanguage(newLanguage) {
	/* 
	change the checkmarks
	change the language of the site
	change the orientation of the site
	*/
}
