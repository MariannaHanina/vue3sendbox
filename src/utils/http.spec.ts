import ApiHttpSingleton from './http';

const mockAxiosManager = {
  setDefaultHeaders: jest.fn(),
};

jest.mock('./axiosManager', () => {
  return jest.fn().mockImplementation(() => {
    return mockAxiosManager;
  });
});

describe('ApiHttpSingleton instance', () => {
  let api: ApiHttpSingleton;

  beforeEach(() => {
    api = ApiHttpSingleton.getInstance();
  });

  test('after reinitialization returns the same object', () => {
    const api2 = ApiHttpSingleton.getInstance();

    expect(api2).toEqual(api);
  });

  test('has appropriate headers', () => {
    expect(api.manager).toStrictEqual(mockAxiosManager);
  });

  describe('calls axios get method', () => {
    const url = 'http://test.test';
    let getSpy: jest.SpyInstance;

    beforeEach(() => {
      getSpy = jest.spyOn(api.axios, 'get');
    });

    test('without config object', () => {
      api.get(url);

      expect(api.axios.get).toHaveBeenCalledWith(url, {});
    });

    test('with config object', () => {
      const config = {
        data: {
          param: 1,
        },
      };

      api.get(url, config);

      expect(api.axios.get).toHaveBeenCalledWith(url, config);
    });

    test('and method returns data', async () => {
      const response = {
        data: 'some data',
      };

      getSpy.mockResolvedValue(response);

      const result = await api.get(url);

      expect(result).toEqual(response.data);
    });

    test('and method returns error', async () => {
      const error = 'Some error';

      getSpy.mockRejectedValue(error);

      try {
        await api.get(url);
      } catch (e) {
        expect(e).toBe(error);
      }
    });
  });
});
