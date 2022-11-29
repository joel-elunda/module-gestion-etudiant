// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'appariteur',
    title: 'Appariteur',
    type: 'group',
    children: [
        {
            id: 'etudiants',
            title: 'Gérer les étudiants',
            type: 'item',
            url: '/etudiants',
            icon: icons.LoginOutlined,
            target: false
        }
    ]
};

export default pages;
