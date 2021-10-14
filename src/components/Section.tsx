import React from 'react'
import { SanityVideo} from "../../graphql-types"
import { Genre } from '../types'
import Card from './Card'

interface IProps {
genre: Genre;
videos: SanityVideo[]
}

const Section = ({genre, videos }: IProps) => {
    return (
        <div className="section">
            <h3>{genre}</h3>
            <div>
                {videos.map(video => (
                    <a key={video?._key} href={`/video/${video?.slug?.current}`}>
                        
                        <Card thumbnail={video?.thumbnail}/>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Section
