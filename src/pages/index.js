import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <h1>Learn to design ande code React Apps</h1>
      <p>测试一下这个好不好用</p>
      <p>更新一下</p>
      <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
