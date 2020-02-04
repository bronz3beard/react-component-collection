export const getUrl = () => {
    const currentURL = window.location.pathname.split('/')[1];
    return `/${currentURL}`;
  };
  