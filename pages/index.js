import Link from 'next/link';
import styles from '../styles.module.css'
import Image from 'next/image'
import ViewSource from '../components/view-source'


const Code = (p) => <code className={styles.inlineCode} {...p} />


const Index = () => (
    <div className={styles.all}>
        <div className={styles.g}>
            <div className={styles.logo}>
                <div className={styles.rec}></div>
                <div className={styles.in}>in</div>
                <div className={styles.fret}>fret</div>
            </div>
        </div>
    </div>
)

export default Index