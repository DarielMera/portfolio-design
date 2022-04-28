import React, { Component } from "react"
import Zmage from "react-zmage"
import Fade from "react-reveal"

let id = 0
class Portfolio extends Component {
	render() {
		if (!this.props.data) return null

		const projects = this.props.data.projects.map(function (projects) {
			let projectImage = "images/portfolio/" + projects.image

			return (
				<div key={id++} className="columns portfolio-item">
					<div className="item-wrap">
						<Zmage alt={projects.title} src={projectImage} />
						<div style={{ textAlign: "center" }}>{projects.title}</div>
					</div>
							</div>

			)
		})

		return (
			<section id="portfolio">
				<Fade left duration={1000} distance="40px">
					<div className="row">
						<div className="twelve columns collapsed">
							<h1>Check Out My Project and Presentation</h1>
								<div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                {/* <div style={{display: 'flex'}}> */}
									{projects}
								<iframe
                  style={{marginLeft: '30px', borderRadius: '2px'}}
									width="400"
									height="215"
									src="https://www.youtube.com/embed/3GwBpXjyt1c?start=24"
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen>
                    </iframe>
                {/* </div> */}
								</div>
						</div>
					</div>
				</Fade>
			</section>
		)
	}
}

export default Portfolio
