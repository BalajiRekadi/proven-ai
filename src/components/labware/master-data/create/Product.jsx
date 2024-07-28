import React, { useState } from "react";
import { ProductCard, TextModal } from "../../../../shared/components";
import { Anchor, Flex, Paper, Space, Title } from "@mantine/core";
import { generateProductDetails } from "../../../../api/helpers";
import { useToast } from "../../../../shared/components/toast/useToast";

const Product = ({
  productDetails = { product: {}, product_grade: {} },
  setProductDetails,
  taskData,
}) => {
  const toast = useToast();
  const [productDetailsLoaded, setProductDetailsLoaded] = useState(false);

  const handleGenerate = () => {
    toast.load("Generating product details");
    generateProductDetails(taskData).then((res) => {
      toast.success("Generated product details successfully");
      setProductDetailsLoaded(true);
      setProductDetails(res);
    });
  };
  return (
    <>
      <Flex justify={"space-between"}>
        <Title order={2}>Product Details</Title>
        <Anchor c={"green"} onClick={handleGenerate}>
          Generate Details
        </Anchor>
      </Flex>
      {productDetailsLoaded && (
        <Paper shadow="xs" p="md" withBorder>
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
