import { formatProgram } from '@/utils'
import Program from './Program/Program'
import { TServerData, TProgram } from '@/app/types'

export default async function ProgramList() {
	let dataFormatted: TProgram[] = []

	try {
		const response = await fetch('https://api.moscow.mba/products?_limit=100')

		if (!response.ok) {
			throw new Error(`Fetch failed: ${response.status} ${response.statusText}`)
		}

		const dataJSON: TServerData[] = await response.json()
		dataFormatted = formatProgram(dataJSON)
	} catch (error) {
		console.error('Ошибка при загрузке программ:', error)
		return <div>Ошибка при загрузке данных</div>
	}

	return (
		<>
			{dataFormatted.map((item: TProgram) => (
				<Program key={item.id} {...item} />
			))}
		</>
	)
}
