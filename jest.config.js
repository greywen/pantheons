module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testTimeout: 60000,
    setupFiles: ['<rootDir>/jest.setup.ts'],
};