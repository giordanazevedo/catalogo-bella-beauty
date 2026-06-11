// app.js

// Lista de Produtos Inicial (Padrão)
const defaultProducts = [
    {
        id: 1,
        name: "Combo Eudora Siàge Cauterização dos isos (Shampoo + Condicionador)",
        brand: "Eudora",
        category: "kit",
        price: 45.00,
        badge: "Mais Vendido",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E2023050804/EUD_E2023050804_SIAGE_CAUTERIZACAO_LISOS_SHAMPOO_CONDICIONADOR_FRONTAL_01.jpg",
        description: "O Combo Siàge Cauterização dos Fios devolve a saúde aos cabelos danificados. Cauteriza os fios instantaneamente e preenche as áreas fragilizadas, garantindo cabelos ultra macios, selados, brilhantes e profundamente nutridos. Contém: 01 Shampoo 250ml, 01 Condicionador 200ml e 01 Máscara de Cauterização 250g."
    },
    {
        id: 2,
        name: "Combo Eudora Siàge Nutri Rosé (Shampoo 250ml + Condicionador 200ml)",
        brand: "Eudora",
        category: "kit",
        price: 45.00,
        badge: "Destaque",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E2023040615/E2023040615_SIAGE_NUTRI_ROSE_SHAMPOO_CONDICIONADOR_principal_1.jpg",
        description: "O Combo Siàge Nutri Rosé conta com efeito anti-tesoura: nutrição profunda até a 3ª camada, reparação instantânea das pontas sem precisar cortar. Nutre e hidrata os cabelos fragilizados."
    },
    {
        id: 3,
        name: "Combo Siàge Hair Plastia Shampoo + Condicionador",
        brand: "Eudora",
        category: "kit",
        price: 45.00,
        badge: "",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E2021101403/E2021101403.jpg",
        description: "O Condicionador Siàge Cauterização dos Fios desembaraça os fios imediatamente, sela as cutículas e protege o cabelo contra a quebra. Garante brilho espelhado e maciez intensa sem pesar nos fios."
    },
    {
        id: 4,
        name: "Combo Siàge Volume Imediato: Shampoo 250ml + Condicionador 200ml",
        brand: "Eudora",
        category: "kit",
        price: 45.00,
        badge: "Recomendado",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/product/E2026020401/02f5493c-20a6-446c-8428-f4e8b33e0a56-e2026020401.jpg",
        description: "A Máscara Capilar Siàge Cauterização dos Fios proporciona hidratação profunda e cauteriza a fibra capilar desde a primeira aplicação. Age repondo a massa perdida, preenchendo as fissuras do fio e reduzindo a quebra capilar de forma imediata."
    },
    {
        id: 5,
        name: "Combo Siàge Liso Intenso: Shampoo 250ml + Condicionador 200ml",
        brand: "Eudora",
        category: "kit",
        price: 45.00,
        badge: "Novidade",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E2023040609/E2023040609_COMBO_SIAGE_LISO_INTENSO_SHAMPOO_CONDICIONADOR_PRINCIPAL_1.jpg",
        description: "O Combo Siàge Liso Intenso proporciona cabelos lisos perfeitos por muito mais tempo. O shampoo limpa suavemente sem ressecar, enquanto o condicionador desembaraça imediatamente, reduz o volume e combate o frizz, com proteção térmica de até 230°C."
    },
    {
        id: 6,
        name: "Combo Siàge Resgate Imediato: Shampoo 250ml + Condicionador 200ml",
        brand: "Eudora",
        category: "kit",
        price: 45.00,
        badge: "Novidade",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/product/E2024091420/5aa5917b-7846-4962-9f0b-74d45fb01783-e2024091420-siage-resgate-imediato-shampoo-condicionador.jpg",
        description: "O Combo Siàge Resgate Imediato proporciona resgate instantâneo para cabelos extremamente danificados. O shampoo limpa suavemente sem ressecar e o condicionador sela as cutículas, reduzindo a porosidade e a quebra, ideal para a etapa de reconstrução capilar."
    },
    {
        id: 7,
        name: "Óleo Nutritivo Ox Nutre 120Ml",
        brand: "OX",
        category: "oleo",
        price: 20.00,
        badge: "",
        image: "https://acdn-us.mitiendanube.com/stores/003/130/602/products/7-4a1b8fcf561f8688c417110303185640-640-0.webp",
        description: "O Óleo OX Nutre é ideal para cabelos ressecados e sem brilho. Nutre os fios, controla o frizz e sela as cutículas proporcionando cabelos nutridos sem pesar. Possui óleos essenciais de cálamo, mirra e oliva."
    },
    {
        id: 8,
        name: "Combo Siàge Glow Expert: Shampoo 250ml + Condicionador 200ml",
        brand: "Eudora",
        category: "kit",
        price: 45.00,
        badge: "",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E2023020313/E2023020313_SIAGE_GLOW_EXPERT_SHAMPOO_CONDICIONADOR.jpg",
        description: "O Combo Siàge Glow Expert limpa suavemente os fios e condiciona profundamente, proporcionando brilho espelhado, alta luminosidade e maciez intensa. Contém: 01 Shampoo 250ml e 01 Condicionador 200ml."
    },
    {
        id: 9,
        name: "Pantene Pro-V Miracles Óleo Capilar Milagroso Queratina Nutrição, Brilho E Proteção 95ml",
        brand: "Pantene",
        category: "oleo",
        price: 20.00,
        badge: "Oferta",
        image: "https://m.media-amazon.com/images/I/51EGAzMzgnL._AC_SL1200_.jpg",
        description: "Pantene Pro-V Miracles Óleo Capilar Milagroso, uma experiência única de Pantene. Brilho imbatível para o seu dia a dia. Nutrição, brilho imbatível e proteção em um só Óleo Capilar que pode ser usado como finalizador e/ou leave-in. Contém 3x mais concentração de PRO-VITAMINA B5"
    },
    {
        id: 10,
        name: "Eudora Siàge Hair-Plastia Máscara Capilar 250g",
        brand: "Eudora",
        category: "mascara",
        price: 40.00,
        badge: "",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/product/E01644/54a3558b-8a62-43ae-86b3-2e67d158e422-eud-siage-novas-fotos-hair-plastia-mascara.jpg",
        description: "Seus cabelos estão ásperos e porosos, precisando de uma plástica capilar para recuperar a maciez e o brilho? A Máscara Capilar Siàge Hair-Plastia é um tratamento intensivo que corrige as lesões da fibra capilar e promove uma hidratação tridimensional, que recupera a beleza dos fios desde a primeira aplicação."
    },
    {
        id: 11,
        name: "Máscara Capilar Siàge Cauterização dos Lisos 250g",
        brand: "Eudora",
        category: "mascara",
        price: 40.00,
        badge: "",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E51749/EUD_51749_SIAGE_CAUTERIZACAO-LISOS_MASCARA-CAPILAR_FRONTAL_01.jpg",
        description: "Seus fios lisos ou alisados estão precisando de um tratamento intensivo? A Máscara Capilar Siàge Cauterização dos Lisos repara os danos causados pela química ou pelas fontes de calor. Seus fios ficam 3x mais lisos, anti-frágeis e protegidos, logo na primeira aplicação."
    },
    {
        id: 12,
        name: "Máscara Capilar Siàge Reconstrói Os Fios 250g",
        brand: "Eudora",
        category: "mascara",
        price: 40.00,
        badge: "",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E53521/SIAGE_MASCARA_CAPILAR_RECONSTROI_OS_FIOS_E53521_PRINCIPAL_1.jpg",
        description: "A Máscara Siàge Reconstrói os Fios age como um verdadeiro Creme de Reconstrução Capilar, entregando um tratamento intensivo para recuperar os cabelos de forma imediata."
    },
    {
        id: 13,
        name: "Máscara Capilar Siàge Acelera o Crescimento 250g",
        brand: "Eudora",
        category: "mascara",
        price: 40.00,
        badge: "",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E53506/SIAGE_ACELERA_O_CRESCIMENTO_MASCARA_E53506_RPCK_PRINCIPAL_1.jpg",
        description: "Seu cabelo tem dificuldade para crescer forte e saudável? A Máscara Capilar Siàge Acelera O Crescimento faz com que eles ganhem volume e comprimento, além de atuar na prevenção da queda. Seus fios crescem até 3cm in 2 meses* com redução expressiva da quebra e aumento da vida útil dos fios."
    },
    {
        id: 14,
        name: "Máscara Capilar Siàge Dermo Hair Resistência Antiqueda 250g",
        brand: "Eudora",
        category: "mascara",
        price: 40.00,
        badge: "",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/product/E57491/30ba7d0d-6884-4e4b-bd63-13f106a4f23b-e57491-siage-mascara-250g-frontal.jpg",
        description: "A Máscara Capilar Siàge Dermo Hair Resistência Antiqueda fortalece a fibra capilar e reduz a queda de cabelo desde a primeira aplicação, devolvendo a densidade e a resistência aos fios."
    },
    {
        id: 15,
        name: "Combo Siàge Resgate Imediato: Shampoo 250ml + Condicionador 200ml + Máscara Capilar 250g",
        brand: "Eudora",
        category: "kit",
        price: 80.00,
        badge: "",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/product/E2024050804/bc5f7cf3-7694-4385-98d7-af5b1c439cc7-e2024050804-siage-resgate-imediato.jpg",
        description: "Ideal para a sua rotina de hair care, o Combo Siàge Resgate Imediato traz shampoo e condicionador para a limpeza diária e máscara capilar para o tratamento semanal. Com a exclusiva Biotecnologia Affinité 4D e fórmulas enriquecidas com FIBER Restore®, Siàge Resgate Imediato traz a etapa de reconstrução do cronograma capilar, resgatando imediatamente fios com danos persistentes."
    },
    {
        id: 16,
        name: "Combo Siàge Hair Plastia Shampoo + Máscara + Condicionador",
        brand: "Eudora",
        category: "kit",
        price: 80.00,
        badge: "",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E2021101405/E2021101405.jpg",
        description: "O Combo Siàge Hair Plastia Shampoo + Máscara + Condicionador oferece tratamento completo de plástica capilar. Corrige lesões do fio, hidrata tridimensionalmente e elimina o ressecamento para fios saudáveis, brilhantes e macios."
    },
    {
        id: 17,
        name: "Combo Siàge Glow Expert: Shampoo 250ml + Condicionador 200ml + Máscara Capilar 250g",
        brand: "Eudora",
        category: "kit",
        price: 80.00,
        badge: "",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E2023020312/E2022020312_SIAGE_GLOW_EXPERT_SHAMPOO_CONDICIONADOR_MASCARA.jpg",
        description: "O Combo Siàge Glow Expert entrega fios com brilho espelhado e alta luminosidade por muito mais tempo. Limpa, condiciona e hidrata profundamente com fórmula inovadora enriquecida com flor de hibisco."
    },
    {
        id: 18,
        name: "Máscara Capilar Siàge Nutri Rosé 250g",
        brand: "Eudora",
        category: "mascara",
        price: 40.00,
        badge: "",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E53437/SIAGE_NUTRI_ROSE_MASCARA_CAPILAR_E53437_PRINCIPAL_1.jpg",
        description: "A Máscara Capilar Siàge Nutri Rosé promove uma nutrição profunda e imediata. Repara as pontas sem pesar e devolve a vitalidade aos cabelos fragilizados, garantindo fios nutridos, macios e sem pontas duplas."
    },
    {
        id: 19,
        name: "Combo Siàge Cauterização dos Lisos: Shampoo 250ml + Condicionador 200ml + Máscara Capilar 250g",
        brand: "Eudora",
        category: "kit",
        price: 80.00,
        badge: "",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E2023050803/EUD_2023050803_SIAGE_CAUTERIZACAO_LISOS_SHAMPOO_CONDICIONADOR_MASCARA_FRONTAL_01.jpg",
        description: "O Combo Siàge Cauterização dos Lisos: Shampoo + Condicionador + Máscara garante os melhores resultados para fios alinhados, disciplinados e macios no pós e pré química, sem deixar a hidratação de lado."
    },
    {
        id: 20,
        name: "Eudora Kit Siàge Nutri Rosé: Shampoo 250ml + Máscara 250g + Condicionador 200ml",
        brand: "Eudora",
        category: "kit",
        price: 80.00,
        badge: "",
        image: "https://m.media-amazon.com/images/I/61Ta2MgQWSL._AC_SL1000_.jpg",
        description: "O Eudora Kit Siàge Nutri Rosé promove nutrição profunda e imediata. Repara pontas sem pesar e devolve a vitalidade aos cabelos fragilizados. Contém: 01 Shampoo 250ml, 01 Condicionador 200ml e 01 Máscara Capilar 250g."
    },

    {
        id: 22,
        name: "Máscara Capilar Siàge Volume Imediato 250g",
        brand: "Eudora",
        category: "mascara",
        price: 40.00,
        badge: "",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/product/E87559/35a890c0-230a-4c5e-baba-e26061a379f1-e87559-mascara-volume-imediato-1.jpg",
        description: "A Máscara Capilar Siàge Volume Imediato reconstrói e encorpa a fibra capilar, dando volume instantâneo aos cabelos finos e minguados sem pesar."
    },
    {
        id: 23,
        name: "Eudora Kit Siàge Cica-Therapy: Shampoo 250ml + Condicionador 200ml",
        brand: "Eudora",
        category: "kit",
        price: 45.00,
        badge: "",
        image: "https://m.media-amazon.com/images/I/51PVU9It2jL._AC_SL1000_.jpg",
        description: "O Kit Siàge Cica-Therapy faz uma cicatrização capilar imediata, tratando os fios danificados e resgatando a saúde do cabelo com fórmulas enriquecidas com esqualano e cica."
    },
    {
        id: 24,
        name: "Eudora Kit Siàge Cica-Therapy: Shampoo 250ml + Condicionador 200ml + Máscara Capilar 250g",
        brand: "Eudora",
        category: "kit",
        price: 80.00,
        badge: "",
        image: "https://m.media-amazon.com/images/I/515h+z9BXTL._AC_SY450_.jpg",
        description: "O Kit Siàge Cica-Therapy Completo proporciona o cronograma ideal de cicatrização capilar. Sela cutículas, reduz quebra e reconstrói fios severamente danificados por processos químicos. Contém: 01 Shampoo, 01 Condicionador e 01 Máscara."
    },
    {
        id: 25,
        name: "Máscara Capilar Siàge Glow Expert 250g",
        brand: "Eudora",
        category: "mascara",
        price: 40.00,
        badge: "",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/product/E47177/8212d8a5-c607-458d-95ae-a67f8b5e0ccd-e47177-siage-mascara-frontal.jpg",
        description: "A Máscara Capilar Siàge Glow Expert proporciona brilho espelhado e alta luminosidade por muito mais tempo. Trata cabelos opacos e indisciplinados, oferecendo hidratação e nutrição profunda sem pesar."
    },
    {
        id: 26,
        name: "L'Oréal Paris Elseve Óleo Extraordinário 100ml",
        brand: "L'Oréal Paris",
        category: "oleo",
        price: 0.00,
        badge: "Destaque",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_891488-MLA111876262926_062026-F.webp",
        description: "Leave In Anti Frizz, Protetor Térmico e Tratamento Reconstrutor para todos os tipos de cabelo. O Óleo Extraordinário de L'Oréal Paris (Loreal) é o gesto de beleza que deixa seus cabelos sublimes, proporcionando nutrição, brilho e proteção térmica contra calor de até 230°C."
    },
    {
        id: 27,
        name: "Kit Elseve Liso dos Sonhos: Shampoo e Condicionador 400ml",
        brand: "L'Oréal Paris",
        category: "kit",
        price: 35.00,
        badge: "",
        image: "https://drogal.vtexassets.com/arquivos/ids/253090-1200-900?v=638804235499130000&width=1200&height=900&aspect=true",
        description: "O Kit Elseve Liso dos Sonhos é ideal para cabelos longos e com frizz. Sua fórmula enriquecida com queratina vegetal e manteiga de cacau limpa suavemente e nutre profundamente, combatendo o frizz por até 48 horas e mantendo os fios perfeitamente lisos e alinhados. Contém: 01 Shampoo 400ml e 01 Condicionador 400ml."
    },
    {
        id: 28,
        name: "Shampoo 375ml e Condicionador 170ml Elseve L'Oréal Paris Glycolic Gloss",
        brand: "L'Oréal Paris",
        category: "kit",
        price: 30.00,
        badge: "",
        image: "https://americanas.vtexassets.com/arquivos/ids/452276-1280-auto/7490175809_1SZ.webp?v=638750824953000000&quality=9",
        description: "O Kit Elseve Glycolic Gloss de L'Oréal Paris (Loreal) proporciona cabelos visivelmente mais saudáveis, macios e com um brilho gloss extraordinário que resiste a até 6 lavagens. Sua fórmula inovadora enriquecida com Ácido Glicólico combate a porosidade e sela as cutículas capilares. Contém: 01 Shampoo 375ml e 01 Condicionador 170ml."
    },
    {
        id: 29,
        name: "Kit Haskell Cavalo Forte Shampoo + Condicionador 300ml",
        brand: "Haskell",
        category: "kit",
        price: 50.00,
        badge: "",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_851096-MLU78921790577_092024-F.webp",
        description: "O Kit Haskell Cavalo Forte oferece força, brilho e crescimento para os cabelos. Enriquecido com Biotina, Pantenol e Queratina, reconstrói a fibra capilar, auxilia no crescimento saudável e reduz a quebra. Contém: 01 Shampoo 300ml e 01 Condicionador 300ml."
    },
    {
        id: 30,
        name: "Kit Elseve L'Oréal Paris Collagen Lifter: Shampoo + Condicionador",
        brand: "L'Oréal Paris",
        category: "kit",
        price: 40.00,
        badge: "",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/product/KT005427/cbee1eb1-70e9-43b7-a519-2360ae047c46-kt005427-20078387-20078422.png",
        description: "Kit com shampoo e condicionador para cabelos afinados e sem volume. Elseve L'Oréal Paris Collagen® Lifter proporciona volume por 72h e maciez extrema. Preenche a fibra capilar, encorpa os fios e devolve o movimento natural sem pesar."
    }
];

