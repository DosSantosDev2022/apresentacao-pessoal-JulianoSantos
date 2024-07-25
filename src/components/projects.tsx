import React from 'react'
import { data } from '../data'

export function Projects() {
  return (
    <div className="w-full p-4">
      <div className="w-full mb-4 px-2 py-3">
        <h5 className="text-4xl font-bold">Conheça os meus projetos</h5>
      </div>

      <div className="grid grid-cols-3 justify-center gap-6 w-full">
        {data.page.projects.map((project) => (
          <div
            key={project.id}
            className="max-w-lg h-[390px] col-span-3 lg:col-span-1 rounded-lg shadow  bg-blue-charcoal-800"
          >
            <a href={project.viewUrl}>
              <img
                className="rounded-t-lg w-full h-[160px] "
                src={project.coverImage}
                alt=""
              />
            </a>
            <div className="px-3 py-2 h-[236px]  flex flex-col justify-around">
              <h5 className="text-2xl font-bold tracking-wide">
                {project.name}
              </h5>

              <p className="font-normal text-sm ">{project.description}</p>
              <a
                target="_blank"
                href={project.viewUrl}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-blue-charcoal-900 rounded-lg hover:bg-blue-charcoal-950 focus:ring-4 focus:outline-none focus:ring-blue-charcoal-300 dark:focus:ring-blue-charcoal-800 duration-300"
              >
                Ver mais
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
