import React from "react";
import { Link } from "gatsby";
import { SanityAccount } from "../../graphql-types"

interface IProps {
    account: SanityAccount;
}

const NavBar = ({ account }: IProps) => {
    // @ts-ignore Types and errors to be resolved - gatsby-graphql-codegen
    const { url } = account?.avatar?.asset
    return (
        <div className="w-full h-20 min-h-full">
            <div className="fixed top-0 left-0 w-full max-w-full z-50 opacity-100" style={{ background: 'linear-gradient(to bottom, #141b29, #0c111b 300px)' }}>
                <div className="flex w-full items-center h-16 min-h-full py-0 my-0 lg:px-14">
                    <div id="btn-hamburger" className="group cursor-pointer">
                        <div className="-ml-6">
                            <span className="block" style={{background: 'rgba(255, 255, 255, 0.6)', width: '18px', height: '2px'}}/>
                            <span className="block transition-all" style={{background: 'rgba(255, 255, 255, 0.6)', width: '18px', height: '2px', marginTop: '3px', marginBottom: '3px'}}/>
                            <span className="block" style={{background: 'rgba(255, 255, 255, 0.6)', width: '18px', height: '2px'}}/>
                        </div>
                        <div className="md:-ml-96 mt-0 z-50 cursor-pointer w-64 fixed top-0 left-0 p-0 -ml-52 my-0 mr-0 md:w-auto h-full md:h-auto max-h-full md:max-h-0 rounded-none md:rounded-sm bg-gray-800 md:absolute overflow-hidden block md:shadow-md transition-all fade-in-quick">

                        </div>
                    </div>

                    <div className="lg:pl-4 lg:pb-1 cursor-pointer my-auto py-auto">
                        <Link to="/">
                            <img 
                                src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" 
                                alt="Disney Logo" 
                                className="my-auto" 
                            />
                        </Link>
                    </div>

                    <div className="flex justify-self-end ml-auto my-auto h-full lg:space-x-4">
                        <p className="my-auto lg:text-base">Welcome, {account?.username}</p>
                        <img className="inline object-cover my-auto lg:w-12 lg:h-12 rounded-full" src={url} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