// Imagem Padrão caso o produto não tenha link
const defaultProductImage = "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&auto=format&fit=crop&q=80";

// Estado da Aplicação
let products = JSON.parse(localStorage.getItem("bella_beauty_products")) || defaultProducts;
let cart = JSON.parse(localStorage.getItem("bella_beauty_cart")) || [];
let activeCategory = "all";
let activeBrand = "all";
let searchQuery = "";
let whatsappNumber = localStorage.getItem("bella_beauty_whatsapp") || "5586999707484"; // Substituir com o seu real
let adminPassword = localStorage.getItem("bella_beauty_admin_password") || "bella123";
let isAdminAuthenticated = sessionStorage.getItem("bella_beauty_admin_auth") === "true";

// Seleção de Elementos DOM
const productGrid = document.getElementById("product-grid");
const resultsCount = document.getElementById("results-count");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const categoryFilters = document.getElementById("category-filters");
const brandFilters = document.getElementById("brand-filters");

// Elementos do Carrinho
const cartToggleBtn = document.getElementById("cart-toggle-btn");
const floatingCartBtn = document.getElementById("floating-cart-btn");
const cartDrawerBackdrop = document.getElementById("cart-drawer-backdrop");
const cartDrawerClose = document.getElementById("cart-drawer-close");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartCount = document.getElementById("cart-count");
const floatingCartCount = document.getElementById("floating-cart-count");
const cartTotalQty = document.getElementById("cart-total-qty");
const cartTotalVal = document.getElementById("cart-total-val");
const checkoutWhatsappBtn = document.getElementById("checkout-whatsapp-btn");

