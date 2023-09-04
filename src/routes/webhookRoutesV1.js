import express from 'express';
import AccountWebhookController from '../controllers/webhook/accountsWebhookController.js';

const router = express.Router();

// -------------------------------------------------------------------------- //
// accounts
// -------------------------------------------------------------------------- //
router.post('/accounts', AccountWebhookController.createAccount);
router.put('/accounts/:id', AccountWebhookController.updateAccount);

// -------------------------------------------------------------------------- //
// exports
// -------------------------------------------------------------------------- //
export default router;
