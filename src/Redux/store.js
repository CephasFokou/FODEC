import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Reducers/AuthSlice";
import MapSlice from "./Reducers/MapSlice";
import SiteSlice from "./Reducers/SiteSlice";
import DicValuesSlice from "./Reducers/DicValuesSlice";
import DictionnarySlice from "./Reducers/DictionnarySlice";
import FarmSlice from "./Reducers/FarmSlice";
import LigneSlice from "./Reducers/LigneSlice";
import TreeSlice from "./Reducers/TreeSlice";
import FruitSlice from "./Reducers/FruitSlice";
import ParcelsSlice from "./Reducers/ParcelsSlice";

const Store = configureStore({
    reducer:{
        auth:AuthSlice,
        map:MapSlice,
        site:SiteSlice,
        dicValue:DicValuesSlice,
        dictionnary:DictionnarySlice,
        farm: FarmSlice,
        ligne:LigneSlice,
        tree:TreeSlice,
        fruit:FruitSlice,
        parcel:ParcelsSlice
    }
})
export default Store;