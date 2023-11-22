import { Header } from '@/components/Header'
import styles from './page.module.css'
import { Button, Paper } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main}>
      <Button variant="contained">хуй</Button>
      <Header/>
    </main>
  )
}
