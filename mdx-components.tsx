import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} />
        </figure>
      )
    },
    YouTube: ({
      src,
      width = '100%',
      height = '400',
      title = 'Embedded content',
    }: {
      src: string
      width?: string | number
      height?: string | number
      title?: string
    }) => {
      return (
        <iframe
          src={src}
          width={width}
          height={height}
          title={title}
          style={{ border: 'none' }}
          allowFullScreen
        />
      )
    },
    Bandcamp: ({
      album,
      width = '100%',
      height = '120',
      title = 'Bandcamp Player',
    }: {
      album: string
      width?: string | number
      height?: string | number
      title?: string
    }) => {
      const src = `https://bandcamp.com/EmbeddedPlayer/album=${album}/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/`
      return (
        <iframe
          src={src}
          width={width}
          height={height}
          title={title}
          style={{ border: 0 }}
          seamless
          allowFullScreen
        />
      )
    },
  }
}
