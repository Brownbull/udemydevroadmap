const googleSearch = require('./script')

dbMock = [
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

describe('google search', ()=> {
  it('searching google EMPTY', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([])
  })
  
  it('searching google CAT', () => {
    expect(googleSearch('cat', dbMock)).toEqual(['cats.com', 'catspictures.com', 'cats2.com'])
  })
  
  it('searching google UNDEFINED', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([])
  })
  
  it('searching google NULL', () => {
    expect(googleSearch(null, dbMock)).toEqual([])
  })
  
  it('searching google .COM, return max 3', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3)
  })
}) // eof describe