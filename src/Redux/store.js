import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Reducers/AuthSlice";
import MapSlice from "./Reducers/MapSlice";
import SiteSlice from "./Reducers/SiteSlice";

const Store = configureStore({
    reducer:{
        auth:AuthSlice,
        map:MapSlice,
        site:SiteSlice,
    }
})
export default Store;