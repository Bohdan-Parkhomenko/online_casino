import {useTranslation} from "react-i18next";

export const FilterButton = ({items, activeItem, onClick, translationPrefix, classNameItem, classNameActiveItem}) => {
    const {t} = useTranslation();
    return (
        <>
            {items.map((item, index) => (
                <button
                    key={index}
                    onClick={() => onClick(item)}
                    className={item !== activeItem ? classNameItem : classNameActiveItem}
                >
                    <span>{t(`${translationPrefix}.${item}`)}</span>
                </button>
            ))}
        </>
    );
};
