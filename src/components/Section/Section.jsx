import PropTypes from 'prop-types';
import { PageSection, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <PageSection>
      {title && <Title>{title}</Title>}

      {children}
    </PageSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;