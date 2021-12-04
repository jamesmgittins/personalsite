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
        'A web based mandelbrot wallpaper generator built with Svelte.',
        [
            new Link(linkNames.site, 'https://jamesmgittins.github.io/Svelte-Mandelbrot/', true),
            new Link(linkNames.github, 'https://github.com/jamesmgittins/Svelte-Mandelbrot', false)
        ],
        ['mandelbrot.jpg','mandelbrot2.jpg']),
    new PortfolioEntry(
        'Doodles', 
        'A simple social network where users can post and reply to doodles. Built with NodeJS, express and MySQL.',
        [
            new Link(linkNames.site, 'https://doodles.gti.nz', true),
            new Link(linkNames.github, 'https://github.com/jamesmgittins/pixelswebsite', false)
        ],
        ['doodles.jpg','doodles2.jpg','doodles3.jpg']),
    new PortfolioEntry(
        'Walking Simulator', 
        'A procedurally generated world created with ThreeJS and TypeScript.',
        [
            new Link(linkNames.site, 'https://walking.gti.nz', true),
            new Link(linkNames.github, 'https://github.com/jamesmgittins/walking', false)
        ],
        ['walking.jpg','walking2.jpg']),
    new PortfolioEntry(
        'Incremancer', 
        'Zombie themed browser game using PixiJS and AngularJS. Also released on google play store.',
        [
            new Link(linkNames.site, 'https://incremancer.gti.nz', true),
            new Link(linkNames.github, 'https://github.com/jamesmgittins/incremancer', false)
        ],
        ['incremancer3.png', 'incremancer2.png', 'incremancer1.png']),
    new PortfolioEntry(
        'Doom Live Wallpaper', 
        'An android application that simulates a game of Doom running on your wallpaper. Written in Java.',
        [
            new Link('XDA Developers', 'https://forum.xda-developers.com/showthread.php?t=827898', true),
            new Link('Download APK', 'https://github.com/jamesmgittins/doomlivewallpaper/releases/download/1.41/DoomLiveWallpaper.apk', false),
            new Link(linkNames.github, 'https://github.com/jamesmgittins/doomlivewallpaper', false)
        ],
        ['doomlw.jpg','doomlw2.png']),
    new PortfolioEntry(
        'Dope Slinger Tycoon', 
        'An idle game that runs in the browser. Built with AngularJS.',
        [
            new Link(linkNames.site, 'https://dopeslinger.gti.nz', true),
            new Link(linkNames.github, 'https://github.com/jamesmgittins/dopeslingertycoon', false)
        ],
        ['dopeslinger.jpg','dopeslinger2.jpg']),
    new PortfolioEntry(
        'Shootr', 
        'An incremental arcade style game that runs in the browser. Built with PixiJS.',
        [
            new Link(linkNames.site, 'https://shootr.gti.nz/beta', true),
            new Link(linkNames.github, 'https://github.com/jamesmgittins/shootr', false)
        ],
        ['shootr.jpg','shootr2.jpg']),
    new PortfolioEntry(
        'Smartbomb', 
        "Interface for Giantbomb's video API that runs on LG WebOS smart TVs. Built with jQuery.",
        [
            new Link(linkNames.github, 'https://github.com/jamesmgittins/smartbomb', true)
        ],
        ['smartbomb.jpg','smartbomb.jpg']),
    new PortfolioEntry(
        'Light the Way Home', 
        "Quick game made for the incremental game jam 2021 on itch.io. Made in about 2 days. Using svelte and pixijs.",
        [
            new Link(linkNames.site, 'https://jamesmgittins.github.io/light-the-way-home/', true),
            new Link(linkNames.github, 'https://github.com/jamesmgittins/light-the-way-home', false)
        ],
        ['lighttheway1.jpg','lighttheway2.jpg']),
    new PortfolioEntry(
        'Run Out of Town', 
        "Grand Theft Auto inspired 3D game made for the incremental game jam on itch.io. Made in under 2 weeks. Using svelte and threejs.",
        [
            new Link(linkNames.site, 'https://jamesmgittins.github.io/runoutoftown/', true),
            new Link(linkNames.github, 'https://github.com/jamesmgittins/runoutoftown', false)
        ],
        ['runout1.jpg','runout2.jpg']),
];