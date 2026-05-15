import HeaderPage from '@/components/layout/Header'
import FooterPage from '@/components/layout/Footer'

interface LayoutPublicProps {
  children: React.ReactNode
}

export default function LayoutPublic({ children }: LayoutPublicProps) {
  return (
    <>
      <HeaderPage />
      <main className='pt-16 lg:pt-24'>{children}</main>
      <FooterPage />
    </>
  )
}
