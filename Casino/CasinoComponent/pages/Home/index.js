import CarouselBox from "./components/CarouselBox";
import Type from "./components/Type";
import Categories from "./components/Categories";
import Game from "./components/Game";
import './styles.css'
import {useState} from "react";

const Home = () => {
    

    const [type, setType] = useState("Slots");
    const [categories, setCategories] = useState("All");

    return (
        <>
            <CarouselBox/>
            <Type setType={setType} type={type}/>
            <div className={"game-list-background"}>
                <Categories setCategories={setCategories} categoriesItem={categories}/>
                <Game type={type} categories={categories}/>
            </div>
        </>
    )
}

export default Home