const apiUrl = 'https://apifrontclass.lat/api/v1'

export const saveInfoRegister = async (body: any) => {
  const headerOptions = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json"
    }
  }
  return await fetch(`${apiUrl}`, headerOptions)
                .then(data => data.json())
}

export const getAllTask = async () => {
  return await fetch(`${apiUrl}/tasks`)
    .then(data => data.json())
}