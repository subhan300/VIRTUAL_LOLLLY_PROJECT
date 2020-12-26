const path = require(`path`)
exports.createPages = async ({ actions, graphql }) => {
  console.log(graphql)
  const result = await graphql(`
  query MyQuery{
    LOLLIES{
        GetCard{
            c1
            c2
            c3
            rec
            sender
            msg
            link
  }}}
  `)


  result.data.LOLLIES.GetCard.map(async (indLolly) => {
    console.log(indLolly)
    await actions.createPage({
      path: `lolly/${indLolly.link}`,
      component: path.resolve(`./src/template/lollyPage.js`),
      context: {
        lolly: indLolly,
      },
    })
  })
}