import React from 'react'
import { data } from '../data'

export function Projects() {
  return (
    <div className="w-full p-4">
      <div className="w-full mb-4 px-2 py-3">
        <h5 className="text-2xl font-bold">Conheça os meus projetos</h5>
      </div>

      <div className="grid grid-cols-4 justify-center gap-3 w-full">
        {data.page.projects.map((project) => (
          <div
            key={project.name}
            className=" lg:col-span-2 col-span-4 p-4 flex flex-col gap-3 justify-between rounded-md w-full lg:w-[416px] lg:h-[310px] bg-blue-charcoal-700 "
          >
            <img
              src={project.coverImage}
              alt=""
              className="w-full rounded-sm h-32"
            />
            <div className="flex flex-col gap-1 h-full w-full">
              <h4 className="font-bold text-lg">{project.name} </h4>
              <p className="text-base font-light">{project.description} </p>
            </div>
            <div>
              <a
                className="bg-blue-charcoal-800 hover:bg-blue-charcoal-900 duration-500 px-2 py-3 text-sm rounded-sm"
                href={project.viewUrl}
              >
                Visualizar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
