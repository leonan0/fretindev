import Link from 'next/link';
import Image from 'next/image'


function Home() {
    return (
      <>
        <h1>My Homepage</h1>
        <Image
          src="https://github.com/leonan0/fretindev/blob/master/fretin.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <p>Welcome to my homepage!</p>
      </>
    )
  }
export default Home