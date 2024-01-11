import kompiwin from '../public/images/kompiwin.jpg';
import mm from '../public/images/mm.jpg';
import flappy from '../public/images/flappy.jpg';
import meta from '../public/images/meta.jpg';
import { KompiwinDetail } from './Projects/Details/KompiwinDetail';
import { MMDetail } from './Projects/Details/MMDetail';
import { FlappyDetail } from './Projects/Details/FlappyDetail';
import { MetaDetail } from './Projects/Details/MetaDetail';

export const Projects = [
    {
        title: 'Kompiwin (2014-2020)',
        image: kompiwin,
        alt: 'kompiwin',
        category: 'personal',
        details: KompiwinDetail,
        url: 'https://kompiwin.com',
        github: null
    },
    {
        title: 'MonkeyManifesto (2019-now)',
        image: mm,
        alt: 'mm',
        category: 'personal',
        details: MMDetail,
        url: 'https://monkeymanifesto.com',
        github: null
    },
    {
        title: 'Flappy Bird Clone in JavaScript (2022-now)',
        image: flappy,
        alt: 'flappy',
        category: 'personal',
        details: FlappyDetail,
        url: 'https://flappy.donprasetiyo.com/',
        github: 'https://github.com/donprasetiyo/Flappy'
    },
    {
        title: 'DonPrasetiyo.com (2022-now)',
        image: meta,
        alt: 'meta',
        category: 'meta',
        details: MetaDetail,
        url: '/',
        github: 'https://github.com/donprasetiyo/donprasetiyo'
    }
]