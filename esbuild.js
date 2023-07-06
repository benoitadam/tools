const esbuild = require('esbuild');
const fs = require('fs');

// Automatically exclude all node_modules from the bundled version
const { nodeExternalsPlugin } = require('esbuild-node-externals')

function build(outfile, options) {
  esbuild.build({
    entryPoints: ['src/index.ts'],
    outfile: outfile,
    bundle: true,
    minify: true,
    sourcemap: true,
    plugins: [nodeExternalsPlugin()],
    ...options,
  })
    .then(() => {
      const size = fs.statSync(outfile).size / 1000;
      console.debug('result', outfile, size);
    })
    .catch((error) => {
      console.error('error', outfile, error);
      process.exit(1);
    });
}

const nodeConfig = {
  define: {
    "__NODE_JS__": "true",
    // "global.crypto": "\"require('crypto')\"",
    // "global.XMLHttpRequest": "require('xmlhttprequest').XMLHttpRequest"
  },
  platform: 'node',
  target: ['node12']
}

build('lib/node.js', {
  ...nodeConfig
});

build('lib/index.js', {
  define: {
    "__NODE_JS__": "false",
  },
  target: ['chrome58', 'firefox57', 'safari11', 'edge16']
});

build('build/all.spec.js', {
  ...nodeConfig,
  minify: false,
  entryPoints: ['test/all.spec.ts']
});

// build('lib/index.esm.js', { format: 'esm', target: ['esnext'] });
// build('lib/index.node.js', { platform: 'node', target: ['node12'] });
// build('lib/index.node18.js', { platform: 'node', target: ['node18'] });
