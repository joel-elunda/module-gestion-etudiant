import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
const GererPromotion = Loadable(lazy(() => import('pages/promotion/GererPromotion')));
const Creercoordonateur = Loadable(lazy(() => import('pages/coordonateur/Creercoordonateur')));
const AnneeAcademique = Loadable(lazy(() => import('pages/anneeacademique/AnneeAcademique')));
const Filiere = Loadable(lazy(() => import('pages/filiere/Filiere')));
const Gereretudiant = Loadable(lazy(() => import('pages/etudiant/Gereretudiant')));
const Gererseance = Loadable(lazy(() => import('pages/seance/Gererseance')));
const MarquePresence = Loadable(lazy(() => import('pages/presence/MarquePresence')));
const Tauxabsence = Loadable(lazy(() => import('pages/absence/Tauxabsence')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'color',
            element: <Color />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'promotions',
            element: <GererPromotion />
        },
        {
            path: 'coordonateurs',
            element: <Creercoordonateur />
        },
        {
            path: 'annee-academique',
            element: <AnneeAcademique />
        },
        {
            path: 'filieres',
            element: <Filiere />
        },
        {
            path: 'etudiants',
            element: <Gereretudiant />
        },
        {
            path: 'seances',
            element: <Gererseance />
        },
        {
            path: 'presences',
            element: <MarquePresence />
        },
        {
            path: 'absences',
            element: <Tauxabsence />
        }
    ]
};

export default MainRoutes;
