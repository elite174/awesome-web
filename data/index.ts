export interface Link {
    readonly description?: string;
    readonly url: string;
    readonly tags?: string[];
}

export const links: Link[] = [
    {
        url: 'https://overreacted.io/',
        tags: ['learning', 'react', 'DanAbramov'],
        description: 'Personal blog by Dan Abramov'
    },
    {
        url: 'https://whatthefuck.is/',
        tags: ['learning', 'DanAbramov'],
        description: 'Dan’s JavaScript Glossary'
    },
    {
        url: 'http://brutalistwebsites.com/',
        tags: ['design', 'brutalism'],
        description: 'Collection of sites in brutalism'
    },
    {
        url: 'http://www.evernote.design/',
        tags: ['design', 'collection', 'typography'],
        description: 'All in One Bookmark Links for Designer'
    },
    {
        url: 'https://pixlr.com/x/',
        tags: ['editor', 'image', 'online', 'tools'],
        description: 'Free image creating and processing tool'
    },
    {
        url: 'https://browserdefaultstyles.com/',
        tags: ['styles', 'css', 'browser'],
        description: 'Get default browser styles of some element'
    },
    {
        url: 'https://brumm.af/shadows',
        tags: ['styles', 'css', 'tool', 'shadow'],
        description: 'A tool for smooth shadow generation'
    },
    {
        url: 'https://css.gg/app',
        tags: ['icon', 'free', 'pack', 'css'],
        description: 'A set of 500+ css icons'
    },
    {
        url: 'https://www.web4college.com/css-play/index.php',
        tags: ['css', 'learning'],
        description: '300 css properties with descriptions'
    },
    {
        url: 'https://neumorphism.io/#55b9f3',
        tags: ['css', 'tool', 'generation'],
        description: 'Generate Soft-UI CSS code'
    },
    {
        url: 'https://uigradients.com/',
        tags: ['css', 'gradient', 'generation'],
        description: 'Gradient generation tool'
    },
    {
        url: 'https://colorscheme.ru/color-converter.html',
        tags: ['css', 'color', 'converter', 'tool'],
        description: 'Color converter tool'
    },
    {
        url: 'https://www.caniemail.com/',
        tags: ['email', 'css', 'caniuse', 'support'],
        description: 'CanIUse for emails'
    },
    {
        url: 'https://www.campaignmonitor.com/css/',
        tags: ['email', 'css', 'support'],
        description: 'Email css support'
    },
    {
        url: 'https://caniuse.email/',
        tags: ['email', 'css', 'support'],
        description: 'One more CanIUse for emails'
    },
    {
        url: 'https://whocanuse.com/',
        tags: ['color', 'accessibility', 'tool', 'contrast'],
        description: 'Who can use this color combination?'
    },
    {
        url: 'https://squoosh.app/',
        tags: ['image', 'compression', 'tool'],
        description: 'A tool for reducing image size'
    },
    {
        url: 'https://evilmartians.com/chronicles/introducing-imgproxy',
        tags: ['image', 'cropping', 'tool'],
        description: 'Resize your images instantly and securely'
    },
    {
        url: 'https://www.twilio.com/',
        tags: ['service', 'SMS'],
        description: 'Build the new normal for mass notifications with Twilio SMS'
    },
    {
        url: 'https://webflow.com/',
        tags: ['prototyping', 'tool', 'site'],
        description: 'Build better business websites, faster. Without coding'
    },
    {
        url: 'https://awesomelists.top/',
        tags: ['learning', 'list', 'theory'],
        description: 'Makes you find what you want in awesome lists more quickly'
    },
    {
        url: 'https://explainshell.com/',
        tags: ['shell', 'learning', 'cmd'],
        description: 'Shell commands explained'
    },
    {
        url: 'https://tiny-helpers.dev/',
        tags: ['tool', 'list'],
        description: 'Many useful helpers for different topics'
    },
    {
        url: 'https://polypane.app/css-specificity-calculator/',
        tags: ['tool', 'css', 'calculator'],
        description: 'CSS Specificity calculator'
    },
    {
        url: 'https://bundlephobia.com/',
        tags: ['tool', 'js', 'bundleSize', 'npm', 'package'],
        description: 'Find the cost of adding a npm package to your bundle'
    },
    {
        url: 'https://omatsuri.app/',
        tags: ['tool', 'generation'],
        description: 'Open source browser tools for everyday use'
    }
];
