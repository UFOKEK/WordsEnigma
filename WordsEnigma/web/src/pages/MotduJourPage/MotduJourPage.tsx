import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

import Header from './subcomponents/Header/Header';
import GameBoard from './subcomponents/GameBoard/GameBoard';
import Rules from "./subcomponents/Rules/Rules"
import Keyboard from './subcomponents/Keyboard/Keyboard';
import Success from './subcomponents/Success/Success';
import Share from './subcomponents/Share/Share';

const MotduJourPage = () => {
  return (
    <>
      <MetaTags title="Mot du Jour !" description="Mot du Jour !" />
      <Header title='Mot du Jour !' />
      <GameBoard rows={6} cols={5}/>
      <Rules />
      <Keyboard />
      <Share />
      <Success />
    </>
  )
}

export default MotduJourPage;
