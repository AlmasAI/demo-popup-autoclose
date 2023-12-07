import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@mui/material/Button';
import styles from '../styles/app.module.css'
import Popup from '@/Components/Popup';
import { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    
  
    <main className={`${styles.main}`}>
       <Button variant="contained" className={`${styles.button}`} onClick={handleOpen} >
        click me
      </Button>
      <Popup open={open} onClose={handleClose} setOpen={setOpen}/>

     
    </main>
  )
}
