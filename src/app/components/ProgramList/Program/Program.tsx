import { TSkills } from '@/app/types'
import Module from '../Module/Module'
import styles from './Program.module.scss'

type ProgramProps = {
	id: number
	title: string
	modules: TSkills[][]
}
export default function Program({ title, modules }: ProgramProps) {
	return (
		<section className={styles.program} aria-label='Программа обучения'>
			<h3>{title}</h3>
			<div className={styles.program_modules}>
				{modules.map((item, idx) => (
					<Module key={item[0].id} module={item} moduleNumber={idx + 1} />
				))}
			</div>
		</section>
	)
}
