import { GET_JOBS } from "../actions";

const initialState = {
  jobs: {
    jobs: [],
  },
  query: {
    query: "",
  },
};

const getJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: [...state.jobs.jobs, action.payload], // un array pieno di libri!
        query: action.payload,
      };

    default:
      return state;
  }
};

export default getJobsReducer;
