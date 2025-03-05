import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDocumentTitle = () => {
    const { pathname } = useLocation();

    const getPageTitle = (path) => {
        switch (path) {
            case '/':
                return 'Home';
            case '/about':
                return 'About Us';
            case '/events':
                return 'Events';
            case '/faq':
                return 'FAQ';
            default:
                return 'Page Not Found';
        }
    };

    useEffect(() => {
        const pageTitle = getPageTitle(pathname);
        document.title = `${pageTitle} | InnovationsLab`;
    }, [pathname]);
};

export default useDocumentTitle;
