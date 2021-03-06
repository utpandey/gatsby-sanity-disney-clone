import { SanityVideo, SanityAccount } from '../../graphql-types'

export type Genre = 'Animation' | 'Recommended for you' | 'Family' | 'Classic' | 'Comedy' | `Children's film` | 'Dark Comedy' | 'Drama' | 'War' | 'Action' | 'Science fiction' | 'Adventure' | 'Buddy' | 'Fantasy' | 'Epic' | 'Comedy-drama' | 'Superhero' | 'Animated cartoon' | 'Sports' | 'Horror' | 'Thriller' | 'History' | 'Historical film' | 'Romance' | 'National-geographic' | 'Pixar' | 'Marvel' | 'Disney' | 'Star-wars';

export interface IIndexProps {
    data: {
        allSanityVideo: {
            nodes: SanityVideo[] | [];
        },
        sanityAccount: SanityAccount;
    }
}

export interface IVideo {
    description: string;
    isSeen: boolean | null;
    slug: {
        current: string
    };
    tags: [string];
    thumbnail: {
        asset: {
            assetId: string;
            url: string;
        }
    };
    title: string;
    _createdAt: string;
    _id: string;
}