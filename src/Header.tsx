import React from 'react'

// タイトル（近くのグルメがパッと見られるという意味がある）
const Header = () => {
  return (
    <div className="bg-white shadow-md py-1 px-6 rounded-b-lg mb-6">
      <h1 className="text-xl md:text-3xl font-bold text-gray-800 text-center">
        InstaEats
      </h1>
    </div>
  )
}

export default Header