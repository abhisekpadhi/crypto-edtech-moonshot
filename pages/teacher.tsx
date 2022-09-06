import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import {PopupOptions} from './index';

const formId = '3xXLBr';
export const openForm = () => {
    const opts: PopupOptions = {
        layout: 'modal', // Open as a centered modal
        width: 460, // Set the width of the modal
        autoClose: 5000, // Close the popup 5 seconds after form was submitted (in ms)
        emoji: {
            text: '🚀',
            animation: 'rubber-band',
        },
    };
    // Open the popup
    (window as any).Tally.openPopup(formId, opts);
}
const Home: NextPage = () => {
  return (
    <div className={styles.container} style={{padding: 0}}>
      <Head>
        <title>JoinClub for Teacher</title>
        <meta name="description" content="JoinClub - crypto edtech app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{padding: 0}}>
          <Link href={'/'}>
              <Image src={require('../public/img/teacher/0.png')} alt={''} style={{ width: '100%'}} />
          </Link>
        <Image onClick={openForm} src={require('../public/img/teacher/1.png')} alt={''} style={{ width: '100%'}} />
        <Image src={require('../public/img/teacher/2.png')} alt={''} style={{ width: '100%'}} />
        <Image src={require('../public/img/teacher/3.png')} alt={''} style={{ width: '100%'}} />
        <Image onClick={openForm} src={require('../public/img/teacher/4.png')} alt={''} style={{ width: '100%'}} />
      </main>
    </div>
  )
}

export default Home
