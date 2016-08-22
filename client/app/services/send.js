import axios from 'axios';

const send = {
  sendSMS: (to, message) => {
    const reqURI = `/joinMe}`;
    return axios.get(reqURI)
      .then(results =>
        // handle error
        new Promise((resolve) => {
          resolve(results.data);
        })
      );
  },
};

export default send;
