'use client';
import AutoSigninCheckbox from '@/components/autoSigninCheckbox/AutoSigninCheckbox';
import Button from '@/components/button/Button';
import Divider from '@/components/divider/Divider';
import Input from '@/components/input/Input';
import Loader from '@/components/loader/Loader';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Reset.module.scss';
import bagel from '@/assets/bagel.svg';
import { sendPasswordResetEmail } from 'firebase/auth';

const ResetClient = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState('');
	const resetPassword = (e) => {
		e.preventDefault();
		setIsLoading(true);
		sendPasswordResetEmail(auth, email)
			.then(() => {
				setIsLoading(false);
				toast.success('Please check your email to reset your password');
			})
			.catch((err) => {
				setIsLoading(false);
				toast.error(err.message);
			});
	};
	const signInGoogle = () => {
		// FIREBASE
	};
	return (
		<>
			{isLoading && <Loader />}
			<section className={styles.page}>
				<div className={styles.container}>
					<h1 className={styles.logo}>
						<Image
							src={bagel}
							width={247}
							height="auto"
							alt="Bagel logo text"
							priority
						/>
					</h1>
					<form className={styles.form} onSubmit={resetPassword}>
						<Input
							id="email"
							label="TYPE YOUR EMAIL"
							name="email"
							labelVisible
							email
							placeholder="ID(EMAIL)"
							value={email}
							className={styles.control}
							onChange={(e) => setEmail(e.target.value)}
							icon="letter"
						/>

						<div className={styles.links}>
							<Button type="submit" width="100%" title="UPDATE" />
							<Divider />
							<Link href="/register">
								<Button width="100%" secondary title="SIGN UP"></Button>
							</Link>
							<Link href="/login">
								<Button width="100%" secondary title="SIGN IN"></Button>
							</Link>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default ResetClient;
