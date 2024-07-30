import { Content } from './components/content'
import { Profile } from './components/profile'
import { Projects } from './components/projects'
import { Tecnologies } from './components/tecnologies'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <main>
      <div className="w-full  text-blue-charcoal-300">
        <div className="flex flex-col gap-8 w-full lg:w-[874px]  mx-auto ">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Profile />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Content />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
          >
            <Tecnologies />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
          >
            <Projects />
          </motion.div>

          <footer className="shadow  bg-blue-charcoal-800 rounded-[10px] h-[90px] p-8 mt-10 gap-8 flex items-center justify-center">
            <span className="text-blue-charcoal-300/45 text-sm font-light text-center ">
              DosSantosDev - todos os direitos reservados - 2024
            </span>
          </footer>
        </div>
      </div>
    </main>
  )
}
