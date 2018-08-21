// Setup 5
import Link from 'next/link'

// Setup 1
const Index = () => (
  <div>
    <h1>SSR Page</h1>
    {/* Setup 5 */}
    <Link href='/about'>
      <button>About</button>
    </Link>
    <Link href='/robots'>
      <button>Robots</button>
    </Link>
    {/* Setup 4 */}
    {/* <a href="/about">About</a> */}
  </div>
)

// Setup 2
export default Index