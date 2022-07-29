import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

import './WordOfTheDayPage.css';

import GameLogic from '../../../components/MotduJour/GameLogic/GameLogic';
import Rules from '../../../components/MotduJour/Rules/Rules';
import Keyboard from '../../../components/MotduJour/Keyboard/Keyboard';
import Header from '../../../components/MotduJour/Header/Header';

const WordOfTheDayPage = () => {
  return (
    <div className="WordOfTheDay">
      <MetaTags title="Word of the Day !" description="Word of the Day !" />
      <Header title='Word of the Day !' />
      <GameLogic rows={6} cols={5} language="en" />
      <Rules notInWord="Not in the word" badPosition="Bad Position" goodPosition="Perfect!" />
      <Keyboard language="fr" />
    </div>
  )
}

export default WordOfTheDayPage;
