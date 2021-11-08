import { ArticleRedactor } from "./Pages/ArticleRedactor/ArticleRedactor";
import { Categories } from "./Pages/Categories/Categories";
import { FullPost } from "./Pages/FullPost/FullPost";
import { Main } from "./Pages/Main/Main";
import { New } from "./Pages/New/New";
import { Profile } from "./Pages/Profile/Profile";
import { SingleCat } from "./Pages/SingleCat/SingleCat";
import { CATEGORIES_ROUTE, FULLPOST_ROUTE, MAIN_ROUTE, NEW_ROUTE, PROFILE_ROUTE, REDACTOR_ROUTE, SINGLE_CAT_ROUTE } from "./utils/routerConst";

export const PublicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: NEW_ROUTE,
    Component: New,
  },
  {
    path: CATEGORIES_ROUTE,
    Component: Categories,
  },
  {
    path: PROFILE_ROUTE,
    Component: Profile,
  },
  {
    path: SINGLE_CAT_ROUTE,
    Component: SingleCat,
  },
  {
    path: FULLPOST_ROUTE,
    Component: FullPost,
  },
];
export const PrivateRoutes = [
  {
    path: REDACTOR_ROUTE,
    Component: ArticleRedactor,
  },
  
];