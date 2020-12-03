import React from 'react';
import Link from 'next/link';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={`flex-apart ${style.navbarContainer}`}>
          <div className="flex-center">
            <Link href="/">
              <a>
                <img src="https://miro.medium.com/max/1052/1*DN7ToydkJZEdVaJVK_Nhvw.png" alt="" className="img-16 mr16" />
              </a>
            </Link>
            <Link href="/">
              <a className="mr16">
                Home
              </a>
            </Link>
            <Link href="/archive">
              <a>
                Archive
              </a>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar;