import React, { createContext, useContext, useReducer, ReactNode } from "react";

interface Product {
	id: number;
	title: string;
	price: number;
	rating: number;
	img: string;
}

interface State {
	basket: Product[];
}

type Action =
	| { type: "ADD_TO_BASKET"; item: Product }
	| { type: "REMOVE_FROM_BASKET"; id: number };

export const initialState: State = {
	basket: [],
};

// Tworzymy reducer
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
  
      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
  
        let newBasket = [...state.basket];
  
        if (index >= 0) {
          newBasket.splice(index, 1);
        } else {
          console.warn(
            `Can't remove product(id: ${action.id}) as it's not in the basket!`
          );
        }
  
        return {
          ...state,
          basket: newBasket,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;

// Definiujemy typy dla komponentów
type StateProviderProps = {
	reducer: (state: State, action: Action) => State;
	initialState: State;
	children: ReactNode;
};

// Prepares the dataLayer
export const StateContext = createContext<
	[State, React.Dispatch<Action>] | undefined
>(undefined);

// Wrap our app and provide the Data layer
export const StateProvider: React.FC<StateProviderProps> = ({
	reducer,
	initialState,
	children,
}) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = ():
	| [State, React.Dispatch<Action>]
	| undefined => {
	const context = useContext(StateContext);
	if (context === undefined) {
		throw new Error("useStateValue must be used within a StateProvider");
	}
	return context;
};
