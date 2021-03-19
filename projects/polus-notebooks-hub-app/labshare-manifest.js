module.exports = {
  type: 'app',
  modules: [
    {
      name: '@labshare/polus-notebooks-hub',
      path: '@labshare/polus-notebooks-hub',
      manifest: {
        defaultIcon: 'icon-lsi-info-fill',
        entryModule: 'PolusNotebooksHubModule',
        description: 'Description for polus-notebooks-hub',
        consumeEvents: [],
        emitEvents: [],
        name: 'polus-notebooks-hub'
      }
    }
  ]
};
