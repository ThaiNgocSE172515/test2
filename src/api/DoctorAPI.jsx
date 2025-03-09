import AxiosAPI from './AxiosAPI';

const END_POINT = {
  DOCTORS: 'Doctors',
};

export const GetAllDoctorsAPI = async () => {
  const response = await AxiosAPI.get(`${END_POINT.DOCTORS}/Get all doctors`);
  return response;
};

export const GetDoctorByUserIdAPI = async (userId) => {
  const response = await AxiosAPI.get(
    `${END_POINT.DOCTORS}/${userId}/get Doctor by userId`
  );
  return response;
};

export const CreateDoctorAPI = async (data) => {
  const response = await AxiosAPI.post(
    `${END_POINT.DOCTORS}/Create new doctor`,
    data
  );
  return response;
};

export const UpdateDoctorAPI = async (userId, data) => {
  const response = await AxiosAPI.put(
    `${END_POINT.DOCTORS}/${userId}/update doctor by userId`,
    data
  );
  return response;
};
