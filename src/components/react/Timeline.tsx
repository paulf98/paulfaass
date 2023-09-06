import TimelineItem, { type TimelineItemProps } from './TimelineItem';
import Heading from './Heading';

export default function Timeline({
	timeline,
}: {
	timeline: TimelineItemProps[];
}) {
	return (
		<div className='container mx-auto max-w-5xl px-12 md:px-16 py-8'>
			<Heading heading={'Timeline'} />
			<ol className='mt-8 relative border-l border-gray-200 dark:border-gray-700'>
				{timeline.map((item) => (
					<TimelineItem {...item} key={item.title} />
				))}
			</ol>
		</div>
	);
}
