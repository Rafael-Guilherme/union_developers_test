require('@testing-library/jest-dom');

class IntersectionObserver {
    constructor() {}
  
    observe() {
      return null;
    }
  
    unobserve() {
      return null;
    }
  
    disconnect() {
      return null;
    }
  }
  
  global.IntersectionObserver = IntersectionObserver;
  