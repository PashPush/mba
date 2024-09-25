import styles from './Loader.module.scss'

export default function Loader() {
	return (
		<>
			<SkeletonItem />
			<SkeletonItem />
		</>
	)
}

function SkeletonItem() {
	return (
		<div className={styles.skeleton}>
			<div className={styles.skeleton_title}></div>

			<div className={styles.skeleton_row}>
				<div className={styles.skeleton_block}>
					<div className={`${styles.skeleton_block_title} animated`}></div>
					<div className={`${styles.skeleton_list} animated`}></div>
				</div>
				<div className={styles.skeleton_block}>
					<div className={`${styles.skeleton_block_title} animated`}></div>
					<div className={`${styles.skeleton_list} animated`}></div>
				</div>
			</div>
		</div>
	)
}
