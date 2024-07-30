import React from 'react'
import { data } from '../data'
import { motion } from 'framer-motion'

export function Tecnologies() {
  return (
    <>
      <section className="w-full mb-4 px-2 py-3">
        <h5 className="text-3xl lg:text-4xl font-bold">Minhas habilidades</h5>

        <div className="mt-6 p-4 lg:p-6 bg-blue-charcoal-800 rounded-md">
          <ul className="flex flex-wrap gap-3 w-full justify-center items-start">
            {data.page.techs.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 100, scale: 0.3 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 100, scale: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <li className="border max-w-[360px]  px-3 py-4 flex gap-2 rounded-md">
                  <tech.icon size={42} />
                  <div className="flex items-start flex-col gap-2 w-full">
                    <h6 className="text-lg font-bold">{tech.name} </h6>
                    <p className="text-sm font-light tracking-wider">
                      {tech.description}
                    </p>
                  </div>
                </li>
              </motion.div>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
