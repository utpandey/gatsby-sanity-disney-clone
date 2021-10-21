import React from 'react';
import { Maybe, SanityImage } from "../../graphql-types"
// import { motion } from 'framer-motion'

interface IProps {
  thumbnail: Maybe<SanityImage> | undefined | {
    asset: {
      assetId: string;
      url: string;
    }
  }
}

const Card = ({ thumbnail }: IProps) => {

  return (
    // <div className="tile pr-0">
    //   <div className="tile__media">
    //   <img
    //    className="tile__img rounded-md"
    //     // className="card-carousel rounded-xl mr-5 style_prevu_kit origin-center"
    //     src={thumbnail?.asset?.url}
    //     alt={thumbnail?.asset?.assetId}
    //   />
    //   </div>
    //   <div className="tile__details">
    //       <h1 className="tile__title text-black">
    //         Top Gear
    //       </h1>
    //     </div>
    //    </div>

    <div className="card w-full">
      <div className="img-container">
        <img className="rounded-md"
          // className="card-carousel rounded-xl mr-5 style_prevu_kit origin-center"
          // @ts-ignore
          src={thumbnail?.asset?.url}
          // @ts-ignore
          alt={thumbnail?.asset?.assetId}
        />
      </div>
      {/* <div className="card__body">
        <div className="card__body__infoCont">
          <h1>Title</h1>
          <p>Description</p>
        </div>
        <a className="">Button</a>
      </div> */}
    </div>
  )
}

export default Card
