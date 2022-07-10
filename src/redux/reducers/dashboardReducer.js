const initState = {
  info: null,
};

export const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DASHBOARD_DATA_SUCCESS":
      return (state = {
        info: action.payload,
      });

    default:
      return state;
  }
};
