import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header, Banner, Footer, Container } from '../components'
import { fetchAsset, fetchResource } from '../utils/index'
import { NAVBAR, BANNER, FOOTER } from '../utils/config'

export default function Home ({
  navData,
  bannerTitle,
  bannerTitleCTA,
  bannerLeftTitle,
  bannerLeftTitleCTA,
  bannerLeftImage,
  bannerRightTitle,
  bannerRightTitleCTA,
  bannerRightImage,
  footerResponse
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Business & Office Management Software | Accruent</title>
        <meta name='description' content='More than 10,000 customers around the globe depend on Accruent to manage their physical resources and gain the visibility to deliver on their mission.' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header navBar={navData} />
      <Banner
        bannerTitle={bannerTitle}
        bannerTitleCTA={bannerTitleCTA}
        bannerLeftTitle={bannerLeftTitle}
        bannerLeftTitleCTA={bannerLeftTitleCTA}
        bannerLeftImage={bannerLeftImage}
        bannerRightTitle={bannerRightTitle}
        bannerRightTitleCTA={bannerRightTitleCTA}
        bannerRightImage={bannerRightImage}
      />
      <Container />
      <Footer footerItems={footerResponse?.fields?.items} />
    </div>
  )
}

export const getStaticProps = async () => {
  const navData = await fetchResource(NAVBAR)
  const bannerResponse = await fetchResource(BANNER)
  const bannerTitle = bannerResponse?.fields?.title
  const bannerTitleCTA = bannerResponse?.fields?.cta
  const bannerLeftImageResponse = await fetchResource(bannerResponse?.fields?.containers[0]?.sys?.id)
  const bannerLeftTitle = bannerLeftImageResponse?.fields?.title
  const bannerLeftTitleCTA = bannerLeftImageResponse?.fields?.cta
  const bannerLeftImage = await fetchAsset(bannerLeftImageResponse?.fields?.image?.sys?.id)
  const bannerRightImageResponse = await fetchResource(bannerResponse?.fields?.containers[1]?.sys?.id)
  const bannerRightTitle = bannerRightImageResponse?.fields?.title
  const bannerRightTitleCTA = bannerRightImageResponse?.fields?.cta
  const bannerRightImage = await fetchAsset(bannerRightImageResponse?.fields?.image?.sys?.id)
  const footerResponse = await fetchResource(FOOTER)

  return {
    props: {
      navData,
      bannerTitle,
      bannerTitleCTA,
      bannerLeftTitle,
      bannerLeftTitleCTA,
      bannerLeftImage,
      bannerRightTitle,
      bannerRightTitleCTA,
      bannerRightImage,
      footerResponse
    }
  }
}
