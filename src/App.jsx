import { Content } from './components/content'
import { Profile } from './components/profile'
import { Projects } from './components/projects'
import { Tecnologies } from './components/tecnologies'
import { motion } from 'framer-motion'
import { AnimationBase } from './lib/animations'

export default function App() {
  return (
    <>
      <div className="w-full  text-blue-charcoal-300">
        <div className="flex flex-col gap-8 w-full lg:w-[874px]  mx-auto ">
          <motion.div {...AnimationBase}>
            <Profile />
          </motion.div>
          <motion.div {...AnimationBase}>
            <Content />
          </motion.div>
          <motion.div {...AnimationBase}>
            <Tecnologies />
          </motion.div>
          <motion.div {...AnimationBase}>
            <Projects />
          </motion.div>

          <footer className="shadow  bg-blue-charcoal-800 rounded-[10px] h-[90px] p-8 mt-10 gap-8 flex items-center justify-center">
            <span className="text-blue-charcoal-300/45 text-sm font-light text-center ">
              DosSantosDev - todos os direitos reservados - 2024
            </span>
          </footer>
        </div>
      </div>
    </>
  )
}
