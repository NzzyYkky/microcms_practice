import Image from 'next/image';
import styles from './page.module.css';

export default function Page() {
	const data = {
		contents: [
			{
				id: '1',
				image: {
					url: '/images/img-member1.jpg',
					widht: 240,
					height: 240,
				},
				name: 'デイビット・チャン',
				position: 'CEO',
				profile:
					'グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は、大手ソフトウェア企業での役員を務めており、数々の成功を収めてきました。自身のビジョンを実現するために、SIMPLEを設立しました。',
			},
			{
				id: '2',
				image: {
					url: '/images/img-member2.jpg',
					widht: 240,
					height: 240,
				},
				name: 'アリス・ジョンソン',
				position: 'CTO',
				profile:
					'テクノロジーとイノベーションの専門家。以前は、AIスタートアップのCTOを務めており、数々の特許を取得しています。SIMPLEでは、技術戦略を担当しています。',
			},
			{
				id: '3',
				image: {
					url: '/images/img-member3.jpg',
					widht: 240,
					height: 240,
				},
				name: 'マイケル・スミス',
				position: 'CFO',
				profile:
					'ファイナンスと経営戦略の専門家。以前は、大手投資銀行での役員を務めており、数々のM&A案件を成功に導いてきました。SIMPLEでは、財務戦略を担当しています。',
			},
		],
	};

	return (
		<main style={{ padding: '20px' }}>
			{data.contents.length === 0 ? (
				<p>メンバーが登録されていません。</p>
			) : (
				<ul className={styles.members}>
					{data.contents.map((member) => (
						<li key={member.id} className={styles.list}>
							<Image
								src={member.image.url}
								alt=""
								width={member.image.widht}
								height={member.image.height}
								className={styles.image}
							/>
							<dl>
								<dt className={styles.name}>{member.name}</dt>
								<dd className={styles.position}>{member.position}</dd>
								<dd className={styles.profile}>{member.profile}</dd>
							</dl>
						</li>
					))}
				</ul>
			)}
		</main>
	);
}
