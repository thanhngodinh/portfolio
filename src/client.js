import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    // projectId: process.env.local.REACT_APP_SANITY_PROJECT_ID,
    projectId: 'smne0iif',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    // token: process.env.local.REACT_APP_SANITY_TOKEN,
    token: 'skxZm38TPP0vEqjBK7YKImuitbEBSrerfZ51BxWG7VTH7Tr5pYjSxBqEWCevK6fzV3wWAZ2ZOZGCDbaDjpmJnmqFVzgL2zxb9VcuibRv28YATR2l60QwPqIth6DzRYs0mwDxn9XGVX9ZAz9tVy9IZTD08mo17hBpzteZ8lHaNmwXALlOBZSn'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
