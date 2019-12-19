const { Client } = require('../../db');
const { errorName } = require('../../error');

const getClients = userId => {
  try {
    return Client.findAll({
      where: { UserId: userId },
    });
  } catch (err) {
    throw new Error(errorName.CLIENTS_QUERY_ERROR);
  }
};

module.exports = { getClients };
