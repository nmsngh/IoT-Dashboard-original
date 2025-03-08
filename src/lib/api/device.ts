import { apiClient } from '@/lib/api/apiClient';

export const getDevice = ({ deviceName }: { deviceName: string }) => {
  const response = apiClient.get(`/TinyIoT/${deviceName}`, {
    params: {
      fu: '1',
      ty: '3',
      lvl: '1',
    },
  });
  return response;
};

export const getDeviceVoltage = async ({
  deviceName,
}: {
  deviceName: string;
}) => {
  const response = await apiClient.get<{
    'm2m:cin': {
      ct: string;
      con: number;
    };
  }>(`/TinyIoT/${deviceName}/voltage/data/la`);
  return response.data['m2m:cin'];
};

export const getDeviceEnergyConsumption = async ({
  deviceName,
}: {
  deviceName: string;
}) => {
  const response = await apiClient.get<{
    'm2m:cin': {
      ct: string;
      con: number;
    };
  }>(`/TinyIoT/${deviceName}/energyConsumption/data/la`);
  return response.data['m2m:cin'];
};

export const getDeviceAmperage = async ({
  deviceName,
}: {
  deviceName: string;
}) => {
  const response = await apiClient.get<{
    'm2m:cin': {
      con: number;
    };
  }>(`/TinyIoT/${deviceName}/current/data/la`);
  return response.data['m2m:cin'];
};

export const getDeviceVoltageUrls = async ({
  deviceName,
  lim,
}: {
  deviceName: string;
  lim?: string;
}) => {
  const response = await apiClient.get<{
    'm2m:uril': string[];
  }>(`/TinyIoT/${deviceName}/voltage/data`, {
    params: {
      fu: '1',
      lim,
    },
  });
  return response.data['m2m:uril'];
};

export const getDeviceEnergyConsumptionUrls = async ({
  deviceName,
  lim,
}: {
  deviceName: string;
  lim?: string;
}) => {
  const response = await apiClient.get<{
    'm2m:uril': string[];
  }>(`/TinyIoT/${deviceName}/energyConsumption/data`, {
    params: {
      fu: '1',
      lim,
    },
  });
  return response.data['m2m:uril'];
};

export const getData = async (url: string) => {
  const response = await apiClient.get<{
    'm2m:cin': {
      ct: string;
      con: string;
    };
  }>(url);
  return response.data['m2m:cin'];
};

export const getDeviceCurrentUrls = async ({
  deviceName,
  lim,
}: {
  deviceName: string;
  lim?: string;
}) => {
  const response = await apiClient.get<{
    'm2m:uril': string[];
  }>(`/TinyIoT/${deviceName}/current/data`, {
    params: {
      fu: '1',
      lim,
    },
  });
  return response.data['m2m:uril'];
};

export const getDeviceCurrent = async ({
  deviceName,
}: {
  deviceName: string;
}) => {
  const response = await apiClient.get<{
    'm2m:cin': {
      ct: string;
      con: number;
    };
  }>(`/TinyIoT/${deviceName}/current/data/la`);
  return response.data['m2m:cin'];
};

export const getDeviceTemperatureUrls = async ({
  deviceName,
  lim,
}: {
  deviceName: string;
  lim?: string;
}) => {
  const response = await apiClient.get<{
    'm2m:uril': string[];
  }>(`/TinyIoT/${deviceName}/temperature/data`, {
    params: {
      fu: '1',
      lim,
    },
  });
  return response.data['m2m:uril'];
};

export const getDeviceTemperature = async ({
  deviceName,
}: {
  deviceName: string;
}) => {
  const response = await apiClient.get<{
    'm2m:cin': {
      ct: string;
      con: number;
    };
  }>(`/TinyIoT/${deviceName}/temperature/data/la`);
  return response.data['m2m:cin'];
};

export const getLocation = async ({ deviceName }: { deviceName: string }) => {
  const response = await apiClient.get<{
    'm2m:cin': {
      ct: string;
      con: string;
    };
  }>(`/TinyIoT/${deviceName}/temperature/location/la`);
  return response.data['m2m:cin'];
};

export const getBulbStatus = async ({ deviceName }: { deviceName: string }) => {
  const response = await apiClient.get<{
    'm2m:cin': {
      con: string;
    };
  }>(`/TinyIoT/${deviceName}/my_bulb${deviceName.match(/\d+/)?.[0]}/status/la`);

  return response.data['m2m:cin'];
};

export const getBulbBright = async ({ deviceName }: { deviceName: string }) => {
  const response = await apiClient.get<{
    'm2m:cin': {
      con: string;
    };
  }>(`/TinyIoT/${deviceName}/my_bulb${deviceName.match(/\d+/)?.[0]}/bright/la`);
  return response.data['m2m:cin'];
};

export const getSwitchStatus = async ({
  deviceName,
}: {
  deviceName: string;
}) => {
  const response = await apiClient.get<{
    'm2m:cin': {
      con: string;
    };
  }>(
    `/TinyIoT/${deviceName}/my_switch${deviceName.match(/\d+/)?.[0]}/status/la`,
  );

  return response.data['m2m:cin'];
};

export const switchBulbStatus = async ({
  deviceName,
  status,
}: {
  deviceName: string;
  status: string;
}) => {
  const response = await apiClient.post<{
    'm2m:cin': {
      con: string;
    };
  }>(`/TinyIoT/${deviceName}/my_bulb${deviceName.match(/\d+/)?.[0]}/status`, {
    'm2m:cin': {
      con: status,
    },
  });

  return response.data['m2m:cin'];
};

export const updateBulbBright = async ({
  deviceName,
  bright,
}: {
  deviceName: string;
  bright: string;
}) => {
  const response = await apiClient.post<{
    'm2m:cin': {
      con: string;
    };
  }>(`/TinyIoT/${deviceName}/my_bulb${deviceName.match(/\d+/)?.[0]}/bright`, {
    'm2m:cin': {
      con: bright,
    },
  });

  return response.data['m2m:cin'];
};

export const switchSwitchStatus = async ({
  deviceName,
  status,
}: {
  deviceName: string;
  status: string;
}) => {
  const response = await apiClient.post<{
    'm2m:cin': {
      con: string;
    };
  }>(`/TinyIoT/${deviceName}/my_switch${deviceName.match(/\d+/)?.[0]}/status`, {
    'm2m:cin': {
      con: status,
    },
  });

  return response.data['m2m:cin'];
};
