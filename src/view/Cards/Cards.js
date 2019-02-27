import React, { Component } from 'react';
import Loader from 'react-loader-spinner'

class Posts extends Component {

  componentDidMount() {
    this.props.actions.fetchData()
  }

  render() {
    return (
      <div>
      {this.props.data === [] ? (<button>FETCH DATA</button>) : null                                                                                                          }
      {this.props.loading === true 
        ? <Loader type="Oval" color="orange" height={120} width={120} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        : <section>
            <h1>start</h1>
          </section>}
      </div>
    )
  }
}

export default Posts                                                                         