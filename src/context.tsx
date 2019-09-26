
import * as React from 'react';

type Store = {
  color: string
}
const store: Store = {
  color: ''
};

const Context = React.createContext(store);
export const ProviderContext = Context.Provider;
export const ConsumerContext = Context.Consumer;

export default Context;
