export type ReadMoreButtonProps = {
	target: string;
};

export default function ReadMoreButton({ target }: ReadMoreButtonProps) {
	return (
		<a
			href={target}
			className='block text-center cursor:pointer w-full font-medium bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-md py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-200 ease-in-out'>
			Read more
		</a>
	);
}
