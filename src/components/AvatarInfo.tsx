import React from 'react'
import Avatar from './Avatar'
import avatarDefault from '../assets/img/avatar-3d.jpeg'

interface AvatarInfoProps {
  name?: string
  username?: string
  avatarSrc?: string
  size?: 'sm' | 'md' | 'lg'
  badge?: 'pro' | 'free' | 'premium' | 'vip' | null
}

const AvatarInfo: React.FC<AvatarInfoProps> = ({
  name = '',
  username = '',
  avatarSrc = avatarDefault,
  size = 'md',
  badge = 'pro'
}) => {
  const badgeStyles = {
    pro: {
      label: 'PRO',
      bg: '#FFFFFF',
      color: '#000000',
      glow: '0 0 15px rgba(255, 255, 255, 0.8), 0 0 25px rgba(255, 255, 255, 0.5)'
    },
    free: {
      label: 'FREE',
      bg: '#4B5563',
      color: '#D1D5DB',
      glow: 'none'
    },
    premium: {
      label: 'PREMIUM',
      bg: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      color: '#000000',
      glow: '0 0 15px rgba(255, 215, 0, 0.6), 0 0 25px rgba(255, 165, 0, 0.4)'
    },
    vip: {
      label: 'VIP',
      bg: 'linear-gradient(135deg, #9333EA 0%, #7C3AED 100%)',
      color: '#FFFFFF',
      glow: '0 0 15px rgba(147, 51, 234, 0.6), 0 0 25px rgba(124, 58, 237, 0.4)'
    }
  }
  return (
    <div
      className="p-[1px] rounded-lg"
      style={{
        background: 'radial-gradient(circle at 0% 0%, #1E1E1E 0%, #1E1E1E 100%)'
      }}
    >
      <div
        className="flex items-center gap-3 p-4 rounded-lg"
        style={{
          background: 'linear-gradient(to bottom, #1E1E1E 0%, #000000 100%)'
        }}
      >
        <Avatar src={avatarSrc} size={size} />
        <div className="flex flex-col">
          <span className="text-white font-bold text-base tracking-wider mb-1">
            {name}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-gray-400 text-xs tracking-wide">
              @{username}
            </span>
            {badge && (
              <span
                className="px-2 py-0.5 text-[8px] font-bold rounded-2xl -tracking-tighter"
                style={{
                  background: badgeStyles[badge].bg,
                  color: badgeStyles[badge].color,
                  boxShadow: badgeStyles[badge].glow
                }}
              >
                {badgeStyles[badge].label}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvatarInfo
