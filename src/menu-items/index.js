// project import
import pages from './pages';
import dashboard from './dashboard';
import utilities from './utilities';
import support from './support';
import administrateur from './administrateur';
import coordonateur from './coordonateur';
import appariteur from './appariteur';
import etudiant from './etudiant';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [dashboard, administrateur, coordonateur, appariteur, etudiant, pages, support]
};

export default menuItems;
