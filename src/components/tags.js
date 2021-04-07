import React from "react"
import { Link } from "gatsby"

import kebabCase from "lodash/kebabCase"

const Tags = props => {
  // If the current post does not have any tags then stop rendering the component.
  if (!props.listOfTags.length) {
    return null
  }

  // Display a list of tags for the current blog post.
  return (
<p>
  <strong>
  Blog Tags {props.listOfTags.map((tag, i) => [
    i > 0 && ", ",
    <Link to={`/tags/${kebabCase(tag)}/`} >
    {tag}
    </Link>
  ])}
  </strong>
</p>
  )
}

export default Tags

