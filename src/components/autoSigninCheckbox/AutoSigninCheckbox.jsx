import React from 'react';
import styles from './AutoSigninCheckbox.module.scss';
import Checkbox from '../checkbox/Checkbox';
import Tooltip from '../tooltip/Tooltip';

const AutoSigninCheckbox = ({
	label = 'auto-signin',
	checked,
	disabled,
	orientation = 'top',
	message = 'please use in private device to protect your personal information.',
	onChange,
	...restProps
}) => {
	return (
		<span className={styles.formControl}>
			<Checkbox
				label={label}
				checked={checked}
				disabled={disabled}
				onChange={onChange}
				{...restProps}
			/>
			{checked && (
				<Tooltip
					left={-5}
					top={24}
					orientation={orientation}
					message={message}
				/>
			)}
		</span>
	);
};

export default AutoSigninCheckbox;
