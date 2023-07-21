import '@/styles/werty.css'
import { ClerkProvider } from '@clerk/nextjs'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ClerkProvider publishableKey="pk_test_bGVuaWVudC1hc3AtODcuY2xlcmsuYWNjb3VudHMuZGV2JA">
    <Component {...pageProps} />
  </ClerkProvider>
  )
}
