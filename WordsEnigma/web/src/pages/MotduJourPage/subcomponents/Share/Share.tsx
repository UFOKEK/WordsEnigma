import React, { Component } from 'react';
import './Share.css';


interface IProps {
}

interface IState {
}


class Share extends Component<IProps, IState> {
  constructor(props) {
    super(props);
  }

  emojiThis(resultats){
    var color_map = {0: '⬛', 1: '🟥', 2: '🟩'};
    var traduction = []
    for(var i = 0; i < (resultats.length); i++){
        for(var j = 0; j < (resultats[i].length ); j++){
            if (resultats[i][j] == 0){
                traduction.push("⬛")
            }
            else if (resultats[i][j] == 1){
                traduction.push("🟥")
            }
            else if (resultats[i][j] == 2){
                traduction.push("🟩")
            }
        }
        traduction.push("\n")
    }
    console.log(traduction.join(""));
   }
  render() {
    return (
      <div className="share"></div>
      );
  }
}

export default Share;

