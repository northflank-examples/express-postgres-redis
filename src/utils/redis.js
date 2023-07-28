import Redis from 'ioredis';

const config = process.env.REDIS_URI;

export const redis = new Redis(config);
