import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Reducers/AuthSlice";
import MapSlice from "./Reducers/MapSlice";
import SiteSlice from "./Reducers/SiteSlice";
import DicValuesSlice from "./Reducers/DicValuesSlice";
import DictionnarySlice from "./Reducers/DictionnarySlice";

const Store = configureStore({
    reducer:{
        auth:AuthSlice,
        map:MapSlice,
        site:SiteSlice,
        dicValue:DicValuesSlice,
        dictionnary:DictionnarySlice,
    }
})
export default Store;