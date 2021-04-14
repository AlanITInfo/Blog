/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import {
  LinkedinIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            email
            summary
          }
          social {
            twitter
            linkedin
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      {author?.name && (
         <p>
         Written by <strong>{author.name}</strong> {author?.summary || null}
         {` `}
         <br>
         </br>
         <StaticImage src="../images/microsoft-365-certified-fundamentals.png"></StaticImage>
         <StaticImage src="../images/microsoft-365-certified-modern-desktop-administrator-associate.png"></StaticImage>
         <StaticImage src="../images/microsoft-365-certified-enterprise-administrator-expert.png"></StaticImage>
         <br>
         </br>
          Please feel free to contact or follow me on one of the below channels.
          <br>
         </br>
         <a href={`https://twitter.com/${social?.twitter || ``}`}>
         <TwitterIcon  size={45} round={true}/>
         </a>
         
         <a href={`https://linkedin.com/in/${social.linkedin}`}>
         <LinkedinIcon  size={45} round={true} />
         </a>
         
         <a href={`mailto:${author.email || ``}`}>
         <EmailIcon  size={45} round={true} />
         </a>
         <br>
         </br>
       </p> 
      )}
    </div>
  )
}

export default Bio
