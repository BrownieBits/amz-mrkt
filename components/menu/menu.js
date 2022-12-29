import MenuItem from './menu_item';
import styles from './menu.module.scss';
import { getMenuItems } from './getMenuItems.js';
import Link from 'next/link';

export default function Menu() {
    const items = getMenuItems();
    console.log(items)
    return (
        <menu className={styles.menu}>
            {items.map((value, index) => {
                return <>
                    {value.section !== "Main" && value.section !== "Footer" && value.section !== "Help"  && <p>{value.section}</p>}
                    {value.section !== "Footer" && value.items.map((item, index) => {
                        return <MenuItem icon={item.icon} title={item.title} url={item.url}/>
                    })}
                    {value.section === "Footer" &&
                        <div className={styles.footerLinks}>
                            {value.items.map((item, index) => {
                            return <div>
                                <p><Link href={item.url}>{item.title}</Link> {index !== value.items.length -1 && (<>&nbsp;&nbsp;|&nbsp;&nbsp;</>)}</p>
                            </div>
                            })}
                        </div>
                    }
                    {index !== items.length - 1  && <hr/>}
                </>
            })}
        </menu>
    );
}