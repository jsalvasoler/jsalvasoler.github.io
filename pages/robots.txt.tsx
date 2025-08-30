import type { GetStaticProps } from 'next'

import { host } from '@/lib/config'

export const getStaticProps: GetStaticProps = async () => {
  const robotsContent = `User-agent: *
Allow: /
Disallow: /api/get-tweet-ast/*
Disallow: /api/search-notion

Sitemap: ${host}/sitemap.xml`

  return {
    props: {
      robotsContent
    }
  }
}

interface RobotsProps {
  robotsContent: string
}

export default function Robots({ robotsContent }: RobotsProps) {
  return (
    <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
      {robotsContent}
    </pre>
  )
}
