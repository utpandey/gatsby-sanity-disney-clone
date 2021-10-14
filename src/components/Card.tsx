import React from 'react';
import { Maybe, SanityImage} from "../../graphql-types"

interface IProps {
    thumbnail: Maybe<SanityImage> | undefined |{
        asset: {
          assetId: string;
          url: string;
        }
      }
}

const Card = ({ thumbnail }: IProps) => {
    // @ts-ignore
    return <img className="card" src={thumbnail?.asset?.url} alt={thumbnail?.asset?.assetId}/>
}

export default Card
