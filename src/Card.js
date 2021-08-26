import React, { Component } from 'react'
import "./Card.css"
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
const padToThree = num => num <= 999 ? `00${num}`.slice(-3) : num
export default class Card extends Component {
  render() {
    const {name, type, exp, id} = this.props
    const imgSrc = `${POKE_API}${padToThree(id)}.png`
    
    return (
      <div className="Card">
        <h1 className="Card-title">{name}</h1>
        <dvi className="Card-image">
        <img src={imgSrc} alt={name}/>
        </dvi>
        <div className="Card-data">タイプ:{type}</div>
        <div className="Card-data">経験値:{exp}</div>
      </div>
    )
  }
}
