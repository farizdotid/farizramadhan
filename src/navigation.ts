import { getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    
    {
      text: 'Blog List',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Mas Ziraf', href:'https://masziraf.com/' },
    { text: 'Farizdotid', href:'https://farizdotid.com/' },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/masziraf/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/farizdotid/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/farizdotid' },
  ],
};
