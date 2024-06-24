export function Search() {
  return <header>
      <form className="search-form" id="search-form">
          <div style={{ display: "flex", gap: "5px" }}>
              <input type="search" placeholder="Enter a city..." required id="search-form-input" className="search-form-input" />
              <input type="submit" value="Search" className="search-form-button" />
          </div>
      </form>
  </header>
}