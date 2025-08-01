import React, { Component } from 'react';

class CounterExample extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Binding methods (for using this keyword)
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleSyntheticEvent = this.handleSyntheticEvent.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  sayHello() {
    console.log('Hello - Counter incremented!');
    alert('Hello - Counter incremented!');
  }

  // Function with parameter
  sayWelcome(message) {
    alert(`Welcome message: ${message}`);
  }

  handleSyntheticEvent(event) {
    alert('I was clicked');
    console.log('Synthetic event details:', event);
  }

  // Button that calls two functions
  incrementAndSayHello() {
    this.increment();
    this.sayHello();
  }

  render() {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
        <h2>Counter Example</h2>
        <p>Current Count: {this.state.count}</p>
        
        {/* Increment button with multiple functions */}
        <button onClick={() => this.incrementAndSayHello()}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        {/* Function with argument */}
        <button onClick={() => this.sayWelcome('welcome')}>Say Welcome</button>

        {/* Synthetic Event */}
        <button onClick={this.handleSyntheticEvent}>OnPress</button>
      </div>
    );
  }
}

export default CounterExample;
