const uploadFiles = (files) => {
    return fetch('https://catfact.ninja/fact').then((res) =>
        res.json(),
      )
}

export default uploadFiles;