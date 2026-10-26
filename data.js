
const recipes = [
    {
        id: 1,
        title: "Guiso Clásico de Carne",
        program: "STEW",
        time: "60 min",
        icon: "fa-fire-burner",
        description: "Un guiso tradicional, suave y con la carne deshaciéndose.",
        ingredients: [
            { name: "Aceite de oliva", amount: "20g" },
            { name: "Cebolla picada", amount: "120g" },
            { name: "Carne para guiso (cubos)", amount: "500g" },
            { name: "Zanahoria en rodajas", amount: "150g" },
            { name: "Patatas en trozos", amount: "400g" },
            { name: "Caldo de carne o agua", amount: "650g" },
            { name: "Tomate frito/triturado", amount: "100g" },
            { name: "Sal fina", amount: "10g" }
        ],
        steps: [
            "Coloca la olla sobre la balanza, presiona Tara y añade 20g de aceite y 120g de cebolla.",
            "Selecciona el programa CRUST/FRY por 10 minutos (tapa abierta) y pulsa START. Sofríe la cebolla.",
            "Añade los 500g de carne para sellarla durante los últimos minutos del programa. Cancela (botón Keep Warm/Cancel).",
            "Añade 150g de zanahoria, 400g de patatas, 100g de tomate y 10g de sal a la olla.",
            "Vierte los 650g de caldo.",
            "Cierra la tapa, selecciona STEW (Guisar), ajusta a 60 minutos y pulsa START."
        ]
    },
    {
        id: 2,
        title: "Crema de Verduras al Vapor",
        program: "STEAM/SOUP",
        time: "35 min",
        icon: "fa-bowl-food",
        description: "Sana y perfecta para cenar. Cocción exacta para mantener nutrientes.",
        ingredients: [
            { name: "Agua", amount: "1000g" },
            { name: "Calabacín en trozos", amount: "200g" },
            { name: "Zanahoria troceada", amount: "150g" },
            { name: "Puerro rebanado", amount: "100g" },
            { name: "Patata pelada", amount: "200g" },
            { name: "Aceite de oliva", amount: "15g" },
            { name: "Sal", amount: "8g" }
        ],
        steps: [
            "Pesa los 1000g de agua directamente en la cubeta.",
            "Añade los 200g de calabacín, 150g de zanahoria, 100g de puerro y 200g de patata al agua.",
            "Sazona con los 8g de sal y 15g de aceite.",
            "Cierra la tapa, selecciona STEAM / SOUP, ajusta el tiempo a 35 minutos y presiona START.",
            "Al finalizar, tritura todo el contenido en una licuadora o con batidora de mano."
        ]
    },
    {
        id: 3,
        title: "Yogur Natural Casero",
        program: "YOGURT",
        time: "8 horas",
        icon: "fa-spoon",
        description: "Fermentación controlada a 42°C perfectos, como indica el manual.",
        ingredients: [
            { name: "Leche entera", amount: "1000g" },
            { name: "Yogur natural (fermento)", amount: "120g" },
            { name: "Azúcar (opcional)", amount: "40g" }
        ],
        steps: [
            "En un bowl externo, mezcla los 1000g de leche con los 120g de yogur y 40g de azúcar. Bate suavemente para integrar.",
            "Vierte la mezcla directamente en la olla antiadherente (o en tarros de cristal colocados dentro).",
            "Cierra la tapa firmemente.",
            "Selecciona el programa YOGURT (el predeterminado es 8 horas) y presiona START.",
            "Al terminar, lleva el yogur al refrigerador por al menos 4 horas para que cuaje antes de consumir."
        ]
    },
    {
        id: 4,
        title: "Bizcocho Esponjoso Básico",
        program: "BAKING",
        time: "45 min",
        icon: "fa-cake-candles",
        description: "Función de horneado a 135°C ideal para repostería sin quemar los bordes.",
        ingredients: [
            { name: "Harina de repostería", amount: "200g" },
            { name: "Azúcar", amount: "150g" },
            { name: "Mantequilla derretida", amount: "100g" },
            { name: "Huevos enteros", amount: "150g (aprox 3)" },
            { name: "Leche", amount: "80g" },
            { name: "Polvo de hornear", amount: "10g" }
        ],
        steps: [
            "En un bowl, bate los 150g de huevos con los 150g de azúcar hasta que la mezcla blanquee.",
            "Integra los 100g de mantequilla derretida y los 80g de leche.",
            "Pesa 200g de harina y 10g de polvo de hornear, tamízalos y mezcla con espátula (movimientos envolventes).",
            "Engrasa ligeramente el fondo y paredes bajas de la olla Moulinex.",
            "Vierte la masa, cierra la tapa, selecciona BAKING / DESSERT, ajusta a 45 minutos y pulsa START."
        ]
    },
    {
        id: 5,
        title: "Arroz Blanco Perfecto",
        program: "RICE",
        time: "Automático",
        icon: "fa-bowl-rice",
        description: "Cocción inteligente por sensores de vapor. No requiere ajustar tiempo.",
        ingredients: [
            { name: "Arroz blanco normal", amount: "300g" },
            { name: "Agua fría", amount: "Hasta marca 2 Cups (aprox 450g)" },
            { name: "Sal fina", amount: "5g" },
            { name: "Aceite de oliva", amount: "10g" }
        ],
        steps: [
            "Lava el arroz en un colador bajo el grifo y escúrrelo bien.",
            "Pesa exactamente los 300g de arroz dentro de la olla.",
            "Añade agua fría hasta que el nivel alcance exactamente la marca interior que dice '2 Cups'.",
            "Agrega 5g de sal y 10g de aceite, remueve una sola vez.",
            "Cierra la tapa, selecciona RICE/CEREAL y pulsa START. La máquina calculará el tiempo sola y pitará al terminar."
        ]
    },
    {
        id: 6,
        title: "Risotto de Champiñones",
        program: "RISOTTO",
        time: "Auto + 10 min",
        icon: "fa-utensils",
        description: "La máquina gestiona la absorción del caldo progresivamente.",
        ingredients: [
            { name: "Arroz arborio/risotto", amount: "300g" },
            { name: "Champiñones laminados", amount: "200g" },
            { name: "Cebolla picada fina", amount: "80g" },
            { name: "Mantequilla", amount: "40g" },
            { name: "Caldo de pollo o verduras", amount: "800g" },
            { name: "Queso parmesano rallado", amount: "50g" }
        ],
        steps: [
            "Usa el programa CRUST/FRY con 20g de mantequilla para sofreír los 80g de cebolla y 200g de champiñones (5 min).",
            "Añade los 300g de arroz, remueve y sofríe 1 minuto más. Luego pulsa CANCEL.",
            "Vierte los 800g de caldo. Remueve bien el fondo.",
            "Cierra la tapa, selecciona el programa RISOTTO y presiona START.",
            "Al terminar, abre la tapa, añade los 20g restantes de mantequilla y los 50g de parmesano. Remueve vigorosamente (mantecar)."
        ]
    },
    {
        id: 7,
        title: "Compota de Manzana (Babyfood)",
        program: "BABYFOOD",
        time: "20 min",
        icon: "fa-baby",
        description: "Textura extrasuave ideal para bebés o como postre saludable.",
        ingredients: [
            { name: "Manzanas peladas y en cubos", amount: "500g" },
            { name: "Agua purificada", amount: "100g" },
            { name: "Canela en polvo", amount: "2g" }
        ],
        steps: [
            "Pesa los 500g de manzana directamente en la olla.",
            "Añade los 100g de agua y espolvorea los 2g de canela.",
            "Cierra la tapa, selecciona BABYFOOD, ajusta el tiempo a 20 minutos y presiona START.",
            "Al finalizar, aplasta con un tenedor para papilla con textura o usa batidora para un puré ultra fino."
        ]
    },
    {
        id: 8,
        title: "Pollo al Ajillo Express",
        program: "CRUST/FRY",
        time: "25 min",
        icon: "fa-drumstick-bite",
        description: "Sofreído potente a 160°C para dorar y sellar.",
        ingredients: [
            { name: "Pollo troceado (ej: muslos)", amount: "800g" },
            { name: "Ajos fileteados", amount: "30g" },
            { name: "Aceite de oliva", amount: "40g" },
            { name: "Vino blanco", amount: "100g" },
            { name: "Sal y pimienta", amount: "10g" }
        ],
        steps: [
            "Programa CRUST/FRY ajustado a 25 minutos con la tapa abierta y pulsa START.",
            "Pesa 40g de aceite en la olla. Cuando caliente (aprox 2 min), añade 30g de ajos y dóralos sin que se quemen.",
            "Añade los 800g de pollo previamente salpimentados (10g sal). Sella bien por todos lados removiendo de vez en cuando (aprox 15 min).",
            "Vierte los 100g de vino blanco y deja que evapore el alcohol durante los últimos 5-10 minutos del programa."
        ]
    },
    {
        id: 9,
        title: "Lentejas Funcionales con Pavo",
        program: "STEW",
        time: "50 min",
        icon: "fa-seedling",
        description: "Altas en proteína y listas sin necesidad de remojo previo.",
        ingredients: [
            { name: "Lentejas secas (pardinas)", amount: "200g" },
            { name: "Pechuga de pavo (cubos)", amount: "250g" },
            { name: "Zanahoria en cubos", amount: "100g" },
            { name: "Pimiento rojo picado", amount: "60g" },
            { name: "Caldo o agua", amount: "700g" },
            { name: "Sal", amount: "8g" }
        ],
        steps: [
            "Pesa y añade directamente a la olla: 200g de lentejas, 250g de pavo, 100g de zanahoria y 60g de pimiento.",
            "Vierte los 700g de agua y los 8g de sal. Remueve todo junto.",
            "Cierra la tapa de la máquina.",
            "Selecciona el programa STEW (Guisar), ajusta a 50 minutos y pulsa START."
        ]
    },
    {
        id: 10,
        title: "Pan Proteico de Avena y Semillas",
        program: "BAKING",
        time: "50 min",
        icon: "fa-bread-slice",
        description: "Pan funcional, sin harinas refinadas y con semillas.",
        ingredients: [
            { name: "Harina de avena integral", amount: "250g" },
            { name: "Yogur natural o griego", amount: "200g" },
            { name: "Huevos enteros", amount: "150g" },
            { name: "Levadura química (polvos)", amount: "15g" },
            { name: "Sal", amount: "5g" },
            { name: "Mix de semillas (chía, sésamo)", amount: "30g" }
        ],
        steps: [
            "En un bowl mediano, bate a mano los 150g de huevos con los 200g de yogur.",
            "Añade encima los 250g de harina de avena, 15g de levadura, 5g de sal y las semillas (30g). Mezcla con espátula (quedará una masa pegajosa y espesa).",
            "Engrasa muy bien la olla interior con aceite o mantequilla (puedes poner papel de horno en el fondo).",
            "Vierte la masa y alísala un poco con la espátula húmeda.",
            "Cierra la tapa, selecciona el programa BAKING / DESSERT, programa 50 minutos y presiona START. (Voltea el pan 5 min extra al final si quieres ambos lados dorados)."
        ]
    }
];

// Extract unique programs for filters
const programs = ["Todos", ...new Set(recipes.map(r => r.program))];
