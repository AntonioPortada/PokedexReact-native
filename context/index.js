import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {createContext, useState, useEffect} from "react";

export const FavoriteContext = createContext();

export default function Provider({children}) {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        async function getFavorites() {
            const list = await AsyncStorage.getItem('_favorites');

            if(list) {
                const temp = JSON.parse(list);
                setFavorites(temp);
            }
        }

        getFavorites();
    }, []);

    async function updateFavorites() {
        const list = await AsyncStorage.getItem('_favorites');

        if(list) {
            const temp = JSON.parse(list);
            setFavorites(temp);
        }
    }

    return <FavoriteContext.Provider value={{favorites,setFavorites, updateFavorites}}>{children}</FavoriteContext.Provider>
}