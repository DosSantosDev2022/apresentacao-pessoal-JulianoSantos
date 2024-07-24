import { Content } from './components/content'
import { Profile } from './components/profile'
import { Projects } from './components/projects'

export default function App() {
  return (
    <main>
      <div className="w-full  text-blue-charcoal-100">
        <div className="flex flex-col gap-8 w-full lg:w-[874px]  mx-auto ">
          <Profile />
          <Content />
          <Projects />
          <footer className="shadow  bg-blue-charcoal-800 rounded-[10px] h-[90px] p-8 mt-10 gap-8 flex items-center justify-center">
            <span className="text-blue-charcoal-300/45 text-sm font-light ">
              DosSantosDev - todos os direitos reservados @2024
            </span>
          </footer>
        </div>
      </div>
    </main>
  )
}
