'use client'
import { TSkills } from '@/app/types'
import styles from './Module.module.scss'
import Image from 'next/image'
import { useState } from 'react'

type ModuleProps = {
	module: TSkills[]
	moduleNumber: number
}

export default function Module({ module, moduleNumber }: ModuleProps) {
	const [active, setActive] = useState(false)
	return (
		<article className={styles.module} aria-label='Два модуля на выбор'>
			<div className={styles.module_title}>
				<h4>{moduleNumber} Модуль</h4>
			</div>
			<button
				onClick={() => setActive((prev) => !prev)}
				className={`${
					active ? styles.module_btn_active : styles.module_btn
				} animated`}
			>
				<Image
					className={styles.module_btn_img}
					src={`/${active ? 'minus' : 'plus'}.svg`}
					alt='Показать описание модуля'
					width={18}
					height={18}
				/>
				<h4>{moduleNumber} Модуль</h4>
			</button>
			<div
				className={` ${
					active ? styles.module_description_active : styles.module_description
				} animated`}
			>
				<ul>
					{module.map((skill) => (
						<li key={skill.id}>
							<span>{skill.string}</span>
						</li>
					))}
				</ul>
			</div>
		</article>
	)
}
