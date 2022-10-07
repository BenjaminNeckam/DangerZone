import {LandingPage} from "../container/landingPage/LandingPage";
import { OverviewPage } from "../container/overviewPage/OverviewPage";
import { DetailsPage } from "../container/detailsPage/detailsPage";
import { SupportPage } from "../container/supportPage/supportPage";

export const routes = [
  {
    path: "/",
    element: <LandingPage />,
    exact: true,
  },
  {
    path: "/overview",
    element: <OverviewPage />,
  },
  {
    path: "/details",
    element: <DetailsPage />,
  },
  {
    path: "/support",
    element: <SupportPage />,
  }
]
