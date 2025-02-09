document.addEventListener("DOMContentLoaded", function () {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuarioLogado) {
        alert("Você precisa estar logado para acessar esta página.");
        window.location.href = "forms.html";
        return;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let totalLogins = localStorage.getItem("totalLogins") || 0;
    totalLogins++;
    localStorage.setItem("totalLogins", totalLogins);

    const loginsElement = document.querySelector(".info__user");
    loginsElement.textContent = totalLogins;
});

document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.querySelector(".home__button"); // Botão "Sair"

    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("usuarioLogado"); // Remove a sessão
        alert("Logout realizado com sucesso!");
        window.location.href = "forms.html"; // Redireciona para a página de login
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const confirmDeleteButton = document.querySelector(".modal-box .buttons button:last-child");

    confirmDeleteButton.addEventListener("click", function () {
        // Remover usuários e total de logins do localStorage
        localStorage.removeItem("usuarios");
        localStorage.removeItem("totalLogins");

        // Resetar os dados do dashboard
        document.querySelector("tbody").innerHTML = "<tr><td colspan='5'>Nenhum usuário cadastrado.</td></tr>";
        document.querySelector(".sales h2").textContent = "0"; // Total de usuários
        document.querySelector(".expenses h2").textContent = "0"; // Usuários nas últimas 24h
        document.querySelector(".income h2").textContent = "0%"; // Taxa de crescimento
        document.querySelector(".info__user").textContent = "0"; // Total de logins
        document.querySelector(".first__user").textContent = "-"; // Primeiro usuário
        document.querySelector(".last__user").textContent = "-"; // Último usuário

        // Garantir que os valores no localStorage também sejam redefinidos
        localStorage.setItem("totalLogins", "0");
        localStorage.setItem("taxaCrescimento", "0%");

        // Atualizar a tabela e o dashboard sem precisar de refresh
        loadUsers();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const usersTableBody = document.querySelector("tbody"); // Corpo da tabela de usuários
    const totalUsers = document.querySelector(".sales h2"); // Contador total de usuários
    const newUsers = document.querySelector(".expenses h2"); // Contador de novos usuários (últimas 24h)
    const firstUser = document.querySelector(".first__user"); // Primeiro usuário
    const lastUser = document.querySelector(".last__user"); // Último usuário
    const dateFilter = document.querySelector(".date input"); //Filtro por data
    const searchInput = document.querySelector(".searchInput"); // Campo de pesquisa

    function getUsers() {
        return JSON.parse(localStorage.getItem("usuarios")) || [];
    }

    function deleteUser(username) {
        let users = getUsers();
        users = users.filter(user => user.username !== username);
        localStorage.setItem("usuarios", JSON.stringify(users));
        loadUsers(); // Atualiza a lista de usuários na página
    }

    // Adicionar evento para exclusão individual ao clicar no ícone da lixeira
    usersTableBody.addEventListener("click", function (event) {
        const target = event.target.closest(".delete"); // Verifica se o clique foi dentro do <td class="delete">
        
        if (target) {
            const username = target.parentElement.firstElementChild.textContent; // Obtém o nome do usuário
            console.log("Tentando excluir usuário:", username);
    
            if (username && confirm(`Tem certeza que deseja excluir ${username}?`)) {
                deleteUser(username);
            }
        }
    });

    function loadUsers(filterDate = null, searchQuery = "") {
        // console.log("Tentando carregar usuários...");
        const users = getUsers();
        // console.log("Usuários encontrados:", users);

        usersTableBody.innerHTML = ""; // Limpa a tabela antes de preencher

        if (users.length === 0) {
            usersTableBody.innerHTML = "<tr><td colspan='4'>Nenhum usuário cadastrado.</td></tr>";

            totalUsers.textContent = "0";
            newUsers.textContent = "0";
            // Garantir que os valores fiquem vazios quando não houver usuários
            if (firstUser) firstUser.textContent = "-";
            if (lastUser) lastUser.textContent = "-";
            return;
        }

        // Ordenar usuários pela data de cadastro (do mais antigo para o mais recente)
        users.sort((a, b) => new Date(a.dataCadastro.split('/').reverse().join('-')) - new Date(b.dataCadastro.split('/').reverse().join('-')));

        // Definir primeiro e último usuário dinamicamente
        if (firstUser) firstUser.textContent = users[0]?.username || "-";
        if (lastUser) lastUser.textContent = users[users.length - 1]?.username || "-";

        let newUsersCount = 0;
        const today = new Date().toLocaleDateString("pt-BR");

        let filteredUsers = users;

        if (filterDate) {
            filteredUsers = filteredUsers.filter(user => user.dataCadastro === filterDate);
        }

        if (searchQuery) {
            searchQuery = searchQuery.toLowerCase();
            filteredUsers = filteredUsers.filter(user =>
                user.username.toLowerCase().includes(searchQuery) ||
                user.cpf.toLowerCase().includes(searchQuery) ||
                user.email.toLowerCase().includes(searchQuery)
            );
        }

        if (filteredUsers.length === 0) {
            usersTableBody.innerHTML = "<tr><td colspan='5'>Nenhum usuário encontrado.</td></tr>";
            return;
        }

        filteredUsers.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.cpf}</td>
                <td>${user.email}</td>
                <td>${user.dataCadastro}</td>
                <td class="delete" data-username="${user.username}"><i class="ri-delete-bin-6-line"></i></td>
            `;
            usersTableBody.appendChild(row);

            if (user.dataCadastro === today) {
                newUsersCount++;
            }
        });

        //Taxa de crescimento dos usuários
        const growthRateElement = document.querySelector(".income h2");
        const previousUsers = users.length - newUsersCount;
        const growthRate = previousUsers === 0 ? 100 : Math.round((newUsersCount / previousUsers) * 100);
        growthRateElement.textContent = `${growthRate}%`;

        // Atualizar contadores do dashboard (somente se os elementos existirem)
        if (totalUsers) totalUsers.textContent = users.length;
        if (newUsers) newUsers.textContent = newUsersCount;
        if (firstUser) firstUser.textContent = users.length > 0 ? users[0].username : "-";
        if (lastUser) lastUser.textContent = users.length > 0 ? users[users.length - 1].username : "-";
    }

    dateFilter.addEventListener("change", function () {
        const selectedDate = dateFilter.value.split("-").reverse().join("/");
        loadUsers(selectedDate, searchInput.value);
    });

    searchInput.addEventListener("input", function () {
        loadUsers(dateFilter.value ? dateFilter.value.split("-").reverse().join("/") : null, searchInput.value);
    });

    loadUsers(); // Carregar usuários ao abrir a página
});
