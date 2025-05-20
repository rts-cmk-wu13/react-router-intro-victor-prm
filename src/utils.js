// Eagerly import all SVGs from the icons folder
const icons = import.meta.glob('./assets/icons/*.svg', { eager: true });

export const getIcon = (iconName) => {
    const match = Object.entries(icons).find(([path]) =>
        path.includes(`${iconName}.svg`)
    );
    return match ? match[1].default : null;
};