import React from 'react';

type SVGComponent = {
  icon: React.ComponentType<{ size: number }>,
}

function ToastIcon({icon: Icon} : SVGComponent) {
  return (
    <Icon size={24} />
  );
}

export default ToastIcon;