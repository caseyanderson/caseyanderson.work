import { getWorkPosts } from '@/lib/get-work'
import Personal from './personal'

export default function Page() {
  const posts = getWorkPosts()
  return <Personal posts={posts} />
}
