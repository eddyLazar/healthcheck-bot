import Axios from 'axios';

export default {
  checkUrl: (url: string) => Axios.get(`/health-check?url=${url}`),
  getResources: () => Axios.get(`/resources`).then(res => res.data.resources)
};
