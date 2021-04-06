import React from 'react'
import PropTypes from "prop-types"

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'

import "./sharebuttonsstyle.scss"

const Share = ({ socialConfig, tags }) => (
    <div className="post-social">
      <FacebookShareButton url={socialConfig.config.url} quote={socialConfig.config.title} hashtag={[]}>
        <FacebookIcon size={45} round={true}/>
      </FacebookShareButton>

      <TwitterShareButton url={socialConfig.config.url} title={socialConfig.config.title} via={socialConfig.twitter} hashtags={[]}>
                <TwitterIcon  size={45} round={true} />
          </TwitterShareButton>

         <LinkedinShareButton url={socialConfig.config.url} >
            <LinkedinIcon  size={45} round={true}/>
          </LinkedinShareButton>

          <RedditShareButton url={socialConfig.config.url} title={socialConfig.config.title} >
            <RedditIcon  size={45} round={true} />
          </RedditShareButton>

          <WhatsappShareButton url={socialConfig.config.url} title={socialConfig.config.title}>
               <WhatsappIcon  size={45} round={true}/>
           </WhatsappShareButton>
      ...
    </div>
  )


Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitter: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
}
Share.defaultProps = {
  tags: [],
}

export default Share