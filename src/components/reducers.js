const initialState = { data: [], loading: false };

const Reducer = (status = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...status, loading: true };
    case "SET_DATA":
      return { ...status, data: action.payload.data, loading: false };
    case "ERROR":
      return { ...status, error: action.payload, loading: false };
    default:
      return status;
  }
};

export default Reducer;
