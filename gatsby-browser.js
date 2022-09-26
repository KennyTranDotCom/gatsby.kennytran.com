import './src/assets/styles/global/global.scss';

export const onClientEntry = () => {
    document.documentElement.className =
        document.documentElement.className.replace(/\bis-dom-loading\b/, '');
};
