import Head from 'next/head'
import Image from 'next/image'
import ProfileFooter from './profile-footer'
import ProfileHeader from './profile-header'

export default function Home() {
  return (
    <div>
      
      <Head>
        <link rel="shortcut icon" href="tab_img.png" type="image/x-icon" />
        <title>Shajahan Shaik</title>
      </Head>
      <div>
        <ProfileHeader />
        <ProfileFooter/>
      </div>
    </div>
  )
}