// Elementos do Modal de Detalhes
const detailModalBackdrop = document.getElementById("detail-modal-backdrop");
const detailModalClose = document.getElementById("detail-modal-close");
const detailModalContent = document.getElementById("detail-modal-content");

// Elementos do Modal Admin
const adminPanelBtn = document.getElementById("admin-panel-btn");
const adminModalBackdrop = document.getElementById("admin-modal-backdrop");
const adminModalClose = document.getElementById("admin-modal-close");
const adminProductsTableBody = document.getElementById("admin-products-table-body");
const adminProductForm = document.getElementById("admin-product-form");
const editProductIdInput = document.getElementById("edit-product-id");
const btnCancelEdit = document.getElementById("btn-cancel-edit");
const tabFormTitle = document.getElementById("tab-form-title");

// Elementos do Form
const prodNameInput = document.getElementById("prod-name");
const prodBrandSelect = document.getElementById("prod-brand");
const prodCategorySelect = document.getElementById("prod-category");
const prodPriceInput = document.getElementById("prod-price");
const prodBadgeInput = document.getElementById("prod-badge");
const prodImgInput = document.getElementById("prod-img");
const prodImgPreview = document.getElementById("prod-img-preview");
const prodDescInput = document.getElementById("prod-desc");
const cfgWhatsappInput = document.getElementById("cfg-whatsapp");
const cfgPasswordInput = document.getElementById("cfg-password");

// Elementos do Modal de Autenticação do Admin
const adminLoginModalBackdrop = document.getElementById("admin-login-modal-backdrop");
const adminLoginModalClose = document.getElementById("admin-login-modal-close");
const adminLoginForm = document.getElementById("admin-login-form");
const adminPasswordInput = document.getElementById("admin-password-input");

// Toast Container
const toastContainer = document.getElementById("toast-container");

