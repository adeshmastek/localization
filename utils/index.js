export const fetchAsset = async (assetId) => {
  const contentData = await fetchResource()
  let asset
  for (const item of contentData?.includes?.Asset) {
    if (item?.sys?.id === assetId) {
      asset = item?.fields?.file?.url
      break
    }
  }
  return asset
}

export const fetchResource = async (resourceId,lang) => {
  // eslint-disable-next-line no-use-before-define
  const resouceResponse = await fetch(`https://cdn.contentful.com/spaces/4nyg7pl7kt91/environments/master/entries/${resourceId || ''}?access_token=4tTl-I76Lz9AIUj_t2qID4SPXkCpe9y7Fly3_yiX0_U&locale=${lang || 'en-US'}`)
  const resouceData = await resouceResponse.json()
  return resouceData
}
