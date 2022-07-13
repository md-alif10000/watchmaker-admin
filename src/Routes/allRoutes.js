import React from "react";
import { Redirect } from "react-router-dom";

//Dashboard
import DashboardEcommerce from "../pages/DashboardEcommerce";

//Calendar
// Email box
import MailInbox from "../pages/EmailInbox";
import BasicAction from "../pages/Email/EmailTemplates/BasicAction";
import EcommerceAction from "../pages/Email/EmailTemplates/EcommerceAction";

//CHat
import Chat from "../pages/Chat";
import Calendar from "../pages/Calendar";

// Project
import ProjectList from "../pages/Projects/ProjectList";
import ProjectOverview from "../pages/Projects/ProjectOverview";
import CreateProject from "../pages/Projects/CreateProject";

//Task
import TaskDetails from "../pages/Tasks/TaskDetails";
import TaskList from "../pages/Tasks/TaskList";
import KanbanBoard from "../pages/Tasks/KanbanBoard/Index";

//Crm Pages
import CrmCompanies from "../pages/Crm/CrmCompanies";
import CrmContacts from "../pages/Crm/CrmContacts";
import CrmDeals from "../pages/Crm/CrmDeals/index";
import CrmLeads from "../pages/Crm/CrmLeads/index";

//Invoices
import InvoiceList from "../pages/Invoices/InvoiceList";
import InvoiceCreate from "../pages/Invoices/InvoiceCreate";
import InvoiceDetails from "../pages/Invoices/InvoiceDetails";

// Support Tickets
import ListView from "../pages/SupportTickets/ListView";
import TicketsDetails from "../pages/SupportTickets/TicketsDetails";

// //Ecommerce Pages
import EcommerceProducts from "../pages/Ecommerce/EcommerceProducts/index";
import EcommerceProductDetail from "../pages/Ecommerce/EcommerceProducts/EcommerceProductDetail";
import EcommerceAddProduct from "../pages/Ecommerce/EcommerceProducts/EcommerceAddProduct";
import EcommerceOrders from "../pages/Ecommerce/EcommerceOrders/index";
import EcommerceOrderDetail from "../pages/Ecommerce/EcommerceOrders/EcommerceOrderDetail";
import EcommerceCustomers from "../pages/Ecommerce/EcommerceCustomers/index";
import EcommerceCart from "../pages/Ecommerce/EcommerceCart";
import EcommerceCheckout from "../pages/Ecommerce/EcommerceCheckout";
import EcommerceSellers from "../pages/Ecommerce/EcommerceSellers/index";
import EcommerceSellerDetail from "../pages/Ecommerce/EcommerceSellers/EcommerceSellerDetail";

import AddProduct from "../pages/Ecommerce/AddProduct";





// Widgets
import Widgets from "../pages/Widgets/Index";







//Maps
import GoogleMaps from "../pages/Maps/GoogleMaps/GoogleMaps";
import VectorMaps from "../pages/Maps/VectorMaps/VectorMaps";
import LeafletMaps from "../pages/Maps/LeafletMaps/LeafletMaps";

//AuthenticationInner pages
import BasicSignIn from "../pages/AuthenticationInner/Login/BasicSignIn";
import CoverSignIn from "../pages/AuthenticationInner/Login/CoverSignIn";
import BasicSignUp from "../pages/AuthenticationInner/Register/BasicSignUp";
import CoverSignUp from "../pages/AuthenticationInner/Register/CoverSignUp";
import BasicPasswReset from "../pages/AuthenticationInner/PasswordReset/BasicPasswReset";
//pages
import Starter from "../pages/Pages/Starter/Starter";
import SimplePage from "../pages/Pages/Profile/SimplePage/SimplePage";
import Settings from "../pages/Pages/Profile/Settings/Settings";
import Team from "../pages/Pages/Team/Team";
import Timeline from "../pages/Pages/Timeline/Timeline";
import Faqs from "../pages/Pages/Faqs/Faqs";
import Pricing from "../pages/Pages/Pricing/Pricing";
import Gallery from "../pages/Pages/Gallery/Gallery";
import Maintenance from "../pages/Pages/Maintenance/Maintenance";
import ComingSoon from "../pages/Pages/ComingSoon/ComingSoon";
import SiteMap from "../pages/Pages/SiteMap/SiteMap";
import SearchResults from "../pages/Pages/SearchResults/SearchResults";

