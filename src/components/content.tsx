import React from 'react'
import { data } from '../data'

export function Content() {
  return (
    <div className="w-full space-y-4  lg:px-8 px-2 py-10">
      {data.page.description.map((description) => (
        <p
          className="text-base font-light leading-6 tracking-wider "
          key={description.id}
        >
          {description.paragraph}
        </p>
      ))}
    </div>
  )
}
