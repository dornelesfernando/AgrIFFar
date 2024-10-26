import { Navigate } from 'react-router-dom';

const RedirectIfEmpty = ({ children }) => {
    // Verifica se o conteúdo está vazio
    const isEmpty = React.Children.count(children) === 0;

    // Se estiver vazio, redireciona para a página de não encontrado
    if (isEmpty) {
        return <Navigate to="/notfound" />;
    }

    return <>{children}</>; // Retorna os filhos se não estiver vazio
};

export default RedirectIfEmpty;
