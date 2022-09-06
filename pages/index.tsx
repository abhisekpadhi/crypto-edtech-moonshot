import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Script from 'next/script';

const formId = 'w2EgZj';
// Available options
export type PopupOptions = {
    layout?: 'default' | 'modal';
    width?: number;
    alignLeft?: boolean;
    hideTitle?: boolean;
    overlay?: boolean;
    emoji?: {
        text: string;
        animation: 'none' | 'wave' | 'tada' | 'heart-beat' | 'spin' | 'flash' | 'bounce' | 'rubber-band' | 'head-shake';
    };
    autoClose?: number;
    customFormUrl?: string;
    hiddenFields?: {
        [key: string]: any,
    };
    onOpen?: () => void;
    onClose?: () => void;
    onPageView?: (page: number) => void;
    onSubmit?: (payload: any) => void;
};

export function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

export function getHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}

export const openForm = () => {
    const opts: PopupOptions = {
        layout: 'modal', // Open as a centered modal
        width: 0.8 * getWidth(), // Set the width of the modal
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
            <Script async src="https://tally.so/widgets/embed.js" />
            <Head>
                <title>Join Club</title>
                <meta name="description" content="JoinClub - crypto edtech app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main} style={{padding: 0}}>
                <Link href={'teacher'}>
                    <Image src={require('../public/img/student/0.png')} alt={''} style={{ width: '100%'}} />
                </Link>
                <Image onClick={openForm} src={require('../public/img/student/1.png')} alt={''} style={{ width: '100%'}} />
                <Image src={require('../public/img/student/2.png')} alt={''} style={{ width: '100%'}} />
                <Image src={require('../public/img/student/3.png')} alt={''} style={{ width: '100%'}} />
                <Image src={require('../public/img/student/4.png')} alt={''} style={{ width: '100%'}} />
                <Image src={require('../public/img/student/5.png')} alt={''} style={{ width: '100%'}} />
                <Image src={require('../public/img/student/6.png')} alt={''} style={{ width: '100%'}} />
                <Image onClick={openForm} src={require('../public/img/student/7.png')} alt={''} style={{ width: '100%'}} />
            </main>
    </div>
)
}

export default Home
