import React, { useEffect } from "react";
import { ProductCard, TextModal } from "../../../../shared/components";
import { Button, Flex, Paper, Space, Title } from "@mantine/core";
import { generateProductDetails } from "../../../../api/helpers";
import { useToast } from "../../../../shared/components/toast/useToast";
import { useStore } from "../../../../store/useStore";

const Product = ({
  productDetails,
  setProductDetails,
  taskData,
  productDetailsLoaded,
  setProductDetailsLoaded,
}) => {
  const toast = useToast();
  const { module, client } = useStore();

  return (
    <>
      <Title order={4} mt={32} mb={16}>
        Product Details
      </Title>

      {productDetailsLoaded && (
        <Paper shadow="xs" p="md" bg={"var(--lighter-gray)"} withBorder>
          <ProductCard
            key={"Product"}
            title={"Product"}
            content={productDetails["product"]}
          />
          <Space h={16} />
          <ProductCard
            key={"Product_Grade"}
            title={"Product Grade"}
            content={productDetails["product_grade"]}
          />
        </Paper>
      )}
    </>
  );
};

export default Product;
