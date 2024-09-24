import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'
 
export default (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    // output: "export",
    basePath: isDev ? undefined : 'https://psyckitchen.github.io/Echo-Frontend',
    assetPrefix: isDev ? undefined : 'https://psyckitchen.github.io/Echo-Frontend'
  }
  return nextConfig
}
