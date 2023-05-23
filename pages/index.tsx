import Head from 'next/head'
import { getPosts } from '../services'
import { PostCard, Categories, PostWidget } from '../components'
import { FeaturedPosts } from '../sections'

function Home({ posts }) {
  console.log(posts)
  return (
    <>
      <div className="container mx-auto mb-8 px-10">
        <Head>
          <title>WP News 24</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css"
          />     

        </Head>
        <FeaturedPosts />
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {(posts || []).map((post) => (
              <PostCard post={post.node} key={post.title} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}

export default Home
