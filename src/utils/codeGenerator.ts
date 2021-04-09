const generateShortUrl = () => {
  const stringCharacters: string =
    'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
  let randomString: string = ''

  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * stringCharacters.length)
    randomString += stringCharacters.substring(index, index + 1)
  }

  return randomString
}

export default generateShortUrl
