import React, { useState } from "react";
import { ProductCard, TextModal } from "../../../../shared/components";
import { Anchor, Flex, Paper, Space, Title } from "@mantine/core";
import { generateProductDetails } from "../../../../api/helpers";
import { useToast } from "../../../../shared/components/toast/useToast";
import {PRODUCT_DETAILS} from "../../../../shared/constants"
const Product = ({
  productDetails,
  setProductDetails,
  taskData,
  productDetailsLoaded,
  setProductDetailsLoaded,
}) => {
  const toast = useToast();

  const handleGenerate = () => {
    toast.load(PRODUCT_DETAILS.load);
    generateProductDetails(taskData).then((res) => {
      toast.success(PRODUCT_DETAILS.success);
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
