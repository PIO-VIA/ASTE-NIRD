// Tiles.tsx
'use client'
import React from 'react'
import './Tiles.css'

interface TilesProps {
  icon: React.ReactNode  // icon element
  className?: string
  label?: string
}

const Tiles: React.FC<TilesProps> = ({ icon, className = '', label }) => {
  return (
    <div
      className="relative w-30 h-30 rounded-md"
      style={{ boxShadow: '15px 15px 20px white' }}
      
    >
      {label && <div className="floating-text  ">{label}</div>}

      <button
        className={`
          w-full h-full
          bg-blue-500
          rounded-md
          flex items-center justify-center
          text-white text-2xl
          transition-transform transform hover:scale-105
          ${className}
        `}
      >
        {icon}
      </button>
    </div>
  )
}

export default Tiles
