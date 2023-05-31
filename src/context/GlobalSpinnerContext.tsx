import { createContext } from 'react';
import { useToogleState } from '../hooks/useToggleState';
import GlobalSpinner from '../components/ContextAPI/GlobalSpinner';

export type GlobalSpinnerContextValue = {
  isSpinnerVisible: boolean;
  showSpinner: () => void;
  hideSpinner: () => void;
  toggleSpinner: () => void;
};

export const GlobalSpinnerContext = createContext<
  GlobalSpinnerContextValue | undefined
>(undefined);

type GlobalSpinnerContextProviderProps = {
  children: React.ReactNode;
};

const GlobalSpinnerContextProvider = (
  props: GlobalSpinnerContextProviderProps
) => {
  const { children } = props;
  const {
    state: isSpinnerVisible,
    open: showSpinner,
    close: hideSpinner,
    toggle: toggleSpinner,
  } = useToogleState(false);

  return (
    <GlobalSpinnerContext.Provider
      value={{
        isSpinnerVisible,
        showSpinner,
        hideSpinner,
        toggleSpinner,
      }}
    >
      {children}
      <GlobalSpinner />
    </GlobalSpinnerContext.Provider>
  );
};

export default GlobalSpinnerContextProvider;
