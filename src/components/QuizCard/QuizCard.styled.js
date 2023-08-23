import styled from 'styled-components';

const getBorderColor = props => {
  switch (props.level) {
    case 'beginner':
      return props.theme.colors.green;
    case 'intermediate':
      return props.theme.colors.orange;
    case 'advanced':
      return props.theme.colors.red;
    default:
      return null;
  }
};

export const Wrapper = styled.div`
  padding: 8px;
  border: 1px solid ${getBorderColor};
  border-radius: 4px;
`;

export const Topic = styled.h2`
  margin-top: 0;
  margin-bottom: 12px;
`;

export const MetaWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Text = styled.p`
  margin: 0;
`;

export const Button = styled.button`
  padding: 4px;
  margin: 0;
  border: none;
  color: red;

  :hover {
    color: green;
    background-color: blue;
  }

  svg {
    display: block;
  }
`;
