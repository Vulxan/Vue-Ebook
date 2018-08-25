module.exports = {
  outputDir: 'doc',
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/Vue-Ebook/'
    : '/'
}