import React from "react";
import Description from "./description";
import List from "./list";
import Subtitle from "./subtitle";
import Title from "./title";

interface TextOnlyFeature {
    title: string,
    subtitle: string,
    description?: string
    button?: React.ReactNode
    list?: string[]
}

const TextOnlyFeature = ({ title, subtitle, list, button, description }: TextOnlyFeature) => {
    return (
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
        </div>
    );
}



export default TextOnlyFeature;