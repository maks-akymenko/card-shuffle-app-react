import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

import {
  Deck,
  Card,
  CardSuitTop,
  CardSuitBottom,
  CardNumber
} from './styles/Card'
import {
  Heading,
  SubHeading,
  SmallButton,
  Button,
  Wrapper
} from './styles/Header'

library.add(faRandom, faTachometerAlt)

class App extends Component {
  state = {
    ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    suits: ['♥','♦','♠','♣'],
    cards: [],
    speed: 600
  }

  componentDidMount() {
    this.displayInitialDeck()
  }

  displayInitialDeck = () => {
    const { ranks, suits } = this.state

    let id = 1
    const cards = []
    this.setState({ cards: [] })

    for( let s = 0; s < suits.length; s++ ) {
      for( let r = 0; r < ranks.length; r++ ) {
        let card = {
          id: id,
          rank: ranks[r],
          suit: suits[s]
        }
        cards.push(card)
        id++;
      }
      this.setState({ cards })
    }
  }

  shuffleDeck = () => {
    const { cards } = this.state
    let shuffledCard = [...cards]

    for (let i = shuffledCard.length - 1; i > 0; i--) {

      let randomIndex = Math.floor(Math.random() * i)
      let temp = shuffledCard[i];
      shuffledCard[i] = shuffledCard[randomIndex];
      shuffledCard[randomIndex] = temp;
    }
    this.setState({ cards: shuffledCard })
  }

  setShufflingSpeed = speed => {
    this.setState({ speed: speed })
  }
  render() {
    const { cards, speed } = this.state;
    return (
      <Wrapper>
          <Heading>
            React card shuffling
          </Heading>
          <Button onClick={this.shuffleDeck}>
          Shuffle cards
          <FontAwesomeIcon icon="random" />
          </Button>
          <Button onClick={this.displayInitialDeck}>
          Start over
          <FontAwesomeIcon icon="random" />
          </Button>
          <SubHeading>
            Set shuffling speed
          </SubHeading>
          <SmallButton
            active={speed === 1500 }
            onClick={() => this.setShufflingSpeed(1500)}>
            slow
            <FontAwesomeIcon icon="tachometer-alt" />
          </SmallButton>
          <SmallButton
          active={speed === 600 }
          onClick={() => this.setShufflingSpeed(600)}>
            normal
            <FontAwesomeIcon icon="tachometer-alt" />
          </SmallButton>
          <SmallButton
          active={speed === 250 }
          onClick={() => this.setShufflingSpeed(250)}>
            fast
            <FontAwesomeIcon icon="tachometer-alt" />
          </SmallButton>
        <Deck>
        <FlipMove
        duration={speed}
        typeName={null}>
            {cards.map(card => (
              <Card key={card.id}
              red={card.suit === '♠' || card.suit ===  '♣'}
              black={card.suit === '♥' || card.suit ===  '♦'}>
                <CardSuitTop>{ card.suit }</CardSuitTop>
                <CardNumber>{ card.rank }</CardNumber>
                <CardSuitBottom>{ card.suit }</CardSuitBottom>
              </Card>
              ))}
              </FlipMove>
        </Deck>
      </Wrapper>
    );
  }
}

export default App;
