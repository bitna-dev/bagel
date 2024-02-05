import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import appleLogo from './images/apple.svg';
import googleLogo from './images/google.svg';

const Button = ({
	type,
	secondary = false,
	width,
	title,
	bgColor,
	fgColor,
	icon = '',
	...restProps
}) => {
	const composeClasses = classNames(
		styles.button,
		secondary ? styles.secondary : styles.primary
	);
	const customStyle = {
		backgroundColor: bgColor || '',
		color: fgColor || '',
		width: width || '',
	};
	let src = '';
	switch (icon) {
		case 'apple':
			src = appleLogo;
			break;
		case 'google':
			src = googleLogo;
			break;
		default:
			null;
	}
	return (
		<>
			<button
				type={type}
				className={classNames(composeClasses)}
				style={customStyle}
				{...restProps}
				icon={icon}
			>
				{icon && (
					<Image
						src={src}
						alt={`${icon} logo`}
						width={20}
						height={20}
						className={styles.logo}
					/>
				)}
				{title}
			</button>
		</>
	);
};

export default Button;
