import ResponseService from '../../services/ResponseService.js';

// -------------------------------------------------------------------------- //
// createAccount
// -------------------------------------------------------------------------- //
const createAccount = (req, res, next) => {
  ResponseService.send({ message: "'webhook processado com sucesso'" });
};

// -------------------------------------------------------------------------- //
// updateAccount
// -------------------------------------------------------------------------- //
const updateAccount = (req, res, next) => {
  ResponseService.send({ message: "'webhook processado com sucesso'" });
};

// -------------------------------------------------------------------------- //
// exports
// -------------------------------------------------------------------------- //
export default {
  createAccount,
  updateAccount,
};
