import Head from 'next/head';
import styles from './layout.module.scss';
import Menu from './menu/menu';
import Header from './header/header';

export const siteTitle = 'Amaze Market';

export default function Layout({ children, home }) {
  return (
    <div className={styles.mainWrapper}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The Amaze Marketplace"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Header/>
      <div className={styles.mainBox}>
        <Menu/>
        <main className={styles.mainContent}>{children}</main>
      </div>
      
    </div>
  );
}