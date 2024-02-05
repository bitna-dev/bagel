'use client';
import React, { useState } from 'react';
import styles from './Loader.module.scss';
import { TailSpin } from 'react-loader-spinner';

const Loader = ({ basic }) => {
	if (basic) {
		return (
			<div className={styles.basicWrapper}>
				<TailSpin
					visible={true}
					height="50"
					width="50"
					color="#00bf63"
					ariaLabel="tail-spin-loading"
					radius="1"
				/>
			</div>
		);
	} else {
		return (
			<div className={styles.wrapper}>
				<div className={styles.loader}>
					<TailSpin
						visible={true}
						height="50"
						width="50"
						color="#00bf63"
						ariaLabel="tail-spin-loading"
						radius="1"
					/>
				</div>
			</div>
		);
	}
};

export default Loader;
