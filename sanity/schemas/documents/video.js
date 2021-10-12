export default {
    name: 'video',
    type: 'document',
    title: 'Video',
    fields: [{
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: "video",
            type: "file",
            title: "Video"
        },
        {
            name: "thumbnail",
            type: "image",
            title: "Thumbnail"
        },
        {
            name: 'isSeen',
            type: 'boolean',
            title: 'Seen'
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{
                type: 'string'
            }]
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
            name: 'groupRef',
            title: 'Group Reference',
            type: 'reference',
            to: [{ type: 'group' }],
        },
    ],
    preview: {
        select: {
            imageUrl: 'asset.url',
            title: 'caption'
        }
    }
}