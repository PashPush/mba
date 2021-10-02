import { Suspense } from 'react'
import Bottom from './components/Bottom/Bottom'
import Header from './components/Header/Header'
import ProgramList from './components/ProgramList/ProgramList'
import Loader from './components/Loader/Loader'

export default function Home() {
	return (
		<div className='wrapper'>
			<Header title='Специализированные дисциплины' />
			<main className='main'>
				<Suspense fallback={<Loader />}>
					<ProgramList />
				</Suspense>
				<Bottom />
			</main>
		</div>
	)
}
