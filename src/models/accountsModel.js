import mongoose from 'mongoose';
import accountsSchema from '../schemas/accountsSchema.js';

// -------------------------------------------------------------------------- //
// model
// -------------------------------------------------------------------------- //
const AccountsModel = mongoose.model('Accounts', accountsSchema);

// -------------------------------------------------------------------------- //
// exports
// -------------------------------------------------------------------------- //
export default AccountsModel;
