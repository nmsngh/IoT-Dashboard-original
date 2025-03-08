import { type Viewport } from 'next';
import { ToastContainer } from 'react-toastify';

import { fonts } from '@/app/fonts';

import ReactQueryProvider from '@/providers/ReactQueryProvider/ReactQueryProvider';

import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export async function generateMetadata() {
  return {
    title: 'iot dashboard',
    description: '',
    // icons: [{ rel: 'icon', url: '/favicon.svg' }],
    openGraph: {
      title: '',
      description: '',
    },
    keywords: [],
    verification: {
      other: {},
    },
  };
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children }: Props) {
  return (
    <html
      lang="ko"
      className={`${fonts.pretendard.variable}`}
      suppressHydrationWarning
      data-theme="light"
    >
      <body className={`${fonts.pretendard.className}`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <ToastContainer autoClose={3000} />
      </body>
    </html>
  );
}
