export const Colors = [
   'transparent',
   'red', 
   'flush-orange',
   'yellow',
   'chartreuse',
   'green',
   'spring-green',
   'cyan',
   'azure-radiance',
   'blue',
   'electric-violet',
   'magenta',
   'rose',

   'dark1',
   'dark2',
   'dark3',
   'dark4',
   'dark5',
   'dark6',
   'dark7',
   'dark8',
   'dark9',
   'dark10',
   'dark11',
   'dark12',
   'dark13'
];

/**
 * Returns color name for rgba array
 * @param {rgba} rgba array [r, g, b, a]
 * @returns color name
 */
export const colorName = rgba => {
   // Since we can't compare arrays, use stringify
   const xs = {}
   xs[JSON.stringify([255, 255, 255, 0])]   = 'transparent'
   xs[JSON.stringify([255, 0, 0, 255])]     = 'red'
   xs[JSON.stringify([255, 128, 0, 255])]   = 'flush-orange'
   xs[JSON.stringify([255, 255, 0, 255])]   = 'yellow'
   xs[JSON.stringify([128, 255, 0, 255])]   = 'chartreuse'
   xs[JSON.stringify([0, 255, 0, 255])]     = 'green'
   xs[JSON.stringify([0, 255, 128, 255])]   = 'spring-green'
   xs[JSON.stringify([0, 255, 255, 255])]   = 'cyan'
   xs[JSON.stringify([0, 128, 255, 255])]   = 'azure-radiance'
   xs[JSON.stringify([0, 0, 255, 255])]     = 'blue'
   xs[JSON.stringify([128, 0, 255, 255])]   = 'electric-violet '
   xs[JSON.stringify([255, 0, 255, 255])]   = 'magenta'
   xs[JSON.stringify([255, 0, 128, 255])]   = 'rose'

   xs[JSON.stringify([255, 255, 255, 255])] = 'dark1'
   xs[JSON.stringify([240, 240, 240, 255])] = 'dark2'
   xs[JSON.stringify([220, 220, 220, 255])] = 'dark3'
   xs[JSON.stringify([200, 200, 200, 255])] = 'dark4'
   xs[JSON.stringify([180, 180, 180, 255])] = 'dark5'
   xs[JSON.stringify([160, 160, 160, 255])] = 'dark6'
   xs[JSON.stringify([140, 140, 140, 255])] = 'dark7'
   xs[JSON.stringify([120, 120, 120, 255])] = 'dark8'
   xs[JSON.stringify([100, 100, 100, 255])] = 'dark9'
   xs[JSON.stringify([80, 80, 80, 255])]    = 'dark10'
   xs[JSON.stringify([60, 60, 60, 255])]    = 'dark11'
   xs[JSON.stringify([40, 40, 40, 255])]    = 'dark12'
   xs[JSON.stringify([20, 20, 20, 255])]    = 'dark13'

   const value = xs[JSON.stringify(rgba)]
   return value ? value : 'transparent'
}

/**
 * Returns rgba array for color name
 * @param {colorName} color name
 * @returns rgba array [r, g, b, a]
 */
export const rgba = colorName => {
   const xs = {}
   xs['transparent']     = [255, 255, 255, 0];
   xs['red']             = [255, 0, 0, 255];
   xs['flush-orange']    = [255, 128, 0, 255];
   xs['yellow']          = [255, 255, 0, 255];
   xs['chartreuse']      = [128, 255, 0, 255];
   xs['green']           = [0, 255, 0, 255];
   xs['spring-green']    = [0, 255, 128, 255];
   xs['cyan']            = [0, 255, 255, 255];
   xs['azure-radiance']  = [0, 128, 255, 255];
   xs['blue']            = [0, 0, 255, 255];
   xs['electric-violet'] = [128, 0, 255, 255];
   xs['magenta']         = [255, 0, 255, 255];
   xs['rose']            = [255, 0, 128, 255];

   xs['dark1']            = [255, 255, 255, 255];
   xs['dark2']            = [240, 240, 240, 255];
   xs['dark3']            = [220, 220, 220, 255];
   xs['dark4']            = [200, 200, 200, 255];
   xs['dark5']            = [180, 180, 180, 255];
   xs['dark6']            = [160, 160, 160, 255];
   xs['dark7']            = [140, 140, 140, 255];
   xs['dark8']            = [120, 120, 120, 255];
   xs['dark9']            = [100, 100, 100, 255];
   xs['dark10']           = [80, 80, 80, 255];
   xs['dark11']           = [60, 60, 60, 255];
   xs['dark12']           = [40, 40, 40, 255];
   xs['dark13']           = [20, 20, 20, 255];
   
   return xs[colorName]
}

/**
 * @returns array (2d matrix) of transparent color names
 */
export const Matrix = () => {
   return Array(16)
      .fill()
      .map(() => Array(16).fill('transparent'));
}

/**
 * @returns array (2d matrix) of random color names
 */
export const randMatrix = () => {
   return Array(16)
      .fill()
      .map(() => {
         return Array.from({length: 16}, () => { 
            const index = Math.floor(Math.random() * Math.floor(Colors.length));
            return Colors[index] 
         });
      });
}
