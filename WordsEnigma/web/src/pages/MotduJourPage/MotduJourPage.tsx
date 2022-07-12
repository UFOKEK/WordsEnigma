import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

import './MotduJourPage.css';

import GameLogic from '../../components/MotduJour/GameLogic/GameLogic';
import Rules from '../../components/MotduJour/Rules/Rules';
import Keyboard from '../../components/MotduJour/Keyboard/Keyboard';
import Header from '../../components/MotduJour/Header/Header';

const MotduJourPage = () => {
  return (
    <div className="MotduJour">
      <MetaTags title="Mot du Jour !" description="Mot du Jour !" />
      <Header title='Mot du Jour !' />
      <GameLogic rows={6} cols={5} language="fr" />
      <Rules notInWord="Pas dans le mot" badPosition="Mauvaise position" goodPosition="Parfait!" />
      <Keyboard language="fr" />
    </div>
  )
}

export default MotduJourPage;
