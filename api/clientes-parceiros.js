const clientesParceiros = {
    "clientes": [
        {
            "id": 1,
            "nome": "Ailos",
            "logo_colorido": "/assets/img/clientes/ailos.png",
            "logo_branco": "/assets/img/clientes/ailos_white.png",
            "link": "/clientes/ailos.html",
            "categoria": "Financeiro"
        },
        {
            "id": 2,
            "nome": "Banco do Brasil",
            "logo_colorido": "/assets/img/clientes/banco-brasil.png",
            "logo_branco": "/assets/img/clientes/banco-brasil_white.png",
            "link": "/clientes/banco-brasil.html",
            "categoria": "Financeiro"
        },
        {
            "id": 3,
            "nome": "Caixa Econômica Federal",
            "logo_colorido": "/assets/img/clientes/caixa.png",
            "logo_branco": "/assets/img/clientes/caixa_white.png",
            "link": "/clientes/caixa.html",
            "categoria": "Financeiro"
        },
        {
            "id": 4,
            "nome": "Sicredi",
            "logo_colorido": "/assets/img/clientes/sicredi.png",
            "logo_branco": "/assets/img/clientes/sicredi_white.png",
            "link": "/clientes/sicredi.html",
            "categoria": "Financeiro"
        },
        {
            "id": 5,
            "nome": "Sicoob",
            "logo_colorido": "/assets/img/clientes/sicoob.png",
            "logo_branco": "/assets/img/clientes/sicoob_white.png",
            "link": "/clientes/sicoob.html",
            "categoria": "Financeiro"
        },
        {
            "id": 6,
            "nome": "Bradesco",
            "logo_colorido": "/assets/img/clientes/bradesco.png",
            "logo_branco": "/assets/img/clientes/bradesco_white.png",
            "link": "/clientes/bradesco.html",
            "categoria": "Financeiro"
        },
        {
            "id": 7,
            "nome": "Itaú",
            "logo_colorido": "/assets/img/clientes/itau.png",
            "logo_branco": "/assets/img/clientes/itau_white.png",
            "link": "/clientes/itau.html",
            "categoria": "Financeiro"
        },
        {
            "id": 8,
            "nome": "Santander",
            "logo_colorido": "/assets/img/clientes/santander.png",
            "logo_branco": "/assets/img/clientes/santander_white.png",
            "link": "/clientes/santander.html",
            "categoria": "Financeiro"
        }
    ],
    "parceiros": [
        {
            "id": 1,
            "nome": "Federação Brasileira de Bancos",
            "logo_colorido": "/assets/img/parceiros/febraban.png",
            "logo_branco": "/assets/img/parceiros/febraban_white.png",
            "link": "/parceiros/febraban.html",
            "categoria": "Associação"
        },
        {
            "id": 2,
            "nome": "Associação Brasileira de Recuperação de Crédito",
            "logo_colorido": "/assets/img/parceiros/abrac.png",
            "logo_branco": "/assets/img/parceiros/abrac_white.png",
            "link": "/parceiros/abrac.html",
            "categoria": "Associação"
        },
        {
            "id": 3,
            "nome": "Serasa Experian",
            "logo_colorido": "/assets/img/parceiros/serasa.png",
            "logo_branco": "/assets/img/parceiros/serasa_white.png",
            "link": "/parceiros/serasa.html",
            "categoria": "Tecnologia"
        }
    ]
};

// Função para servir a API
function handleRequest(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    
    // Configurações de CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };
    
    // Responder a requisições OPTIONS para CORS
    if (request.method === 'OPTIONS') {
        return new Response(null, { headers, status: 200 });
    }
    
    // Rota para obter todos os clientes e parceiros
    if (path.endsWith('/api/clientes-parceiros') && request.method === 'GET') {
        return new Response(JSON.stringify(clientesParceiros), { headers, status: 200 });
    }
    
    // Rota para obter apenas clientes
    if (path.endsWith('/api/clientes') && request.method === 'GET') {
        return new Response(JSON.stringify(clientesParceiros.clientes), { headers, status: 200 });
    }
    
    // Rota para obter apenas parceiros
    if (path.endsWith('/api/parceiros') && request.method === 'GET') {
        return new Response(JSON.stringify(clientesParceiros.parceiros), { headers, status: 200 });
    }
    
    // Rota para obter por categoria
    if (path.includes('/api/categoria/') && request.method === 'GET') {
        const categoria = decodeURIComponent(path.split('/').pop());
        const resultados = {
            clientes: clientesParceiros.clientes.filter(item => item.categoria === categoria),
            parceiros: clientesParceiros.parceiros.filter(item => item.categoria === categoria)
        };
        return new Response(JSON.stringify(resultados), { headers, status: 200 });
    }
    
    // Rota não encontrada
    return new Response(JSON.stringify({ error: 'Rota não encontrada' }), { headers, status: 404 });
}

// Listen for API calls
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});