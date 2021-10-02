import styles from './Bottom.module.scss'

export default function Bottom() {
	return (
		<section className={styles.bottom}>
			<article className={styles.bottom_left}>
				<h4>Практические модули</h4>
				<p>
					Работа над собственными проектами: практика групповых взаимодействий,
					кейс-методы, эссе
				</p>
			</article>
			<article className={styles.bottom_right}>
				<h4>Итоговая аттестация</h4>
				<ul>
					<li>
						<span>
							Бизнес-проектирование (подготовка итоговой аттестационной работы,
							консультирование по бизнес-проектированию)
						</span>
					</li>
					<li>
						<span>Защита итоговой аттестационной работы</span>
					</li>
				</ul>
			</article>
		</section>
	)
}
