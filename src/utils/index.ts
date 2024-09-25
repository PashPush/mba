import { TProgramOneModule, TProgram, TServerData } from '@/app/types'

export const formatProgram = (data: TServerData[]): TProgram[] => {
	const rawData = data.reduce((acc: object[], program: TServerData) => {
		if (program.specializedSubjects.length > 0) {
			acc.push({
				id: program.id,
				title: program.title,
				modules: program.specializedSubjects[0].skills.slice(0, 5),
			})
		}
		return acc as TProgramOneModule[]
	}, [])

	const sameProgramCounter: { [key: string]: number } = {}

	rawData.forEach((item: TProgramOneModule) => {
		if (!sameProgramCounter[item.title]) {
			sameProgramCounter[item.title] = 1
		} else {
			sameProgramCounter[item.title] += 1
		}
	})

	const formattedArray: TProgram[] = Object.values(
		rawData.reduce((acc: { [key: string]: TProgram }, item, idx) => {
			const { title, modules } = item
			if (sameProgramCounter[title] === 2) {
				if (!acc[title]) {
					acc[title] = { id: idx, title, modules: [] }
				}
				acc[title].modules.push(modules)
			}
			return acc
		}, {})
	).slice(0, 5)

	return formattedArray
}
