import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Navdata = () => {
  const history = useHistory();
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isApps, setIsApps] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isPages, setIsPages] = useState(false);
  const [isBaseUi, setIsBaseUi] = useState(false);
  const [isAdvanceUi, setIsAdvanceUi] = useState(false);
  const [isForms, setIsForms] = useState(false);
  const [isTables, setIsTables] = useState(false);
  const [isCharts, setIsCharts] = useState(false);
  const [isIcons, setIsIcons] = useState(false);
  const [isMaps, setIsMaps] = useState(false);
  const [isMultiLevel, setIsMultiLevel] = useState(false);

  const [isUsers, setisUsers] = useState(false);
  const [isProducts, setisProducts] = useState(false);
  const [isOrders, setisOrders] = useState(false);

  // Apps
  const [isEmail, setEmail] = useState(false);
  const [isSubEmail, setSubEmail] = useState(false);
  const [isEcommerce, setIsEcommerce] = useState(false);
  const [isProjects, setIsProjects] = useState(false);
  const [isTasks, setIsTasks] = useState(false);
  const [isCRM, setIsCRM] = useState(false);
  const [isCrypto, setIsCrypto] = useState(false);
  const [isInvoices, setIsInvoices] = useState(false);
  const [isSupportTickets, setIsSupportTickets] = useState(false);
  const [isNFTMarketplace, setIsNFTMarketplace] = useState(false);

  // Authentication
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [isPasswordCreate, setIsPasswordCreate] = useState(false);
  const [isLockScreen, setIsLockScreen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const [isVerification, setIsVerification] = useState(false);
  const [isError, setIsError] = useState(false);

  // Pages
  const [isProfile, setIsProfile] = useState(false);
  const [isLanding, setIsLanding] = useState(false);

  // Charts
  const [isApex, setIsApex] = useState(false);

  // Multi Level
  const [isLevel1, setIsLevel1] = useState(false);
  const [isLevel2, setIsLevel2] = useState(false);

  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }
    if (iscurrentState !== "Apps") {
      setIsApps(false);
    }
    if (iscurrentState !== "Auth") {
      setIsAuth(false);
    }
    if (iscurrentState !== "Pages") {
      setIsPages(false);
    }
    if (iscurrentState !== "BaseUi") {
      setIsBaseUi(false);
    }
    if (iscurrentState !== "AdvanceUi") {
      setIsAdvanceUi(false);
    }
    if (iscurrentState !== "Forms") {
      setIsForms(false);
    }
    if (iscurrentState !== "Tables") {
      setIsTables(false);
    }
    if (iscurrentState !== "Charts") {
      setIsCharts(false);
    }
    if (iscurrentState !== "Icons") {
      setIsIcons(false);
    }
    if (iscurrentState !== "Maps") {
      setIsMaps(false);
    }
    if (iscurrentState !== "MuliLevel") {
      setIsMultiLevel(false);
    }
    if (iscurrentState === "Widgets") {
      history.push("/widgets");
      document.body.classList.add("twocolumn-panel");
    }
    if (iscurrentState !== "Landing") {
      setIsLanding(false);
    }
  }, [
    history,
    iscurrentState,
    isDashboard,
    isApps,
    isAuth,
    isPages,
    isBaseUi,
    isAdvanceUi,
    isForms,
    isTables,
    isCharts,
    isIcons,
    isMaps,
    isMultiLevel,
  ]);

  const menuItems = [
    {
      label: "Menu",
      isHeader: true,
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "ri-dashboard-2-line",
      link: "/#",
      stateVariables: isDashboard,
      id: "ecommerce",
      link: "/dashboard",
      click: function (e) {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        setIscurrentState("Dashboard");
        updateIconSidebar(e);
      },
    },
    {
      id: "appsecommerce",
      label: "Products",
      link: "/#",
      isChildItem: false,
      click: function (e) {
        e.preventDefault();
        setisProducts(!isProducts);
      },
      parentId: "apps",
      stateVariables: isProducts,
      icon: "ri-layout-2-line",
      subItems: [
        {
          id: 1,
          label: "Products",
          link: "/apps-ecommerce-products",
          parentId: "apps",
        },

        {
          id: 3,
          label: "Create Product",
          link: "/apps-ecommerce-add-product",
          parentId: "apps",
        },

        {
          id: 7,
          label: "Shopping Cart",
          link: "/apps-ecommerce-cart",
          parentId: "apps",
        },
        {
          id: 8,
          label: "Checkout",
          link: "/apps-ecommerce-checkout",
          parentId: "apps",
        },
      ],
    },

    {
      id: "appsecommerce",
      label: "Orders",
      link: "/#",
      icon:"bx bxs-cube",
      isChildItem: false,
      click: function (e) {
        e.preventDefault();
        setisOrders(!isOrders);
      },
      parentId: "apps",
      stateVariables: isOrders,
      subItems: [
        {
          id: 4,
          label: "Orders",
          link: "/apps-ecommerce-orders",
          parentId: "apps",
        },
        {
          id: 5,
          label: "Order Details",
          link: "/apps-ecommerce-order-details",
          parentId: "apps",
        },
      ],
    },

    {
      label: "Users",
      link: "/#",
      isChildItem: false,
      click: function (e) {
        e.preventDefault();
        setisUsers(!isUsers);
      },
      icon:"ri-team-fill",
      stateVariables: isUsers,
      subItems: [
        {
          id: 6,
          label: "Customers",
          link: "/apps-ecommerce-customers",
          parentId: "apps",
        },

        {
          id: 9,
          label: "Sellers",
          link: "/apps-ecommerce-sellers",
          parentId: "apps",
        },
        {
          id: 10,
          label: "Seller Details",
          link: "/apps-ecommerce-seller-details",
          parentId: "apps",
        },
      ],
    },

    {
      id: "apps",
      label: "Apps",
      icon: "ri-apps-2-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsApps(!isApps);
        setIscurrentState("Apps");
        updateIconSidebar(e);
      },
      stateVariables: isApps,
      subItems: [
        {
          id: "calendar",
          label: "Calendar",
          link: "/apps-calendar",
          parentId: "apps",
        },
        {
          id: "chat",
          label: "Chat",
          link: "/apps-chat",
          parentId: "apps",
        },
        {
          id: "mailbox",
          label: "Email",
          link: "/#",
          parentId: "apps",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setEmail(!isEmail);
          },
          stateVariables: isEmail,
          childItems: [
            {
              id: 1,
              label: "Mailbox",
              link: "/apps-mailbox",
              parentId: "apps",
            },
            {
              id: 2,
              label: "Email Templates",
              link: "/#",
              parentId: "apps",
              isChildItem: true,
              stateVariables: isSubEmail,
              click: function (e) {
                e.preventDefault();
                setSubEmail(!isSubEmail);
              },
              childItems: [
                {
                  id: 2,
                  label: "Basic Action",
                  link: "/apps-email-basic",
                  parentId: "apps",
                },
                {
                  id: 3,
                  label: "Ecommerce Action",
                  link: "/apps-email-ecommerce",
                  parentId: "apps",
                },
              ],
            },
          ],
        },

        {
          id: "appsprojects",
          label: "Projects",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsProjects(!isProjects);
          },
          parentId: "apps",
          stateVariables: isProjects,
          childItems: [
            {
              id: 1,
              label: "List",
              link: "/apps-projects-list",
              parentId: "apps",
            },
            {
              id: 2,
              label: "Overview",
              link: "/apps-projects-overview",
              parentId: "apps",
            },
            {
              id: 3,
              label: "Create Project",
              link: "/apps-projects-create",
              parentId: "apps",
            },
          ],
        },
        {
          id: "tasks",
          label: "Tasks",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsTasks(!isTasks);
          },
          parentId: "apps",
          stateVariables: isTasks,
          childItems: [
            {
              id: 1,
              label: "Kanban Board",
              link: "/apps-tasks-kanban",
              parentId: "apps",
            },
            {
              id: 2,
              label: "List View",
              link: "/apps-tasks-list-view",
              parentId: "apps",
            },
            {
              id: 3,
              label: "Task Details",
              link: "/apps-tasks-details",
              parentId: "apps",
            },
          ],
        },
        {
          id: "appscrm",
          label: "CRM",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsCRM(!isCRM);
          },
          parentId: "apps",
          stateVariables: isCRM,
          childItems: [
            { id: 1, label: "Contacts", link: "/apps-crm-contacts" },
            { id: 2, label: "Companies", link: "/apps-crm-companies" },
            { id: 3, label: "Deals", link: "/apps-crm-deals" },
            { id: 4, label: "Leads", link: "/apps-crm-leads" },
          ],
        },

        {
          id: "invoices",
          label: "Invoices",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsInvoices(!isInvoices);
          },
          parentId: "apps",
          stateVariables: isInvoices,
          childItems: [
            { id: 1, label: "List View", link: "/apps-invoices-list" },
            { id: 2, label: "Details", link: "/apps-invoices-details" },
            { id: 3, label: "Create Invoice", link: "/apps-invoices-create" },
          ],
        },
        {
          id: "supportTickets",
          label: "Support Tickets",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsSupportTickets(!isSupportTickets);
          },
          parentId: "apps",
          stateVariables: isSupportTickets,
          childItems: [
            { id: 1, label: "List View", link: "/apps-tickets-list" },
            { id: 2, label: "Ticket Details", link: "/apps-tickets-details" },
          ],
        },
      ],
    },
    {
      label: "pages",
      isHeader: true,
    },
    {
      id: "authentication",
      label: "Authentication",
      icon: "ri-account-circle-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsAuth(!isAuth);
        setIscurrentState("Auth");
        updateIconSidebar(e);
      },
      stateVariables: isAuth,
      subItems: [
        {
          id: "signIn",
          label: "Sign In",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsSignIn(!isSignIn);
          },
          parentId: "authentication",
          stateVariables: isSignIn,
          childItems: [
            { id: 1, label: "Basic", link: "/auth-signin-basic" },
            { id: 2, label: "Cover", link: "/auth-signin-cover" },
          ],
        },
        {
          id: "signUp",
          label: "Sign Up",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "authentication",
          stateVariables: isSignUp,
          childItems: [
            { id: 1, label: "Basic", link: "/auth-signup-basic" },
            { id: 2, label: "Cover", link: "/auth-signup-cover" },
          ],
        },
        {
          id: "passwordReset",
          label: "Password Reset",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsPasswordReset(!isPasswordReset);
          },
          parentId: "authentication",
          stateVariables: isPasswordReset,
          childItems: [
            { id: 1, label: "Basic", link: "/auth-pass-reset-basic" },
            { id: 2, label: "Cover", link: "/auth-pass-reset-cover" },
          ],
        },
        {
          id: "passwordCreate",
          label: "Password Create",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsPasswordCreate(!isPasswordCreate);
          },
          parentId: "authentication",
          stateVariables: isPasswordCreate,
          childItems: [
            { id: 1, label: "Basic", link: "/auth-pass-change-basic" },
            { id: 2, label: "Cover", link: "/auth-pass-change-cover" },
          ],
        },
        {
          id: "lockScreen",
          label: "Lock Screen",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsLockScreen(!isLockScreen);
          },
          parentId: "authentication",
          stateVariables: isLockScreen,
          childItems: [
            { id: 1, label: "Basic", link: "/auth-lockscreen-basic" },
            { id: 2, label: "Cover", link: "/auth-lockscreen-cover" },
          ],
        },
        {
          id: "logout",
          label: "Logout",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsLogout(!isLogout);
          },
          parentId: "authentication",
          stateVariables: isLogout,
          childItems: [
            { id: 1, label: "Basic", link: "/auth-logout-basic" },
            { id: 2, label: "Cover", link: "/auth-logout-cover" },
          ],
        },
        {
          id: "successMessage",
          label: "Success Message",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsSuccessMessage(!isSuccessMessage);
          },
          parentId: "authentication",
          stateVariables: isSuccessMessage,
          childItems: [
            { id: 1, label: "Basic", link: "/auth-success-msg-basic" },
            { id: 2, label: "Cover", link: "/auth-success-msg-cover" },
          ],
        },
        {
          id: "twoStepVerification",
          label: "Two Step Verification",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsVerification(!isVerification);
          },
          parentId: "authentication",
          stateVariables: isVerification,
          childItems: [
            { id: 1, label: "Basic", link: "/auth-twostep-basic" },
            { id: 2, label: "Cover", link: "/auth-twostep-cover" },
          ],
        },
        {
          id: "errors",
          label: "Errors",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsError(!isError);
          },
          parentId: "authentication",
          stateVariables: isError,
          childItems: [
            { id: 1, label: "404 Basic", link: "/auth-404-basic" },
            { id: 2, label: "404 Cover", link: "/auth-404-cover" },
            { id: 3, label: "404 Alt", link: "/auth-404-alt" },
            { id: 4, label: "500", link: "/auth-500" },
            { id: 5, label: "Offline Page", link: "/auth-offline" },
          ],
        },
      ],
    },
    {
      id: "pages",
      label: "Pages",
      icon: "ri-pages-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsPages(!isPages);
        setIscurrentState("Pages");
        updateIconSidebar(e);
      },
      stateVariables: isPages,
      subItems: [
        {
          id: "starter",
          label: "Starter",
          link: "/pages-starter",
          parentId: "pages",
        },
        {
          id: "profile",
          label: "Profile",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsProfile(!isProfile);
          },
          parentId: "pages",
          stateVariables: isProfile,
          childItems: [
            {
              id: 1,
              label: "Simple Page",
              link: "/pages-profile",
              parentId: "pages",
            },
            {
              id: 2,
              label: "Settings",
              link: "/pages-profile-settings",
              parentId: "pages",
            },
          ],
        },
        { id: "team", label: "Team", link: "/pages-team", parentId: "pages" },
        {
          id: "timeline",
          label: "Timeline",
          link: "/pages-timeline",
          parentId: "pages",
        },
        { id: "faqs", label: "FAQs", link: "/pages-faqs", parentId: "pages" },
        {
          id: "pricing",
          label: "Pricing",
          link: "/pages-pricing",
          parentId: "pages",
        },
        {
          id: "gallery",
          label: "Gallery",
          link: "/pages-gallery",
          parentId: "pages",
        },
        {
          id: "maintenance",
          label: "Maintenance",
          link: "/pages-maintenance",
          parentId: "pages",
        },
        {
          id: "comingSoon",
          label: "Coming Soon",
          link: "/pages-coming-soon",
          parentId: "pages",
        },
        {
          id: "sitemap",
          label: "Sitemap",
          link: "/pages-sitemap",
          parentId: "pages",
        },
        {
          id: "searchResults",
          label: "Search Results",
          link: "/pages-search-results",
          parentId: "pages",
        },
      ],
    },
    {
      id: "landing",
      label: "Landing",
      icon: "ri-rocket-line",
      link: "/#",
      stateVariables: isLanding,
      click: function (e) {
        e.preventDefault();
        setIsLanding(!isLanding);
        setIscurrentState("Landing");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "onePage",
          label: "One Page",
          link: "/landing",
          parentId: "landing",
        },
        {
          id: "nftLanding",
          label: "NFT Landing",
          link: "/nft-landing",
          parentId: "landing",
        },
      ],
    },
    {
      label: "Components",
      isHeader: true,
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
