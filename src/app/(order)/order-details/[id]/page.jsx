// web console은
'use client';
import React from 'react';

const PageDetails = ({ params, searchParams }) => {
	const { id } = params;
	const { hello } = searchParams;
	return (
		<div>
			PageDetails/{id}
			<br />
			{hello}
		</div>
	);
};

export default PageDetails;
