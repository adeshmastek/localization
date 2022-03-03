import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Container.module.css'
import { CONTAINER } from '../../utils/config'
import { fetchAsset, fetchResource } from '../../utils'

export const Container = () => {
  const [containerData, setContainerData] = useState({ subtitle: '', title: '', description: '', cta: '' })
  const [imageURL, setImageURL] = useState('')
  useEffect(() => {
    const getContainerData = async function () {
      const containerData = await fetchResource(CONTAINER)
      const imageURL = await fetchAsset(containerData?.fields?.image?.sys?.id)
      setContainerData(containerData?.fields)
      setImageURL(imageURL)
    }
    getContainerData()
  }, [])
  const { subtitle, title, description, cta } = containerData
  if (!imageURL) {
    return <h3>Loading ...</h3>
  }
  return (
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <h5 className={styles.subTitle}>{subtitle}</h5>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttonWrapper}>
          <Link href='/'>
            <a className={styles.button}>{cta}</a>
          </Link>
        </div>
      </div>
      <div>
        <Image src={`https:${imageURL}`} alt='Container Image' width={1366} height={546} />
      </div>
    </div>
  )
}
