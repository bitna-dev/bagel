import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'YOUR TENNIS BAGEL',
	description: 'Buy your gear and play in Bagel',
	icons: {
		icon: './favicon.ico',
	},
	// openGraph: {
	// 	title: 'Next.js',
	// 	description: 'The React Framework for the Web',
	// 	url: 'https://nextjs.org',
	// 	siteName: 'Next.js',
	// 	images: [
	// 		{
	// 			url: 'https://nextjs.org/og.png', // Must be an absolute URL
	// 			width: 800,
	// 			height: 600,
	// 		},
	// 		{
	// 			url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
	// 			width: 1800,
	// 			height: 1600,
	// 			alt: 'My custom alt',
	// 		},
	// 	],
	// 	locale: 'en_US',
	// 	type: 'website',
	// },
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className} suppressHydrationWarning={true}>
				{children}
			</body>
		</html>
	);
}
