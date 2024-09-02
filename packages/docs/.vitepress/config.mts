import { defineConfig } from 'vitepress';
import { markdownDemo } from 'vitepress-demo-box';
import path, { dirname } from 'path';
import raw from 'vite-plugin-raw';

function fileURLToPath(fileURL: string) {
  let filePath = fileURL;
  if (process.platform === 'win32') {
    filePath = filePath.replace(/^file:\/\/\//, '');
    filePath = decodeURIComponent(filePath);
    filePath = filePath.replace(/\//g, '\\');
  } else {
    filePath = filePath.replace(/^file:\/\//, '');
    filePath = decodeURIComponent(filePath);
  }
  return filePath;
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vitepress Demo Box",
  description: "The docs of vitepress-demo-box",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/example' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide' },
          { text: 'DEMO 示例', link: '/example' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/coot-ui/vitepress-demo-box' }
    ]
  },
  markdown: {
    config(md) {
      md.use(markdownDemo, {
        demoRoot: path.resolve(dirname(fileURLToPath(import.meta.url)), '../demos'),
      });
    },
  },
  vite: {
    plugins: [
    ]
  }
})
