import React from 'react';
import RegistryItem from './RegistryItem';
import store from './store';

export default class extends React.Component {

    constructor() {
        super();
        this.state = store.getState();
    }

    componentWillMount () {
        store.subscribe(() => this.setState(store.getState()));
    }

    render() {
        const registryItems = this.state.registryItems;
        return (
            <div>
              <h1>My Registry</h1>
              {
                registryItems  && registryItems.map(item => {
                    return <RegistryItem key={item.id} itemDetails={ item } />
                })
              }
            </div>
        );
    }

}