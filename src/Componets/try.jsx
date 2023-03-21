import { useState } from "react";

const Header = ({ setSearch }) => {
    // paso 4 Crear un estado para guardar el valor temporal del input 
    const [temporalValue, setTemporalValue] = useState("")


    return (
        <header className="header">
            <div className="layout flex h-full items-center justify-between">
                <a href="">
                    <h1 className="text-2xl font-semibold text-white">Logo</h1>
                </a>

                <form
                    // Evitar que la pagina se refresque y hacer al submit
                    onSubmit={(event) => event.preventDefault()}
                    className="flex">
                    <input
                        type="text"
                        // paso 6 asignar el valor del temporal value al input
                        value={temporalValue ? temporalValue : ""}
                        // paso 5 asignar el valor de input al temporal value
                        onChange={(event) => setTemporalValue(event.target.value)}
                        className="rounded-l-3xl border border-[#222222] bg-[#121212] px-4 py-2 text-gray-100" placeholder="Search" />
                    <button
                        // pso 7 asginar el valor temporal al estado principal
                        onClick={() => setSearch(temporalValue)}
                        className="rounded-r-3xl bg-[#222222] px-4 py-2 text-gray-300">Search</button>
                </form>
            </div>
        </header>
    );
}

export default Header;