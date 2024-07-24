import React from 'react'
import { data } from '../data'

export function Content() {
  return (
    <div className="w-full space-y-4  lg:px-8 px-2 py-10">
      <p>{data.page.description.paragraph01} </p>
      <p>{data.page.description.paragraph02} </p>
      <p>{data.page.description.paragraph03} </p>
    </div>
  )
}
