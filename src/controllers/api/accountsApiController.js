import AccountServices from '../../services/AccountsServices.js';
import ResponseService from '../../services/ResponseService.js';

// -------------------------------------------------------------------------- //
// createAccount
// -------------------------------------------------------------------------- //
const createAccount = (req, res, next) => {
  ResponseService.send({ message: "'api processado com sucesso'" });
};

// -------------------------------------------------------------------------- //
// getAccounts
// -------------------------------------------------------------------------- //
const getAccounts = async (req, res, next) => {
  try {
    const data = await AccountServices.getAccount();
    ResponseService.send(data, req, res);
  } catch (error) {
    next(error); // Encaminhe o erro para o middleware de tratamento de erro
  }
};

// -------------------------------------------------------------------------- //
// getAccountById
// -------------------------------------------------------------------------- //
const getAccountById = (req, res, next) => {
  ResponseService.send({ message: "'api processado com sucesso'" });
};

// -------------------------------------------------------------------------- //
// updateAccount
// -------------------------------------------------------------------------- //
const updateAccount = (req, res, next) => {
  ResponseService.send({ message: "'api processado com sucesso'" });
};

// -------------------------------------------------------------------------- //
// deleteAccount
// -------------------------------------------------------------------------- //
const deleteAccount = (req, res, next) => {
  ResponseService.send({ message: "'api processado com sucesso'" });
};

// -------------------------------------------------------------------------- //
// exports
// -------------------------------------------------------------------------- //
export default {
  createAccount,
  getAccounts,
  getAccountById,
  updateAccount,
  deleteAccount,
};
