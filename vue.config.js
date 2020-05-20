module.exports = {
	pwa: {
		name: 'My Food',
		themeColor: '#4DBA87',
		msTileColor: '#000000',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'black',
		iconPaths: {
			favicon32: '/public/img/icons/favicon-32x32.png',
			favicon16: '/public/img/icons/favicon-16x16.png',
			appleTouchIcon: '/public/img/icons/apple-icon-precomposed.png',
			maskIcon: '/public/favicon.ico',
      		msTileImage: '/public/img/icons/android-icon-192x192.png',
		  },
		manifestOptions: {
			display: 'fullscreen'
		},

		workboxPluginMode: 'InjectManifest',
		workboxOptions: {
			swSrc: 'src/service-worker.js'
		}
	}
}