import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./customContextMenu.module.scss";

const ContextMenu = props => {
  const { website, hashtag, username, customLinks } = props;

  const Links = [
    {
      id: 0,
      title: "SHARE FB",
      url: `https://www.facebook.com/sharer.php?u=https%3A%2F%2F${website}`,
      class: "fb-xfbml-parse-ignore",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      id: 1,
      title: `TWEET #${hashtag}`,
      url: `https://twitter.com/intent/tweet?button_hashtag=${hashtag}&ref_src=twsrc%5Etfw`,
      class: "twitter-hashtag-button",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      id: 2,
      title: `FOLLOW @${username}`,
      url: `https://twitter.com/${username}?ref_src=twsrc%5Etfw`,
      class: "twitter-follow-button",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      id: 3,
      title: `TWEET Me :-) @${username}`,
      url: `https://twitter.com/intent/tweet?screen_name=${username}&ref_src=twsrc%5Etfw`,
      class: "twitter-mention-button",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  ];

  const rootmenuRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (rootmenuRef.current) {
      console.log(
        "TCL: ContextMenu -> rootmenuRef.current",
        rootmenuRef.current
      );
    }
  }, [visible]);

  const handleContextMenu = useCallback(
    event => {
      event.preventDefault();
      event.stopPropagation();

      setVisible(true);

      if (rootmenuRef.current) {
        const clickX = event.clientX;
        const clickY = event.clientY;
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;
        const rootW = rootmenuRef.current.offsetWidth;
        const rootH = rootmenuRef.current.offsetHeight;

        const right = screenW + clickX > rootW;
        const left = !right;
        const top = screenH - clickY > rootH;
        const bottom = !top;

        if (right) {
          rootmenuRef.current.style.left = `${clickX + 5}px`;
        }
        if (left) {
          rootmenuRef.current.style.left = `${clickX - rootW - 5}px`;
        }
        if (top) {
          rootmenuRef.current.style.top = `${clickY + 5}px`;
        }
        if (bottom) {
          rootmenuRef.current.style.top = `${clickY - rootH - 5}px`;
        }
      }
    },
    [rootmenuRef]
  );

  const handleMouseAction = event => {
    const wasOutside = !(event.target.contains === rootmenuRef);

    if (visible) {
      setVisible(false);
    }
    if (wasOutside && visible) {
      setVisible(false);
    }
  };

  useEventListener(document, "contextmenu", handleContextMenu);
  useEventListener(document, "click", handleMouseAction);
  useEventListener(document, "scroll", handleMouseAction);

  const menuItems = !customLinks ? Links : customLinks;
  return (
    (visible || null) && (
      <div ref={rootmenuRef} className={styles.contextMenu}>
        {menuItems.map(item => {
          return (
            <div className={styles.option} key={item.id}>
              {customLinks && !website && !hashtag && !username ? (
                <a
                  href={item.url}
                  className={item.class}
                  target={item.target}
                  rel={item.rel}
                >
                  {item.title}
                </a>
              ) : (
                (website || hashtag || username) && (
                  <a
                    href={item.url}
                    className={item.class}
                    target={item.target}
                    rel={item.rel}
                  >
                    {item.title}
                  </a>
                )
              )}
            </div>
          );
        })}
      </div>
    )
  );
};

ContextMenu.propTypes = {
  website: PropTypes.string,
  hashtag: PropTypes.string,
  username: PropTypes.string,
  customLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      url: PropTypes.string,
      class: PropTypes.string,
      target: "_blank",
      rel: "noopener noreferrer"
    })
  )
};

ContextMenu.defaultProps = {
  website: null,
  hashtag: null,
  username: null,
  customLinks: null,
};

export default ContextMenu;

// Custom Hook
const useEventListener = (target, type, listener, ...options) => {
  useEffect(() => {
    target.addEventListener(type, listener, ...options);
    return () => {
      target.removeEventListener(type, listener, ...options);
    };
  }, [target, type, listener, options]);
};
