import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type WorkPost = {
  title: string
  description: string
  link: string
  uid: string
  order: number
}

export function getWorkPosts(): WorkPost[] {
  const workDirectory = path.join(process.cwd(), 'app/work')

  const folders = fs
    .readdirSync(workDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

  const posts = folders.map((slug) => {
    const fullPath = path.join(workDirectory, slug, 'page.mdx')
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      title: data.title || slug,
      description: data.description || '',
      link: `/work/${slug}`,
      uid: slug,
      order: data.order ?? 999,
    }
  })

  return posts.sort((a, b) => a.order - b.order)
}
