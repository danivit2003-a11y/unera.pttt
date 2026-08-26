// =====================================================
// UNERA — LOGIN
// =====================================================

const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginButton = document.getElementById("loginButton");
const loginMessage = document.getElementById("loginMessage");
const forgotPasswordLink = document.getElementById("forgotPasswordLink");


// =====================================================
// DESTINO DEPOIS DO LOGIN
// =====================================================

const params = new URLSearchParams(
    window.location.search
);

const redirectParam =
    params.get("redirect");


// Só permitimos destinos internos conhecidos.
// Assim evitamos que o parâmetro redirect
// envie o utilizador para um site externo.

const destinoDepoisDoLogin =
    redirectParam === "page2.html"
        ? "./page2.html"
        : "./perfil.html";


// =====================================================
// MENSAGENS
// =====================================================

function mostrarMensagem(texto, tipo) {

    loginMessage.textContent =
        texto;

    loginMessage.className =
        "auth-message show " + tipo;
}


function esconderMensagem() {

    loginMessage.textContent =
        "";

    loginMessage.className =
        "auth-message";
}


// =====================================================
// VERIFICAR SE JÁ EXISTE UMA SESSÃO
// =====================================================

async function verificarSessao() {

    const {
        data,
        error
    } =
        await uneraSupabase.auth.getSession();


    if (error) {

        console.error(
            "Erro ao verificar sessão:",
            error
        );

        return;
    }


    const session =
        data.session;


    if (!session) {
        return;
    }


    const user =
        session.user;


    /*
     * A versão antiga da Unera utilizava sessões anónimas.
     * Se ainda existir uma dessas sessões neste navegador,
     * terminamos essa sessão para permitir o novo sistema
     * de contas com email e palavra-passe.
     */

    if (
        user &&
        user.is_anonymous === true
    ) {

        console.log(
            "Sessão anónima antiga encontrada. A terminar sessão..."
        );


        const {
            error: signOutError
        } =
            await uneraSupabase.auth.signOut();


        if (signOutError) {

            console.error(
                "Erro ao terminar sessão anónima:",
                signOutError
            );
        }


        return;
    }


    /*
     * IMPORTANTE:
     *
     * Se já existir uma conta real autenticada,
     * NÃO fazemos qualquer redirecionamento automático.
     *
     * O redirecionamento acontece apenas depois
     * de o utilizador efetuar um login através
     * deste formulário.
     */

    return;
}


verificarSessao();


// =====================================================
// LOGIN
// =====================================================

loginForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        esconderMensagem();


        const email =
            loginEmail.value.trim();


        const password =
            loginPassword.value;


        if (
            !email ||
            !password
        ) {

            mostrarMensagem(
                "Preenche o email e a palavra-passe para continuar.",
                "error"
            );

            return;
        }


        loginButton.disabled =
            true;


        loginButton.innerHTML =
            "A entrar...";


        try {

            const {
                data,
                error
            } =
                await uneraSupabase.auth.signInWithPassword({
                    email: email,
                    password: password
                });


            if (error) {

                console.error(
                    "Erro de login:",
                    error
                );


                mostrarMensagem(
                    traduzirErroLogin(
                        error.message
                    ),
                    "error"
                );


                loginButton.disabled =
                    false;


                loginButton.innerHTML =
                    'Entrar <span>↗</span>';


                return;
            }


            if (!data.session) {

                mostrarMensagem(
                    "Não foi possível iniciar sessão. Tenta novamente.",
                    "error"
                );


                loginButton.disabled =
                    false;


                loginButton.innerHTML =
                    'Entrar <span>↗</span>';


                return;
            }


            mostrarMensagem(
                "Sessão iniciada. A continuar...",
                "success"
            );


            /*
             * Depois de um login bem-sucedido:
             *
             * - Se veio de Descobrir:
             *   vai para page2.html
             *
             * - Se veio de O meu perfil:
             *   vai para perfil.html
             */

            setTimeout(
                function() {

                    window.location.href =
                        destinoDepoisDoLogin;

                },
                500
            );


        } catch (error) {

            console.error(
                "Erro inesperado:",
                error
            );


            mostrarMensagem(
                "Ocorreu um erro. Tenta novamente.",
                "error"
            );


            loginButton.disabled =
                false;


            loginButton.innerHTML =
                'Entrar <span>↗</span>';
        }

    }
);


// =====================================================
// TRADUZIR ERROS DO SUPABASE
// =====================================================

function traduzirErroLogin(mensagem) {

    const erro =
        String(
            mensagem || ""
        ).toLowerCase();


    if (
        erro.includes(
            "invalid login credentials"
        ) ||
        erro.includes(
            "invalid credentials"
        )
    ) {

        return "O email ou a palavra-passe estão incorretos.";
    }


    if (
        erro.includes(
            "email not confirmed"
        )
    ) {

        return "Ainda precisas de confirmar o teu email antes de iniciar sessão.";
    }


    if (
        erro.includes(
            "too many requests"
        )
    ) {

        return "Foram feitas demasiadas tentativas. Aguarda um pouco e tenta novamente.";
    }


    if (
        erro.includes(
            "user not found"
        )
    ) {

        return "Não encontrámos nenhuma conta com este email.";
    }


    if (
        erro.includes(
            "network"
        )
    ) {

        return "Não foi possível contactar o servidor. Verifica a tua ligação à internet.";
    }


    return "Não foi possível iniciar sessão. Verifica os teus dados e tenta novamente.";
}


// =====================================================
// RECUPERAR PALAVRA-PASSE
// =====================================================

forgotPasswordLink.addEventListener(
    "click",
    async function(event) {

        event.preventDefault();


        const email =
            loginEmail.value.trim();


        if (!email) {

            mostrarMensagem(
                'Escreve primeiro o teu email e depois seleciona "Esqueceste-te da palavra-passe?".',
                "error"
            );


            loginEmail.focus();


            return;
        }


        forgotPasswordLink.textContent =
            "A enviar...";


        try {

            const {
                error
            } =
                await uneraSupabase.auth.resetPasswordForEmail(
                    email,
                    {
                        redirectTo:
                            window.location.origin +
                            "/login.html"
                    }
                );


            if (error) {

                console.error(
                    "Erro ao recuperar palavra-passe:",
                    error
                );


                mostrarMensagem(
                    "Não foi possível enviar o email de recuperação. Tenta novamente.",
                    "error"
                );

            } else {

                mostrarMensagem(
                    "Enviámos um email de recuperação. Verifica a tua caixa de entrada.",
                    "success"
                );
            }


        } catch (error) {

            console.error(
                error
            );


            mostrarMensagem(
                "Ocorreu um erro. Tenta novamente.",
                "error"
            );


        } finally {

            forgotPasswordLink.textContent =
                "Esqueceste-te da palavra-passe?";
        }

    }
);