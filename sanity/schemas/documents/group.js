export default {
    name: 'group',
    type: 'document',
    title: 'Group',
    fields: [{
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            // options: {
            //     source: 'title',
            //     // slugify: myAsyncSlugifier
            // }
        },
        {
            name: 'videoRef',
            title: 'Video Reference',
            type: 'array',
            of: [{
                    type: 'reference',
                    to: [
                        { type: 'video' }
                    ]
                }]
                // type: 'reference',
                // to: [{ type: 'video' }],
        },
    ],

}