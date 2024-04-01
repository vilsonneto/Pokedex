import '@testing-library/jest-dom';
import { server } from "@/src/__mocks__/mockServer";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());