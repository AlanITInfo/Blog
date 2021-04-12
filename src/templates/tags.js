import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from 'reactstrap';

class TagsTemplate extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const { blogPosts, totalCount } = this.props.data.allMarkdownRemark
    const currentTag = this.props.pageContext.tag
    const postsCounter = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with "${currentTag}"`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={currentTag} />
        <Bio />
        <h1>Articles tagged with <Button color="info" size="lg">{currentTag}</Button>{' '}</h1>
        <ul>
          {blogPosts.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <li key={slug}>
                <Link to={slug}><Button outline color="primary">{title}</Button>{' '}</Link>
              </li>
            )
          })}
        </ul>
        <Link to="/tag"><Button outline color="secondary">View all tags</Button>{' '}</Link>
      </Layout>
    )
  }
}

export default TagsTemplate

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      blogPosts: edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`