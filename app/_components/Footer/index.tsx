import Link from 'next/link';
import styles from './index.module.css';

export default function Footer() {
	const navMenu = [
		{ name: 'ニュース', href: '/news' },
		{ name: 'メンバー', href: '/members' },
		{ name: 'お問い合わせ', href: '/contact' },
	];

	return (
		<footer className={styles.footer}>
			<nav className={styles.nav}>
				<ul className={styles.items}>
					{navMenu.map((item, index) => (
						<li key={index} className={styles.item}>
							<Link href={item.href} className={styles.link}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
				{/* <p className={styles.cr}>© 2023 SIMPLE. All Rights Reserved 2024</p> */}
			</nav>
		</footer>
	);
}
