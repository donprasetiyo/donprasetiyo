import List from "./list";
import Subtitle from "./subtitle";
import Title from "./title";

interface IWithImage {
    title: string,
    subtitle: string,
    imageSource: string,
    type: 'textOnLeft' | 'textOnRight'
    description?: string
    button?: React.ReactNode
    list?: string[]
}

const WithImage = ({ title, subtitle, imageSource, type, list, button, description }: IWithImage) => {
    return (
        <>
            {
                type === 'textOnLeft' ?
                    <div className="flex flex-col justify-normal lg:flex-row lg:justify-between items-center gap-4 my-4">
                        <div className="flex flex-col items-start gap-2">
                            <Title className="md:text-4xl text-left">{title}</Title>
                            <Subtitle className="text-left">{subtitle}</Subtitle>
                            {
                                description && description
                            }
                            {
                                button && button
                            }
                            {
                                list && <List items={list} />
                            }
                        </div>
                        <img className="w-full border border-border rounded-2xl max-w-[500px]" alt="example" src={imageSource} width={1200} height={700} />
                    </div>
                    :
                    <div className="flex flex-col justify-normal lg:flex-row lg:justify-between items-center gap-4">
                        <img className=" order-2 lg:order-1 w-full border border-border rounded-2xl max-w-[500px]" alt="example" src={imageSource} width={1200} height={700} />
                        <div className=" order-1 items-start lg:order-2 flex flex-col lg:items-end gap-2">
                            <Title className="text-left md:text-4xl lg:text-right">{title}</Title>
                            <Subtitle className="text-left lg:text-right">{subtitle}</Subtitle>
                            {
                                description && description
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



export default WithImage;