import { config } from 'dotenv';
config();

export const PORT = process.env.PORT || 3020
export const DB_HOST = process.env.DB_HOST || '154.12.232.98'
export const DB_USER = process.env.DB_USER || 'bot3app'
export const DB_PASSWORD = process.env.DB_PASSWORD || 's1WpNkyt1!HC62'
export const DB_DATABASE = process.env.DB_DATABASE || 'bot3app_control'
export const DB_PORT = process.env.DB_PORT || 36378
