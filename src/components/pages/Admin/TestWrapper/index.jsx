import React from 'react';
import styles from './index.less';

export default ({ src, desc, style = {} }) => {
  return (
    <div style={style} className={styles.imageWrapper}>
      <img style={style.img} src={src} alt={desc} />
      {desc && (
        <div
          style={{
            visibility: 'hidden',
          }}
          className={styles.desc}
        >
          {desc}
        </div>
      )}
    </div>
  );
};
