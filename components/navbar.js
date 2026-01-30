class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .navbar {
          background: linear-gradient(90deg, #dc2626 0%, #b91c1c 100%);
          color: white;
          padding: 1rem 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 50;
        }
.nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .logo {
          display: flex;
          align-items: center;
          font-weight: bold;
          font-size: 1.25rem;
        }
        .logo-icon {
          margin-right: 0.5rem;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        .nav-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s;
          display: flex;
          align-items: center;
        }
        .nav-link:hover {
          opacity: 0.8;
        }
        .nav-link i {
          margin-right: 0.25rem;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav class="navbar">
        <div class="nav-container">
          <a href="#" class="logo">
            <i data-feather="compass" class="logo-icon"></i>
            <span>Первый.Навигатор</span>
          </a>
          <div class="nav-links">
            <a href="#join" class="nav-link">
              <i data-feather="user-plus"></i>
              <span>Вступить</span>
            </a>
            <a href="#projects" class="nav-link">
              <i data-feather="lightbulb"></i>
              <span>Проекты</span>
            </a>
            <a href="faq.html" class="nav-link">
              <i data-feather="help-circle"></i>
              <span>FAQ</span>
            </a>
            <a href="#parents" class="nav-link">
              <i data-feather="users"></i>
              <span>Родителям</span>
            </a>
            <a href="admin.html" id="admin-link" class="nav-link hidden">
              <i data-feather="settings"></i>
              <span>Админ</span>
            </a>
</div>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);