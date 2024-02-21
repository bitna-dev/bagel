'use client';
import Button from '@/components/button/Button';
import Divider from '@/components/divider/Divider';
import Input from '@/components/input/Input';
import Loader from '@/components/loader/Loader';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from './Register.module.scss';
import bagel from '@/assets/bagel.svg';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';

const RegisterClient = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [cPassword, setCPassword] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();
	const signupUser = (e) => {
		// FIREBASE 이용
		e.preventDefault();
		if (password !== cPassword) {
			return toast.error('비밀번호가 일치하지않습니다.');
		}
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredentail) => {
				const user = userCredentail.user;
				console.log(user);
				setIsLoading(false);
				toast.success('가입완료');
				router.push('/login');
			})
			.catch((err) => {
				setIsLoading(false);
				toast.error(err.message);
			});
	};
	const signUpGoogle = () => {
		// FIREBASE
	};
	const signUpApple = () => {
		// FIREBASE
	};
	return (
		<div>
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
						<form className={styles.form} onSubmit={signupUser}>
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
							<Input
								id="cPassword"
								label="PASSWORD CONFIRMATION"
								name="cPassword"
								labelVisible
								password
								placeholder="PASSWORD CONFIRMATION"
								value={cPassword}
								className={styles.control}
								onChange={(e) => setCPassword(e.target.value)}
								icon="lock"
							/>

							<div className={styles.buttonGroup}>
								<Button type="submit" width="100%" title="SIGN UP" />
								<Link href="/login">
									<Button width="100%" secondary title="LOGIN"></Button>
								</Link>

								<Divider />
								<Button
									width="100%"
									onClick={signUpGoogle}
									secondary
									icon="google"
									title="Google Signup"
								/>
								<Button
									width="100%"
									onClick={signUpApple}
									secondary
									icon="apple"
									title="Apple Signup"
								/>
							</div>
						</form>
					</div>
				</section>
			</>
		</div>
	);
};

export default RegisterClient;
