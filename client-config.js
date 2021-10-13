// import sanityClient from '@sanity/client'

// export default sanityClient({
//     projectId: "dbthgwkf",
//     dataset: "production"
// })

module.exports = {
    sanity: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID || 'dbthgwkf',
        dataset: process.env.GATSBY_SANITY_DATASET || 'clone--production'
    }
}