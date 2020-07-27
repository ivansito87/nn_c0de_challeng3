
import React from 'react';
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap';

class Footer extends React.Component {
	render() {
		const links = [
			'Help',
			'Terms of Use',
			'License Footage',
			'Pricacy Policy',
			'CNN Newsource',
			'Ad Choices',
			'About Us',
			'CNN Studio Tours',
			'News Letters',
			'Transcripts'
		];
		return (
			<footer class="site-footer">
				<hr />
				<Row>
					<Col>
						<img
							src={require('../assets/cnn_image.png')}
							width="120"
							alt="Beautiful Logo"
							height="50"
							className="d-inline-block align-top"
						/>
					</Col>
					<Col>
						<ul class="social-icons">
							<span className='follow-cnn'>FOLLOW CNN  |  </span>
							<li><a class="facebook" href="https://www.facebook.com/cnn"><i class="fa fa-facebook"></i></a></li>
							<li><a class="twitter" href="https://twitter.com/cnn"><i class="fa fa-twitter"></i></a></li>
							<li><a class="youtube" href="https://www.youtube.com/user/CNN"><i class="fa fa-youtube"></i></a></li>
							<li><a class="instagram" href="https://www.instagram.com/CNN/"><i class="fa fa-instagram"></i></a></li>
						</ul>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col>
						{links.map(lk => <Link className="pr-3" to={'#'}>{lk}</Link>)}
					</Col>
				</Row>
				<Row>
					<Col>
						<p className="copyright-text pt-4">&copy; 2019 Cable News Network. Turner Broadcasting Systems, Inc. All Rights Reserved.<br />
							<p>CNN Sans&#8482; & &copy;k 2016 Cable News Network </p>
						</p>
					</Col>
				</Row>
			</footer>
		)
	}
}
export default Footer;