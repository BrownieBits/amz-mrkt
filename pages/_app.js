import '../styles/globals.scss';
import { ThemeProvider } from 'next-themes'
import { initFirebase } from '../config/firebaseApp';
import { AuthContextProvider } from '../context/AuthContext';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { useRouter } from 'next/router';
import ProtectedRoute from '../components/protectedRoute';

library.add(fas, fab)
const noAuthRequired = ['/', '/signin', '/signup'];

export default function App({ Component, pageProps }) {
  const router =  useRouter();

  const app = initFirebase();
    return (
      <AuthContextProvider>
        <ThemeProvider enableSystem={true}>
          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
            
          )}
          
        </ThemeProvider>
      </AuthContextProvider>
  );
  }