import App from "@/App";
import { CityPage } from "@/pages/city-page";
import WeatherDashboard from "@/pages/weather-dashboard";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                Component: WeatherDashboard
            },
            {
                path: "/city/:cityName",
                Component: CityPage
            }
        ]
    },
]);
