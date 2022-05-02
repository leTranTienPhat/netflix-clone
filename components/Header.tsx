import { BellIcon, SearchIcon } from "@heroicons/react/solid"
import { useEffect, useState } from "react"
type Props = {}

const Header = (props: Props) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsScroll(true)
      else setIsScroll(false)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
  return (
    <header className={`${isScroll && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="header-link">Home</li>
          <li className="header-link">TV Shows</li>
          <li className="header-link">Movies</li>
          <li className="header-link">New and Popular</li>
          <li className="header-link">My list</li>
        </ul>
      </div>

      <div className="flex items-centers space-x-4">
        <SearchIcon className="hidden w-6 h-6 sm:inline" />
        <BellIcon className="w-6 h-6" />
        <p className="hidden lg:inline">Dust</p>
        <img
          src="https://rb.gy/g1pwyx"
          alt=""
          className="cursor-pointer rounded"
        />
      </div>
    </header>
  )
}

export default Header