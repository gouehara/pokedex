import React, { Component } from 'react'
import Pokedex from './Pokedex';

export default class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'ヒトカゲ', type: '炎', base_experience: 62 },
			{ id: 7, name: 'ゼニガメ', type: '水', base_experience: 63 },
			{ id: 11, name: 'トランセル', type: '虫', base_experience: 72 },
			{ id: 12, name: 'バタフリー', type: '虫', base_experience: 178 },
			{ id: 25, name: 'ピカチュウ', type: '電気', base_experience: 112 },
			{ id: 39, name: 'プリン', type: 'ノーマル', base_experience: 95 },
			{ id: 94, name: 'ゲンガー', type: '毒', base_experience: 225 },
			{ id: 133, name: 'イーブイ', type: 'ノーマル', base_experience: 65 }
    ]
  }
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while(hand1 < hand2) {
      const ranIdx = Math.floor(Math.random() * hand2.length);
      const ranPokemon = hand2.splice(ranIdx, 1)[0]
      hand1.push(ranPokemon)
    }
   const exp1 = hand1.reduce((acc, next) => acc + next.base_experience, 0)
   const exp2 = hand2.reduce((acc, next) => acc + next.base_experience, 0)

    return (
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWin={exp1 > exp2}/>
        <Pokedex pokemon={hand2} exp={exp2} isWin={exp2 > exp1}/>
      </div>
    )
  }
}
