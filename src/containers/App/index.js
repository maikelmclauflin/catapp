import App from './view'
import { connect } from 'react-redux'

export default connect(mapStateToProps)(App);

function mapStateToProps(state) {
  // abstracted away with saga
  return {
    id: state.get('global').get('user').get('id')
  }
}