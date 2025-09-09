// API endpoints (simulados para este exemplo)
const API_ENDPOINTS = {
    SERVICOS: '/api/servicos',
    PARCEIROS: '/api/parceiros',
    CONTADORES: '/api/contadores',
    HERO: '/api/hero'
};

// Dados simulados (em produção, viriam da API)
const servicosData = [
    {
        titulo: "Recuperação de Crédito",
        url_icone_ou_nome_fa: "fa-money-bill-transfer",
        descricao: "Estratégias eficientes para recuperação de crédito com abordagem humanizada.",
        link_detalhes: "#"
    },
    {
        titulo: "Atendimento ao Cliente",
        url_icone_ou_nome_fa: "fa-headset",
        descricao: "Atendimento especializado para resolver dúvidas e problemas dos clientes.",
        link_detalhes: "#"
    },
    {
        titulo: "Contencioso de Volume",
        url_icone_ou_nome_fa: "fa-scale-balanced",
        descricao: "Gestão eficiente de grandes volumes de processos contenciosos.",
        link_detalhes: "#"
    },
    {
        titulo: "Soluções Personalizadas",
        url_icone_ou_nome_fa: "fa-lightbulb",
        descricao: "Desenvolvemos soluções sob medida para suas necessidades específicas.",
        link_detalhes: "#"
    }
];

const parceirosData = [
    { nome_parceiro: "Cliente 1", url_logo: "assets/img/clientes/cliente1.png" },
    { nome_parceiro: "Cliente 2", url_logo: "assets/img/clientes/cliente2.png" },
    { nome_parceiro: "Cliente 3", url_logo: "assets/img/clientes/cliente3.png" },
    { nome_parceiro: "Cliente 4", url_logo: "assets/img/clientes/cliente4.png" },
    { nome_parceiro: "Cliente 5", url_logo: "assets/img/clientes/cliente5.png" },
    { nome_parceiro: "Cliente 6", url_logo: "assets/img/clientes/cliente6.png" }
];

// Carregar serviços
function loadServicos() {
    const servicosContainer = document.getElementById('servicos-container');
    
    if (servicosContainer) {
        servicosData.forEach(servico => {
            const servicoCard = document.createElement('div');
            servicoCard.className = 'service-card';
            servicoCard.innerHTML = `
                <div class="service-icon">
                    <i class="fas ${servico.url_icone_ou_nome_fa}"></i>
                </div>
                <h3>${servico.titulo}</h3>
                <p>${servico.descricao}</p>
                <a href="${servico.link_detalhes}" class="btn btn-outline">Saiba Mais</a>
            `;
            servicosContainer.appendChild(servicoCard);
        });
    }
}

// Carregar parceiros
function loadParceiros() {
    const parceirosContainer = document.getElementById('parceiros-container');
    
    if (parceirosContainer) {
        parceirosData.forEach(parceiro => {
            const parceiroLogo = document.createElement('div');
            parceiroLogo.className = 'client-logo';
            parceiroLogo.innerHTML = `<img src="${parceiro.url_logo}" alt="${parceiro.nome_parceiro}">`;
            parceirosContainer.appendChild(parceiroLogo);
        });
    }
}

// Animação do carrossel de texto
function initTextCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    
    if (items.length > 0) {
        setInterval(() => {
            items[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % items.length;
            items[currentIndex].classList.add('active');
        }, 3000);
    }
}

// Inicializar tudo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initForms();
    loadServicos();
    loadParceiros();
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