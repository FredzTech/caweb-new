import { combineReducers } from "redux";

import accountUserReducer from "./accountUserReducer";
import adminReducer from "./admin/adminReducer";
import imagesReducer from "./admin/imagesReducer";
import prayersReducer from "./admin/prayersReducer";
import usersReducer from "./admin/usersReducer";
import eventsReducer from "./eventsReducer";
import galleryReducer from "./galleryReducer";
import leadersReducer from "./leadersReducer";
import sccsReducer from "./sccsReducer";
import userPrayersReducer from "./userPrayersReducer";

const rootReducer = combineReducers({
  accountUsers: accountUserReducer,
  adminState: adminReducer,
  usersState: usersReducer,
  prayersState: prayersReducer,
  imagesState: imagesReducer,
  userPrayersState: userPrayersReducer,
  galleryState: galleryReducer,
  sccsState: sccsReducer,
  eventsState: eventsReducer,
  leadersState: leadersReducer,
});

export default rootReducer;