import CoverPasswReset from "../pages/AuthenticationInner/PasswordReset/CoverPasswReset";
import BasicLockScreen from "../pages/AuthenticationInner/LockScreen/BasicLockScr";
import CoverLockScreen from "../pages/AuthenticationInner/LockScreen/CoverLockScr";
import BasicLogout from "../pages/AuthenticationInner/Logout/BasicLogout";
import CoverLogout from "../pages/AuthenticationInner/Logout/CoverLogout";
import BasicSuccessMsg from "../pages/AuthenticationInner/SuccessMessage/BasicSuccessMsg";
import CoverSuccessMsg from "../pages/AuthenticationInner/SuccessMessage/CoverSuccessMsg";
import BasicTwosVerify from "../pages/AuthenticationInner/TwoStepVerification/BasicTwosVerify";
import CoverTwosVerify from "../pages/AuthenticationInner/TwoStepVerification/CoverTwosVerify";
import Basic404 from "../pages/AuthenticationInner/Errors/Basic404";
import Cover404 from "../pages/AuthenticationInner/Errors/Cover404";
import Alt404 from "../pages/AuthenticationInner/Errors/Alt404";
import Error500 from "../pages/AuthenticationInner/Errors/Error500";

import BasicPasswCreate from "../pages/AuthenticationInner/PasswordCreate/BasicPasswCreate";
import CoverPasswCreate from "../pages/AuthenticationInner/PasswordCreate/CoverPasswCreate";
import Offlinepage from "../pages/AuthenticationInner/Errors/Offlinepage";

//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

//Charts
import LineCharts from "../pages/Charts/ApexCharts/LineCharts";
import AreaCharts from "../pages/Charts/ApexCharts/AreaCharts";
import ColumnCharts from "../pages/Charts/ApexCharts/ColumnCharts";
import BarCharts from "../pages/Charts/ApexCharts/BarCharts";
import MixedCharts from "../pages/Charts/ApexCharts/MixedCharts";
import TimelineCharts from "../pages/Charts/ApexCharts/TimelineCharts";
import CandlestickChart from "../pages/Charts/ApexCharts/CandlestickChart";
import BoxplotCharts from "../pages/Charts/ApexCharts/BoxplotCharts";
import BubbleChart from "../pages/Charts/ApexCharts/BubbleChart";
import ScatterCharts from "../pages/Charts/ApexCharts/ScatterCharts";
import HeatmapCharts from "../pages/Charts/ApexCharts/HeatmapCharts";
import TreemapCharts from "../pages/Charts/ApexCharts/TreemapCharts";
import PieCharts from "../pages/Charts/ApexCharts/PieCharts";
import RadialbarCharts from "../pages/Charts/ApexCharts/RadialbarCharts";
import RadarCharts from "../pages/Charts/ApexCharts/RadarCharts";
import PolarCharts from "../pages/Charts/ApexCharts/PolarCharts";

import ChartsJs from "../pages/Charts/ChartsJs/index";
import Echarts from "../pages/Charts/ECharts/index";

// Landing Index
import OnePage from "../pages/Landing/OnePage";
import NFTLanding from "../pages/Landing/NFTLanding";

// User Profile
import UserProfile from "../pages/Authentication/user-profile";

