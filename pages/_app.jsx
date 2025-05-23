import clsx from 'clsx';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={clsx(inter.className, 'text-slate-900')}>
      <Component {...pageProps} />
      <div id="modals"></div>
    </div>
  );
}
