import React from 'react';

const languages = [
	{ code: 'en', native: 'EN', flag: '🇺🇸' },
	{ code: 'de', native: 'DE', flag: '🇩🇪' },
];

type Language = {
	code: string;
	native: string;
	flag: string;
};

export default function LanguagePicker() {
	const determineURL = (lang: string) => {
		const url = window.location.pathname;
		const urlParts = url.split('/');
		urlParts[1] = lang;
		return urlParts.join('/');
	};

	const getCurrentLanguage = () => {
		const url = window.location.pathname;
		const urlParts = url.split('/');
		const lang = urlParts[1];
		const language = languages.find((l) => l.code === lang);
		if (language) return language;
		return languages[0];
	};

	const selectedLanguage = getCurrentLanguage();
	const [showLanguages, setShowLanguages] = React.useState<boolean>(false);

	return (
		<div className='fixed right-4 bottom-4 md:bottom-auto md:top-4 flex flex-col items-end'>
			<button
				onClick={() => setShowLanguages(!showLanguages)}
				className='bg-gray-100 text-gray-600 dark:text-gray-200 dark:bg-gray-800 p-2 rounded'>
				<span className='pr-2'> {selectedLanguage.flag}</span>
				{selectedLanguage.native}
			</button>
			{showLanguages &&
				languages.map((lang, i) => {
					if (lang.code !== selectedLanguage.code)
						return (
							<a
								key={i}
								href={determineURL(lang.code)}
								className='hover:bg-gray-100 text-gray-600 dark:text-gray-200 hover:dark:bg-gray-800 p-2 rounded'>
								<span className='pr-2'>{lang.flag}</span>
								{lang.native}
							</a>
						);
				})}
		</div>
	);
}
