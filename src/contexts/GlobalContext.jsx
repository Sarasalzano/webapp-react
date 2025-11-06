import { createContext, useContext, useState } from "react";


// istanza del context
const GlobalContext = createContext();

// Definiamo un Provider
function GlobalProvider({ children }) {

// Varibili di stato
const [loading, setIsLoading] = useState(false);
return (
<GlobalContext.Provider
    value={{
        loading,
        setIsLoading,
    }}
    >
    {children}
</GlobalContext.Provider>
);
}

// Definiamo un hook per il contesto
function useGlobal() {
    const context = useContext(GlobalContext);
    return context;
}

// Esportiamo il provider e hook
export { GlobalProvider, useGlobal }