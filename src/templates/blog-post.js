import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogFooter from "../components/blogFooter"

import "../components/blog.css"

export default function Template({ data }) {
  const {markdownRemark: post } = data;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="blog-post-container">
        <Helmet title={`Killerbyte Goldmaking - ${post.frontmatter.title}`} />
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <h4>Written by {post.frontmatter.author} on {post.frontmatter.date}</h4>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
      <BlogFooter />
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`