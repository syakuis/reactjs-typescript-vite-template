module.exports = {
  roots: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.cjs',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|svg)$': 'identity-obj-proxy',
    '^@/(.*)': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
};
