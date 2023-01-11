import { Button, Col, Row, Typography } from "antd";
import { GithubOutlined, RocketOutlined } from "@ant-design/icons";

import React from "react";
import { getFlipperLib } from "flipper-plugin";

export const Header = () => (
  <Row align="middle">
    <Col span={18}>
      <Typography.Title level={3}>
        <RocketOutlined />
        &nbsp;RN Enhanced Apollo Devtool
      </Typography.Title>
    </Col>
    <Col span={6}>
      <Button
        icon={<GithubOutlined />}
        onClick={() => {
          getFlipperLib().openLink(
            "https://github.com/razorpay/react-native-apollo-devtools"
          );
        }}
        type="link"
      >
        Github
      </Button>
    </Col>
  </Row>
);
