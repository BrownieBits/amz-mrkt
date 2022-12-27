import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import MenuItem from './menu_item';
import styles from './menu.module.scss';
export default function Menu() {
    return (
        <menu className={styles.menu}>
            <MenuItem icon={solid('house')} title='Home' url='/'/>
            <MenuItem icon={solid('user-check')} title='Subscriptions' url='/posts/first-post'/>
            <MenuItem icon={solid('thumbs-up')} title='Liked Items' url='/posts/first-post'/>
            <MenuItem icon={solid('shirt')} title='Your Products' url='/posts/first-post'/>
            <hr/>
            <p>Explore</p>
            <MenuItem icon={solid('house')} title='Home' url='/posts/first-post'/>
            <MenuItem icon={solid('user-check')} title='Subscriptions' url='/posts/first-post'/>
            <MenuItem icon={solid('thumbs-up')} title='Liked Items' url='/posts/first-post'/>
            <MenuItem icon={solid('shirt')} title='Your Products' url='/posts/first-post'/>
            <MenuItem icon={solid('house')} title='Home' url='/posts/first-post'/>
            <MenuItem icon={solid('user-check')} title='Subscriptions' url='/posts/first-post'/>
            <MenuItem icon={solid('thumbs-up')} title='Liked Items' url='/posts/first-post'/>
            <MenuItem icon={solid('shirt')} title='Your Products' url='/posts/first-post'/>
            <MenuItem icon={solid('house')} title='Home' url='/posts/first-post'/>
            <MenuItem icon={solid('user-check')} title='Subscriptions' url='/posts/first-post'/>
            <MenuItem icon={solid('thumbs-up')} title='Liked Items' url='/posts/first-post'/>
            <MenuItem icon={solid('shirt')} title='Your Products' url='/posts/first-post'/>
            <MenuItem icon={solid('house')} title='Home' url='/posts/first-post'/>
            <MenuItem icon={solid('user-check')} title='Subscriptions' url='/posts/first-post'/>
            <MenuItem icon={solid('thumbs-up')} title='Liked Items' url='/posts/first-post'/>
            <MenuItem icon={solid('shirt')} title='Your Products' url='/posts/first-post'/>
        </menu>
    );
}