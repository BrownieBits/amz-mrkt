import '../styles/globals.scss';
import { ThemeProvider } from 'next-themes'
import { initFirebase } from '../config/firebaseApp';
import { AuthContextProvider } from '../context/AuthContext';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

export default function App({ Component, pageProps }) {
  const app = initFirebase();
    return (
      <AuthContextProvider>
        <ThemeProvider enableSystem={true}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthContextProvider>
  );
  }