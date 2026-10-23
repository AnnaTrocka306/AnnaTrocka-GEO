module.exports = {
  ci: {
    collect: {
      staticDistDir: './_qa_site',
      url: ['http://localhost/AnnaTrocka-GEO/de/', 'http://localhost/AnnaTrocka-GEO/en/', 'http://localhost/AnnaTrocka-GEO/ru/'],
      numberOfRuns: 1,
      settings: { chromeFlags: '--no-sandbox', onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'] }
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.8 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 200 }]
      }
    },
    upload: { target: 'filesystem', outputDir: './qa-report/lighthouse' }
  }
};
