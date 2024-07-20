// import React, { useState } from "react";
// import {
//   Button,
//   Flex,
//   Group,
//   Stepper,
//   Title,
//   Image,
//   Card,
//   Text,
// } from "@mantine/core";
// import dataLogo from "../../../assets/database.png";
// import ImportDocs from "./import-docs/ImportDocs";
// import Worksheets from "./worksheets/Worksheets";
// import { IconAlertCircle } from "@tabler/icons-react";
// import Export from "./export/Export";
// import Tests from "./tests/Tests";
// import TestPlan from "./test-plan/TestPlan";
// import "./create.css";
// import DescriptionModal from "../../home/DescriptionModal";
// const CreateFlow = () => {
//   const [active, setActive] = useState(0);
//   const nextStep = () =>
//     setActive((current) => (current < 5 ? current + 1 : current));
//   const prevStep = () =>
//     setActive((current) => (current > 0 ? current - 1 : current));

//   const getNextBtnLabel = () => {
//     switch (active) {
//       case 0:
//         return "Generate Worksheets";
//       case 1:
//         return "Generate Tests";
//       case 2:
//         return "Generate Test Plan";
//       case 3:
//         return "Export";
//       default:
//         return "Next";
//     }
//   };
//   const [modalOpened, setModalOpened] = useState(false);
//   const handleContentClick = (content) => {
//     setModalContent(content);
//     setModalOpened(true);
//   };
//   return (
//     <>
//       <Group align="center">
//         <Image src={dataLogo} alt="Logo" w={16} />
//         <Title order={2}>Create Master Data</Title>
//         <Card
//           shadow="sm"
//           style={{
//             marginBottom: "16px",
//             padding: "8px",
//             display: "flex",
//             alignItems: "center",
//             marginLeft: "16px", // Adjust spacing as needed
//             width: "15%",
//             border: "0.5px solid orange",
//           }}
//         >
//           <div style={{ display: "flex" }}>
//             <Text size="sm" color="gray">
//               File is in progress
//             </Text>
//             <IconAlertCircle
//               size={20}
//               style={{ marginRight: "8px", color: "#FF9800" }}
//             />
//           </div>
//         </Card>
//       </Group>

//       <Stepper
//         active={active}
//         onStepClick={setActive}
//         size="sm"
//         p={32}
//         className="master-data-create-stepper"
//       >
//         <Stepper.Step label="Input Docs">
//           <ImportDocs />
//         </Stepper.Step>
//         <Stepper.Step label="Worksheets">
//           <Worksheets />
//         </Stepper.Step>
//         <Stepper.Step label="Tests">
//           <Tests />
//         </Stepper.Step>
//         <Stepper.Step label="Test Plan">
//           <TestPlan />
//         </Stepper.Step>
//         <Stepper.Step label="Export">
//           <Export />
//         </Stepper.Step>
//       </Stepper>

//       <Flex justify="space-between" mt="xl" mx="32">
//         <Button variant="filled" onClick={prevStep}>
//           Save
//         </Button>
//         <Group>
//         <Button variant="filled" onClick={()=>{handleContentClick()}}>
//          Export
//         </Button>
//           <Button variant="default" onClick={prevStep}>
//             Back
//           </Button>
//           {active <= 3 && (
//             <Button onClick={nextStep}>{getNextBtnLabel()}</Button>
//           )}
//         </Group>
//         <DescriptionModal
//         opened={modalOpened}
//         onClose={() => setModalOpened(false)}
//       />
//       </Flex>
//     </>
//   );
// };
// export default CreateFlow;

import React, { useState } from "react";
import {
  Button,
  Flex,
  Group,
  Stepper,
  Title,
  Image,
  Card,
  Text,
} from "@mantine/core";
import ImportDocs from "./import-docs/ImportDocs";
import Worksheets from "./worksheets/Worksheets";
import { IconAlertCircle, IconDatabase } from "@tabler/icons-react";
import Export from "./export/Export";
import Tests from "./tests/Tests";
import TestPlan from "./test-plan/TestPlan";
import "./create.css";
import DescriptionModal from "../../home/DescriptionModal";

const CreateFlow = () => {
  const [active, setActive] = useState(0);
  const [modalOpened, setModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const getNextBtnLabel = () => {
    switch (active) {
      case 0:
        return "Generate Worksheets";
      case 1:
        return "Generate Tests";
      case 2:
        return "Generate Test Plan";
      case 3:
        return "Export";
      default:
        return "Next";
    }
  };

  const handleContentClick = (content) => {
    setModalContent(content);
    setModalOpened(true);
  };

  return (
    <>
      <Group align="center">
        <IconDatabase stroke={3} size={32} />
        <Title order={2}>Create Master Data</Title>
        <Card
          shadow="sm"
          style={{
            marginBottom: "16px",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            marginLeft: "16px", // Adjust spacing as needed
            width: "15%",
            border: "0.5px solid orange",
          }}
        >
          <div style={{ display: "flex" }}>
            <Text size="sm" color="gray">
              File is in progress
            </Text>
            <IconAlertCircle
              size={20}
              style={{ marginRight: "8px", color: "#FF9800" }}
            />
          </div>
        </Card>
      </Group>

      <Stepper
        active={active}
        onStepClick={setActive}
        size="sm"
        p={32}
        className="master-data-create-stepper"
      >
        <Stepper.Step label="Input Docs">
          <ImportDocs />
        </Stepper.Step>
        <Stepper.Step label="Worksheets">
          <Worksheets />
        </Stepper.Step>
        <Stepper.Step label="Tests">
          <Tests />
        </Stepper.Step>
        <Stepper.Step label="Test Plan">
          <TestPlan />
        </Stepper.Step>
        <Stepper.Step label="Export">
          <Export />
        </Stepper.Step>
      </Stepper>

      <Flex justify="space-between" mt="xl" mx="32">
        <Button variant="filled" onClick={prevStep}>
          Save
        </Button>
        <Group>
          <Button variant="filled" onClick={() => handleContentClick("export")}>
            Export
          </Button>
          {/* <Button variant="default" onClick={prevStep}>
            Back
          </Button> */}
          {active <= 3 && (
            <Button onClick={nextStep}>{getNextBtnLabel()}</Button>
          )}
        </Group>
        <DescriptionModal
          opened={modalOpened}
          onClose={() => setModalOpened(false)}
          content={modalContent}
        />
      </Flex>
    </>
  );
};

export default CreateFlow;
