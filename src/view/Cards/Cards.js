import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import Card from '../../components/Card'

class Cards extends Component {

  componentDidMount() {
    this.props.actions.fetchData()
  }

  render() {
    return (
      <div>

        {this.props.loading === true 
          ? <Loader type="Oval" color="orange" height={120} width={120} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
          : <section>
              {this.props.data.map(item => ( 
                <Card 
                  key={item.id}
                  item={item}
                />
              ))}
            </section>}
      
      </div>
    )
  }
}

export default Cards                                                                         