class Link {
    public text : string;
    public url : string;
    public primary : boolean;
    constructor(text : string, url : string, primary : boolean) {
        this.text = text;
        this.url = url;
        this.primary = primary;
    }
}

export class PortfolioEntry {
    public title : string;
    public description : string;
    public images : string[];
    public links : Link[];
    constructor(title:string, description:string, links : Link[], images : string[]) {
        this.title = title;
        this.description = description;
        this.links = links;
        this.images = images;
    }
}

const linkNames = {
    site : 'Site',
    github : 'Github'
}

export const portfolio = [
    new PortfolioEntry(
        'Mandelbrot Wallpaper Generator', 
        'A web based mandelbrot wallpaper generator built with svelte JS.',
        [
            new Link(linkNames.site, 'https://jamesmgittins.github.io/Svelte-Mandelbrot/', true),
            new Link(linkNames.github, 'https://github.com/jamesmgittins/Svelte-Mandelbrot', false)
        ],
        ['mandelbrot.jpg']),
    new PortfolioEntry(
        'Doodles', 
        'A simple social network where users can post and reply to doodles. Built with nodeJs, express and mysql.',
        [
            new Link(linkNames.site, 'https://doodles.gti.nz', true),
            new Link(linkNames.github, 'https://github.com/jamesmgittins/pixelswebsite', false)
        ],
        ['doodles.jpg']),
    new PortfolioEntry(
        'Walking Simulator', 
        'A procedurally generated world created with ThreeJS and Typescript.',
        [
            new Link(linkNames.site, 'https://walking.gti.nz', true),
            new Link(linkNames.github, 'https://github.com/jamesmgittins/walking', false)
        ],
        ['walking.jpg']),
    new PortfolioEntry(
        'Incremancer', 
        'Zombie themed browser game using PixiJS and AngularJS.',
        [
            new Link(linkNames.site, 'https://incremancer.gti.nz', true),
            new Link(linkNames.github, 'https://github.com/jamesmgittins/incremancer', false)
        ],
        ['incremancer3.png', 'incremancer2.png', 'incremancer1.png']),
    new PortfolioEntry(
        'Doom Live Wallpaper', 
        'An android application that simulates a game of Doom running on your wallpaper.',
        [
            new Link('XDA Developers', 'https://forum.xda-developers.com/showthread.php?t=827898', true),
            new Link('Download APK', 'https://github.com/jamesmgittins/doomlivewallpaper/releases/download/1.41/DoomLiveWallpaper.apk', false),
            new Link(linkNames.github, 'https://github.com/jamesmgittins/doomlivewallpaper', false)
        ],
        ['doomlw.jpg']),
    new PortfolioEntry(
        'Dope Slinger Tycoon', 
        'An idle game that runs in the browser. Built with AngularJS.',
        [
            new Link(linkNames.site, 'https://dopeslinger.gti.nz', true),
            new Link(linkNames.github, 'https://github.com/jamesmgittins/dopeslingertycoon', false)
        ],
        ['dopeslinger.jpg']),
    new PortfolioEntry(
        'Shootr', 
        'An incremental arcade style game that runs in the browser. Built with PixiJS.',
        [
            new Link(linkNames.site, 'https://shootr.gti.nz/beta', true),
            new Link(linkNames.github, 'https://github.com/jamesmgittins/shootr', false)
        ],
        ['shootr.jpg']),
    new PortfolioEntry(
        'Smartbomb', 
        "Interface for Giantbomb's video API that runs on LG WebOS smart TVs. Build with jQuery.",
        [
            new Link(linkNames.github, 'https://github.com/jamesmgittins/smartbomb', true)
        ],
        ['smartbomb.jpg']),
];