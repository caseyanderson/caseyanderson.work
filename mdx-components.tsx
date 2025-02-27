import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    // Custom link component (already fine, no responsiveness needed here)
    a: ({ href, children }: { href?: string; children: React.ReactNode }) => {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    },

    // Cover (already responsive, included for reference)
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

    // YouTube (made responsive)
    YouTube: ({
      src,
      width = '100%', // Default to 100% for responsiveness
      height = 'auto', // Let aspect ratio handle height
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
            maxWidth: '100%', // Ensure it doesn’t overflow container
            border: 'none',
            aspectRatio: '16 / 9', // Maintain standard video aspect ratio
          }}
          allowFullScreen
        />
      )
    },

    // Bandcamp (made responsive)
    Bandcamp: ({
      album,
      width = '100%', // Default to 100% for responsiveness
      height = 'auto', // Let aspect ratio or content dictate height
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
          style={{
            maxWidth: '100%', // Prevent overflow
            border: 0,
            aspectRatio: 'auto', // Bandcamp players adjust height dynamically
          }}
          seamless
          allowFullScreen
        />
      )
    },

    // Vimeo (made responsive)
    Vimeo: ({
      src,
      width = '100%', // Default to 100% for responsiveness
      height = 'auto', // Let aspect ratio handle height
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
            maxWidth: '100%', // Ensure it fits container
            border: 'none',
            aspectRatio: '16 / 9', // Maintain standard video aspect ratio
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      )
    },
  }
}
