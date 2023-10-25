import productsReducer, { add, remove, edit } from './products';

describe('productsReducer', () => {
    it('deve adicionar um produto', () => {
      const initialState = { itens: [] };
      const product = { id: '1', name: 'Product A', category: 'Category A', quantity: 10, price: '20.0' };
      const action = add(product);
  
      const state = productsReducer(initialState, action);
  
      expect(state.itens).toHaveLength(1);
      expect(state.itens[0]).toEqual(product);
    });
  
    it('deve remover um produto', () => {
      const initialState = { itens: [{ id: '1', name: 'Product A', category: 'Category A', quantity: 10, price: '20.0' }] };
      const action = remove('1');
  
      const state = productsReducer(initialState, action);
  
      expect(state.itens).toHaveLength(0);
    });

    it('deve editar um produto', () => {
        const initialState = {
          itens: [
            { id: '1', name: 'Product A', category: 'Category A', quantity: 10, price: '20.0' },
            { id: '2', name: 'Product B', category: 'Category B', quantity: 5, price: '30.0' },
          ],
        };
        const updatedProduct = { id: '2', name: 'Product B Updated', category: 'Category B', quantity: 8, price: '40.0' };
        const action = edit(updatedProduct);
    
        const state = productsReducer(initialState, action);
    
        expect(state.itens).toHaveLength(2);
        const editedProduct = state.itens.find((product) => product.id === '2');
        expect(editedProduct).toEqual(updatedProduct);
      });
  });
  