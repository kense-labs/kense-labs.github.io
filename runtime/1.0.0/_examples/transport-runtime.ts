// main/session.ts — after
requireSessionEndpoints(placement);
const endpoints = await connectSessionEndpoints(placement);
session = openSession(endpoints.primary);
