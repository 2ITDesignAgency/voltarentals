module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-source-wordpress/gatsby-browser.js'),
      options: {"plugins":[],"url":"https://2itdesignagency.gr/voltarentals/graphql","verbose":true,"develop":{"hardCacheMediaFiles":true,"nodeUpdateInterval":5000,"hardCacheData":false},"debug":{"graphql":{"writeQueriesToDisk":true,"showQueryVarsOnError":false,"showQueryOnError":false,"copyQueryOnError":false,"panicOnError":false,"onlyReportCriticalErrors":true,"copyNodeSourcingQueryAndExit":false,"printIntrospectionDiff":false},"preview":false,"timeBuildSteps":false,"disableCompatibilityCheck":false,"throwRefetchErrors":false},"html":{"fallbackImageMaxWidth":800,"useGatsbyImage":true,"imageMaxWidth":null,"imageQuality":90,"createStaticFiles":true},"excludeFieldNames":["blocksJSON","saveContent"],"type":{"Post":{"limit":50},"CoreParagraphBlockAttributesV2":{"exclude":true},"RootQuery":"{ excludeFieldNames: ['viewer', 'node', 'schemaMd5'], },"}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
