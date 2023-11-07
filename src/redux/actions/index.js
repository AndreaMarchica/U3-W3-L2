export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS = "GET_JOBS";

export const addToFavouriteListAction = (job) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: job,
  };
};
export const removeFromFavouriteListAction = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: i,
  };
};
// export const getJobsAction = () => {

//   return async (dispatch) => {
//     try {
//       let resp = await fetch(
//         (baseEndpoint + query + '&limit=20')
//       );
//       if (resp.ok) {
//         let fetchedJobs = await resp.json();
//         dispatch({
//           type: GET_JOBS,
//           payload: fetchedJobs,
//         });
//       } else {
//         throw new Error("errore nel recupero dei dati");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
