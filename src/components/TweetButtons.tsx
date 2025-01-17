import React from 'react'

import clsx from 'clsx'

import { Chat, Like, Retweet, Share } from './icons'

const baseStyle =
  'flex flex-1 text-gray-400 transition duration-300 ease-in-out '

const TweetButtons = ({ className }: PropsWithClassName) => {
  const buttons = [
    {
      count: '12.3 k',
      icon: <Chat />,
      text: 'hover:text-twitter-500',
      bg: 'group-hover:bg-twitter-500'
    },
    {
      count: '12.3 k',
      icon: <Retweet />,
      text: 'hover:text-retweet-500',
      bg: 'group-hover:bg-retweet-500'
    },
    {
      count: '12.3 k',
      icon: <Like />,
      text: 'hover:text-like-500',
      bg: 'group-hover:bg-like-500'
    },
    {
      icon: <Share />,
      text: 'hover:text-twitter-500',
      bg: 'group-hover:bg-twitter-500'
    }
  ]

  return (
    <div className={clsx('flex items-center', className)}>
      {buttons.map((button, index) => (
        <div key={index} className={baseStyle}>
          <div
            className={clsx(
              'group flex items-center cursor-pointer',
              button.text
            )}
          >
            <div
              className={clsx(
                'p-2 group-hover:bg-opacity-20 rounded-full',
                button.bg
              )}
            >
              {button.icon}
            </div>

            {button.count && (
              <div className="hidden md:block ml-1 text-xs">{button.count}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TweetButtons
