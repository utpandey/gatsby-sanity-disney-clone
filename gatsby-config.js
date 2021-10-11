require('dotenv').config({
    path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    siteMetadata: {
        title: `Gatsby-Clone`,
        description: `This is a clone made with gatsbyjs.`,
        author: `Utsav Pandey`,
        // siteUrl: `http://iiq-landing-page.vercel.app/`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [require('tailwindcss')],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-source-sanity',
            options: {
                ...clientConfig.sanity,
                token: process.env.SANITY_READ_TOKEN,
                watchMode: !isProd,
                overlayDrafts: !isProd
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [require("tailwindcss"), require('autoprefixer'), ],
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: false,
                develop: false,
                tailwind: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts-v2`,
            options: {
                fonts: [{
                    family: "Inter",
                    weights: ["200", "300", "400"],
                }, ],
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets/
                }
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}