// Inicialização da Aplicação
function init() {
    // Migração: se o ID 2 no localStorage ainda for o antigo (Cauterização), atualiza para o novo (Nutri Rosé)
    const stored = localStorage.getItem("bella_beauty_products");
    if (stored) {
        let storedProducts = JSON.parse(stored);

        // Atualização do ID 2 (Nutri Rosé)
        const idx = storedProducts.findIndex(p => p.id === 2);
        if (idx > -1 && storedProducts[idx].name.includes("Cauterização")) {
            storedProducts[idx].name = "Combo Eudora Siàge Nutri Rosé (Shampoo 250ml + Condicionador 200ml)";
            storedProducts[idx].category = "kit";
            storedProducts[idx].price = 84.90;
            storedProducts[idx].image = "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E2023040615/E2023040615_SIAGE_NUTRI_ROSE_SHAMPOO_CONDICIONADOR_principal_1.jpg";
            storedProducts[idx].description = "O Combo Siàge Nutri Rosé conta com efeito anti-tesoura: nutrição profunda até a 3ª camada, reparação instantânea das pontas sem precisar cortar. Nutre e hidrata os cabelos fragilizados.";
        }

        // Migração: adicionar o Combo Liso Intenso e deslocar IDs 5+
        const hasLisoIntenso = storedProducts.some(p => p.name.includes("Liso Intenso"));
        if (!hasLisoIntenso) {
            // Deslocar IDs de 5 em diante para os produtos padrão (id < 1000)
            storedProducts.forEach(p => {
                if (p.id >= 5 && p.id < 1000) {
                    p.id += 1;
                }
            });
            // Criar e inserir o novo produto no ID 5
            const lisoIntensoProduct = {
                id: 5,
                name: "Combo Siàge Liso Intenso: Shampoo 250ml + Condicionador 200ml",
                brand: "Eudora",
                category: "kit",
                price: 45.00,
                badge: "Novidade",
                image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E2023040609/E2023040609_COMBO_SIAGE_LISO_INTENSO_SHAMPOO_CONDICIONADOR_PRINCIPAL_1.jpg",
                description: "O Combo Siàge Liso Intenso proporciona cabelos lisos perfeitos por muito mais tempo. O shampoo limpa suavemente sem ressecar, enquanto o condicionador desembaraça imediatamente, reduz o volume e combate o frizz, com proteção térmica de até 230°C."
            };

            // Inserir antes do produto que passou a ter ID 6 (antigo ID 5)
            const idx5 = storedProducts.findIndex(p => p.id === 6);
            if (idx5 > -1) {
                storedProducts.splice(idx5, 0, lisoIntensoProduct);
            } else {
                storedProducts.push(lisoIntensoProduct);
            }
        }

        // Migração: adicionar o Combo Resgate Imediato e deslocar IDs 6+
        const hasResgateImediato = storedProducts.some(p => p.name.includes("Resgate Imediato"));
        if (!hasResgateImediato) {
            // Deslocar IDs de 6 em diante para os produtos padrão (id < 1000)
            storedProducts.forEach(p => {
                if (p.id >= 6 && p.id < 1000) {
                    p.id += 1;
                }
            });
            // Criar e inserir o novo produto no ID 6
            const resgateImediatoProduct = {
                id: 6,
                name: "Combo Siàge Resgate Imediato: Shampoo 250ml + Condicionador 200ml",
                brand: "Eudora",
                category: "kit",
                price: 45.00,
                badge: "Novidade",
                image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/product/E2024091420/5aa5917b-7846-4962-9f0b-74d45fb01783-e2024091420-siage-resgate-imediato-shampoo-condicionador.jpg",
                description: "O Combo Siàge Resgate Imediato proporciona resgate instantâneo para cabelos extremamente danificados. O shampoo limpa suavemente sem ressecar e o condicionador sela as cutículas, reduzindo a porosidade e a quebra, ideal para a etapa de reconstrução capilar."
            };

            // Inserir antes do produto que passou a ter ID 7 (antigo ID 6)
            const idx6 = storedProducts.findIndex(p => p.id === 7);
            if (idx6 > -1) {
                storedProducts.splice(idx6, 0, resgateImediatoProduct);
            } else {
                storedProducts.push(resgateImediatoProduct);
            }
        }

        // Migração: atualizar ID 8 para Combo Siàge Glow Expert se for o antigo Revela os Cachos ou Natura Lumina
        const idx8 = storedProducts.findIndex(p => p.id === 8);
        if (idx8 > -1 && (storedProducts[idx8].name.includes("Cachos") || storedProducts[idx8].name.includes("Natura Lumina") || storedProducts[idx8].name.includes("Lumina"))) {
            storedProducts[idx8] = {
                id: 8,
                name: "Combo Siàge Glow Expert: Shampoo 250ml + Condicionador 200ml",
                brand: "Eudora",
                category: "kit",
                price: 45.00,
                badge: "",
                image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E2023020313/E2023020313_SIAGE_GLOW_EXPERT_SHAMPOO_CONDICIONADOR.jpg",
                description: "O Combo Siàge Glow Expert limpa suavemente os fios e condiciona profundamente, proporcionando brilho espelhado, alta luminosidade e maciez intensa. Contém: 01 Shampoo 250ml e 01 Condicionador 200ml."
            };
        }

        // Migração: adicionar as novas máscaras (IDs 10, 11, 12, 13) se não existirem
        const newProductsToAdd = [
            {
                id: 10,
                name: "Eudora Siàge Hair-Plastia Máscara Capilar 250g",
                brand: "Eudora",
                category: "mascara",
                price: 40.00,
                badge: "",
                image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/product/E01644/54a3558b-8a62-43ae-86b3-2e67d158e422-eud-siage-novas-fotos-hair-plastia-mascara.jpg",
                description: "Seus cabelos estão ásperos e porosos, precisando de uma plástica capilar para recuperar a maciez e o brilho? A Máscara Capilar Siàge Hair-Plastia é um tratamento intensivo que corrige as lesões da fibra capilar e promove uma hidratação tridimensional, que recupera a beleza dos fios desde a primeira aplicação."
            },
            {
                id: 11,
                name: "Máscara Capilar Siàge Cauterização dos Lisos 250g",
                brand: "Eudora",
                category: "mascara",
                price: 40.00,
                badge: "",
                image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E51749/EUD_51749_SIAGE_CAUTERIZACAO-LISOS_MASCARA-CAPILAR_FRONTAL_01.jpg",
                description: "Seus fios lisos ou alisados estão precisando de um tratamento intensivo? A Máscara Capilar Siàge Cauterização dos Lisos repara os danos causados pela química ou pelas fontes de calor. Seus fios ficam 3x mais lisos, anti-frágeis e protegidos, logo na primeira aplicação."
            },
            {
                id: 12,
                name: "Máscara Capilar Siàge Reconstrói Os Fios 250g",
                brand: "Eudora",
                category: "mascara",
                price: 40.00,
                badge: "",
                image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E53521/SIAGE_MASCARA_CAPILAR_RECONSTROI_OS_FIOS_E53521_PRINCIPAL_1.jpg",
                description: "A Máscara Siàge Reconstrói os Fios age como um verdadeiro Creme de Reconstrução Capilar, entregando um tratamento intensivo para recuperar os cabelos de forma imediata."
            },
            {
                id: 13,
                name: "Máscara Capilar Siàge Acelera o Crescimento 250g",
                brand: "Eudora",
                category: "mascara",
                price: 40.00,
                badge: "",
                image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E53506/SIAGE_ACELERA_O_CRESCIMENTO_MASCARA_E53506_RPCK_PRINCIPAL_1.jpg",
                description: "Seu cabelo tem dificuldade para crescer forte e saudável? A Máscara Capilar Siàge Acelera O Crescimento faz com que eles ganhem volume e comprimento, além de atuar na prevenção da queda. Seus fios crescem até 3cm em 2 meses* com redução expressiva da quebra e aumento da vida útil dos fios."
            },
            {
                id: 14,
                name: "Máscara Capilar Siàge Dermo Hair Resistência Antiqueda 250g",
                brand: "Eudora",
                category: "mascara",
                price: 40.00,
                badge: "",
                image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/product/E57491/30ba7d0d-6884-4e4b-bd63-13f106a4f23b-e57491-siage-mascara-250g-frontal.jpg",
                description: "A Máscara Capilar Siàge Dermo Hair Resistência Antiqueda fortalece a fibra capilar e reduz a queda de cabelo desde a primeira aplicação, devolvendo a densidade and a resistência aos fios."
            },
            {
                id: 15,
                name: "Combo Siàge Resgate Imediato: Shampoo 250ml + Condicionador 200ml + Máscara Capilar 250g",
                brand: "Eudora",
                category: "kit",
                price: 80.00,
                badge: "",
                image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/product/E2024050804/bc5f7cf3-7694-4385-98d7-af5b1c439cc7-e2024050804-siage-resgate-imediato.jpg",
                description: "Ideal para a sua rotina de hair care, o Combo Siàge Resgate Imediato traz shampoo e condicionador para a limpeza diária e máscara capilar para o tratamento semanal. Com a exclusiva Biotecnologia Affinité 4D e fórmulas enriquecidas com FIBER Restore®, Siàge Resgate Imediato traz a etapa de reconstrução do cronograma capilar, resgatando imediatamente fios com danos persistentes."
            },
            {
                id: 16,
                name: "Combo Siàge Hair Plastia Shampoo + Máscara + Condicionador",
                brand: "Eudora",
                category: "kit",
                price: 80.00,
                badge: "",
                image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E2021101405/E2021101405.jpg",
                description: "O Combo Siàge Hair Plastia Shampoo + Máscara + Condicionador oferece tratamento completo de plástica capilar. Corrige lesões do fio, hidrata tridimensionalmente e elimina o ressecamento para fios saudáveis, brilhantes e macios."
            },
            {
                id: 17,
                name: "Combo Siàge Glow Expert: Shampoo 250ml + Condicionador 200ml + Máscara Capilar 250g",
                brand: "Eudora",
                category: "kit",
                price: 80.00,
                badge: "",
                image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E2023020312/E2022020312_SIAGE_GLOW_EXPERT_SHAMPOO_CONDICIONADOR_MASCARA.jpg",
                description: "O Combo Siàge Glow Expert entrega fios com brilho espelhado e alta luminosidade por muito mais tempo. Limpa, condiciona e hidrata profundamente com fórmula inovadora enriquecida com flor de hibisco."
            },
            {
                id: 18,
                name: "Máscara Capilar Siàge Nutri Rosé 250g",
                brand: "Eudora",
                category: "mascara",
                price: 40.00,
                badge: "",
                image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E53437/SIAGE_NUTRI_ROSE_MASCARA_CAPILAR_E53437_PRINCIPAL_1.jpg",
                description: "A Máscara Capilar Siàge Nutri Rosé promove uma nutrição profunda e imediata. Repara as pontas sem pesar e devolve a vitalidade aos cabelos fragilizados, garantindo fios nutridos, macios e sem pontas duplas."
            },
            {
                id: 19,
                name: "Combo Siàge Cauterização dos Lisos: Shampoo 250ml + Condicionador 200ml + Máscara Capilar 250g",
                brand: "Eudora",
                category: "kit",
                price: 80.00,
                badge: "",
                image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E2023050803/EUD_2023050803_SIAGE_CAUTERIZACAO_LISOS_SHAMPOO_CONDICIONADOR_MASCARA_FRONTAL_01.jpg",
                description: "O Combo Siàge Cauterização dos Lisos: Shampoo + Condicionador + Máscara garante os melhores resultados para fios alinhados, disciplinados e macios no pós e pré química, sem deixar a hidratação de lado."
            },
            {
                id: 20,
                name: "Eudora Kit Siàge Nutri Rosé: Shampoo 250ml + Máscara 250g + Condicionador 200ml",
                brand: "Eudora",
                category: "kit",
                price: 80.00,
                badge: "",
                image: "https://m.media-amazon.com/images/I/61Ta2MgQWSL._AC_SL1000_.jpg",
                description: "O Eudora Kit Siàge Nutri Rosé promove nutrição profunda e imediata. Repara pontas sem pesar e devolve a vitalidade aos cabelos fragilizados. Contém: 01 Shampoo 250ml, 01 Condicionador 200ml e 01 Máscara Capilar 250g."
            },

            {
                id: 22,
                name: "Máscara Capilar Siàge Volume Imediato 250g",
                brand: "Eudora",
                category: "mascara",
                price: 40.00,
                badge: "",
                image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/product/E87559/35a890c0-230a-4c5e-baba-e26061a379f1-e87559-mascara-volume-imediato-1.jpg",
                description: "A Máscara Capilar Siàge Volume Imediato reconstrói e encorpa a fibra capilar, dando volume instantâneo aos cabelos finos e minguados sem pesar."
            },
            {
                id: 23,
                name: "Eudora Kit Siàge Cica-Therapy: Shampoo 250ml + Condicionador 200ml",
                brand: "Eudora",
                category: "kit",
                price: 45.00,
                badge: "",
                image: "https://m.media-amazon.com/images/I/51PVU9It2jL._AC_SL1000_.jpg",
                description: "O Kit Siàge Cica-Therapy faz uma cicatrização capilar imediata, tratando os fios danificados e resgatando a saúde do cabelo com fórmulas enriquecidas com esqualano e cica."
            },
            {
                id: 24,
                name: "Eudora Kit Siàge Cica-Therapy: Shampoo 250ml + Condicionador 200ml + Máscara Capilar 250g",
                brand: "Eudora",
                category: "kit",
                price: 80.00,
                badge: "",
                image: "https://m.media-amazon.com/images/I/515h+z9BXTL._AC_SY450_.jpg",
                description: "O Kit Siàge Cica-Therapy Completo proporciona o cronograma ideal de cicatrização capilar. Sela cutículas, reduz quebra e reconstrói fios severamente danificados por processos químicos. Contém: 01 Shampoo, 01 Condicionador e 01 Máscara."
            },
            {
                id: 25,
                name: "Máscara Capilar Siàge Glow Expert 250g",
                brand: "Eudora",
                category: "mascara",
                price: 40.00,
                badge: "",
                image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/product/E47177/8212d8a5-c607-458d-95ae-a67f8b5e0ccd-e47177-siage-mascara-frontal.jpg",
                description: "A Máscara Capilar Siàge Glow Expert proporciona brilho espelhado e alta luminosidade por muito mais tempo. Trata cabelos opacos e indisciplinados, oferecendo hidratação e nutrição profunda sem pesar."
            },
            {
                id: 26,
                name: "L'Oréal Paris Elseve Óleo Extraordinário 100ml",
                brand: "L'Oréal Paris",
                category: "oleo",
                price: 20.00,
                badge: "Destaque",
                image: "https://http2.mlstatic.com/D_NQ_NP_2X_891488-MLA111876262926_062026-F.webp",
                description: "Leave In Anti Frizz, Protetor Térmico e Tratamento Reconstrutor para todos os tipos de cabelo. O Óleo Extraordinário de L'Oréal Paris (Loreal) é o gesto de beleza que deixa seus cabelos sublimes, proporcionando nutrição, brilho e proteção térmica contra calor de até 230°C."
            },
            {
                id: 27,
                name: "Kit Elseve Liso dos Sonhos: Shampoo e Condicionador 400ml",
                brand: "L'Oréal Paris",
                category: "kit",
                price: 35.00,
                badge: "",
                image: "https://drogal.vtexassets.com/arquivos/ids/253090-1200-900?v=638804235499130000&width=1200&height=900&aspect=true",
                description: "O Kit Elseve Liso dos Sonhos é ideal para cabelos longos e com frizz. Sua fórmula enriquecida com queratina vegetal e manteiga de cacau limpa suavemente e nutre profundamente, combatendo o frizz por até 48 horas e mantendo os fios perfeitamente lisos e alinhados. Contém: 01 Shampoo 400ml e 01 Condicionador 400ml."
            },
            {
                id: 28,
                name: "Shampoo 375ml e Condicionador 170ml Elseve L'Oréal Paris Glycolic Gloss",
                brand: "L'Oréal Paris",
                category: "kit",
                price: 30.00,
                badge: "",
                image: "https://americanas.vtexassets.com/arquivos/ids/452276-1280-auto/7490175809_1SZ.webp?v=638750824953000000&quality=9",
                description: "O Kit Elseve Glycolic Gloss de L'Oréal Paris (Loreal) proporciona cabelos visivelmente mais saudáveis, macios e com um brilho gloss extraordinário que resiste a até 6 lavagens. Sua fórmula inovadora enriquecida com Ácido Glicólico combate a porosidade e sela as cutículas capilares. Contém: 01 Shampoo 375ml e 01 Condicionador 170ml."
            },
            {
                id: 29,
                name: "Kit Haskell Cavalo Forte Shampoo + Condicionador 300ml",
                brand: "Haskell",
                category: "kit",
                price: 50.00,
                badge: "",
                image: "https://http2.mlstatic.com/D_NQ_NP_2X_851096-MLU78921790577_092024-F.webp",
                description: "O Kit Haskell Cavalo Forte oferece força, brilho e crescimento para os cabelos. Enriquecido com Biotina, Pantenol e Queratina, reconstrói a fibra capilar, auxilia no crescimento saudável e reduz a quebra. Contém: 01 Shampoo 300ml e 01 Condicionador 300ml."
            },
            {
                id: 30,
                name: "Kit Elseve L'Oréal Paris Collagen Lifter: Shampoo + Condicionador",
                brand: "L'Oréal Paris",
                category: "kit",
                price: 40.00,
                badge: "",
                image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/product/KT005427/cbee1eb1-70e9-43b7-a519-2360ae047c46-kt005427-20078387-20078422.png",
                description: "Kit com shampoo e condicionador para cabelos afinados e sem volume. Elseve L'Oréal Paris Collagen® Lifter proporciona volume por 72h e maciez extrema. Preenche a fibra capilar, encorpa os fios e devolve o movimento natural sem pesar."
            }
        ];

        newProductsToAdd.forEach(newP => {
            const exists = storedProducts.some(p => p.id === newP.id || p.name === newP.name);
            if (!exists) {
                const idxToInsert = storedProducts.findIndex(p => p.id > newP.id);
                if (idxToInsert > -1) {
                    storedProducts.splice(idxToInsert, 0, newP);
                } else {
                    storedProducts.push(newP);
                }
            }
        });

        // Garantir que o preço das máscaras (IDs 10, 11, 12, 13, 14, 18, 22, 25) seja atualizado para 40.00 caso já tenham sido migradas anteriormente
        const maskIds = [10, 11, 12, 13, 14, 18, 22, 25];
        maskIds.forEach(id => {
            const idx = storedProducts.findIndex(p => p.id === id);
            if (idx > -1) {
                storedProducts[idx].price = 40.00;
            }
        });

        // Garantir que produtos com preço antigo de R$ 120,00 sejam atualizados para R$ 80,00
        storedProducts.forEach(p => {
            if (p.price === 120.00) {
                p.price = 80.00;
            }
        });

        products = storedProducts;
        localStorage.setItem("bella_beauty_products", JSON.stringify(products));
    }

    // Sincronizar preços no carrinho caso o preço no catálogo tenha mudado
    let cartModified = false;
    cart.forEach(item => {
        const prod = products.find(p => p.id === item.id);
        if (prod && item.price !== prod.price) {
            item.price = prod.price;
            cartModified = true;
        }
    });
    if (cartModified) {
        localStorage.setItem("bella_beauty_cart", JSON.stringify(cart));
    }

    renderProducts();
    updateCartUI();
    setupEventListeners();
    initAdminPanel();
}

