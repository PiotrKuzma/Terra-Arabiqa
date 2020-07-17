const INITIAL_STATE = {
    category: [
        {
          title: "Kawa prażona",
          imageUrl:
            "https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
          id: 1,
          linkUrl: "kawa",
        },
        {
          title: "Kawiarki",
          imageUrl:
            "https://images.unsplash.com/photo-1491755276353-97642ec79167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
          id: 2,
          linkUrl: "kawiarki",
        },
        {
          title: "Akcesoria",
          imageUrl:
            "https://images.unsplash.com/photo-1515592302748-6c5ea17e2f0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          id: 3,
          linkUrl: "akcesoria",
        },
        {
          title: "Zestawy",
          imageUrl:
            "https://images.unsplash.com/photo-1439242088854-0c76045f4124?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

          id: 4,
          linkUrl: "zestawy",
        },
    ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default directoryReducer;


