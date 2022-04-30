import React, {useState} from 'react';
import IconSwitch from './IconSwitch';
import CardsView from "./CardsView";
import ListView from "./ListView";
import {products} from "./ProductsList";

const Store = () => {
    const [view, setView] = useState('view_module')
    const onSwitch = () => {
        if (view === 'view_list') setView('view_module')
        else setView('view_list')
    }
    return (
        <div>
            <IconSwitch icon={view} onSwitch={() => onSwitch()}/>
            {view === 'view_list' ? <CardsView cards={products}/> : <ListView items={products}/>}
        </div>
    );
};

export default Store;