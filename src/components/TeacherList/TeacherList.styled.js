import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  margin: 0;
  padding: 0;
  list-style: none;

  background-color: transparent;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  gap: 48px;
  padding: 24px;
  border-radius: 24px;

  background-color: #ffffff;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border: 3px solid #fbe9ba;
  border-radius: 50%;

  img {
    width: 96px;
    height: 96px;
    border-radius: 50%;
  }
`;

export const Wrapper = styled.div`
  width: 968px;
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #8a8a89;

  & ~ .description {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #121417;
  }

  & ~ .languages {
    text-decoration: underline;
  }
`;

export const ListHeader = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #121417;

  &:not(:last-of-type) {
    border-right: 1px solid rgba(18, 20, 23, 20%);
  }

  .icon {
    margin-right: 4px;
  }

  .price {
    color: #38cd3e;
  }
`;

export const NameTeacher = styled.h2`
  margin: 0 0 32px 0;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  color: #121417;
`;

export const ItemDescription = styled.p`
  margin: 0;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  &:last-of-type {
    margin-bottom: 16px;
  }
`;

export const ButtonReadMore = styled.button`
  margin: 0 0 32px 0;
  padding: 0;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: underline;
  color: #121417;

  background-color: transparent;

  cursor: pointer;
`;

export const Experience = styled.p`
  margin: 0 0 32px 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #121417;
`;

export const ReviewerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0;
  margin-bottom: 32px;
  list-style: none;

  .comment {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const ReviewerInfo = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;

  .reviewer {
    margin-bottom: 4px;
  }

  .reviewerStar {
    margin-right: 8px;
  }

  .rating {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
`;

export const ReviewerAvatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #098700;
`;

export const LevelsList = styled.ul`
  display: flex;
  list-style: none;
  gap: 8px;
  padding: 0;
  margin-bottom: 32px;
`;

export const Level = styled.button`
  padding: 8px 12px;
  border: 1px solid rgba(18, 20, 23, 20%);
  border-radius: 35px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;

  background-color: transparent;
`;

export const ButtonBook = styled.button`
  padding: 16px 48px;
  border: none;
  border-radius: 12px;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #121417;

  background-color: #ffdc86;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #f4c550;
  }
`;

export const ButtonMore = styled.button`
  display: flex;
  align-self: center;
  border: none;
  margin-top: 64px;
  padding: 16px 48px;
  border-radius: 12px;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #121417;

  background-color: #f4c550;
`;
