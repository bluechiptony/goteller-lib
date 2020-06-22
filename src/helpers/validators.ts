export const parseResponse = (data: any) => {
  try {
    data = JSON.parse(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
