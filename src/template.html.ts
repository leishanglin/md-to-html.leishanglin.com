export interface RenderConfig {
  // Markdown 文档转换后的 html 字符串片段
  content: string;
  // 协议+域名+端口
  domain: string;
  // 域名+端口
  domainName: string;
  // 网页标题
  title: string;
  // 关键词
  keywords: string;
  // 描述
  description: string;
  // 作者
  author: string;
  // 发布时间
  datePublished: string;
  // 修改时间
  dateModified: string;
  // 相对发布时间
  relativeDatePublished: string;
  // 相对修改时间
  relativeDateModified: string;
  // 是否存在代码块
  hasCodeBlock: boolean;
  // 主题
  theme: string;
  //
  blogName: string;
  auditCode: string;
  indexJsName: string;
  indexCssName: string;
}

export const renderTemplateHtml = (config: RenderConfig) => {
  const url = `${config.domain}/`;
  return `<!DOCTYPE html>
<html lang="zh-CN" style="font-size: 16px">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${config.title} | ${config.domainName}</title>
    <meta name="keywords" content="${config.keywords}" />
    <meta name="description" content="${config.description}" />
    <meta name="color-scheme" content="light dark" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="leishanglin" />
    <link rel="canonical" href="${url}" />
    <meta property="og:title" content="${config.title}" />
    <meta property="og:description" content="${config.description}" />
    <meta property="og:image" content="${config.domain}/images/poster.png" />
    <meta property="og:site_name" content="${config.title}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta property="twitter:image" content="${
      config.domain
    }/images/poster.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="${config.title}" />
    <meta property="twitter:description" content="${config.description}" />
    <link rel="icon" type="image/svg+xml" href="${
      config.domain
    }/images/favicon.svg" />
    <link rel="alternate icon" type="image/png" href="${
      config.domain
    }/images/favicon.png" />
    <link rel="shortcut icon" href="${
      config.domain
    }/images/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" sizes="180x180" href="${
      config.domain
    }/images/large-favicon.png" />
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "${config.title}",
        "name": "${config.title}",
        "description": "${config.description}",
        "url": "${url}",
        "image": "${config.domain}/images/large-favicon.png",
        "author": {
          "@type": "Person",
          "name": "leishanglin"
        },
        "publisher": {
          "@type": "Organization",
          "name": "${config.domainName}",
          "logo": {
            "@type": "ImageObject",
            "url": "${config.domain}/images/large-favicon.png"
          }
        },
        "datePublished": "${config.datePublished}",
        "dateModified": "${config.dateModified}"
      }
    </script>
    <link rel="preload" href="${config.domain}/styles/index.css" as="style" />
    <link rel="preload" href="${
      config.domain
    }/styles/github-markdown.min.css" as="style" />
    <link rel="preload" href="${config.domain}/scripts/index.js" as="script" />
    <link rel="stylesheet" href="${
      config.domain
    }/styles/github-markdown.min.css" />
    ${
      config.hasCodeBlock
        ? `<link rel="stylesheet" href="${config.domain}/styles/hljs-theme-github.min.css" />`
        : "<br/>"
    }
    <link rel="stylesheet" href="${config.domain}/styles/index.css" />

    <style>
      body {
        margin: 0;
      }
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      #md {
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
      }
      #dateContainer {
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.875rem;
        margin-bottom: 2rem;
        color: var(--fgColor-muted);
      }
      #dateContainer .right-wrapper {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      @media (max-width: 767px) {
        #md {
          padding: 15px;
        }
      }
      @media (max-width: 436px) {
        .created-date-wrapper {
          display: none;
        }
      }
    </style>

    <script>
      // Theme switching
      const theme = localStorage.getItem('theme') || 'system';
      const rootElement = document.documentElement;
      switch (theme) {
        case 'dark':
          rootElement.classList.remove('light');
          rootElement.classList.add('dark');
          break;
        case 'light':
          rootElement.classList.remove('dark');
          rootElement.classList.add('light');
          break;
        case 'system':
          rootElement.classList.remove('dark');
          rootElement.classList.remove('light');
          break;
        default:
          console.warn(\`Unknown theme value: ${config.theme}.\`);
      }
    </script>
  </head>

  <body>
    <header id="pageHeader">
      <a class="logo-title" href="${config.domain}/index.html" target="_self">
        <img class="logo" alt="website logo" src="${
          config.domain
        }/images/logo.svg" />
        <span class="title">${config.blogName}</span>
      </a>

      <div class="right-wrapper">
        <div class="theme-switch"></div>
      </div>
    </header>

    <main id="pageMain">
      <article id="md">
        <h1>${config.title}</h1>
        <div id="dateContainer">
          <span>
            <a href="https://cv.leishanglin.com" title="author" target="_blank">leishanglin</a>&nbsp;&nbsp;更新于：<time datetime="${
              config.dateModified
            }">
            ${config.relativeDateModified}
            </time>
          </span>

          <div class="right-wrapper">
            <span class="created-date-wrapper">
              创建于：<time datetime="${config.datePublished}">${
    config.relativeDatePublished
  }</time>
            </span>
          </div>
        </div>
        ${config.content}
      </article>
    </main>

    <footer id="pageFooter">
      <p class="copyright">${config.auditCode}</p>
    </footer>

    <script src="${config.domain}/scripts/index.js"></script>

    ${
      config.hasCodeBlock
        ? `<script src="${config.domain}/scripts/highlight.min.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', () => {
        hljs.highlightAll();
      });
    </script>`
        : ""
    }
  </body>
</html>`;
};
