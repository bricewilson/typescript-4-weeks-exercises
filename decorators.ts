export function logger(origMethod: any, _context: ClassMethodDecoratorContext) {

  function updatedMethod(this: any, ...args: any[]) {

    console.log(`Entering method: ${_context.name as string}`);

    const result = origMethod.call(this, ...args);

    return result;
  }

  return updatedMethod;
}