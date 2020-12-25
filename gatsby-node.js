// const path = require(`path`)
// exports.createPages = async ({ actions, graphql }) => {
//   console.log(graphql)
//   const result = await graphql(`
//   query MyQuery{
//     LOLLIES{
//         GetCard{
//             c1: String
//             c2: String
//             c3: String
//             rec: String
//             sender: String
//             msg: String
//             link: String
//   }}}
//   `)


//   result.data.LOLLIES.getAllLollies.map(async (indLolly) => {
//     console.log(indLolly)
//     await actions.createPage({
//       path: `lolly/${indLolly.path}`,
//       component: path.resolve(`./src/template/lollyPage.jsx`),
//       context: {
//         lolly: indLolly,
//       },
//     })
//   })
// }