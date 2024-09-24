import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

function Cards({ item }) {
  const navigator = useNavigate();

  const goToPage = () => {
    navigator("/singleProduct");
  };

  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img alt="example" src={item.image} />}
      actions={[
        <Button onClick={goToPage} type="primary">
          View Product
        </Button>,

        // <SettingOutlined key="setting" />,
        // <EditOutlined key="edit" />,
        // <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        title={item.title}
        description={item.description}
      />
    </Card>
  );
}

export default Cards;
