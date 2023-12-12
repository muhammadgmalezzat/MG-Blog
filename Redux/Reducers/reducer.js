// reducers/myReducer.js



const initialState = {
  // Your initial state goes here
  allPosts: [],
  filteredPosts: [],
  selectedTopic: null,
  searchQuery: '',
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle different action types and update state accordingly
    case 'SET_ALL_POSTS':
      return { ...state, allPosts: action.payload };
    case 'SET_FILTERED_POSTS':
      return { ...state, filteredPosts: action.payload };
    case 'SET_SELECTED_TOPIC':
      return { ...state, selectedTopic: action.payload };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

export default postsReducer;