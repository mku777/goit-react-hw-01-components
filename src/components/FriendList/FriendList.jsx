import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItems from './FriendListItems';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <FriendListItems
          key={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          name={friend.name}
        />
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
