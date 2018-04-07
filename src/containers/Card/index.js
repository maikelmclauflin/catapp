import Card from './view'
import { connect } from 'react-redux'
export default connect(mapStateToProps)(Card)

function mapStateToProps(state, props) {
  return {
    ...props
  }
}