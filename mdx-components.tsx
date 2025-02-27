import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    // Custom link component
    a: ({ href, children }: { href?: string; children: React.ReactNode }) => {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    },

    // Cover component
    Cover: ({ src }: { src: string }) => {
      const imagePath = `/images/${src}`
      return (
        <figure style={{ margin: 0 }}>
          <img
            src={imagePath}
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </figure>
      )
    },

    // YouTube component
    YouTube: ({
      src,
      width = '100%',
      height = 'auto',
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
          style={{
            maxWidth: '100%',
            border: 'none',
            aspectRatio: '16 / 9',
          }}
          allowFullScreen
        />
      )
    },

    // Updated Bandcamp component based on your embed code
    Bandcamp: ({
      album,
      width = '100%',
      height = '120',
      title = 'Bandcamp Player',
      artwork = 'none', // Default to match your embed
    }: {
      album: string
      width?: string | number
      height?: string | number
      title?: string
      artwork?: 'none' | 'small' | 'large'
    }) => {
      const src = `https://bandcamp.com/EmbeddedPlayer/album=${album}/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=${artwork}/transparent=true/`
      console.log('Bandcamp iframe src:', src)
      return (
        <iframe
          src={src}
          width={width}
          height={height}
          title={title}
          style={{
            maxWidth: '100%',
            border: 0,
          }}
          seamless
          allowFullScreen
        />
      )
    },

    // Vimeo component
    Vimeo: ({
      src,
      width = '100%',
      height = 'auto',
      title = 'Vimeo Video',
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
          style={{
            maxWidth: '100%',
            border: 'none',
            aspectRatio: '16 / 9',
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      )
    },
  }
}
