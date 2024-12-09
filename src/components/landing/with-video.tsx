import React from "react";
import Description from "./description";
import List from "./list";
import Subtitle from "./subtitle";
import Title from "./title";

interface IWithImage {
    title: string,
    subtitle: string,
    imageSource: string,
    type: 'textOnLeft' | 'textOnRight',
    description?: string
    button?: React.ReactNode
    list?: string[]
}

const WithVideo = ({ title, subtitle, imageSource, type, list, button, description }: IWithImage) => {
    return (
        <>
            {
                type === 'textOnLeft' ?
                    <div className="flex flex-col justify-normal lg:flex-row lg:justify-between items-center gap-4 my-4">
                        <div className="flex flex-col items-start gap-2">
                            <Title className="md:text-4xl text-left">{title}</Title>
                            <Subtitle className="text-left">{subtitle}</Subtitle>
                            {
                                description && <Description className="text-left">{description}</Description>
                            }
                            {
                                button && button
                            }
                            {
                                list && <List items={list} />
                            }
                        </div>
                        <video width="400" controls className="w-full border border-border rounded-2xl max-w-[500px]" autoPlay muted>
                            <source src={imageSource} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    :
                    <div className="flex flex-col justify-normal lg:flex-row lg:justify-between items-center gap-4">
                        <video width="400" controls className="order-2 lg:order-1 w-full border border-border rounded-2xl max-w-[500px]" autoPlay muted>
                            <source src={imageSource} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                        <div className=" order-1 items-start lg:order-2 flex flex-col lg:items-end gap-2">
                            <Title className="text-left md:text-4xl lg:text-right">{title}</Title>
                            <Subtitle className="text-left lg:text-right">{subtitle}</Subtitle>
                            {
                                description && <Description className="text-left lg:text-right">{description}</Description>
                            }
                            {
                                button && button
                            }
                            {
                                list && <List items={list} />
                            }
                        </div>
                    </div>
            }
        </>

    );
}



export default WithVideo;