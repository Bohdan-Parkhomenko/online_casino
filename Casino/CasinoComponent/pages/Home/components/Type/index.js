import React from "react";
import './styles.css';
import {FilterItems} from "../../../../../../until/filter";
import {useTranslation} from "react-i18next";
import {FilterButton} from "../../../../../../until/FilterButton";


const Type = ({type, setType}) => {

    const handleClick = (value) => {
        setType(value);
        console.log(value)
    }

    const {t} = useTranslation();

    return (
        <div className="filter-container">
            <FilterButton
                items={Object.values(FilterItems)}
                activeItem={type}
                onClick={handleClick}
                translationPrefix="FilterItems"
                classNameItem={"baton-default filter-item"}
                classNameActiveItem={"baton-default filter-item type-on"}
            />
        </div>
    );

}

export default Type
