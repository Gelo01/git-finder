import React, { Component } from 'react'
import Navbar from './components/Navbar'
import {
	Article,
	ArticleContent,
	ArticleMedia,
} from './components/article'

class About extends Component {
	render() {
	return (
      <div>
        <Navbar/>
			<Article>
      <ArticleMedia>
					<img
						src="https://avatars.githubusercontent.com/u/74890955?v=4"
						alt="Lorem Picsum"
            width='300'
            height='320'
            className='mt-5 rounded-circle'
					/>
				</ArticleMedia>
				<ArticleContent title="About">
					<p>
					Angelo Soliven is a Web Developer that wants to learn more of a programming language and wants to become a full stack web development
					</p>
          <p>Here is the repository of this project</p>
          <a href="https://github.com/Gelo01/git-finder">
          <button className='btn btn-info hover-progress'>Click Me</button>
          </a>
				</ArticleContent>

			
			</Article>
      </div>
	
	)
	}
}
export default About
