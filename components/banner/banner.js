import styles from './Banner.module.css'

export function Banner ({
  bannerTitle,
  bannerTitleCTA,
  bannerLeftTitle,
  bannerLeftTitleCTA,
  bannerLeftImage,
  bannerRightTitle,
  bannerRightTitleCTA,
  bannerRightImage
}) {
  return (
    <div className={styles.bannerSection}>
      <ul className={styles.bannerUl}>
        <li>
          <div className={styles.bannerLeftMost}>
            <h1 className={styles.headTitle}>{bannerTitle}</h1>
            <button className={styles.titleButton}>{bannerTitleCTA}</button>
          </div>
        </li>
        <li>
          <div className={styles.bannerSkewBox}>
            <div className={styles.bannerCardSkewBoxLeft} style={{ backgroundImage: `url(${bannerLeftImage})` }}>
              <h3 className={styles.cardTitleLeft}>{bannerLeftTitle}</h3>
              <button className={styles.cardButton}>{bannerLeftTitleCTA}</button>
            </div>
            <div className={styles.bannerCardSkewBoxRight} style={{ backgroundImage: `url(${bannerRightImage})` }}>
              <h3 className={styles.cardTitleRight}>{bannerRightTitle}</h3>
              <button className={styles.cardButton}>{bannerRightTitleCTA}</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
