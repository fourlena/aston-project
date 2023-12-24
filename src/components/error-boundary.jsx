import { Component } from 'react';

import Error from './error/error';

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error, errorInfo) {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <Error />;
		}
		return this.props.children;
	}
}
