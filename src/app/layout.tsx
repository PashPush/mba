import type { Metadata } from 'next'
import '../styles/globals.scss'

export const metadata: Metadata = {
	title: 'MBA Test Task',
	description: 'MBA Test Task for goodness and beauty',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body>
				<div className='flex-center'>{children}</div>
			</body>
		</html>
	)
}
