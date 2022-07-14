import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from '../styles/project-details.module.css'

export default function ProjectDetails({ data }) {
    const { html } = data.markdownRemark
    const { stack, title, featuredImg } = data.markdownRemark.frontmatter

    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.featured}>
                    <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} />
                </div>
                <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
