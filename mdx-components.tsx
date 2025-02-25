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
          <img src={src} className="rounded-xl" />
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
          className="rounded-xl"
          style={{ border: 'none' }}
          allowFullScreen
        />
      )
    },
  }
}
