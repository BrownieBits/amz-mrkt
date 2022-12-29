import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './menu_item.module.scss';

export default function MenuItem({ title, icon, url }) {
    const router = useRouter();
    const selected = router.asPath === url ? `${styles.menuItem} ${styles.selected}` : `${styles.menuItem}`;
    return <li className={selected}><Link href={url}> <FontAwesomeIcon icon={`fa-solid ${icon}`} /> {title}</Link></li>;
  }