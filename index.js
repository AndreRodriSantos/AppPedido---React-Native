/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React, { useEffect, useState } from "react"
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import CardProvider from './app/ui/provider/CardProvider';
import ProductProvider from './app/ui/provider/ProductProvider';
import ProductsView from './app/ui/views/ProductView/ProductsView';

const tema = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: '#F29F05'
    }
}

const tema2 = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: '#F29F05'
    }
}

export default function Main() {

    const [value, setValue] = useState(1)

    return (

        <PaperProvider theme={value === 1 ? tema : tema2}>
            
                <ProductsView/>
            
        </PaperProvider>

    )
}

AppRegistry.registerComponent(appName, () => Main);
