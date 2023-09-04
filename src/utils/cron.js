import cron from 'node-cron';
import AccountsService from '../services/AccountsServices.js';

const interval_10seconds = '*/10 * * * * *';
const interval_1minute = '* * * * *';
const interval_1hour = '0 * * * *'; // each full hour
const interval_1day = '0 0 * * *'; // at midnight (00:00) every day
const interval_1dayTwo = '0 2 * * *'; // at midnight (02:00) every day

// Agende o cron job para ser executado a cada 1 minuto
cron.schedule(interval_1hour, () => {
  AccountsService.foo();
});
