import Cards from './view'
import { connect } from 'react-redux'
export default connect(mapStateToProps)(Cards)

function mapStateToProps(state) {
  const cards = state.get('cards')
  return {
    loading: cards.get('loading'),
    cards: cards.get('list'),
    userId: state.get('global').get('user').get('id')
  }
}