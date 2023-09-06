import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReadMoreButton from './ReadMoreButton';

export type TimelineItemProps = {
	img: string;
	title: string;
	time: string;
	description: string;
	tag?: string;
	skills?: string[];
	target?: string;
};

const variants = {
	hidden: {
		opacity: 0,
		transition: {
			ease: 'easeInOut',
			duration: 1,
		},
	},
	visible: {
		opacity: 1,
		transition: {
			ease: 'easeInOut',
			duration: 1,
		},
	},
};

export default function TimelineItem({
	img,
	title,
	time,
	description,
	tag,
	target,
	skills,
}: TimelineItemProps) {
	const control = useAnimation();
	const [ref, inView] = useInView({});

	useEffect(() => {
		if (inView) {
			control.start('visible');
		} else {
			control.start('hidden');
		}
	}, [inView]);

	return (
		<motion.li
			className='mb-10 ml-16'
			ref={ref}
			animate={control}
			initial='hidden'
			variants={variants}>
			<motion.span className='flex absolute -left-8 justify-center items-center w-16 h-16 p-4 bg-gray-100 rounded-full'>
				<img src={img} alt='' />
			</motion.span>
			{tag && (
				<span className='bg-green-400 text-gray-900 text-sm font-medium mr-3 px-2.5 py-0.5 rounded'>
					{tag}
				</span>
			)}
			<h2 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
				{title}
			</h2>

			<time className='block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-300'>
				{time}
			</time>
			{skills && (
				<ul className='flex flex-wrap gap-2 mt-4'>
					{skills.map((skill) => (
						<li
							key={skill}
							className='px-2.5 py-0.5 bg-gray-50 dark:bg-gray-900 rounded'>
							<p className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-900 dark:to-emerald-400 dark:from-cyan-200'>
								{skill}
							</p>
						</li>
					))}
				</ul>
			)}
			<p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400 whitespace-pre-line text-justify md:text-left'>
				{description}
			</p>
			{target && <ReadMoreButton target={target} />}
		</motion.li>
	);
}
