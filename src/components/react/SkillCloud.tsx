import { useEffect } from 'react';
import TagCloud from 'TagCloud';
import { useWindowSize } from '../hooks/useWindowSize';
import '../../assets/tagcloud.css';

export default function SkillCloud({ description }: { description: string }) {
	const container = '.cloud';
	const { width } = useWindowSize();
	const skills = [
		'TypeScript',
		'React',
		'JavaScript',
		'CSS',
		'Electron',
		'Vite',
		'Next. js',
		'React Native',
		'Redux',
		'Figma',
		'REST API',
		'Design Tokens',
		'Wordpress',
		'Webflow',
		'Python',
		'Tailwind',
		'Prisma',
		'tRPC',
		'Storybook',
	];

	useEffect(() => {
		const r = width * 0.4;

		const options = {
			radius: r > 325 ? 325 : r,
		};

		const cloud = TagCloud(container, skills, options);
		setRandomTextColor();

		return () => {
			cloud.destroy();
		};
	}, [width]);

	const colorsDark = ['#a7f3d0', '#e5e7eb', '#ddd6fe', '#a5f3fc', '#fef08a'];
	const colorsLight = ['#22c55e', '#6b7280', '#6366f1', '#0ea5e9', '#f59e0b'];

	const setRandomTextColor = () => {
		const textItems = document.getElementsByClassName('tagcloud--item');
		const isDarkMode = localStorage.getItem('color-theme') === 'dark';
		let colors = isDarkMode ? colorsDark : colorsLight;

		for (let item of textItems) {
			// @ts-ignore
			item.style.color = colors[Math.floor(Math.random() * colors.length)];
		}
	};

	useEffect(() => {
		window.addEventListener('storage', () => {
			setRandomTextColor();
		});
	}, []);

	return (
		<div>
			<h1 className='text-4xl text-center mb-4'>Skills</h1>
			<p className='mb-8 text-base font-normal text-gray-500 dark:text-gray-400 whitespace-pre-line text-center px-8'>
				{description}
			</p>
			<div className='cloud text-gray-300'></div>
		</div>
	);
}
