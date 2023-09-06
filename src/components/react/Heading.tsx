export type HeadingProps = {
	heading: string;
	description?: string;
};

export default function Heading({ heading, description }: HeadingProps) {
	return (
		<>
			<h1 className='text-4xl text-center mb-12'>{heading}</h1>
			{description && (
				<p className='mb-8 text-base font-normal text-gray-500 dark:text-gray-400 whitespace-pre-line text-center px-8'>
					{description}
				</p>
			)}
		</>
	);
}
