export type TServerData = {
	id: number
	title: string
	specializedSubjects: {
		skills: TSkills[]
		[key: string]: unknown
	}[]
	[key: string]: unknown
}

export type TSkills = {
	id: number
	string: string
	[key: string]: unknown
}

export type TProgramOneModule = Pick<TServerData, 'id' | 'title'> & {
	modules: TSkills[]
}

export type TProgram = Pick<TServerData, 'id' | 'title'> & {
	modules: TSkills[][]
}
