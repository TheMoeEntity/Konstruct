import '../styles/globals.css'
import Layout from '../components/layout'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    // <AnimatePresence mode='wait'>
    // <motion.div
    // key={router.route}
    // initial="initialState"
    // animate="animateState"
    // exit="exitState"
    // className='main'
    // transition={{
    //   duration: 1.3
    // }}
    // variants={{
    //   initialState: {
    //     opacity:0,
    //   },
    //   animateState: {
    //     opacity:1
    //   },
    //   exitState: {

    //   }
    // }}
    // >

    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </motion.div>
    // </AnimatePresence>
  )
}
