import { formatProgram } from '@/utils'
import Program from './Program/Program'
import { TServerData, TProgram } from '@/app/types'

export default async function ProgramList() {
	const data = await fetch('https://api.moscow.mba/products?_limit=100')
	const dataJSON: TServerData[] = await data.json()

	const dataFormatted: TProgram[] = formatProgram(dataJSON)

	return (
		<>
			{dataFormatted.map((item: TProgram) => {
				{
					return <Program key={item.id} {...item} />
				}
			})}
		</>
	)
}
