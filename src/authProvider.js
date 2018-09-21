import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

export default (type, params) => {
    // chamado quando o usuário tenta efetuar login
    if (type === AUTH_LOGIN) {
        
        const { username } = params;
        localStorage.setItem('username', username);
        // aceita todas as combinações de nome de usuário / senha
        return Promise.resolve();
    }
    // chamado quando o usuário clica no botão de logout
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        return Promise.resolve();
    }
    // chamado quando a API retorna um erro
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.resolve();
        }
        return Promise.resolve();
    }
    // chamado quando o usuário navega para um novo local
    if (type === AUTH_CHECK) {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    }
    return Promise.reject('Unknown method');
};