// Configurar ouvintes de eventos
function setupEventListeners() {
    // Busca em tempo real e botão de busca
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderProducts();
    });

    searchBtn.addEventListener("click", () => {
        searchQuery = searchInput.value.toLowerCase().trim();
        renderProducts();
    });

    // Filtros de Categoria
    categoryFilters.addEventListener("click", (e) => {
        if (e.target.classList.contains("filter-chip")) {
            // Remover classe active de todos
            categoryFilters.querySelectorAll(".filter-chip").forEach(chip => chip.classList.remove("active"));
            // Adicionar no clicado
            e.target.classList.add("active");
            activeCategory = e.target.dataset.category;
            renderProducts();
        }
    });

    // Filtros de Marca
    brandFilters.addEventListener("click", (e) => {
        if (e.target.classList.contains("filter-chip")) {
            brandFilters.querySelectorAll(".filter-chip").forEach(chip => chip.classList.remove("active"));
            e.target.classList.add("active");
            activeBrand = e.target.dataset.brand;
            renderProducts();
        }
    });

    // Abrir/Fechar Carrinho
    cartToggleBtn.addEventListener("click", openCart);
    floatingCartBtn.addEventListener("click", openCart);
    cartDrawerClose.addEventListener("click", closeCart);
    cartDrawerBackdrop.addEventListener("click", (e) => {
        if (e.target === cartDrawerBackdrop) closeCart();
    });

    // Abrir/Fechar Modais
    detailModalClose.addEventListener("click", closeDetailModal);
    detailModalBackdrop.addEventListener("click", (e) => {
        if (e.target === detailModalBackdrop) closeDetailModal();
    });

    adminPanelBtn.addEventListener("click", openAdminModal);
    adminModalClose.addEventListener("click", closeAdminModal);
    adminModalBackdrop.addEventListener("click", (e) => {
        if (e.target === adminModalBackdrop) closeAdminModal();
    });

    // Fechar modal de login do admin
    if (adminLoginModalClose) {
        adminLoginModalClose.addEventListener("click", closeAdminLoginModal);
    }
    if (adminLoginModalBackdrop) {
        adminLoginModalBackdrop.addEventListener("click", (e) => {
            if (e.target === adminLoginModalBackdrop) closeAdminLoginModal();
        });
    }

    // Submit do form de login do admin
    if (adminLoginForm) {
        adminLoginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const pwd = adminPasswordInput ? adminPasswordInput.value : "";
            if (pwd === adminPassword) {
                isAdminAuthenticated = true;
                sessionStorage.setItem("bella_beauty_admin_auth", "true");
                if (adminPasswordInput) adminPasswordInput.value = "";
                closeAdminLoginModal();
                openAdminModal();
                showToast("Autenticado com sucesso!");
            } else {
                showToast("Senha incorreta!");
                if (adminPasswordInput) {
                    adminPasswordInput.value = "";
                    adminPasswordInput.focus();
                }
            }
        });
    }

    // Enviar pedido para o WhatsApp
    checkoutWhatsappBtn.addEventListener("click", sendOrderWhatsApp);

    // Pré-visualização de imagem no admin
    prodImgInput.addEventListener("input", (e) => {
        prodImgPreview.src = e.target.value || defaultProductImage;
    });
}

