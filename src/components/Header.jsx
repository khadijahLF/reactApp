function Header() {
    return (
      <>
        <header>
          <p>Village Dictionary</p>
        </header>

        <div className="header-content">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div className="add-word-container">
          <input type="text" placeholder="Add new word..." />
        </div>
      </div>

      </>
    )
  }
  
  export default Header