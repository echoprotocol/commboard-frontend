import React, {
  useState, useEffect, useRef, memo,
} from 'react';
import PropTypes from 'prop-types';
import { svgAvatar } from 'echojs-ping';
import classnames from 'classnames';

import avatar from '../../../public/next/images/default-avatar.svg';

const Avatar = ({
  className, ...props
}) => {
  const imageRef = useRef();

  const [avatarSize, setAvatarSize] = useState(null);
  const [accountName, setAccountName] = useState('');

  const updateAvatarSize = () => {
    const avatarSizeRef = imageRef.current.offsetHeight;
    if (avatarSizeRef !== avatarSize) {
      setAvatarSize(avatarSizeRef);
    }
  };

  useEffect(() => {
    updateAvatarSize();
    setAccountName(props.accountName);
    window.addEventListener('resize', updateAvatarSize);
    return () => {
      window.removeEventListener('resize', updateAvatarSize);
    };
  }, [props]);

  return (
    <div ref={imageRef} className={classnames('avatar-image', className)}>
      {
        !accountName ? <img src={avatar} alt="avatar" className="avatar" /> : (
          <div dangerouslySetInnerHTML={{ __html: svgAvatar(accountName, avatarSize) }} className="avatar" />
        )
      }
    </div>
  );

};

Avatar.propTypes = {
  accountName: PropTypes.string,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  accountName: '',
  className: '',
};

export default memo(Avatar);
