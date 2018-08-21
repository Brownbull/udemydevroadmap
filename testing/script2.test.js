const fetch = require('node-fetch')
const swapi = require('./script2')

describe('swapi test', () => {
  it('get People', (done) => {
    // expect.assertions(1)
    swapi.getPeoplePromise(fetch).then(data =>{
      expect(data.count).toEqual(87)
      done()
    })
  })

  it('get People Async', (done) => {
    swapi.getPeople(fetch).then(data => {
      expect(data.count).toEqual(87)
      expect(data.results.length).toBeGreaterThan(5)
      done()
    })
  })

  it('get People, returns count and resutls', (done) => {
    const mockFetch = jest.fn()
    .mockReturnValue(Promise.resolve({
      json: () => Promise.resolve({
        count: 87,
        results: [0,1,2,3,4,5]
      })
    }))
    
    return swapi.getPeoplePromise(mockFetch)
    .then(data => {
      expect(mockFetch.mock.calls.length).toBe(1)
      expect(data.count).toEqual(87)
      expect(data.results.length).toBeGreaterThan(5)
      done()
    })
  })


}) // eof 
