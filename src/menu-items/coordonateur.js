// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'coordonateur',
    title: 'Coordonateur',
    type: 'group',
    children: [
        {
            id: 'seances',
            title: 'Gérer les séances de cours',
            type: 'item',
            url: '/seances',
            icon: icons.LoginOutlined,
            target: false
        },
        {
            id: 'presences',
            title: 'Marquer la présence des étudiants',
            type: 'item',
            url: '/presences',
            icon: icons.ProfileOutlined,
            target: false
        },
        {
            id: 'absences',
            title: 'Voir taux absence',
            type: 'item',
            url: '/absences',
            icon: icons.ProfileOutlined,
            target: false
        },
        {
            id: 'reinscriptions',
            title: 'Valider les réinscriptions',
            type: 'item',
            url: '/reinscriptions',
            icon: icons.ProfileOutlined,
            target: false
        }
    ]
};

export default pages;
