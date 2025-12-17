// /js/case-nav.js

// ✅ 在这里集中管理所有行业（唯一需要修改的地方）
const INDUSTRIES = [
  { name: '机械设备', file: 'machinery.html' },
  { name: '消费电子', file: 'electronics.html' },
  { name: '家居家具', file: 'furniture.html' },
  { name: '服装纺织', file: 'apparel.html' },
  { name: '化工建材', file: 'chemicals.html' }
  // 👉 新增行业？在这里加一行即可！
];

// 构建下拉菜单 HTML
function buildIndustryDropdown() {
  let items = '';
  INDUSTRIES.forEach(item => {
    items += `<li><a class="dropdown-item" href="${item.file}">${item.name}</a></li>`;
  });
  return `
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown">
        行业案例
      </a>
      <ul class="dropdown-menu">
        ${items}
      </ul>
    </li>
  `;
}

// 构建完整导航 HTML
function buildNavbar() {
  return `
    <nav class="navbar navbar-expand-lg" style="padding:20px 0;background:rgba(255,255,255,0.95);box-shadow:0 5px 20px rgba(0,0,0,0.05);position:fixed;top:0;width:100%;z-index:1000;">
      <div class="container">
        <a class="navbar-brand" href="../index.html">Waimao<span style="color:#10b981;">Search</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#caseNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="caseNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="../index.html">返回首页</a>
            </li>
            ${buildIndustryDropdown()}
            <li class="nav-item ms-2">
              <a class="btn btn-primary" href="../index.html#contact" style="background-color:#2563eb;border-color:#2563eb;color:white;padding:12px 28px;border-radius:6px;font-weight:500;">免费试用</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

// 页面加载完成后插入导航
document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.createElement('div');
  navContainer.innerHTML = buildNavbar();
  document.body.insertBefore(navContainer.firstChild, document.body.firstChild);
});