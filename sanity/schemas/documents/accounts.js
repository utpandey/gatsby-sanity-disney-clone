import { MdAccountCircle as icon } from 'react-icons/md'

export default {
    name: 'account', // validation: Rule => Rule.required().min(10).max(80)
    type: 'document',
    title: 'Account',
    icon,
    fields: [{
        name: 'username',
        type: 'string',
        tile: 'Username',
    },
    {
        name: "avatar",
        type: "image",
        title: "Avatar"
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
            title: 'username',
            media: 'avatar',
            reference: 'groupRef',
        },
        prepare(selection) {
            const { title, media, reference } = selection;
            console.log(reference)
            return {
                title: selection.title,
                media: selection.media,
                // reference: selection.reference
            }
        }
    }

}

//  validation: Rule => [
//     Rule.required().min(10).error('A title of min. 10 characters is required'),
//     Rule.max(50).warning('Shorter titles are usually better')
//   ]