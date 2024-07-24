import React from 'react'
import { data } from '../data'
import { FaLink } from 'react-icons/fa'

export function Profile() {
  return (
    <div className=" w-full shadow  bg-blue-charcoal-800 rounded-[10px] lg:h-[220px] p-4 lg:p-8  gap-8 flex lg:flex-row flex-col items-center justify-between">
      <img
        src={data.page.profile.image}
        alt=""
        className="rounded-md lg:w-[148px] w-full h-full lg:h-[148px] "
      />
      <div className="flex flex-col  w-full">
        <div className="flex items-center justify-between w-full mb-2">
          <h1 className="font-bold text-2xl">{data.page.profile.name}</h1>
          <a
            href=""
            className="uppercase text-xs hover:text-blue-highlight/60 duration-300 transition-all font-bold text-blue-highlight flex items-center gap-1"
          >
            Portifólio
            <FaLink />
          </a>
        </div>
        <div className="space-y-3 ">
          <p className="text-sm lg:text-base font-normal">
            {data.page.profile.description}
          </p>
          <ul className="flex flex-col lg:flex-row w-full items-start gap-1 lg:gap-8">
            {data.page.profile.links?.map((link) => (
              <li
                key={link.id}
                className="hover:bg-blue-charcoal-600 px-2 py-2.5 rounded-md transition-all duration-300"
              >
                <a
                  className="font-normal text-sm text-blue-charcoal-200 flex gap-2 items-center"
                  href={link.url}
                >
                  <link.icon />
                  {link.linkName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
