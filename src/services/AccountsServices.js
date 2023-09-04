import axios from 'axios';
import { sayHelloWorld } from '../utils/helpers.js';

const AccountsService = {};

// -------------------------------------------------------------------------- //
// getAccount
// -------------------------------------------------------------------------- //
AccountsService.getAccount = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// -------------------------------------------------------------------------- //
// foo
// -------------------------------------------------------------------------- //
AccountsService.foo = () => {
  sayHelloWorld();
};

// -------------------------------------------------------------------------- //
// exports
// -------------------------------------------------------------------------- //
export default AccountsService;
