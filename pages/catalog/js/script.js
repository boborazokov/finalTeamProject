const catalog = [];
const itemsPerPage = 6;
let currentPage = 1;

async function loadCatalog() {
  const response = await fetch('./catalog.json');
  const data = await response.json();
  catalog.push(...data.products);
  renderCatalog(catalog);
  setupPagination(catalog.length);
  const firstButton = document.querySelector('.pagination-button');
  if (firstButton) {
    firstButton.classList.add('active');
  }
}

loadCatalog();

function renderCatalog(data) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const html = currentItems.map(product => {
    return `
        <div class="catalog-container">
          <div class="catolog-card">
            <div class="catalog-card-img">
              <img
                class="catalog-img"
                src="./img/${product.img}"
                alt=""
                width="200"
              />
              <div class="product-rate-blok">
                <div>
                    <span class="product-rate ${product.color}">${product.rate}</span>
                </div>
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 27C16 27 3.5 20 3.5 11.5C3.5 9.99737 4.02062 8.54114 4.97328 7.37908C5.92593 6.21703 7.25178 5.42093 8.72525 5.12624C10.1987 4.83154 11.7288 5.05646 13.0551 5.76272C14.3814 6.46898 15.4221 7.61296 16 9.00001V9.00001C16.5779 7.61296 17.6186 6.46898 18.9449 5.76272C20.2712 5.05646 21.8013 4.83154 23.2748 5.12624C24.7482 5.42093 26.0741 6.21703 27.0267 7.37908C27.9794 8.54114 28.5 9.99737 28.5 11.5C28.5 20 16 27 16 27Z"
                      stroke="#2B2929"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.0985 27H5.89854C5.65247 26.9988 5.41525 26.9081 5.23121 26.7448C5.04717 26.5815 4.92891 26.3567 4.89854 26.1125L3.12354 10.1125C3.10775 9.97309 3.12148 9.83192 3.16382 9.69817C3.20616 9.56441 3.27618 9.44106 3.36931 9.33614C3.46245 9.23121 3.57662 9.14706 3.70441 9.08915C3.8322 9.03124 3.97074 9.00086 4.11104 9H27.886C28.0263 9.00086 28.1649 9.03124 28.2927 9.08915C28.4205 9.14706 28.5346 9.23121 28.6278 9.33614C28.7209 9.44106 28.7909 9.56441 28.8333 9.69817C28.8756 9.83192 28.8893 9.97309 28.8735 10.1125L27.0985 26.1125C27.0682 26.3567 26.9499 26.5815 26.7659 26.7448C26.5818 26.9081 26.3446 26.9988 26.0985 27V27Z"
                      stroke="#2B2929"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 9C11 7.67392 11.5268 6.40215 12.4645 5.46447C13.4021 4.52678 14.6739 4 16 4C17.3261 4 18.5979 4.52678 19.5355 5.46447C20.4732 6.40215 21 7.67392 21 9"
                      stroke="#2B2929"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="catalog-card-price">
              <p class="catalog-product-name">${product.name}</p>
              <div class="catalog-price-bottom">
                <span class="price-new">${product.newPrice}</span>
                <span class="price-old">${product.oldPrice}</span>
                <span class="price-discount">${product.discount}</span>
              </div>
            </div>
          </div>
        </div>`;
  }).join('');
  document.querySelector('.catalog-cards').innerHTML = html;
}

function setupPagination(totalItems) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const paginationContainer = document.querySelector('.catalog-pagination');

  paginationContainer.innerHTML = '';

  for (let i = 1; i <= pageCount; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.className = 'pagination-button';
    button.onclick = () => {
      currentPage = i;
      renderCatalog(catalog);
      const buttons = document.querySelectorAll('.pagination-button');
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    };
    paginationContainer.appendChild(button);
  }
}