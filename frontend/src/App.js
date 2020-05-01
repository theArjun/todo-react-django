import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios.get("http://127.0.0.1:8000/api/v1").then((response) => {
      this.setState({ todos: response.data });
    });
  }

  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Todo App</h1>
              <h2 className="subtitle">Built using React and Django</h2>
            </div>
          </div>
        </section>
        <div className="container">
          {this.state.todos.map((item) => (
            <div key={item.id}>
              <br />
              <div class="card">
                <div className="card-content">
                  <div className="content">
                    <h1 className="is-size-5">{item.title}</h1>
                    <span className="is-size-6">{item.body}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Todo App</strong> by{" "}
              <a href="https://github.com/thearjun/">Arjun Adhikari</a>. This project is
              built using Django and React.
              .
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
