document.addEventListener("DOMContentLoaded", function () {
    const usersTableBody = document.querySelector("tbody"); // Corpo da tabela de usuários
    const totalUsers = document.querySelector(".sales h2"); // Contador total de usuários
    const newUsers = document.querySelector(".expenses h2"); // Contador de novos usuários (últimas 24h)
    const firstUser = document.querySelector(".analytics .item:nth-child(2) .first__user"); // Primeiro usuário
    const lastUser = document.querySelector(".analytics .item:nth-child(3) .last__user"); // Último usuário

    function getUsers() {
        return JSON.parse(localStorage.getItem("usuarios")) || [];
    }

    function loadUsers() {
        const users = getUsers();
        usersTableBody.innerHTML = ""; // Limpa a tabela antes de preencher

        if (users.length === 0) {
            usersTableBody.innerHTML = "<tr><td colspan='4'>Nenhum usuário cadastrado.</td></tr>";
            totalUsers.textContent = "0";
            newUsers.textContent = "0";
            firstUser.textContent = "-";
            lastUser.textContent = "-";
            return;
        }

        let newUsersCount = 0;
        const today = new Date().toLocaleDateString("pt-BR");

        users.forEach((user) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.cpf}</td>
                <td>${user.email}</td>
                <td>${user.dataCadastro}</td>
                <td class="delete"><i class="ri-delete-bin-6-line"></i></td>
            `;

            usersTableBody.appendChild(row);

            // Contar usuários cadastrados hoje
            if (user.dataCadastro === today) {
                newUsersCount++;
            }
        });

        // Atualizar contadores
        totalUsers.textContent = users.length;
        newUsers.textContent = newUsersCount;
        firstUser.textContent = users[0]?.username || "-";
        lastUser.textContent = users[users.length - 1]?.username || "-";
    }

    loadUsers(); // Carregar usuários ao abrir a página
});
