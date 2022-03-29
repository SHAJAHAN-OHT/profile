import Head from 'next/head'
import Image from 'next/image'
import ProfileBody from './profile-body'
import ProfileHeader from './profile-header'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="tab_img.png" type="image/x-icon" />
        <title>Shajahan Shaik</title>
      </Head>
      <div className='divide-y-2'>
        <ProfileHeader />
        {/* <ProfileBody/> */}
      </div>
    </div>
  )
}