// Exibe Notificação Toast
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    // Pequeno delay para animação
    setTimeout(() => {
        toast.classList.add("show");
    }, 50);

    // Remover após 3 segundos
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- CONTROLE DOS PRODUTOS (CATÁLOGO) ---

// Retorna o limite de quantidade para um produto (10 para óleos, 7 para os demais)
function getProductLimit(product) {
    if (!product) return 7;
    return product.category === "oleo" ? 10 : 7;
}

// Retorna a prioridade de ordenação do produto
function getProductSortPriority(product) {
    if (!product) return 99;

    const nameLower = product.name.toLowerCase();
    const hasMascara = nameLower.includes("mascara") || nameLower.includes("máscara");

    // Grupo 1: Apenas Shampoo e Condicionador (individuais ou combos de 2 itens)
    if (product.category === "shampoo" || product.category === "condicionador" || (product.category === "kit" && !hasMascara)) {
        return 1;
    }

    // Grupo 2: Óleos
    if (product.category === "oleo") {
        return 2;
    }

    // Grupo 3: Máscaras (individuais)
    if (product.category === "mascara") {
        return 3;
    }

    // Grupo 4: Combos Completos (kits que contêm máscara)
    if (product.category === "kit" && hasMascara) {
        return 4;
    }

    return 5; // Qualquer outro produto
}

