import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { serialize, deserialize } from 'json-immutable';
import configureStore from '../store';

class MyApp extends App {

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }

}

export default withRedux(
  (initialState) => configureStore(initialState),
  {
    serializeState: (state = {}) => serialize(state),
    deserializeState: (state = serialize({})) => deserialize(state),
  },
)(MyApp);
