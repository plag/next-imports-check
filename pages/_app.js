import App, { Container } from "next/app";
import value from '../value';

console.log('value from app', value);

class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (<Container><Component /></Container>);
  }
}

export default MyApp;
