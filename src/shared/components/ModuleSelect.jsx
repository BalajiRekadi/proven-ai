import { Flex, Select } from "@mantine/core"
import { useEffect } from "react"
import { useStore } from "../../store/useStore"
import { useLocation, useNavigate } from "react-router-dom"
import { MODULES, CLIENTS } from "../constants/constants"

const ModuleSelect = ({ size = "sm" }) => {
  const { module, client, setClient, setModule, setRoute } = useStore()
  const location = useLocation()
  const navigate = useNavigate()

  const modules = Object.values(MODULES)
  const clients = Object.values(CLIENTS).filter((c) => c.label !== "")

  useEffect(() => {
    if (location?.pathname) {
      setRoute(location.pathname)
    }
  }, [location?.pathname])

  const handleModuleChange = (event) => {
    if (event) {
      setModule(event)
      setRoute(`/user/${event}/dashboard`)
      navigate(`/user/${event}/dashboard`)
    }
  }

  const handleClientChange = (event) => {
    if (event) {
      setClient(event)
      setRoute(`/user/${module}/dashboard`)
      navigate(`/user/${module}/dashboard`)
    }
  }

  return (
    <Flex gap={16} miw={"20rem"}>
      <Select
        size={size}
        comboboxProps={{ shadow: "lg" }}
        placeholder="Select Module"
        data={modules}
        value={module}
        onChange={(event) => handleModuleChange(event)}
      />
      <Select
        size={size}
        comboboxProps={{ shadow: "lg" }}
        placeholder="Select Client"
        data={clients}
        value={client}
        onChange={(event) => handleClientChange(event)}
      />
    </Flex>
  )
}

export default ModuleSelect
