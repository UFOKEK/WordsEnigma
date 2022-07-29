import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import GameLogic from 'src/components/MotduJour/GameLogic/GameLogic';
import Header from 'src/components/MotduJour/Header/Header';
import Keyboard from 'src/components/MotduJour/Keyboard/Keyboard';
import Rules from 'src/components/MotduJour/Rules/Rules';

import './PalabraDelDiaPage.css';

const PalabraDelDiaPage = () => {
  return (
    <div className="PalabraDelDia">
      <MetaTags title="Palabra Del Dia !" description="Palabra Del Dia !" />
      <Header title='Palabra Del Dia !' />
      <GameLogic rows={6} cols={5} language="es" />
      <Rules notInWord="no en la palabra" badPosition="Mala Posición" goodPosition="Perfecto !" />
      <Keyboard language="es" />
    </div>
  )
}

export default PalabraDelDiaPage
