// API endpoints
const API_ENDPOINTS = {
    CLIENTES_PARCEIROS: '/api/clientes-parceiros',
    CLIENTES: '/api/clientes',
    PARCEIROS: '/api/parceiros'
};

// Carregar clientes e parceiros da API
async function loadClientesParceiros() {
    try {
        const response = await fetch(API_ENDPOINTS.CLIENTES_PARCEIROS);
        if (!response.ok) throw new Error('Erro ao carregar dados');
        
        const data = await response.json();
        renderClientes(data.clientes);
        renderParceiros(data.parceiros);
    } catch (error) {
        console.error('Erro ao carregar clientes e parceiros:', error);
        // Fallback para dados estáticos caso a API falhe
        loadClientesParceirosFallback();
    }
}

// Fallback com dados estáticos
function loadClientesParceirosFallback() {
    const clientes = [
        {
            id: 1,
            nome: "Ailos",
            logo_colorido: "assets/img/clientes/ailos.png",
            logo_branco: "assets/img/clientes/ailos_white.png",
            link: "clientes/ailos.html",
            categoria: "Financeiro"
        },
        // ... outros clientes
    ];
    
    const parceiros = [
        {
            id: 1,
            nome: "Federação Brasileira de Bancos",
            logo_colorido: "assets/img/parceiros/febraban.png",
            logo_branco: "assets/img/parceiros/febraban_white.png",
            link: "parceiros/febraban.html",
            categoria: "Associação"
        },
        // ... outros parceiros
    ];
    
    renderClientes(clientes);
    renderParceiros(parceiros);
}

// Renderizar clientes
function renderClientes(clientes) {
    const clientesContainer = document.getElementById('clientes-container');
    if (!clientesContainer) return;
    
    clientesContainer.innerHTML = '';
    
    clientes.forEach(cliente => {
        const clienteElement = document.createElement('div');
        clienteElement.className = 'client-logo';
        clienteElement.innerHTML = `
            <a href="${cliente.link}" target="_blank">
                <img src="${cliente.logo_colorido}" alt="${cliente.nome}" 
                     onmouseover="this.src='${cliente.logo_branco}'" 
                     onmouseout="this.src='${cliente.logo_colorido}'">
            </a>
        `;
        clientesContainer.appendChild(clienteElement);
    });
}

// Renderizar parceiros
function renderParceiros(parceiros) {
    const parceirosContainer = document.getElementById('parceiros-container');
    if (!parceirosContainer) return;
    
    parceirosContainer.innerHTML = '';
    
    parceiros.forEach(parceiro => {
        const parceiroElement = document.createElement('div');
        parceiroElement.className = 'client-logo';
        parceiroElement.innerHTML = `
            <a href="${parceiro.link}" target="_blank">
                <img src="${parceiro.logo_colorido}" alt="${parceiro.nome}" 
                     onmouseover="this.src='${parceiro.logo_branco}'" 
                     onmouseout="this.src='${parceiro.logo_colorido}'">
            </a>
        `;
        parceirosContainer.appendChild(parceiroElement);
    });
}

// Inicializar tudo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initForms();
    loadServicos();
    loadClientesParceiros(); // Carrega clientes e parceiros da API
    initTextCarousel();
    
    // Ativar menu ativo conforme a página
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });
});