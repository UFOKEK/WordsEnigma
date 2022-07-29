// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'
import StatisticsLayout from 'src/layouts/StatisticsLayout'
import TryRowsLayout from 'src/layouts/TryRowsLayout'
import LettersLayout from 'src/layouts/LettersLayout'
import WordBanksLayout from 'src/layouts/WordBanksLayout'
import LanguagesLayout from 'src/layouts/LanguagesLayout'
import UserSettingsLayout from 'src/layouts/UserSettingsLayout'
import UsersLayout from 'src/layouts/UsersLayout'
import WordsLayout from 'src/layouts/WordsLayout'
import GamesLayout from 'src/layouts/GamesLayout'
import AdminLayout from 'src/layouts/AdminLayout/AdminLayout'
import AdminPage from './pages/Admins/AdminPage/AdminPage'
import NewUserPage from './pages/Admins/User/NewUserPage/NewUserPage'
import EditUserPage from './pages/Admins/User/EditUserPage/EditUserPage'
import UserPage from './pages/Admins/User/UserPage/UserPage'
import UsersPage from './pages/Admins/User/UsersPage/UsersPage'
import EditLanguagePage from './pages/Admins/Language/EditLanguagePage/EditLanguagePage'
import LanguagePage from './pages/Admins/Language/LanguagePage/LanguagePage'
import NewLanguagePage from './pages/Admins/Language/NewLanguagePage/NewLanguagePage'
import EditUserSettingPage from './pages/Admins/UserSetting/EditUserSettingPage/EditUserSettingPage'
import NewUserSettingPage from './pages/Admins/UserSetting/NewUserSettingPage/NewUserSettingPage'
import UserSettingPage from './pages/Admins/UserSetting/UserSettingPage/UserSettingPage'
import UserSettingsPage from './pages/Admins/UserSetting/UserSettingsPage/UserSettingsPage'
import ForgotPasswordPage from './pages/Logins/ForgotPasswordPage/ForgotPasswordPage'
import LoginPage from './pages/Logins/LoginPage/LoginPage'
import ResetPasswordPage from './pages/Logins/ResetPasswordPage/ResetPasswordPage'
import SignupPage from './pages/Logins/SignupPage/SignupPage'
import MotduJourPage from './pages/Wordle/MotduJourPage/MotduJourPage'
import WordOfTheDayPage from './pages/Wordle/WordOfTheDayPage/WordOfTheDayPage'
import TryRowsPage from './pages/Admins/TryRow/TryRowsPage/TryRowsPage'
import EditGamePage from './pages/Admins/Game/EditGamePage/EditGamePage'
import GamePage from './pages/Admins/Game/GamePage/GamePage'
import GamesPage from './pages/Admins/Game/GamesPage/GamesPage'
import NewGamePage from './pages/Admins/Game/NewGamePage/NewGamePage'
import LanguagesPage from './pages/Admins/Language/LanguagesPage/LanguagesPage'
import EditLetterPage from './pages/Admins/Letter/EditLetterPage/EditLetterPage'
import LetterPage from './pages/Admins/Letter/LetterPage/LetterPage'
import LettersPage from './pages/Admins/Letter/LettersPage/LettersPage'
import NewLetterPage from './pages/Admins/Letter/NewLetterPage/NewLetterPage'
import EditStatisticPage from './pages/Admins/Statistic/EditStatisticPage/EditStatisticPage'
import NewStatisticPage from './pages/Admins/Statistic/NewStatisticPage/NewStatisticPage'
import StatisticPage from './pages/Admins/Statistic/StatisticPage/StatisticPage'
import StatisticsPage from './pages/Admins/Statistic/StatisticsPage/StatisticsPage'
import EditTryRowPage from './pages/Admins/TryRow/EditTryRowPage/EditTryRowPage'
import NewTryRowPage from './pages/Admins/TryRow/NewTryRowPage/NewTryRowPage'
import TryRowPage from './pages/Admins/TryRow/TryRowPage/TryRowPage'
import EditWordPage from './pages/Admins/Word/EditWordPage/EditWordPage'
import NewWordPage from './pages/Admins/Word/NewWordPage/NewWordPage'
import WordPage from './pages/Admins/Word/WordPage/WordPage'
import WordsPage from './pages/Admins/Word/WordsPage/WordsPage'
import EditWordBankPage from './pages/Admins/WordBank/EditWordBankPage/EditWordBankPage'
import NewWordBankPage from './pages/Admins/WordBank/NewWordBankPage/NewWordBankPage'
import WordBankPage from './pages/Admins/WordBank/WordBankPage/WordBankPage'
import WordBanksPage from './pages/Admins/WordBank/WordBanksPage/WordBanksPage'
import PalabraDelDiaPage from './pages/Wordle/PalabraDelDiaPage/PalabraDelDiaPage'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home" roles="admin">
        <Set wrap={AdminLayout}>
          <Route path="/admin" page={AdminPage} name="admin" />
        </Set>
        <Set wrap={UsersLayout}>
          <Route path="/admin/users/new" page={NewUserPage} name="newUser" />
          <Route path="/admin/users/{id:Int}/edit" page={EditUserPage} name="editUser" />
          <Route path="/admin/users/{id:Int}" page={UserPage} name="user" />
          <Route path="/admin/users" page={UsersPage} name="users" />
        </Set>
        <Set wrap={UserSettingsLayout}>
          <Route path="/admin/user-settings/new" page={NewUserSettingPage} name="newUserSetting" />
          <Route path="/admin/user-settings/{id}/edit" page={EditUserSettingPage} name="editUserSetting" />
          <Route path="/admin/user-settings/{id}" page={UserSettingPage} name="userSetting" />
          <Route path="/admin/user-settings" page={UserSettingsPage} name="userSettings" />
        </Set>
        <Set wrap={LanguagesLayout}>
          <Route path="/admin/languages/new" page={NewLanguagePage} name="newLanguage" />
          <Route path="/admin/languages/{id}/edit" page={EditLanguagePage} name="editLanguage" />
          <Route path="/admin/languages/{id}" page={LanguagePage} name="language" />
          <Route path="/admin/languages" page={LanguagesPage} name="languages" />
        </Set>
        <Set wrap={LettersLayout}>
          <Route path="/admin/letters/new" page={NewLetterPage} name="newLetter" />
          <Route path="/admin/letters/{id}/edit" page={EditLetterPage} name="editLetter" />
          <Route path="/admin/letters/{id}" page={LetterPage} name="letter" />
          <Route path="/admin/letters" page={LettersPage} name="letters" />
        </Set>
        <Set wrap={WordsLayout}>
          <Route path="/admin/words/new" page={NewWordPage} name="newWord" />
          <Route path="/admin/words/{id}/edit" page={EditWordPage} name="editWord" />
          <Route path="/admin/words/{id}" page={WordPage} name="word" />
          <Route path="/admin/words" page={WordsPage} name="words" />
        </Set>
        <Set wrap={WordBanksLayout}>
          <Route path="/admin/word-banks/new" page={NewWordBankPage} name="newWordBank" />
          <Route path="/admin/word-banks/{id}/edit" page={EditWordBankPage} name="editWordBank" />
          <Route path="/admin/word-banks/{id}" page={WordBankPage} name="wordBank" />
          <Route path="/admin/word-banks" page={WordBanksPage} name="wordBanks" />
        </Set>
        <Set wrap={GamesLayout}>
          <Route path="/admin/games/new" page={NewGamePage} name="newGame" />
          <Route path="/admin/games/{id}/edit" page={EditGamePage} name="editGame" />
          <Route path="/admin/games/{id}" page={GamePage} name="game" />
          <Route path="/admin/games" page={GamesPage} name="games" />
        </Set>
        <Set wrap={StatisticsLayout}>
          <Route path="/admin/statistics/new" page={NewStatisticPage} name="newStatistic" />
          <Route path="/admin/statistics/{id}/edit" page={EditStatisticPage} name="editStatistic" />
          <Route path="/admin/statistics/{id}" page={StatisticPage} name="statistic" />
          <Route path="/admin/statistics" page={StatisticsPage} name="statistics" />
        </Set>
        <Set wrap={TryRowsLayout}>
          <Route path="/admin/try-rows/new" page={NewTryRowPage} name="newTryRow" />
          <Route path="/admin/try-rows/{id}/edit" page={EditTryRowPage} name="editTryRow" />
          <Route path="/admin/try-rows/{id}" page={TryRowPage} name="tryRow" />
          <Route path="/admin/try-rows" page={TryRowsPage} name="tryRows" />
        </Set>
      </Private>

      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/" page={HomePage} name="home" />
      <Route path="/motdujour" page={MotduJourPage} name="motDuJour" />
      <Route path="/wordoftheday" page={WordOfTheDayPage} name="wordOfTheDay" />
      <Route path="/palabradeldia" page={PalabraDelDiaPage} name="palabraDelDia" />
      <Route notfound page={NotFoundPage} />

    </Router>
  )
}

export default Routes
