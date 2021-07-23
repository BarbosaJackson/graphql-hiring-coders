export default function SignIn() {
    return (
        <form action="/authenticate" method="POST">
            <formfield>
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" inputMode="email" autoComplete="username"/>
            </formfield>
            <formfield>
                <label htmlFor="pass">Senha</label>
                <input type="password" id="pass" autoComplete="current-password"/>
            </formfield>
            <button type="submit">Entrar</button>
        </form>
    );
}