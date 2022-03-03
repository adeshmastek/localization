import styles from './Header.module.css'
import Image from 'next/image'
import { useState, useContext } from 'react'
import Link from 'next/link'
import AppContext from '../../pages/AppContext'

export function Header ({ navBar }) {
  const context = useContext(AppContext)
  const [isActive, setActive] = useState(false)
  
  const handleLocale = (e) => {
    context.setLanguageSelected(e.target.value)
  }

  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <div className={styles.headerBox}>
      <div className={styles.container}>
        <div className={styles.navigationBar}>
          <div className={styles.logoBox}>
            <Link href='/'>
              <a><Image src='/logo.png' alt='logo' height={56} width={223} /></a>
            </Link>
            <div className={`${styles.hamburgerBox}  ${isActive ? styles.change : ''}`} onClick={handleToggle}>
              <div className={styles.bar1} />
              <div className={styles.bar2} />
              <div className={styles.bar3} />
            </div>
          </div>
          <div className={`${styles.navigationWrapper}  ${isActive ? styles.openNavigationWrapper : ''}`}>
            <div className={`${styles.menuBox}  ${isActive ? styles.openMenu : ''}`}>
              <ul className={styles.mainNav}>
                {
                  navBar.fields.items.map((menu, index) => {
                    return (
                      <li className={styles.dropMenu} key={index}>
                        <a> {menu.item} </a>
                        <div className={styles.subMenuBox}>
                          <ul className={styles.subMenu}>
                            {menu.subItems.map((subitem, itemList) => {
                              return (
                                <li key={itemList}>
                                  <a> {subitem.name} </a>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <select onChange={handleLocale}>
            <option value="en-US">English</option>
            <option value="de-fr">French</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
      </div>
    </div>
  )
}
