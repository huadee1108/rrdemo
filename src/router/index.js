import App from '../App';
import Child from '../Child.js';
import GrandChild from '../GrandChild';

const routes = [
  {
    path: "/",
    exact: true,
    component: App
  },
  {
    path: "/child/:id",
    component: Child,
    routes: [
      {
        path: "/child/:id/grand-child",
        component: GrandChild
      }
    ]
  }
];

export default routes;