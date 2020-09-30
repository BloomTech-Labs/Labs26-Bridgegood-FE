// general:
// notice we're building out a 'package' of reusables here and exporting them as an object of component properties.
// to use this, simply `import {foo, bar, baz} from '<path-to-this-directory>/ReusableComponents';`

// specific:
// this "package" will hold all of the site's "pages", importing them from subfolders of the pages folder
// list of all pages: Index, Signup, Login, Donate, Welcome, Reserve, Profile, NotFound

// imports
import HomePage from './Home/HomePage';
import { NotFoundPage } from './NotFound';
import DonatePage from './Donate/DonatePage';
import { LoginPage } from './Login';
import { MakeResPage } from './MakeRes';
import WelcomeBoard from './WelcomeBoard';

export {
  HomePage,
  NotFoundPage,
  LoginPage,
  WelcomeBoard,
  MakeResPage,
  DonatePage,
};
