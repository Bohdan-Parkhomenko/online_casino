import React from "react";
import {categories} from "../../../../../../until/categories";
import './styles.css';
import {useTranslation} from "react-i18next";
import {FilterButton} from "../../../../../../until/FilterButton";

const Categories = ({setCategories, categoriesItem}) => {
    const {t} = useTranslation();
    const handleClick = (value) => {
        setCategories(value);
    }



    return (
        <div className={"categories-container"}>
            <FilterButton
                items={Object.values(categories)}
                activeItem={categoriesItem}
                onClick={handleClick}
                translationPrefix="categories"
                classNameItem={"filter-item"}
                classNameActiveItem={"filter-item categories-on"}
            />
        </div>
    );

}

export default Categories
