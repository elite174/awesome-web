export interface Link {
    readonly description?: string;
    readonly url: string;
    readonly tags?: string[];
}

export const links: Link[] = [
    { url: 'https://overreacted.io/', tags: ['learning', 'react', 'DanAbramov'] },
    {
        url: 'https://whatthefuck.is/',
        tags: ['learning']
    },
    {
        url: 'http://brutalistwebsites.com/',
        tags: ['design', 'brutalism'],
        description: 'Collection of sites in brutalism'
    },
    {
        url: 'http://www.evernote.design/',
        tags: ['design', 'collection', 'typography']
    },
    {
        url: 'https://pixlr.com/x/',
        tags: ['editor', 'image', 'online', 'tools']
    },
    {
        url: 'https://browserdefaultstyles.com/',
        tags: ['styles', 'css', 'browser'],
        description: 'Get default browser styles of some element'
    }
];
