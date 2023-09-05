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
