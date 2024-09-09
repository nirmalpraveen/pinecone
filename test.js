const { Pinecone } = require("@pinecone-database/pinecone");

async function main() {
  const pc = new Pinecone({
    apiKey: "3b491431-b5e5-4ed6-9588-ed7a70677ec7",
  });

  // await pc.createIndex({
  //   name: "new-index",
  //   dimension: 8,
  //   metric: "cosine",
  //   spec: {
  //     serverless: {
  //       cloud: "aws",
  //       region: "us-east-1",
  //     },
  //   },
  // });

  const index = pc.index("new-index");

  await index.upsert([
    {
      id: "A",
      values: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
    },
    {
      id: "B",
      values: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
    },
    {
      id: "C",
      values: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
    },
    {
      id: "D",
      values: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4],
    },
  ]);

  console.log("Vectors upserted successfully!");
}

main().catch(console.error);
