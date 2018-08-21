// Setup 6
import Link from 'next/link'
import Image from '../components/image'
// Setup 3
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link href='/'>
        <button>
          Back
        </button>
      </Link>
      <Image />
      <p>asdasdasd</p>
    </div>
  )
}

export default About