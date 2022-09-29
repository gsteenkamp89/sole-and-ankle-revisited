import styled from "styled-components";

export const IconButton = ({ className, imgSrc, ...rest }) => {
  return (
    <Wrapper className={className} {...rest}>
      <Image aria-label="menu button" alt="menu button" src={imgSrc} />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  width: 30px;
  height: 30px;
  padding: 3px;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
`;
