import { MdLocalMovies as icon } from 'react-icons/md'

export default {
    name: 'video',
    type: 'document',
    title: 'Video',
    icon,
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
        options: {
            source: 'title',
            // slugify: myAsyncSlugifier
        }
    },
    {
        name: 'groupRef',
        title: 'Group Reference',
        type: 'reference',
        weak: true,
        to: [{ type: 'group' }],
    },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'thumbnail',
            tag0: 'tags.0',
            tag1: 'tags.1',
            tag2: 'tags.2',
        },
        prepare(selection) {
            const { title, media } = selection;
            const tags = [selection.tag0,selection.tag1,selection.tag2].filter(Boolean).join(', ')
            return {
                title, media, subtitle: tags
                // reference: selection.reference
            }
        }
    }
}