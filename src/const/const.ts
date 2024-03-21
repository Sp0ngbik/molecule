import {firstSiteConfig} from "../utils/imageConfig.ts";

export type SliderValue = {
    id: number,
    name: string,
    position: string,
    speech: string
    img: string
}

export const sliderValues: SliderValue[] = [
    {
        id: 1,
        name: 'Mark Watney',
        position: 'Marketing Director',
        speech: '"Using molecule for our web was the best decision we made last year — and we made a ton of great decisions, trust me!"',
        img: firstSiteConfig.designerPhoto,
    },
    {
        id: 2,
        name: 'Uladzislau Astapuk',
        position: 'Frontend Developer',
        speech: '"Hello, you found my easter egg, so thanks for checking this mini-slider"',
        img: firstSiteConfig.myPhoto
    }
]
