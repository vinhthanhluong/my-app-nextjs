import HeaderPage from '@/components/layout/Header'
import FooterPage from '@/components/layout/Footer'

interface LayoutPublicProps {
  children: React.ReactNode
}

export default function LayoutPublic({ children }: LayoutPublicProps) {
  return (
    <>
      <HeaderPage />
      {children}
      <FooterPage />
    </>
  )
}
