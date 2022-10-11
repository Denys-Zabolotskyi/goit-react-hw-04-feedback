import PropTypes from 'prop-types';
import { BtnItem, BtnList, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onClick }) => {
  return (
    <BtnList>
      {options.map((option, index) => {
        const label =
          option.split('')[0].toUpperCase() +
          option.split('').slice(1).join('');

        return (
          <BtnItem key={index}>
            <Button onClick={() => onClick(option)} type="button">
              {label}
            </Button>
          </BtnItem>
        );
      })}
    </BtnList>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;