import path from 'path';
import remarkGfm from 'remark-gfm';
import { fileURLToPath } from 'url';
import remarkRelativeReplace from './src/plugins/remark-relative-replace.mjs';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  siteMetadata: {
    title: `VAD-VAR`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`
      },
      __key: 'content'
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkRelativeReplace],
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap', test: ['h2', 'h3', 'h4', 'h5', 'h6'] }]
          ]
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 590,
              withWebp: false,
              showCaptions: false,
              quality: 50
            }
          }
        ],
        extensions: [`.mdx`, '.md']
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassRuleModulesTest: /\.module\.s(a|c)ss$/,
        additionalData: `@use "src/styles/resources" as *;`,
        sassOptions: {
          includePaths: [path.join(__dirname, '/src/styles')]
        }
      }
    }
  ]
};

export default config;
