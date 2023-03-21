const Search = ({ setSearch }) => {

    const [temporalValue, setTemporalValue] = useState("");

    return (
        <div className="search-bar">
            <form onSubmit={(event) => event.preventDefault()}
                className='flex'>
                <input type="text"
                    value={temporalValue ? temporalValue : ""}
                    onChange={(event) => setTemporalValue(event.target.value)}
                    placeholder="Search here" />

                <button onClick={() => setSearch(setTemporalValue)}>Click Here</button>
            </form>
        </div >);
}

export default Search;