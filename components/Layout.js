import Nav from './Nav'
import styles from '../styles/Layout.module.css'


const Layout = ({children}) => {
  const {container, main} = styles
  return (
    <>
      <Nav />
      <div className={container} >
        <main className={main} >

          {children}
        </main>
        
      </div>
    </>
  )
}

export default Layout
