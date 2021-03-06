import Dashboard from 'views/Dashboard/Dashboard';
import UserProfile from 'views/UserProfile/UserProfile';
import addword from 'views/UserProfile/addword';
import add from 'views/UserProfile/add';
import TableList from 'views/TableList/TableList';
import Typography from 'views/Typography/Typography';
import Icons from 'views/Icons/Icons';
import Maps from 'views/Maps/Maps';
import Notifications from 'views/Notifications/Notifications';
import Upgrade from 'views/Upgrade/Upgrade';

const appRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard },
    { path: "/user", name: "User Profile", icon: "pe-7s-user", component: UserProfile },
    { path: "/addword", name: "addword", icon: "pe-7s-user", component: addword },
    { path: "/add", name: "add", icon: "pe-7s-user", component: add },
    { path: "/table", name: "Table List", icon: "pe-7s-note2", component: TableList },
    { path: "/typography", name: "Typography", icon: "pe-7s-news-paper", component: Typography },
    { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
 
    { path: "/notifications", name: "Notifications", icon: "pe-7s-bell", component: Notifications },
    { redirect: true, path:"/", to:"/dashboard", name: "Dashboard" }
];
// { upgrade: true, path: "/upgrade", name: "Upgrade to PRO", icon: "pe-7s-rocket", component: Upgrade },
//   { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
export default appRoutes;
