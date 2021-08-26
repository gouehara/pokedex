import React, { Component } from 'react'
import Card from "./Card"
import "./Pokedex.css"

export default class Pokedex extends Component {
  render() {
    let title;
    if(this.props.isWin) {
      title = <h1 className="Pokedex-winner">勝利</h1>
    } else {
      title = <h1 className="Pokedex-loser">敗北</h1>
    }
    return (
      <div className="Pokedex">
      {title}
      <h4>経験値の合計:{this.props.exp}</h4>
     
      <div className="Pokedex-cards">
      {this.props.pokemon.map(p => <Card id={p.id} key={p.id} name={p.name} exp={p.base_experience} type={p.type}/>)}
      </div>
      </div>
    )
  }
}
