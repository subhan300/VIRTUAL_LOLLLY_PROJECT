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

  console.log(result,"reult")


}