

import React from 'react';
import { Card, Text, Group, ActionIcon, Stack, Flex } from '@mantine/core';
import { IconCircleArrowDownFilled,IconEyeFilled,IconShare,IconExternalLink} from '@tabler/icons-react';

const ProductCard = ({ title }) => {
  return (
    <Flex align="center" justify="space-between">
      <Card shadow="sm" p="lg" radius="md" withBorder style={{ flex: 1 }}>
        <Flex justify="space-between" align="center">
          <Text weight={500}>{title}</Text>
          <Group spacing="xs">
            <ActionIcon variant='subtle' >
              < IconCircleArrowDownFilled size={20} />
            </ActionIcon>
            <ActionIcon variant='subtle' >
              <IconEyeFilled size={20} />
            </ActionIcon>
          </Group>
        </Flex>
      </Card>
      <ActionIcon ml="md" variant='subtle' >
        <IconExternalLink size={20} />
      </ActionIcon>
    </Flex>
  );
};

const App = () => {
  return (
    <Stack>
      <ProductCard title="Product" />
      <ProductCard title="Product Grade" />
    </Stack>
  );
};

export default App;
