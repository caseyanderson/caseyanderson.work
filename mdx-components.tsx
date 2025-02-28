import type { MDXComponents } from 'mdx/types'

// ... (keep the existing `useMDXComponents` function and other components as they are)

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    // Custom link component (unchanged)
    a: ({ href, children }: { href?: string; children: React.ReactNode }) => {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    },

    // Cover component (unchanged)
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

    // YouTube component (unchanged)
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

    // Updated Bandcamp component to handle album or track without "Id"
    Bandcamp: ({
      album,
      track,
      width = '100%',
      height = '120',
      title = 'Bandcamp Player',
      artwork = 'none', // Default to match your embed
    }: {
      album?: string | number // Optional album ID
      track?: string | number // Optional track ID
      width?: string | number
      height?: string | number
      title?: string
      artwork?: 'none' | 'small' | 'large'
    }) => {
      // Determine which ID is provided
      const hasAlbum = !!album;
      const hasTrack = !!track;

      // If neither ID is provided, show an error
      if (!hasAlbum && !hasTrack) {
        return <div>Error: Please provide either an album or a track ID.</div>;
      }

      // Construct the embed URL based on the type of ID
      let src = '';
      let finalTitle = title;

      if (hasAlbum) {
        src = `https://bandcamp.com/EmbeddedPlayer/album=${album}/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=${artwork}/transparent=true/`;
        finalTitle = `Bandcamp Album: ${title}`;
      } else if (hasTrack) {
        src = `https://bandcamp.com/EmbeddedPlayer/track=${track}/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=${artwork}/transparent=true/`;
        finalTitle = `Bandcamp Track: ${title}`;
      }

      console.log('Bandcamp iframe src:', src);

      return (
        <iframe
          src={src}
          width={width}
          height={height}
          title={finalTitle}
          style={{
            maxWidth: '100%',
            border: 0,
          }}
          seamless
          allowFullScreen
        />
      );
    },

    // Vimeo component (unchanged)
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
