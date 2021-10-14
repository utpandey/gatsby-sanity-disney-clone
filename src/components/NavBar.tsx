import React from "react";
import { Link } from "gatsby";
import { SanityAccount} from "../../graphql-types"

interface IProps {
    account: SanityAccount;
}

const NavBar = ({account}: IProps) => {
    // @ts-ignore Types and errors to be resolved - gatsby-graphql-codegen
    const {url} = account?.avatar?.asset
    return (
        <div className="navbar">
            <div className="logo-wrapper">
                <Link to="/">
                    <img src="/disney.png" alt="Disney Logo" />
                </Link>
            </div>

            <div className="account-info">
                <p>Welcome {account?.username}</p>
                <img className="avatar" src={url}/>
            </div>
        </div>
    )
}

export default NavBar
