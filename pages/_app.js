import '../styles/globals.scss';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
    return (
      <ThemeProvider enableSystem={true}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        
        <Component {...pageProps} />
      </ThemeProvider>
  );
  }