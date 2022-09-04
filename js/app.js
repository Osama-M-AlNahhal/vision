// for making selecting DOM elements easier, rather than writing document.querySelector each time
window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);


/* ------------------------------------------
 			navbar functionality
------------------------------------------ */

const navbar = $('.navbar');
const hamburgerIcon = $('.hamburger-icon');
const menu = $('.navbar-links');
const settingsBtn = $('.settings-btn');
const settingsMenu = $('.settings>ul');
let settingsDropdownIcon = $('.settings-dropdown-icon');
let languagesDropdownIcon = $('.languages-dropdown-icon');
let themesDropdownIcon = $('.themes-dropdown-icon');
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

let settingsDropdownIconRotation = 0;
let languagesDropdownIconRotation = 0;
let themesDropdownIconRotation = 0;



hamburgerIcon.addEventListener('click', () => {
	menu.classList.toggle('open');
})

let rotateIcon = (element, currentRotation) => {
	if (currentRotation == 0) {
		element.style.transform = 'rotate(180deg)';
		// currentRotation
		return 180;
	} else {
		element.style.transform = 'rotate(0deg)';
		// currentRotation
		return 0;
	}
}
settingsBtn.addEventListener('click', () => {
	settingsMenu.classList.toggle('open');
	settingsDropdownIconRotation = rotateIcon(settingsDropdownIcon, settingsDropdownIconRotation);
	
})

navbar.addEventListener("mouseover", () => {
	navbar.classList.toggle('expand');
});


languageBtn.addEventListener('click', () => {
	if (themesMenu.classList.contains('open')) {
		themesMenu.classList.remove('open');
		themesDropdownIconRotation = rotateIcon(themesDropdownIcon, themesDropdownIconRotation);
	}
	languagesMenu.classList.toggle('open');
	languagesDropdownIconRotation = rotateIcon(languagesDropdownIcon, languagesDropdownIconRotation);

})

themeBtn.addEventListener('click', () => {
	if (languagesMenu.classList.contains('open')) {
		languagesMenu.classList.remove('open');
		languagesDropdownIconRotation = rotateIcon(languagesDropdownIcon, languagesDropdownIconRotation);
	}
	themesMenu.classList.toggle('open');
	themesDropdownIconRotation = rotateIcon(themesDropdownIcon, themesDropdownIconRotation);
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

function changeTheme(newTheme) {
	if (newTheme == currentTheme) {
		return;
	} else {
		currentTheme = newTheme;
		setNewTheme(newTheme);
	}
}

function setNewTheme(newTheme) {
	/* 
	change the checkmarks
	change the theme of the site
	*/
}
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

function changeTheme(newTheme) {
	if (newTheme == currentTheme) {
		return;
	} else {
		currentTheme = newTheme;
		setNewTheme(newTheme);
	}
}

function setNewTheme(newTheme) {
	/* 
	change the checkmarks
	change the theme of the site
	*/
}

window.onload = function() {
    width = this.innerWidth;
    height = this.innerHeight;
}

window.addEventListener('resize', () => {
	width = this.innerWidth;
    height = this.innerHeight;
} );

window.addEventListener('resize', () => {
	if (width >= 1024 && settingsMenu == 1) {
		turnOffSettingsMenu();
		settingsMenu = 0;
	} else if (width < 1024 && settingsMenu == 0) {
		turnOnSettingsMenu();
	}
} );

function turnOffSettingsMenu() {
	settings.classList.remove('hover-effect'); 
	
}

function turnOnSettingsMenu() {
	settings.classList.add('hover-effect');

}

