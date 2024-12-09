import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface ImageCarouselItem{
    src: string,
    name: string
}

export function ImageCarousel({items}:{items:ImageCarouselItem[]}) {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-[80%] sm:w-full max-w-sm"
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            <CarouselContent>
                {items.map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                        <div className="p-1 ">
                            <Card className="">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <img className="dark:invert object-contain max-h-[50px]" src={_.src} alt={_.name}></img>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
