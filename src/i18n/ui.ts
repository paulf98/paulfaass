export const languages = {
	de: 'Deutsch',
	en: 'English',
};

export const defaultLang = 'de';
export const showDefaultLang = false;

export type Routes = {
	[key: string]: {
		[key: string]: string;
	};
};

export const routes: Routes = {
	de: {
		about: 'about',
	},
	en: {
		about: 'about',
	},
};

export const ui = {
	en: {
		'nav.home': 'Home',
		'nav.about': 'About',
	},
	de: {
		'nav.home': 'Startseite',
		'nav.about': 'Über mich',
	},
} as const;
