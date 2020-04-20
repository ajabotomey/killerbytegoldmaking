import React from "react";
import { graphql, navigate } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import style from "./style.module.css";

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Home" />
      <div className ="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className={style.blogPostPreview} onClick={() => navigate(post.frontmatter.path)}>
                <h1>
                  <div className={style.blogTitle} >{post.frontmatter.title}</div>
                </h1>
                <h3>{post.frontmatter.date} - by {post.frontmatter.author}</h3>
                <p>{post.excerpt}</p>
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
            path
          }
        }
      }
    }
  }
`