import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/modal';
import Aux from '../aux';

const withErrorHandler = (WrappedComponet, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    componentWillMount() {
      this.requestInterceptor = axios.interceptors.request.use(req => {
        this.setState({
          error: null
        });
        return req;
      });

      this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({
          error: error
        });

      })
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
      // on this wat we delete de interceptors if we go to other page
    }

    errorConfirmedHandler = () => {
      this.setState({
        error: null
      });
    }

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponet {...this.props} />
        </Aux >
      );
    }
  }
}

export default withErrorHandler;
