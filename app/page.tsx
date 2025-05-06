import styles from './page.module.css';
import Image from 'next/image';

import ButtonLink from '@/app/_components/ButtonLink';
import NewsList from '@/app/_components/NewsList';

import { News } from '@/app/_libs/microcms';

const data: {
	contents: News[];
} = {
	contents: [
		{
			id: '1',
			title: 'オフィス移転',
			category: {
				name: '更新情報',
			},
			pubulishedAt: '2023-10-01',
			createdAt: '2023-10-01',
		},
		{
			id: '2',
			title: '新卒採用',
			category: {
				name: '更新情報',
			},
			pubulishedAt: '2023-10-01',
			createdAt: '2023-10-01',
		},
		{
			id: '3',
			title: '新製品発表',
			category: {
				name: '更新情報',
			},
			pubulishedAt: '2023-10-01',
			createdAt: '2023-10-01',
		},
	],
};

export default function Home() {
	const sliceData = data.contents.slice(0, 2);

	return (
		<>
			<section className={styles.top}>
				<div>
					<h1 className={styles.title}>テクノロジーで未来をかえる</h1>
					<p className={styles.description}>
						私たちは市場をリードしているグローバルカンパニーです
					</p>
				</div>
				<Image
					className={styles.bgimg}
					src="/img-mv.jpg"
					alt=""
					width={4000}
					height={1200}
				/>
			</section>
			<section className={styles.news}>
				<h2 className={styles.newsTitle}>News</h2>
				<NewsList news={sliceData} />
				<div className={styles.newsLink}>
					<ButtonLink href="/news">もっと見る</ButtonLink>
				</div>
			</section>
		</>
	);
}
