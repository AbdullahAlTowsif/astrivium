import { Link } from "react-router";
import { useTheme } from "./theme-provider";
import { ModeToggle } from "./mode-toggle";
import { CitySearch } from "./city-search";

const Header = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-1/6 items-center justify-between px-4">
                <Link to={"/"}>
                    <img src={isDark ? "/logo.png" : "/logo2.png"} alt="Logo" className="h-14" />
                </Link>

                <div className="flex gap-4">
                    {/* search */}
                    <CitySearch />
                    {/* theme toggle */}
                    <div>
                        <ModeToggle></ModeToggle>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;