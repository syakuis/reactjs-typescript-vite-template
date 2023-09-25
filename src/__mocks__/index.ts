/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
async function initMocks() {
  const { worker } = await import('./browser');
  worker.start();
}

export default initMocks;
