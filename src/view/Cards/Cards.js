import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import Card from 'components/Card'
import Wrapper from 'components/Wrapper'

class Cards extends Component {

  componentDidMount() {
    this.props.actions.fetchData()
  }

  render() {
    return (
      <Wrapper main>

        {this.props.loading === true 
          ? <Loader type="Oval" color="orange" height={120} width={120} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
          : <Wrapper cards>
              {this.props.data.map(item => ( 
                <Card 
                  key={item.id}
                  item={item}
                />
              ))}
            </Wrapper>}
      
      </Wrapper>
    )
  }
}

export default Cards                                                                         