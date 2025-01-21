import {
  ActionIcon,
  Flex,
  FocusTrap,
  Paper,
  Popover,
  Select,
  Text,
  TextInput,
} from "@mantine/core"
import { IconMenu2 } from "@tabler/icons-react"
import { useState } from "react"
import "./inputWithValues.css"

const InputWithValues = ({ value = "", values = [], row = null, onBlur }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [internalValue, setInternalValue] = useState(value)

  const onDoubleClick = () => {
    setIsEdit(!isEdit)
  }

  const onBlurHandler = (event) => {
    onBlur(event, row)
    setInternalValue(event)
    setIsEdit(!isEdit)
  }

  const filterOptions = ({ options, search }) => {
    return options.filter((option) =>
      option.label.toLowerCase().trim().startsWith(search.toLowerCase())
    )
  }

  return (
    <>
      <Flex
        justify={"space-between"}
        align={"center"}
        className="input-with-values"
        w={250}
      >
        {!isEdit && (
          <Paper
            withBorder
            className="field"
            shadow="none"
            p={7}
            flex={1}
            onDoubleClick={onDoubleClick}
          >
            {internalValue && (
              <Text size="sm" pr={4} pl={6}>
                {internalValue}
              </Text>
            )}
            {!internalValue && (
              <Text size="sm" pr={4} pl={6} c={"grey"}>
                Enter
              </Text>
            )}
          </Paper>
        )}
        {isEdit && (
          <FocusTrap active={isEdit}>
            <TextInput
              flex={1}
              placeholder="Enter"
              value={internalValue}
              onBlur={(event) => onBlurHandler(event?.target?.value)}
              onChange={(e) => setInternalValue(e?.target?.value)}
            />
          </FocusTrap>
        )}

        <Paper withBorder className="popover" shadow="none" w={36} h={35}>
          <Popover
            width={300}
            trapFocus
            position="bottom"
            withArrow
            shadow="xl"
          >
            <Popover.Target>
              <ActionIcon variant="transparent" size={"sm"} w={36} h={35}>
                <IconMenu2 />
              </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown>
              <Select
                placeholder="Select"
                value={internalValue}
                data={values}
                searchable={true}
                filter={filterOptions}
                limit={100}
                onChange={(event) => onBlurHandler(event)}
              />
            </Popover.Dropdown>
          </Popover>
        </Paper>
      </Flex>
    </>
  )
}

export default InputWithValues
