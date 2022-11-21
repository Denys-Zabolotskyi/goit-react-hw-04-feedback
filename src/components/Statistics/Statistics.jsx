import PropTypes from 'prop-types';
import { Item, List, Text, Likes, Stats } from './Statistics.styled';
import { IconContext } from 'react-icons';
import { AiFillLike } from 'react-icons/ai';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const likesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const totalPositiveLikes = Math.floor(positivePercentage / 10);

  return (
    <List>
      <Item>
        <Text>Good: {good}</Text>
      </Item>
      <Item>
        <Text>Neutral: {neutral}</Text>
      </Item>
      <Item>
        <Text>Bad: {bad}</Text>
      </Item>
      <Item>
        <Text>Total: {total}</Text>
      </Item>
      <Item>
        <Text>Positive feedback: {positivePercentage} %</Text>
      </Item>
      <Item>
        <Likes>
          {likesArr.map((el, index) => (
            <IconContext.Provider
              key={index}
              value={{
                color: `${index >= totalPositiveLikes ? '#ccc' : '#edc66b'}`,
              }}
            >
              <AiFillLike />
            </IconContext.Provider>
          ))}
          <Stats>
            {totalPositiveLikes} \ {likesArr.length}
          </Stats>
        </Likes>
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;