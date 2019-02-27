import Cards from './Cards'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import { fetchData } from 'store/Data/actions'

const mapStateToProps = state => ({
  data: state.dataReducer.data,
  loading: state.dataReducer.loading
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchData,
  }, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cards))