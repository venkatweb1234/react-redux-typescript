import { combineReducers } from "redux";
import countReducer from "./counter/counters-reducers";

const rootReducer = combineReducers({
  count: countReducer,
});

// export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
