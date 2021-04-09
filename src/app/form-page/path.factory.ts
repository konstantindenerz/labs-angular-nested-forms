import {Context, PATH} from './context';

export const PATH_FACTORY = (id: string) => (context: Context) => {
  if(!context.parent.endsWith(`.${id}`)){
  const result = `${context.parent}.${id}`;
  context.parent = result;
  return result;
  }
  else {
    return context.parent;
  }
};
export const PATH_FACTORY_DEPS = [Context];

export const PATH_FACTORY_PROVIDER = (id: string) =>  ({
  provide: PATH, useFactory: PATH_FACTORY(id),
  deps: PATH_FACTORY_DEPS
});
