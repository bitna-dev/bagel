import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.customerGuide}>
				<ul className={styles.customerGuideList}>
					<li>
						<Link href="/">About</Link>
					</li>
					<li>
						<Link href="/">Career</Link>
					</li>
					<li>
						<Link href="/">Customer Service</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
