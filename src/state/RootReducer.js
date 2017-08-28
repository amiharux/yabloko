export const rootPreReducer = (state, action) => {
  if (action.type === 'JUMP_TO_COMPANY_CARD') {
    return {...state,
      tabCatalog:{
        ...state.tabCatalog,
        selectedCompany: { id: action.payload.id },
      }
    }
  }
  if (action.type === 'JUMP_TO_CATEGORY_LIST') {
    return {...state,
      tabCatalog:{
        ...state.tabCatalog,
        selectedCategory: { id: action.payload.id },
      }
    }
  }
  if (action.type === 'JUMP_TO_SEARCH_RESULT') {
    return {...state,
      tabCatalog:{
        ...state.tabCatalog,
        searchQuery: action.payload.query,
      }
    }
  }
  return state;
};

export const rootPostReducer = (state, action) => {
  if (action.type === '@@redux/INIT') {
    return {...state,
      tabCatalog:{
        ...state.tabCatalog,
        selectedCompany: {id: 'asd'},
        selectedCategory: {id: 'asd'},
        searchQuery: '',
      }
    }
  }
  return state;
};