// Função auxiliar para remover acentos e diacríticos de uma string
function removeAccents(str) {
    if (!str) return "";
    return str.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function renderProducts() {
    const cleanSearchQuery = removeAccents(searchQuery);

    // Filtrar lista
    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === "all" || product.category === activeCategory;
        const matchesBrand = activeBrand === "all" || product.brand === activeBrand;

        const productName = removeAccents(product.name);
        const productBrand = removeAccents(product.brand);
        const productDesc = removeAccents(product.description || "");

        const matchesSearch = productName.includes(cleanSearchQuery) ||
            productBrand.includes(cleanSearchQuery) ||
            productDesc.includes(cleanSearchQuery);

        return matchesCategory && matchesBrand && matchesSearch;
    });

    // Ordenar produtos por prioridade (Shampoo/Cond -> Óleos -> Máscaras -> Combos Completos)
    filteredProducts.sort((a, b) => {
        const priorityA = getProductSortPriority(a);
        const priorityB = getProductSortPriority(b);
        if (priorityA !== priorityB) {
            return priorityA - priorityB;
        }
        return products.indexOf(a) - products.indexOf(b);
    });

    // Atualizar contador de resultados
    resultsCount.textContent = `Mostrando ${filteredProducts.length} produto${filteredProducts.length !== 1 ? 's' : ''}`;

    // Renderizar no grid
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem; opacity: 0.5;">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <p style="font-size: 1.1rem; font-weight: 500;">Nenhum produto encontrado</p>
                <p style="font-size: 0.9rem; color: var(--text-light); margin-top: 0.2rem;">Tente ajustar seus termos de busca ou filtros.</p>
            </div>
        `;
        return;
    }

    productGrid.innerHTML = filteredProducts.map(product => {
        const hasBadge = product.badge && product.badge.trim() !== "";
        const cartItem = cart.find(item => item.id === product.id);
        const currentQty = cartItem ? cartItem.qty : 0;
        const limit = getProductLimit(product);
        const isLimitReached = currentQty >= limit;
        const remaining = limit - currentQty;
        const availabilityHtml = remaining > 0
            ? `<span>Disponível: <strong>${remaining} un.</strong></span>`
            : `<span style="color: var(--accent); font-weight: 600;">Limite atingido</span>`;

        return `
            <div class="product-card" data-id="${product.id}">
                ${hasBadge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-image-container" onclick="viewProductDetails(${product.id})">
                    <img src="${product.image || defaultProductImage}" class="product-img" alt="${product.name}">
                </div>
                <div class="product-info">
                    <span class="product-brand">${product.brand}</span>
                    <h3 class="product-name" onclick="viewProductDetails(${product.id})">${product.name}</h3>
                    
                    <div class="product-price-container">
                        <span class="price-label">Preço:</span>
                        <span class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                    </div>

                    <div class="product-availability" style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.8rem; display: flex; align-items: center; gap: 4px;">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.7; color: ${remaining > 0 ? 'currentColor' : 'var(--accent)'};">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        ${availabilityHtml}
                    </div>
                    
                    <div class="product-actions">
                        ${isLimitReached ? `
                            <button class="btn btn-outline" disabled style="opacity: 0.6; cursor: not-allowed;">
                                Limite Atingido (${limit})
                            </button>
                        ` : `
                            <button class="btn btn-primary" onclick="addToCart(${product.id})">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                                Adicionar
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// Visualizar detalhes de um produto
function viewProductDetails(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const cartItem = cart.find(item => item.id === product.id);
    const currentQty = cartItem ? cartItem.qty : 0;
    const limit = getProductLimit(product);
    const isLimitReached = currentQty >= limit;

    detailModalContent.innerHTML = `
        <div class="product-detail-layout">
            <div class="product-detail-img-box">
                <img src="${product.image || defaultProductImage}" alt="${product.name}" class="product-detail-img">
            </div>
            <div class="product-detail-info">
                <span class="product-detail-brand">${product.brand}</span>
                <h2 class="product-detail-name">${product.name}</h2>
                <p class="product-detail-description">${product.description || 'Nenhuma descrição detalhada disponível para este produto.'}</p>
                
                <div style="margin-bottom: 1.2rem; font-size: 0.9rem; color: var(--text-secondary); display: flex; align-items: center; gap: 0.5rem; background: var(--bg-main); padding: 0.6rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border);">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <span>Limite: <strong>${limit} unidades</strong> ${currentQty > 0 ? `(no carrinho: ${currentQty})` : '(disponível)'}</span>
                </div>

                <div class="product-detail-price-box">
                    <div>
                        <span class="price-label" style="display: block; font-size: 0.9rem;">Preço de Venda:</span>
                        <span class="product-detail-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                    </div>
                    ${product.badge ? `<span class="product-badge" style="position:static; margin-top:0;">${product.badge}</span>` : ''}
                </div>
                
                ${isLimitReached ? `
                    <button class="btn btn-outline" style="width: 100%; padding: 1rem; opacity: 0.6; cursor: not-allowed;" disabled>
                        Limite de estoque atingido (${limit} un.)
                    </button>
                ` : `
                    <button class="btn btn-primary" style="width: 100%; padding: 1rem;" onclick="addToCart(${product.id}); closeDetailModal();">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        Adicionar ao Carrinho
                    </button>
                `}
            </div>
        </div>
    `;

    detailModalBackdrop.classList.add("open");
    document.body.style.overflow = "hidden"; // Desabilita o scroll do body
}

function closeDetailModal() {
    detailModalBackdrop.classList.remove("open");
    document.body.style.overflow = "";
}

// --- GERENCIAMENTO DO CARRINHO ---

function openCart() {
    cartDrawerBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    cartDrawerBackdrop.classList.remove("open");
    document.body.style.overflow = "";
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const limit = getProductLimit(product);
    const cartItem = cart.find(item => item.id === id);
    const currentQty = cartItem ? cartItem.qty : 0;

    if (currentQty >= limit) {
        showToast(`Limite máximo de ${limit} unidades atingido para este produto!`);
        return;
    }

    if (cartItem) {
        cartItem.qty += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            brand: product.brand,
            qty: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`Adicionado: ${product.name.substring(0, 20)}...`);
}

function changeQty(id, delta) {
    const item = cart.find(item => item.id === id);
    if (!item) return;

    if (delta > 0) {
        const product = products.find(p => p.id === id);
        const limit = product ? getProductLimit(product) : 7;
        if (item.qty + delta > limit) {
            showToast(`Limite máximo de ${limit} unidades atingido para este produto!`);
            return;
        }
    }

    item.qty += delta;

    if (item.qty <= 0) {
        removeFromCart(id);
    } else {
        saveCart();
        updateCartUI();
    }
}

function removeFromCart(id) {
    const item = cart.find(item => item.id === id);
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
    if (item) {
        showToast(`Removido: ${item.name.substring(0, 20)}...`);
    }
}

function saveCart() {
    localStorage.setItem("bella_beauty_cart", JSON.stringify(cart));
}

function updateCartUI() {
    // Contagem total
    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    cartCount.textContent = totalQty;
    floatingCartCount.textContent = totalQty;
    cartTotalQty.textContent = totalQty;

    // Toggle botão flutuante para mobile
    if (totalQty > 0) {
        floatingCartBtn.style.display = "flex";
    } else {
        floatingCartBtn.style.display = "none";
    }

    // Cálculo do total em dinheiro
    const totalVal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    cartTotalVal.textContent = `R$ ${totalVal.toFixed(2).replace('.', ',')}`;

    // Renderizar itens do carrinho
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p>Seu carrinho está vazio.</p>
                <button class="btn btn-outline" onclick="closeCart()" style="margin-top: 0.5rem; font-size: 0.85rem; padding: 0.5rem 1rem;">Ver Produtos</button>
            </div>
        `;
        checkoutWhatsappBtn.disabled = true;
        checkoutWhatsappBtn.style.opacity = "0.5";
        checkoutWhatsappBtn.style.cursor = "not-allowed";
        return;
    }

    checkoutWhatsappBtn.disabled = false;
    checkoutWhatsappBtn.style.opacity = "1";
    checkoutWhatsappBtn.style.cursor = "pointer";

    cartItemsContainer.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        const limit = product ? getProductLimit(product) : 7;
        const isMax = item.qty >= limit;
        return `
        <div class="cart-item">
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">&times;</button>
            <div class="cart-item-img-container">
                <img src="${item.image || defaultProductImage}" class="cart-item-img" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-bottom">
                    <span class="cart-item-price">R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</span>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                        <span class="qty-number">${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty(${item.id}, 1)" ${isMax ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : ''}>+</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }).join("");

    // Recalcular estados dos botões no catálogo
    renderProducts();
}

// Enviar pedido via WhatsApp
function sendOrderWhatsApp() {
    if (cart.length === 0) return;

    let message = "Olá! Vim do seu catálogo online e gostaria de fazer o seguinte pedido:\n\n";

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        message += `• *${item.qty}x* ${item.name}\n`;
        message += `  Marca: ${item.brand} | R$ ${item.price.toFixed(2).replace('.', ',')} cada\n`;
        message += `  Subtotal: R$ ${itemTotal.toFixed(2).replace('.', ',')}\n\n`;
    });

    const totalVal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    message += `*Valor Total do Pedido:* R$ ${totalVal.toFixed(2).replace('.', ',')}\n\n`;
    message += "Por favor, me confirme a disponibilidade e a forma de entrega/pagamento! 😊";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    // Abrir link em nova aba
    window.open(whatsappUrl, "_blank");
}

// --- PAINEL DE CONTROLE / ADMIN (LOCALSTORAGE) ---

function openAdminModal() {
    if (!isAdminAuthenticated) {
        openAdminLoginModal();
        return;
    }
    adminModalBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    renderAdminProductsTable();
}

function closeAdminModal() {
    adminModalBackdrop.classList.remove("open");
    document.body.style.overflow = "";
    resetAdminForm();
}

function openAdminLoginModal() {
    if (adminLoginModalBackdrop) {
        adminLoginModalBackdrop.classList.add("open");
        document.body.style.overflow = "hidden";
        if (adminPasswordInput) adminPasswordInput.focus();
    }
}

function closeAdminLoginModal() {
    if (adminLoginModalBackdrop) {
        adminLoginModalBackdrop.classList.remove("open");
        document.body.style.overflow = "";
        if (adminPasswordInput) adminPasswordInput.value = "";
    }
}

function initAdminPanel() {
    // Configurações das abas do Admin
    const tabs = document.querySelectorAll(".admin-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const target = tab.dataset.target;
            document.querySelectorAll(".admin-content-pane").forEach(pane => {
                pane.classList.remove("active");
            });
            document.getElementById(target).classList.add("active");
        });
    });

    // Carregar whatsapp nas configurações
    cfgWhatsappInput.value = whatsappNumber;
    cfgWhatsappInput.addEventListener("input", (e) => {
        const val = e.target.value.replace(/\D/g, ""); // Apenas números
        whatsappNumber = val;
        localStorage.setItem("bella_beauty_whatsapp", val);
    });

    // Carregar e atualizar senha nas configurações
    if (cfgPasswordInput) {
        cfgPasswordInput.value = adminPassword;
        cfgPasswordInput.addEventListener("input", (e) => {
            const val = e.target.value.trim();
            if (val) {
                adminPassword = val;
                localStorage.setItem("bella_beauty_admin_password", val);
            }
        });
    }

    // Form submit para salvar/criar produto
    adminProductForm.addEventListener("submit", (e) => {
        e.preventDefault();
        saveProductFromForm();
    });

    // Cancelar edição
    btnCancelEdit.addEventListener("click", () => {
        resetAdminForm();
        // Alternar aba de volta para a lista
        document.querySelector('[data-target="admin-tab-list"]').click();
    });

    // Backup JSON
    document.getElementById("btn-export-json").addEventListener("click", exportBackup);
    document.getElementById("btn-import-json").addEventListener("change", importBackup);
}

// Renderizar tabela de produtos do admin
function renderAdminProductsTable() {
    if (products.length === 0) {
        adminProductsTableBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 2rem; color: var(--text-light);">
                    Nenhum produto cadastrado no catálogo.
                </td>
            </tr>
        `;
        return;
    }

    adminProductsTableBody.innerHTML = products.map(product => `
        <tr class="admin-product-row">
            <td><img src="${product.image || defaultProductImage}" alt="Thumb"></td>
            <td>
                <div style="font-weight: 600; color: var(--text-primary); max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${product.name}
                </div>
                <div style="font-size:0.75rem; color: var(--text-light);">${product.category}</div>
            </td>
            <td>${product.brand}</td>
            <td style="font-weight: 600; color: var(--primary);">R$ ${product.price.toFixed(2).replace('.', ',')}</td>
            <td>
                <div class="admin-actions">
                    <button class="btn-edit" onclick="editProduct(${product.id})">Editar</button>
                    <button class="btn-danger" onclick="deleteProduct(${product.id})">Excluir</button>
                </div>
            </td>
        </tr>
    `).join("");
}

