const googleDB = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'lala.com',
  'asd.com',
  'catspictures.com',
  'cats2.com',
  'cats3.com',
]

const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => {
    return website.includes(searchInput)
  })

  return matches.length > 3 ? matches.slice(0, 3) : matches
}

// console.log(googleSearch('cats'))

module.exports = googleSearch