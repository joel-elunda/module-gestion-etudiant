// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'administrateur',
    title: 'Administrateur',
    type: 'group',
    children: [
        {
            id: 'annee-academique',
            title: 'Créer année académique',
            type: 'item',
            url: '/annee-academique',
            icon: icons.LoginOutlined,
            target: false
        },
        {
            id: 'filieres',
            title: 'Gérer les filières',
            type: 'item',
            url: '/filieres',
            icon: icons.ProfileOutlined,
            target: false
        },
        {
            id: 'promotions',
            title: 'Gérer les promotions',
            type: 'item',
            url: '/promotions',
            icon: icons.LoginOutlined,
            target: false
        },
        {
            id: 'coordonateurs',
            title: 'Créer les coordonateurs',
            type: 'item',
            url: '/coordonateurs',
            icon: icons.LoginOutlined,
            target: false
        }
    ]
};

export default pages;