// Carregar produto para edição
window.editProduct = function (id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    editProductIdInput.value = product.id;
    prodNameInput.value = product.name;
    prodBrandSelect.value = product.brand;
    prodCategorySelect.value = product.category;
    prodPriceInput.value = product.price;
    prodBadgeInput.value = product.badge || "";
    prodImgInput.value = product.image || "";
    prodImgPreview.src = product.image || defaultProductImage;
    prodDescInput.value = product.description || "";

    // Trocar botão e título do form
    tabFormTitle.textContent = "Editar Produto";
    btnCancelEdit.style.display = "block";

    // Ir para a aba de formulário
    tabFormTitle.click();
}

// Salvar / Adicionar produto via form
function saveProductFromForm() {
    const id = editProductIdInput.value ? parseInt(editProductIdInput.value) : Date.now();
    const name = prodNameInput.value.trim();
    const brand = prodBrandSelect.value;
    const category = prodCategorySelect.value;
    const price = parseFloat(prodPriceInput.value);
    const badge = prodBadgeInput.value.trim();
    const image = prodImgInput.value.trim() || defaultProductImage;
    const description = prodDescInput.value.trim();

    if (!name || isNaN(price)) {
        showToast("Preencha todos os campos obrigatórios!");
        return;
    }

    const newProduct = { id, name, brand, category, price, badge, image, description };

    const editIndex = products.findIndex(p => p.id === id);
    if (editIndex > -1) {
        // Atualizar
        products[editIndex] = newProduct;
        showToast("Produto atualizado com sucesso!");
    } else {
        // Cadastrar novo
        products.unshift(newProduct); // Adiciona no início da lista
        showToast("Novo produto cadastrado!");
    }

    // Salvar localmente
    localStorage.setItem("bella_beauty_products", JSON.stringify(products));

    // Atualizar telas
    renderProducts();
    renderAdminProductsTable();
    resetAdminForm();

    // Voltar para a aba de lista
    document.querySelector('[data-target="admin-tab-list"]').click();
}

// Excluir produto
window.deleteProduct = function (id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    if (confirm(`Tem certeza que deseja excluir o produto "${product.name}"?`)) {
        products = products.filter(p => p.id !== id);

        // Também remover do carrinho se estiver lá
        cart = cart.filter(item => item.id !== id);
        saveCart();
        updateCartUI();

        localStorage.setItem("bella_beauty_products", JSON.stringify(products));
        renderProducts();
        renderAdminProductsTable();
        showToast("Produto removido do catálogo!");
    }
}

// Resetar Formulário Admin
function resetAdminForm() {
    adminProductForm.reset();
    editProductIdInput.value = "";
    prodImgPreview.src = defaultProductImage;
    tabFormTitle.textContent = "Cadastrar Novo Produto";
    btnCancelEdit.style.display = "none";
}

// Exportar Backup JSON
function exportBackup() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(products, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `backup_catalogo_bella_beauty_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Backup exportado com sucesso!");
}

// Importar Backup JSON
function importBackup(e) {
    const fileReader = new FileReader();
    const file = e.target.files[0];
    if (!file) return;

    fileReader.onload = function (event) {
        try {
            const importedProducts = JSON.parse(event.target.result);
            if (Array.isArray(importedProducts) && importedProducts.length > 0 && importedProducts[0].name) {
                if (confirm(`Deseja importar ${importedProducts.length} produtos? Isso substituirá o catálogo atual.`)) {
                    products = importedProducts;
                    localStorage.setItem("bella_beauty_products", JSON.stringify(products));
                    renderProducts();
                    renderAdminProductsTable();
                    showToast("Catálogo importado com sucesso!");
                }
            } else {
                alert("Erro: O formato do arquivo JSON de catálogo é inválido.");
            }
        } catch (err) {
            alert("Erro ao ler o arquivo JSON.");
        }
    };
    fileReader.readAsText(file);
}

// Iniciar Aplicação ao carregar
window.onload = init;
