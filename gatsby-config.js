// In your gatsby-config.js
module.exports = {
    plugins: [
      // Simple config, passing URL
      {
        resolve: "gatsby-source-graphql",
        options: {
          // Arbitrary name for the remote schema Query type
          typeName: "LOLLIES",
          // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
          fieldName: "LOLLIES",
          // Url to query from
           url: "https://naughty-lewin-76fd9d.netlify.app/.netlify/functions/Vcard",
        },
      }
    ]
    }


   