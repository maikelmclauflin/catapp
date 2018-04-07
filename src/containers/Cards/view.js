import React from 'react';
import styled from 'styled-components'
import classnames from 'classnames'
import Card from 'containers/Card'
import Loader from 'components/Loader'
import {
  fetchCats,
  catJerk,
  catOk,
  nextCat
} from './actions'
import Button from 'components/Button'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faThumbsDown,
} from '@fortawesome/fontawesome-free-solid';

class ConnectedCards extends React.Component {
  componentDidMount() {
    this.fetchMoreCats()
  }
  fetchMoreCats() {
    this.props.dispatch(fetchCats())
  }
  voteDown() {
    vote(catJerk, this.props)
  }
  voteUp() {
    vote(catOk, this.props)
  }
  render() {
    const { props } = this
    const { cards, className, loading } = props
    const cn = classnames("stack", {
      loading,
    })
    return (
      <div className={className}>
        <div className={cn}>
          <ul>
            {cards.map((card, index) => {
              const id = card.get('id')
              const src = card.get('src')
              const display = index ? 'none' : 'block'
              return (<li key={id} className="list-item">
                <Card src={src} style={{display}} />
              </li>)
            })}
          </ul>
          <Loader className="spinner"></Loader>
        </div>
        <div>
          <Button onClick={e => this.voteDown()} color="red">
            <FontAwesomeIcon icon={faThumbsDown} />
          </Button>
          <Button onClick={e => this.voteUp()} color="green">
            <FontAwesomeIcon icon={faThumbsUp} />
          </Button>
        </div>
      </div>
    );
  }
}
const StyledCards = styled(ConnectedCards)`
ul {
  display: block;
  margin: 0;
  padding: 0;
}
.stack {
  margin: 0 auto;
  position: relative;
  padding-top: 100%;
  .list-item {
    display: block;
  }
  &.loading {
    .list-item {
      opacity: 0.7;
    }
    .spinner {
      display: block;
    }
  }
}
.spinner {
  position: absolute;
  height: 100px;
  width: 100%;
  display: none;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  font-size: 80px;
  color: grey;
  line-height: 100px;
  margin: auto;
}
`
export default StyledCards

function vote(action, { dispatch, cards, userId }) {
  const first = cards.first()
  const imageId = first.get('id');
  dispatch(action(userId, imageId)).then(res => {
    dispatch(nextCat())
  })
}