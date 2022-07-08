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

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home" roles="admin">
        <Set wrap={AdminLayout}>
          <Route path="/admin" page={AdminPage} name="admin" />
        </Set>
        <Set wrap={UsersLayout}>
          <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/admin/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/admin/users/{id:Int}" page={UserUserPage} name="user" />
          <Route path="/admin/users" page={UserUsersPage} name="users" />
        </Set>
        <Set wrap={UserSettingsLayout}>
          <Route path="/admin/user-settings/new" page={UserSettingNewUserSettingPage} name="newUserSetting" />
          <Route path="/admin/user-settings/{id}/edit" page={UserSettingEditUserSettingPage} name="editUserSetting" />
          <Route path="/admin/user-settings/{id}" page={UserSettingUserSettingPage} name="userSetting" />
          <Route path="/admin/user-settings" page={UserSettingUserSettingsPage} name="userSettings" />
        </Set>
        <Set wrap={LanguagesLayout}>
          <Route path="/admin/languages/new" page={LanguageNewLanguagePage} name="newLanguage" />
          <Route path="/admin/languages/{id}/edit" page={LanguageEditLanguagePage} name="editLanguage" />
          <Route path="/admin/languages/{id}" page={LanguageLanguagePage} name="language" />
          <Route path="/admin/languages" page={LanguageLanguagesPage} name="languages" />
        </Set>
        <Set wrap={LettersLayout}>
          <Route path="/admin/letters/new" page={LetterNewLetterPage} name="newLetter" />
          <Route path="/admin/letters/{id}/edit" page={LetterEditLetterPage} name="editLetter" />
          <Route path="/admin/letters/{id}" page={LetterLetterPage} name="letter" />
          <Route path="/admin/letters" page={LetterLettersPage} name="letters" />
        </Set>
        <Set wrap={WordsLayout}>
          <Route path="/admin/words/new" page={WordNewWordPage} name="newWord" />
          <Route path="/admin/words/{id}/edit" page={WordEditWordPage} name="editWord" />
          <Route path="/admin/words/{id}" page={WordWordPage} name="word" />
          <Route path="/admin/words" page={WordWordsPage} name="words" />
        </Set>
        <Set wrap={WordBanksLayout}>
          <Route path="/admin/word-banks/new" page={WordBankNewWordBankPage} name="newWordBank" />
          <Route path="/admin/word-banks/{id}/edit" page={WordBankEditWordBankPage} name="editWordBank" />
          <Route path="/admin/word-banks/{id}" page={WordBankWordBankPage} name="wordBank" />
          <Route path="/admin/word-banks" page={WordBankWordBanksPage} name="wordBanks" />
        </Set>
        <Set wrap={GamesLayout}>
          <Route path="/admin/games/new" page={GameNewGamePage} name="newGame" />
          <Route path="/admin/games/{id}/edit" page={GameEditGamePage} name="editGame" />
          <Route path="/admin/games/{id}" page={GameGamePage} name="game" />
          <Route path="/admin/games" page={GameGamesPage} name="games" />
        </Set>
        <Set wrap={StatisticsLayout}>
          <Route path="/admin/statistics/new" page={StatisticNewStatisticPage} name="newStatistic" />
          <Route path="/admin/statistics/{id}/edit" page={StatisticEditStatisticPage} name="editStatistic" />
          <Route path="/admin/statistics/{id}" page={StatisticStatisticPage} name="statistic" />
          <Route path="/admin/statistics" page={StatisticStatisticsPage} name="statistics" />
        </Set>
        <Set wrap={TryRowsLayout}>
          <Route path="/admin/try-rows/new" page={TryRowNewTryRowPage} name="newTryRow" />
          <Route path="/admin/try-rows/{id}/edit" page={TryRowEditTryRowPage} name="editTryRow" />
          <Route path="/admin/try-rows/{id}" page={TryRowTryRowPage} name="tryRow" />
          <Route path="/admin/try-rows" page={TryRowTryRowsPage} name="tryRows" />
        </Set>
      </Private>

      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/" page={HomePage} name="home" />
      <Route path="/motdujour" page={MotduJourPage} name="motdujour" />
      <Route notfound page={NotFoundPage} />

    </Router>
  )
}

export default Routes
