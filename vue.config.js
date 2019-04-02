// vue.config.js
let path = require('path')
module.exports = {
  devServer: {
    port: 8085,
  },
  transpileDependencies : [
    "@qtt"
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px-to-viewport')({ // 把px单位换算成rem\vw单位
            
        	viewportWidth: 375, // (Number) The width of the viewport.
        	viewportHeight: 1334, // (Number) The height of the viewport. 
        	unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 
        	viewportUnit: 'vw', // (String) Expected units. 
        	selectorBlackList: ['.ignore', '.hairlines'], 
        	minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
        	mediaQuery: false
	        	
          })
        ]
      }
    }
  },

}