declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchImageSnapshot(): unknown;
    }
  }
}

export {}
