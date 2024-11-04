import { ProductCard } from "../../../../shared/components";
import { Paper, Space, Title } from "@mantine/core";

const Product = ({ productDetails, productDetailsLoaded }) => {
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
