import { loadModule } from 'cld3-asm';

loadModule().then((factory) => {
  window.cldFactory = factory;
});
