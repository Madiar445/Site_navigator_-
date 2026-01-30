class CustomSidebar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          width: 16rem;
          height: 100vh;
          background-color: #1f2937;
          color: white;
          z-index: 40;
          transition: all 0.3s;
        }
        .sidebar-header {
          padding: 1.5rem;
          border-bottom: 1px solid #374151;
        }
        .logo {
          display: flex;
          align-items: center;
          font-size: 1.25rem;
          font-weight: bold;
        }
        .logo-icon {
          margin-right: 0.75rem;
        }
        .nav {
          padding: 1rem 0;
        }
        .nav-item {
          display: flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          color: #d1d5db;
          text-decoration: none;
          transition: all 0.2s;
        }
        .nav-item:hover {
          background-color: #374151;
          color: white;
        }
        .nav-item.active {
          background-color: #111827;
          color: white;
          border-left: 4px solid #dc2626;
        }
        .nav-item i {
          margin-right: 0.75rem;
          width: 1.25rem;
          text-align: center;
        }
        .nav-title {
          padding: 0.5rem 1.5rem;
          font-size: 0.75rem;
          font-weight: bold;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      </style>
      <div class="sidebar-header">
        <div class="logo">
          <i data-feather="compass" class="logo-icon"></i>
          <span>Админ-панель</span>
        </div>
      </div>
      <div class="nav">
        <div class="nav-title">Главное</div>
        <a href="admin.html" class="nav-item">
          <i data-feather="home"></i>
          <span>Дашборд</span>
        </a>
        <a href="admin-content.html" class="nav-item active">
          <i data-feather="edit"></i>
          <span>Контент</span>
        </a>
<a href="#" class="nav-item">
          <i data-feather="users"></i>
          <span>Пользователи</span>
        </a>
        <a href="#" class="nav-item">
          <i data-feather="file-text"></i>
          <span>Заявки</span>
        </a>
        
        <div class="nav-title">Контент</div>
        <a href="#" class="nav-item">
          <i data-feather="file-text"></i>
          <span>Новости</span>
        </a>
        <a href="#" class="nav-item">
          <i data-feather="calendar"></i>
          <span>Мероприятия</span>
        </a>
        <a href="#" class="nav-item">
          <i data-feather="award"></i>
          <span>Проекты</span>
        </a>
        
        <div class="nav-title">Система</div>
        <a href="#" class="nav-item">
          <i data-feather="settings"></i>
          <span>Настройки</span>
        </a>
        <a href="#" class="nav-item">
          <i data-feather="log-out"></i>
          <span>Выйти</span>
        </a>
      </div>
    `;
  }
}
customElements.define('custom-sidebar', CustomSidebar);