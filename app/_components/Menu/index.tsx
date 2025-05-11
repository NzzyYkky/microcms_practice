'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.css';
import { useState } from 'react';
import cx from 'classnames';

type NavMenu = {
	name: string;
	path: string;
};

export default function Menu() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);

	const navMenu: NavMenu[] = [
		{ name: 'ニュース', path: '/news' },
		{ name: 'メンバー', path: '/members' },
		{ name: 'お問い合わせ', path: '/contact' },
	];

	return (
		<div>
			<nav className={cx(styles.nav, isOpen && styles.open)}>
				<ul className={styles.items}>
					{navMenu.map((item, index) => (
						<li key={index}>
							<Link href={item.path}>{item.name}</Link>
						</li>
					))}
				</ul>
				<button className={cx(styles.button, styles.close)} onClick={close}>
					<Image
						src="/close.svg"
						alt="閉じる"
						width={24}
						height={24}
						priority
					/>
				</button>
			</nav>
			<button className={styles.button} onClick={open}>
				<Image src="/menu.svg" alt="メニュー" width={24} height={24} />
			</button>
		</div>
	);
}
