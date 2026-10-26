
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('recipesGrid');
    const filterContainer = document.getElementById('filterContainer');
    const searchInput = document.getElementById('searchInput');
    
    const modal = document.getElementById('recipeModal');
    const modalContent = document.getElementById('modalContent');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    let activeFilter = "Todos";
    let searchQuery = "";

    // Initialize UI
    renderFilters();
    renderRecipes();

    // Search event
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderRecipes();
    });

    // Close Modal Events
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if(e.target === modal) closeModal();
    });

    function renderFilters() {
        filterContainer.innerHTML = '';
        programs.forEach(prog => {
            const btn = document.createElement('button');
            btn.innerText = prog;
            const isActive = prog === activeFilter;
            btn.className = `px-4 py-2 rounded-lg font-bold text-sm transition-all shadow-sm ${isActive ? 'bg-red-600 text-white border-transparent scale-105' : 'bg-white text-slate-600 hover:bg-red-50 border border-slate-200'}`;
            btn.onclick = () => {
                activeFilter = prog;
                renderFilters();
                renderRecipes();
            };
            filterContainer.appendChild(btn);
        });
    }

    function renderRecipes() {
        grid.innerHTML = '';
        
        const filtered = recipes.filter(r => {
            const matchFilter = activeFilter === "Todos" || r.program === activeFilter;
            const matchSearch = r.title.toLowerCase().includes(searchQuery) || 
                                r.ingredients.some(i => i.name.toLowerCase().includes(searchQuery));
            return matchFilter && matchSearch;
        });

        if(filtered.length === 0) {
            grid.innerHTML = `<div class="col-span-full text-center py-16 text-slate-500 font-medium">
                <i class="fas fa-search mb-4 text-4xl text-slate-300 block"></i>
                No se encontraron recetas con esos ingredientes o filtros.
            </div>`;
            return;
        }

        filtered.forEach(recipe => {
            const card = document.createElement('article');
            card.className = "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all cursor-pointer flex flex-col group transform hover:-translate-y-1";
            card.onclick = () => openModal(recipe);
            
            card.innerHTML = `
                <div class="flex justify-between items-start mb-4">
                    <span class="bg-red-50 border border-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded tracking-wide uppercase transition">${recipe.program}</span>
                    <span class="text-slate-400 text-sm font-medium"><i class="far fa-clock mr-1"></i>${recipe.time}</span>
                </div>
                <div class="flex items-center gap-4 mb-3">
                    <div class="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-red-500 text-xl group-hover:scale-110 group-hover:bg-red-50 transition shadow-inner">
                        <i class="fas ${recipe.icon}"></i>
                    </div>
                    <h3 class="text-lg font-bold text-slate-800 leading-tight">${recipe.title}</h3>
                </div>
                <p class="text-slate-500 text-sm mb-6 flex-1 line-clamp-2">${recipe.description}</p>
                <button class="w-full bg-slate-50 text-slate-700 font-bold py-3 rounded-xl border border-slate-200 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition shadow-sm">
                    Ver Receta <i class="fas fa-arrow-right ml-2 text-xs opacity-50 group-hover:opacity-100 transition-opacity"></i>
                </button>
            `;
            grid.appendChild(card);
        });
    }

    function openModal(recipe) {
        document.getElementById('modalTitle').innerText = recipe.title;
        document.getElementById('modalProgram').innerText = recipe.program;
        document.getElementById('modalTime').innerHTML = `<i class="far fa-clock mr-1"></i> ${recipe.time}`;
        
        // Render ingredients
        const ingContainer = document.getElementById('modalIngredients');
        ingContainer.innerHTML = recipe.ingredients.map(ing => `
            <li class="flex justify-between items-center py-2 border-b border-slate-100 last:border-0 group">
                <span class="text-slate-700 group-hover:text-black transition">${ing.name}</span>
                <span class="font-bold text-red-600 bg-red-50 px-2 py-1 rounded shadow-sm border border-red-100">${ing.amount}</span>
            </li>
        `).join('');

        // Render interactive steps
        const stepsContainer = document.getElementById('modalSteps');
        stepsContainer.innerHTML = recipe.steps.map((step, idx) => `
            <div class="step-item flex gap-4 p-3 rounded-xl border border-transparent">
                <div class="pt-0.5">
                    <input type="checkbox" id="step-${idx}" class="step-checkbox w-5 h-5 accent-red-600 cursor-pointer rounded border-slate-300 focus:ring-red-500">
                </div>
                <label for="step-${idx}" class="text-slate-700 leading-relaxed cursor-pointer flex-1 text-base select-none font-medium">
                    <span class="font-bold text-slate-300 mr-2">${idx + 1}.</span> ${step}
                </label>
            </div>
        `).join('');

        // Show modal with animation
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => {
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }, 10);
    }

    function closeModal() {
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }, 300); // match CSS transition duration
    }
});
