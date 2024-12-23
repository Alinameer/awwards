import React from 'react'

const BentoCard = ({ src, title, description }) => {
    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                autoPlay
                muted
                className="absolute top-0 left-0 size-full object-center object-cover"
                />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ">
                <div>
                   <h1 className="uppercase md:text-6xl text-4xl font-black font-zentry special-font">{title}</h1>
                    {description && (
                        <p className="max-w-64 mt-3 font-circular-web text-xs md:text-base">{description}</p>
                    )}
                </div>
            </div>
        </div>
    )
}
export default BentoCard
