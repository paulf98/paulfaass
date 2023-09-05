import Paul from '../../assets/paul.jpg';
import { motion } from 'framer-motion';

export default function Hero() {
	return (
		<div className='flex flex-wrap w-full md:flex-nowrap gap-8 md:justify-between justify-start pb-16'>
			<div className='flex w-full lg:max-w-3xl items-start justify-start pr-16 sm:pr-40 md:pr-0'>
				<motion.img
					initial={{ opacity: 0, x: -1000 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ ease: 'easeOut', duration: 1.5 }}
					src={Paul.src}
					alt='Portrait of Paul Faass standing in front of some plants'
					className='object-cover rounded-tr-full rounded-br-full'
				/>
			</div>
			<div className='flex flex-col justify-center px-8 lg:px-16 xl:px-32 2xl:px-64 w-full'>
				<motion.h1
					className='text-5xl md:text-7xl xl:text-8xl font-semibold mb-8 xl:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-900 dark:to-emerald-400 dark:from-cyan-200'
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.25, type: 'spring', stiffness: 100 }}>
					Paul Faass
				</motion.h1>
				<motion.h2
					className='text-2xl md:text-2xl xl:text-3xl mb-4 xl:mb-8'
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, type: 'spring', stiffness: 100 }}>
					Frontend Developer &
					<br /> UX-Designer
				</motion.h2>
				<motion.p
					className='text-lg md:text-xl xl:text-2xl'
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5, type: 'spring', stiffness: 100 }}>
					Beschreibung
				</motion.p>
			</div>
		</div>
	);
}
