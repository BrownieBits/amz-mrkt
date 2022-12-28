import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
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
                    {value.section !== "Main" && value.section !== "Footer"  && <p>{value.section}</p>}
                    {value.section !== "Footer" && value.items.map((item, index) => <MenuItem icon={solid('house')} title={item.title} url={item.url}/>)}
                    {value.section === "Footer" &&
                        <p>
                            {value.items.map((item, index) => {
                            return <div>
                                <Link href={item.url}>{item.title}</Link> |
                            </div>
                            })}
                        </p>
                    }
                    {index !== items.length - 1  && <hr/>}
                </>
            })}
        </menu>
    );
}