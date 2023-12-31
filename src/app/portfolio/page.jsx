import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: "Portfolio | MyApp",
  description: "This is decription of Portfolio",
};

const Portfolio = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.selectTitle}>Choose a gallery</h1>
    <div className={styles.items}>
      <Link href="/portfolio/illustrations" className={styles.item}>
        <span className={styles.title}>Illustrations</span>
      </Link>
      <Link href="/portfolio/websites" className={styles.item}>
        <span className={styles.title}>Websites</span>
      </Link>
      <Link href="/portfolio/applications" className={styles.item}>
        <span className={styles.title}>Application</span>
      </Link>
    </div>
  </div>
  )
}

export default Portfolio