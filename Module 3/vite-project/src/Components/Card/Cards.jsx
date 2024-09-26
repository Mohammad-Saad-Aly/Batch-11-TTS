import React from 'react';
import { Avatar, Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;


const Cards = function({ item }) {

    const navigate = useNavigate()
  const goToPage = () => {
    
    navigate(`/singleProduct/${item.id}`, {state: {item}})
    
  };

  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src={item.image}
        />
      }
      actions={[
        <Button onClick={goToPage} type="primary" block>
          View Product
        </Button>
      ]}
    >
      <Meta
        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
        title={item.title}
        description={item.description}
      />
    </Card>
  );
};

export default Cards;
