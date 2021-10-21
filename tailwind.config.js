// module.exports = {
//     purge: [],
//     darkMode: false, // or 'media' or 'class'
//     theme: {
//         extend: {
//             // screens: {
//             //     'sm1': { 'min': '640px', 'max': '767px' },
//             //     'md1': { 'min': '768px', 'max': '1023px' },
//             //     'lg1': { 'min': '1024px', 'max': '1279px' },
//             //     'xl1': { 'min': '1280px', 'max': '1535px' },
//             //     '2xl1': { 'min': '1536px' },
//             // }
//             screens: {
//                 '_sm': { 'min': '640px', 'max': '767px' },
//                 '_md': { 'min': '768px', 'max': '1023px' },
//                 // '_lg': { 'min': '1024px', 'max': '1279px' },
//                 '_lg': { 'min': '1024px', 'max': '1439px' },
//                 '_xl': { 'min': '1440px', 'max': '1675px' },
//                 '_2xl': { 'min': '1536px' },
//             }
//         },
//     },
//     variants: {
//         extend: {},
//     },
//     plugins: [],
// }


module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        flex: {
            '1' : '0 0 auto'
        },
        extend: {
            boxShadow: {
                'card' : '0px 12px 24px rgba(0, 0, 0, 0.0442526), 0px 22px 64px rgba(0, 0, 0, 0.04)'
            },
            // screens: {
            //     'sm1': { 'min': '640px', 'max': '767px' },
            //     'md1': { 'min': '768px', 'max': '1023px' },
            //     'lg1': { 'min': '1024px', 'max': '1279px' },
            //     'xl1': { 'min': '1280px', 'max': '1535px' },
            //     '2xl1': { 'min': '1536px' },
            // }
            screens: {
                '_xs': { 'max': '674px' },
                '_sm': { 'max': '810px' },
                '_md': { 'max': '1139px' },
                '_mdM': { 'min': '1140px' },
                // '_lg': { 'min': '1024px', 'max': '1279px' },
                '_lg': { 'max': '1440px' },
                '_xl': { 'min': '1441px', 'max': '1675px' },
                '_2xl': { 'min': '1676px' },
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}