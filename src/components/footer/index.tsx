import React from 'react';
import { Link } from 'gatsby';
import { connect } from "react-redux";

// Constants
import { SITE_NAME } from '../../settings';
import footerImage from '../../images/footer.png';

// Components
import {
    Container,
    Row
} from 'reactstrap';
import Preamble from '../generic/preamble';
import FooterColumn from './footerColumn';
import ChatLink from '../generic/chatLink';

// Actions
import { setScrollElement } from '../../actions';

// Scroll
import Scroll, { Link as ScrollLink } from 'react-scroll';

// Constants
import {
    HTTPS_PROXY_ROUTE,
	SOCKS_PROXY_ROUTE,
	DEDICATED_PROXY_ROUTE,
	SHARED_PROXY_ROUTE,
	TOS_ROUTE,
	REFUNDS_ROUTE,
	PRIVACY_ROUTE,
	SITEMAP_ROUTE,
	SCROLL_SUPPORT,
	PRICING_ROUTE
} from '../../constants';
import { MEMBERS_URL } from '../../settings';

// Scss
import '../../styles/components/footer.scss';

interface Props {
	main: boolean,
	doSetScrollElement(el: any): void
}

interface State {

}

class Reviews extends React.Component<Props, State> {
	static defaultProps = {
		main: false
	};

	handleContactClick = () => {
		const { doSetScrollElement } = this.props;
		doSetScrollElement(SCROLL_SUPPORT);
	};

	render() {
		const { main } = this.props;

		return (
			<footer className="footer section section--gradient__2">
				<Container>
					<Preamble light title={SITE_NAME}>
						We offer highly secure, (Dedicated or Shared) SOCKSv5 and Proxies.
					</Preamble>
					<Row>
						<img src={footerImage} alt="" className="footer__logo"/>
					</Row>
				</Container>
			</footer>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	doSetScrollElement: (el: any) => dispatch(setScrollElement(el))
});

export default connect(null, mapDispatchToProps)(Reviews);
