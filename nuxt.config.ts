export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {},
  css: [
    '~/assets/css/main.scss',
  ],
  plugins: [
    { src: '~/plugins/bootstrap.client.js', mode: 'client' },
  ],
})
