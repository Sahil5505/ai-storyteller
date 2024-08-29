"use client"


import React from 'react'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'

const StoryWriter = () => {
  return (
    <div className='flex flex-col container'>
        

        <section  className='flex-1 flex flex-col border border-purple-300 rounded-md p-10 space-y-2'>
          <Textarea className='flex-1 text-black'
          placeholder='Write a story about a robot and a human who become friends......'
          />
          <Select>
            <SelectTrigger>
          <SelectValue placeholder="How many pages should the story be?"/>
            </SelectTrigger>

            <SelectContent className='w-full'>
              {Array.from({length: 10}, (_, i) => (
                <SelectItem key={i} value={String(i + 1)}>
                    {i + 1}
                </SelectItem>

              ))}

              
            </SelectContent>


          </Select>

          <Button className='w-full bg-black' size="lg">
            Generate Story
          </Button>

        </section>

        <section className='flex-1 pb-5 mt-5'>


        </section>


        </div>
  )
}

export default StoryWriter

