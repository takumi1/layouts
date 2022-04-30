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
            {view === 'view_list' ? <ListView items={products}/> : <CardsView cards={products}/>}
        </div>
    );
};

export default Store;