const authProtectedRoutes = [
  { path: "/dashboard", component: DashboardEcommerce },
  { path: "/index", component: DashboardEcommerce },
  { path: "/apps-calendar", component: Calendar },
  { path: "/apps-ecommerce-products", component: EcommerceProducts },
  {
    path: "/apps-ecommerce-product-details",
    component: EcommerceProductDetail,
  },
  { path: "/apps-ecommerce-add-product", component: EcommerceAddProduct },
  { path: "/add-product", component: AddProduct },
  { path: "/apps-ecommerce-orders", component: EcommerceOrders },
  { path: "/apps-ecommerce-order-details", component: EcommerceOrderDetail },
  { path: "/apps-ecommerce-customers", component: EcommerceCustomers },
  { path: "/apps-ecommerce-cart", component: EcommerceCart },
  { path: "/apps-ecommerce-checkout", component: EcommerceCheckout },
  { path: "/apps-ecommerce-sellers", component: EcommerceSellers },
  { path: "/apps-ecommerce-seller-details", component: EcommerceSellerDetail },

  //Chat
  { path: "/apps-chat", component: Chat },

  //EMail
  { path: "/apps-mailbox", component: MailInbox },
  { path: "/apps-email-basic", component: BasicAction },
  { path: "/apps-email-ecommerce", component: EcommerceAction },

  //Projects
  { path: "/apps-projects-list", component: ProjectList },
  { path: "/apps-projects-overview", component: ProjectOverview },
  { path: "/apps-projects-create", component: CreateProject },

  //Task
  { path: "/apps-tasks-list-view", component: TaskList },
  { path: "/apps-tasks-details", component: TaskDetails },
  { path: "/apps-tasks-kanban", component: KanbanBoard },
  //Crm
  { path: "/apps-crm-contacts", component: CrmContacts },
  { path: "/apps-crm-companies", component: CrmCompanies },
  { path: "/apps-crm-deals", component: CrmDeals },
  { path: "/apps-crm-leads", component: CrmLeads },

  //Invoices
  { path: "/apps-invoices-list", component: InvoiceList },
  { path: "/apps-invoices-details", component: InvoiceDetails },
  { path: "/apps-invoices-create", component: InvoiceCreate },

  //Supports Tickets
  { path: "/apps-tickets-list", component: ListView },
  { path: "/apps-tickets-details", component: TicketsDetails },

  //charts
  { path: "/charts-apex-line", component: LineCharts },
  { path: "/charts-apex-area", component: AreaCharts },
  { path: "/charts-apex-column", component: ColumnCharts },
  { path: "/charts-apex-bar", component: BarCharts },
  { path: "/charts-apex-mixed", component: MixedCharts },
  { path: "/charts-apex-timeline", component: TimelineCharts },
  { path: "/charts-apex-candlestick", component: CandlestickChart },
  { path: "/charts-apex-boxplot", component: BoxplotCharts },
  { path: "/charts-apex-bubble", component: BubbleChart },
  { path: "/charts-apex-scatter", component: ScatterCharts },
  { path: "/charts-apex-heatmap", component: HeatmapCharts },
  { path: "/charts-apex-treemap", component: TreemapCharts },
  { path: "/charts-apex-pie", component: PieCharts },
  { path: "/charts-apex-radialbar", component: RadialbarCharts },
  { path: "/charts-apex-radar", component: RadarCharts },
  { path: "/charts-apex-polar", component: PolarCharts },

  { path: "/charts-chartjs", component: ChartsJs },
  { path: "/charts-echarts", component: Echarts },

 

  // Widgets
  { path: "/widgets", component: Widgets },

  




  //Maps
  { path: "/maps-google", component: GoogleMaps },
  { path: "/maps-vector", component: VectorMaps },
  { path: "/maps-leaflet", component: LeafletMaps },

  //Pages
  { path: "/pages-starter", component: Starter },
  { path: "/pages-profile", component: SimplePage },
  { path: "/pages-profile-settings", component: Settings },
  { path: "/pages-team", component: Team },
  { path: "/pages-timeline", component: Timeline },
  { path: "/pages-faqs", component: Faqs },
  { path: "/pages-gallery", component: Gallery },
  { path: "/pages-pricing", component: Pricing },
  { path: "/pages-sitemap", component: SiteMap },
  { path: "/pages-search-results", component: SearchResults },

  //User Profile
  { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard" />,
  },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPasswordPage },
  { path: "/register", component: Register },

  //AuthenticationInner pages
  { path: "/auth-signin-basic", component: BasicSignIn },
  { path: "/auth-signin-cover", component: CoverSignIn },
  { path: "/auth-signup-basic", component: BasicSignUp },
  { path: "/auth-signup-cover", component: CoverSignUp },
  { path: "/auth-pass-reset-basic", component: BasicPasswReset },
  { path: "/auth-pass-reset-cover", component: CoverPasswReset },
  { path: "/auth-lockscreen-basic", component: BasicLockScreen },
  { path: "/auth-lockscreen-cover", component: CoverLockScreen },
  { path: "/auth-logout-basic", component: BasicLogout },
  { path: "/auth-logout-cover", component: CoverLogout },
  { path: "/auth-success-msg-basic", component: BasicSuccessMsg },
  { path: "/auth-success-msg-cover", component: CoverSuccessMsg },
  { path: "/auth-twostep-basic", component: BasicTwosVerify },
  { path: "/auth-twostep-cover", component: CoverTwosVerify },
  { path: "/auth-404-basic", component: Basic404 },
  { path: "/auth-404-cover", component: Cover404 },
  { path: "/auth-404-alt", component: Alt404 },
  { path: "/auth-500", component: Error500 },
  { path: "/pages-maintenance", component: Maintenance },
  { path: "/pages-coming-soon", component: ComingSoon },

  { path: "/landing", component: OnePage },
  { path: "/nft-landing", component: NFTLanding },

  { path: "/auth-pass-change-basic", component: BasicPasswCreate },
  { path: "/auth-pass-change-cover", component: CoverPasswCreate },
  { path: "/auth-offline", component: Offlinepage },
];

export { authProtectedRoutes, publicRoutes };
