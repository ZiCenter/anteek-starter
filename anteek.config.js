module.exports = {
    schema: 'src/schema.graphqls',
    federated: false,

    /**
     * External subgraphs to connect to this subgraph when federation is enabled
     */

    // subgraphs: {
    //     sample: {
    //         url: process.env.SAMPLE_SUBGRAPH_URL,
    //         localSchema: 'src/lib/sample.graphql'
    //     }
    // }
};
