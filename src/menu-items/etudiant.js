// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'etudiant',
    title: 'Etudiant',
    type: 'group',
    children: [
        {
            id: 'absences',
            title: 'Consulter les absences',
            type: 'item',
            url: '/absences',
            icon: icons.LoginOutlined,
            target: false
        }
    ]
};

export default pages;
