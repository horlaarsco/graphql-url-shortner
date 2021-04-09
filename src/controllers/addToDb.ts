import client from '../config/db'
import generateShortUrl from '../utils/codeGenerator'

const addToDb = async (url: string, sourceUrl: string) => {
  const shortURL = generateShortUrl()
  try {
    await client.query(
      'INSERT INTO urls (source, destination) VALUES ($1, $2)',
      [url, shortURL]
    )
    return {
      source: url,
      destination: `${sourceUrl}${shortURL}`,
    }
  } catch (err) {
    if ((err.code = '23505')) {
      addToDb(url, sourceUrl)
    }
  }
}

export default addToDb
