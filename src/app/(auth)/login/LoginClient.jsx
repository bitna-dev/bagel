'use client';
import Loader from '@/components/loader/Loader';
import Image from 'next/image';
import React, { useState } from 'react';
import bagel from '@/assets/bagel.svg';
import { useRouter } from 'next/navigation';
import styles from './Auth.module.scss';
import Input from '@/components/input/Input';
import AutoSigninCheckbox from '@/components/autoSigninCheckbox/AutoSigninCheckbox';
import Divider from '@/components/divider/Divider';
import Button from '@/components/button/Button';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { GoogleAuthProvider } from 'firebase/auth';

const LoginClient = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isAutoLogin, setIsAutoLogin] = useState(false);
	const router = useRouter();
	const redirectUser = () => {
		router.push('/');
	};
	const loginUser = (e) => {
		e.preventDefault();
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setIsLoading(false);
				toast.success('로그인 성공');
				redirectUser();
			})
			.catch((err) => {
				setIsLoading(false);
				toast.error(err.message);
			});
		// FIREBASE 이용
	};
	const signInGoogle = (e) => {
		e.preventDefault();
		// FIREBASE
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result);
				toast.success('로그인 성공');
				redirectUser();
			})
			.catch((err) => {
				toast.error(err.message);
			});
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
					<form className={styles.form} onSubmit={loginUser}>
						<Input
							id="email"
							label="EMAIL"
							name="email"
							labelVisible
							email
							placeholder="ID(EMAIL)"
							value={email}
							className={styles.control}
							onChange={(e) => setEmail(e.target.value)}
							icon="letter"
						/>
						<Input
							id="password"
							label="PASSWORD"
							name="password"
							labelVisible
							password
							placeholder="PASSWORD"
							value={password}
							className={styles.control}
							onChange={(e) => setPassword(e.target.value)}
							icon="lock"
						/>
						<div className={styles.group}>
							<AutoSigninCheckbox
								checked={isAutoLogin}
								onChange={(e) => setIsAutoLogin(e.target.checked)}
							/>
							<Link href="/reset" className={styles.findLink}>
								비밀번호 수정하기
								<svg
									width="11"
									height="13"
									viewBox="0 0 11 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1.5 1L9.5 9L1.5 17"
										stroke="#00bf63"
										strokeWidth="2"
									/>
								</svg>
							</Link>
						</div>
						<div className={styles.buttonGroup}>
							<Button type="submit" width="100%" title="LOGIN" />
							<Link href="/register">
								<Button width="100%" secondary title="SIGN UP"></Button>
							</Link>

							<Divider />
							<Button
								width="100%"
								onClick={signInGoogle}
								secondary
								icon="google"
								title="Google Login"
							/>
							<Button width="100%" secondary icon="apple" title="Apple Login" />
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default LoginClient;
