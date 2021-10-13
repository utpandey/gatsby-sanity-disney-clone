import {MdGroup as icon} from 'react-icons/md'

export default {
    name: 'group',
    type: 'document',
    title: 'Group',
    icon,
    fields: [{
            name: 'title',
            type: 'string',
            title: 'Title',
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
    preview: {
        select: {
            title: 'title',
            slug: 'slug',
        },
        prepare(selection) {
            const {title, slug} = selection;
            return {
                title: selection.title,
                slug: selection.slug,
                // reference: selection.reference
            }
        }
    }
}