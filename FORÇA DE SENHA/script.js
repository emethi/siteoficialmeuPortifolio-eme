// Seleciona o campo de senha, a barra de força e o texto de feedback
const passwordInput = document.getElementById("passwordInput");
const strengthIndicator = document.getElementById("password-strength-indicador");
const strengthText = document.getElementById("password-strength-text");

// Adiciona um evento que detecta quando o usuário digita no campo de senha
passwordInput.addEventListener("input", () => {
    const password = passwordInput.value; // Obtém o valor digitado
    const strength = checkPasswordStrength(password); // Chama a função para verificar a força

    // Remove todas as classes para resetar a cor
    strengthIndicator.classList.remove("weak", "medium", "strong");

    // Define a cor e o texto conforme a força da senha
    if (strength === "fraca") {
        strengthIndicator.classList.add("weak");
        strengthText.textContent = "Senha Fraca 😞";
    } else if (strength === "média") {
        strengthIndicator.classList.add("medium");
        strengthText.textContent = "Senha Média 😐";
    } else if (strength === "forte") {
        strengthIndicator.classList.add("strong");
        strengthText.textContent = "Senha Forte 💪";
    } else {
        strengthText.textContent = ""; // Se estiver vazio, não exibe nada
    }
});

// Função que verifica a força da senha
function checkPasswordStrength(password) {
    if (password.length === 0) {
        return ""; // Se estiver vazio, não define nenhuma força
    }

    let strengthScore = 0; // Inicia um contador de força

    // Verifica se a senha tem pelo menos 8 caracteres
    if (password.length >= 8) strengthScore++;

    // Verifica se tem letras maiúsculas
    if (/[A-Z]/.test(password)) strengthScore++;

    // Verifica se tem letras minúsculas
    if (/[a-z]/.test(password)) strengthScore++;

    // Verifica se tem números
    if (/[0-9]/.test(password)) strengthScore++;

    // Verifica se tem caracteres especiais
    if (/[\W_]/.test(password)) strengthScore++;

    // Retorna o nível de força baseado no score
    if (strengthScore <= 2) {
        return "fraca";
    } else if (strengthScore >= 3 && strengthScore <= 4) {
        return "média";
    } else {
        return "forte";
    }
}
