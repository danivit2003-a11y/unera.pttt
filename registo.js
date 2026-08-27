// =====================================================
// UNERA — REGISTO
// =====================================================

const registerForm = document.getElementById("registerForm");

const registerName = document.getElementById("registerName");
const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword");
const registerPasswordConfirm =
    document.getElementById("registerPasswordConfirm");

const registerButton = document.getElementById("registerButton");
const registerMessage = document.getElementById("registerMessage");


// =====================================================
// MENSAGENS
// =====================================================

function mostrarMensagem(texto, tipo) {
    registerMessage.textContent = texto;
    registerMessage.className = "auth-message show " + tipo;
}

function esconderMensagem() {
    registerMessage.textContent = "";
    registerMessage.className = "auth-message";
}

// =====================================================
// CRIAR CONTA
// =====================================================

registerForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();

        esconderMensagem();

        const nome =
            registerName.value.trim();

        const email =
            registerEmail.value.trim();

        const password =
            registerPassword.value;

        const passwordConfirm =
            registerPasswordConfirm.value;


        // -------------------------------------------------
        // VALIDAR NOME
        // -------------------------------------------------

        if (!nome) {

            mostrarMensagem(
                "Escreve o teu nome para continuar.",
                "error"
            );

            registerName.focus();

            return;
        }


        // -------------------------------------------------
        // VALIDAR EMAIL
        // -------------------------------------------------

        if (!email) {

            mostrarMensagem(
                "Escreve o teu email para continuar.",
                "error"
            );

            registerEmail.focus();

            return;
        }


        // -------------------------------------------------
        // VALIDAR PALAVRA-PASSE
        // -------------------------------------------------

        if (password.length < 6) {

            mostrarMensagem(
                "A palavra-passe deve ter pelo menos 6 caracteres.",
                "error"
            );

            registerPassword.focus();

            return;
        }


        // -------------------------------------------------
        // CONFIRMAR PALAVRA-PASSE
        // -------------------------------------------------

        if (password !== passwordConfirm) {

            mostrarMensagem(
                "As palavras-passe não coincidem.",
                "error"
            );

            registerPasswordConfirm.focus();

            return;
        }


        // -------------------------------------------------
        // DESATIVAR BOTÃO
        // -------------------------------------------------

        registerButton.disabled = true;

        registerButton.innerHTML =
            "A criar conta...";


        try {

            const { data, error } =
                await uneraSupabase.auth.signUp({
                    email: email,
                    password: password,

                    options: {
                        data: {
                            nome: nome
                        }
                    }
                });
                console.log("========== UNERA REGISTO ==========");
console.log("REGISTO DATA:", data);
console.log("REGISTO ERROR:", error);

const testeSessao =
    await uneraSupabase.auth.getSession();

console.log(
    "SESSÃO DEPOIS DO REGISTO:",
    testeSessao
);

console.log("==================================");

            // -------------------------------------------------
            // ERRO DO SUPABASE
            // -------------------------------------------------

            if (error) {

                console.error(
                    "Erro ao criar conta:",
                    error
                );

                mostrarMensagem(
                    traduzirErroRegisto(error.message),
                    "error"
                );

                registerButton.disabled = false;

                registerButton.innerHTML =
                    'Criar a minha conta <span>↗</span>';

                return;
            }


            // -------------------------------------------------
            // CONTA CRIADA
            // -------------------------------------------------

            console.log(
                "Conta criada:",
                data.user
            );


            /*
             * Dependendo das definições do Supabase,
             * o utilizador pode precisar de confirmar
             * o email antes de iniciar sessão.
             */

            if (data.session) {

                mostrarMensagem(
                    "Conta criada com sucesso. A entrar no teu perfil...",
                    "success"
                );


                setTimeout(function() {

                    window.location.href =
                        "./perfil.html";

                }, 800);


                return;
            }


            /*
             * Se não existir sessão imediatamente,
             * normalmente significa que a confirmação
             * de email está ativa no Supabase.
             */

            mostrarMensagem(
                "Conta criada! Verifica o teu email para confirmar a conta antes de iniciares sessão.",
                "success"
            );


            registerButton.disabled = false;

            registerButton.innerHTML =
                'Criar a minha conta <span>↗</span>';


        } catch (error) {

            console.error(
                "Erro inesperado:",
                error
            );

            mostrarMensagem(
                "Ocorreu um erro ao criar a conta. Tenta novamente.",
                "error"
            );

            registerButton.disabled = false;

            registerButton.innerHTML =
                'Criar a minha conta <span>↗</span>';
        }

    }
);


// =====================================================
// TRADUZIR ERROS
// =====================================================

function traduzirErroRegisto(mensagem) {

    const erro =
        String(mensagem || "").toLowerCase();


    if (
        erro.includes("user already registered") ||
        erro.includes("already registered")
    ) {

        return (
            "Já existe uma conta com este email. " +
            "Tenta iniciar sessão."
        );
    }


    if (
        erro.includes("password should be at least") ||
        erro.includes("password") &&
        erro.includes("characters")
    ) {

        return (
            "A palavra-passe não cumpre os requisitos mínimos."
        );
    }


    if (
        erro.includes("invalid email") ||
        erro.includes("email")
    ) {

        return (
            "Introduz um endereço de email válido."
        );
    }


    if (
        erro.includes("rate limit") ||
        erro.includes("too many requests")
    ) {

        return (
            "Foram feitas demasiadas tentativas. " +
            "Aguarda um pouco e tenta novamente."
        );
    }


    if (erro.includes("network")) {

        return (
            "Não foi possível contactar o servidor. " +
            "Verifica a tua ligação à internet."
        );
    }


    return (
        "Não foi possível criar a conta. " +
        "Verifica os dados e tenta novamente."
    );
}