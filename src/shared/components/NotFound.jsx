
import React from "react";
import { Container, Title, Text, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container style={{ textAlign: 'center', marginTop: '5rem' }}>
      <Title order={1}>404 - Not Found</Title>
      <Text size="lg" color="dimmed">
        The page you are looking for does not exist.
      </Text>
      <Button
        variant="light"
        color="blue"
        size="md"
        style={{ marginTop: '2rem' }}
        onClick={() => navigate(-1)} 
      >
        Go To Home
      </Button>
    </Container>
  );
};

export default NotFound;



