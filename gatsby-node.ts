import { createFilePath } from 'gatsby-source-filesystem';
import { GatsbyNode } from 'gatsby';

const DEFAULT_LOCALE = 'en';

const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        sharp$: false,
        'onnxruntime-node$': false
      }
    },
    module: {
      rules: [
        {
          test: /\.wasm$/,
          type: 'webassembly/async'
        }
      ]
    },
    experiments: {
      asyncWebAssembly: true
    }
  });
};

const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: './content',
      trailingSlash: false
    });

    const splitPath = relativeFilePath.toLowerCase().split('/');
    const splitFileName = splitPath[splitPath.length - 1].split('.');

    if (splitFileName.length === 1) {
      splitPath.splice(0, 0, DEFAULT_LOCALE);
    } else {
      splitPath.splice(0, 0, splitFileName[splitFileName.length - 1]);
      splitPath[splitPath.length - 1] = splitFileName[splitFileName.length - 2];
    }

    const cleanPath: string = splitPath
      .filter((s) => !!s && s !== 'readme')
      .join('/')
      .replaceAll('_', '-');

    createNodeField({
      node,
      name: 'slug',
      value: cleanPath
    });
  }
};

export { onCreateNode, onCreateWebpackConfig };
