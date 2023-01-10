import Footer from '../components/Footer'
import Header from '../components/Header'
import { ReactChildrenProps } from './Children.types'

export default function Layout({ children } : ReactChildrenProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}