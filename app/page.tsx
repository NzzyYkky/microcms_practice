import styles from './page.module.css';
import Image from 'next/image';

type News = {
	id: string;
	title: string;
	category: {
		name: string;
	};
	pubulishedAt: string;
	createdAt: string;
};

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
	const world = '世界';
	return (
		<>
			<section className={styles.top}>
				<div>
					<h1 className={styles.title}>テクノロジーで{world}をかえる</h1>
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
				<ul>
					{data.contents.map((article) => (
						<li key={article.id} className={styles.list}>
							<div className={styles.link}>
								<Image
									className={styles.image}
									src="/no-image.png"
									alt=""
									width={1200}
									height={630}
								/>
								<dl className={styles.content}>
									<dt className={styles.newsItemTitle}>{article.title}</dt>
									<dd className={styles.meta}>
										<span className={styles.tag}>{article.category.name}</span>
										<span className={styles.date}>
											<Image
												src="/clock.svg"
												alt=""
												width={16}
												height={16}
												priority
											/>
											{article.pubulishedAt}
										</span>
									</dd>
								</dl>
							</div>
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
