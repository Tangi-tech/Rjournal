import { Header } from '@/components/Header'
import styles from './page.module.css'
import { Button } from '@mui/material'

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <Button variant="contained">хуй</Button>
      </main>
    </>
  )
}
