require('dotenv').config();

module.exports = {
    schema: 'src/schema.graphqls',
    policies: 'src/policies.graphqls',

    /**
     * External subgraphs to connect to this subgraph when federation is enabled
     */
    // federated: process.env.FEDERATED === 'true',
    // subgraphs: {
    //     sample: {
    //         url: process.env.SAMPLE_SUBGRAPH_URL,
    //         localSchema: 'src/lib/sample.graphql'
    //     }
    // }
};
