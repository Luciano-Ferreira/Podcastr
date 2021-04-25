import '../styles/global.scss';
import { Header } from '../components/Header';

import { PlayerContextProvider } from '../contexts/PlayerContext';

import styles from '../styles/app.module.scss';
import { Player } from '../components/Player';

export default function MyApp({ Component, pageProps }) {
   return(
        <PlayerContextProvider>
            <div className={styles.wrapper}>
                <main>
                    <Header />
                    <Component {...pageProps} />
                </main>

                <Player />
            </div>
        </PlayerContextProvider>
    );
}
