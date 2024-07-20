import { useMutation, useQuery } from "@tanstack/react-query"
import { uploadFiles } from "../helpers"

const useUploadFiles = () => {
    // const { isPending, error, data } = useQuery({
    //     queryKey: ['repoData'],
    //     queryFn: () => uploadFiles()
    //   })
    
    //   return {isPending, error, data}
    const {mutate, isPending, isError, isSuccess} = useMutation({
    mutationFn: (files) => uploadFiles(files)
    })

    return {mutate, isPending, isError, isSuccess}
}

export default useUploadFiles