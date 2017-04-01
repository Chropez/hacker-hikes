/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    name: "Hacker Hikes",
    short_name: "Hacker Hikes",
    description: "Plan your next hike!",
    start_url: "/",
    display: "standalone",
    background_color: "#277062",
    theme_color: "#277062",//"#ffa105",

    icons: [
      {
        src: "/images/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/images/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/images/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        targets: ['apple']
      }
    ],

    apple: {
      statusBarStyle: 'black-translucent',
      precomposed: true
    }
  };
}
