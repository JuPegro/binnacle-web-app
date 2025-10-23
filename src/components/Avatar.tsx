import React from 'react'
import avatarDefault from '../assets/img/avatar-3d.jpeg'

interface AvatarProps {
  src?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
  focusY?: string
}

const Avatar: React.FC<AvatarProps> = ({
  src = avatarDefault,
  alt = 'User avatar',
  size = 'md',
  focusY = '30%'
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-24 h-24'
  }

  return (
    <div className="relative inline-block">
      <div className={`${sizeClasses[size]} rounded-full p-[1px] bg-gradient-to-br from-[#7E7E7E] to-[#E0E0E0]`}>
        <div className="w-full h-full rounded-full p-1 bg-black">
          <div className="w-full h-full rounded-full overflow-hidden">
          {src ? (
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
              style={{
                objectPosition: `center ${focusY}`
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200">
              <svg className="w-2/3 h-2/3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avatar
