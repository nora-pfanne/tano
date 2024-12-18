// header.js
class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="header-container">
                    <div class="logo">
                        <a href="#home">
                            <img id="logo" src="../images/logo.png" alt="Logo" class="logo-img">
                        </a>
                    </div>
                    <div class="search-bar">
                        <form action="/suche" method="get">
                            <input type="text" placeholder="Search for recipes..." name="search" required>
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <nav>
                    <div class="nav-container">
                        <a href="../index.html" class="nav-link">Home</a>
                        <a href="#recipes" class="nav-link">Recipes</a>
                        <a href="#garden" class="nav-link">Garden</a>
                        <a href="pages/about-us.html" class="nav-link">About us</a>
                        <a href="#contact" class="nav-link">Contact</a>
                        <!-- Hamburger Icon -->
                        <a href="javascript:void(0);" class="icon" onclick="toggleMenu()">&#9776;</a>
                    </div>
                </nav>
            </header>
        `;

        // Dynamische Anpassung des Logo-Links basierend auf der aktuellen Seite
        const logo = this.querySelector("#logo"); // Verwende querySelector, um das Logo-Element zu finden

        // Hier überprüfen wir den aktuellen Pfad der Seite
        if (window.location.pathname === "/src/index.html") {
            logo.src = "images/logo.png";  // Ändere den Logo-Link auf der spezifischen Seite
        }
    }
}

customElements.define('custom-header', CustomHeader);