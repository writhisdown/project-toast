import React from "react";

function useEscapeKey(handleAction: () => void) {

  React.useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleAction();
      }
    }

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    }
  }, []);
}

export default useEscapeKey;