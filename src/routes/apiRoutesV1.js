import express from 'express';

const router = express.Router();
import AccountController from '../controllers/api/accountsApiController.js';

// -------------------------------------------------------------------------- //
// accounts
// -------------------------------------------------------------------------- //
router.post('/accounts', AccountController.createAccount);
router.get('/accounts/:id', AccountController.getAccountById);
router.get('/accounts', AccountController.getAccounts);
router.put('/accounts/:id', AccountController.updateAccount);
router.delete('/accounts/:id', AccountController.deleteAccount);

// -------------------------------------------------------------------------- //
// exports
// -------------------------------------------------------------------------- //
export default router;
