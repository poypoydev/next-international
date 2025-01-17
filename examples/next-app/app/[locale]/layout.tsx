import { ReactElement } from 'react';
import './globals.css';
import { Switch } from './switch';
import Link from 'next/link';
// import { getStaticParams } from '../../locales/server';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// Uncomment to test Static Generation for all pages
// export function generateStaticParams() {
//   return getStaticParams();
// }

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body>
        <Switch />
        <ul>
          <li>
            <Link href="/">Go to /</Link>
          </li>
          <li>
            <Link href="/subpage">Go to /subpage</Link>
          </li>
          <li>
            <Link href="/client">Go to /client</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
