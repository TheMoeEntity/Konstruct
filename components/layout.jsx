import Header from './Header/'
import Script from 'next/script'

const Layout = ({children}) => {
  return (
    <div>
        <Header />
        {children}
        <Script src="https://kit.fontawesome.com/4ef8c63dd7.js" crossorigin="anonymous"></Script>
    </div>
  )
}

export default Layout