class StateApi{

  constructor(rawData){
    this.data={
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm:''
    };

    this.subscriptions={};
    this.lastSubscriptionId=0;
  }

  mapIntoObject(arr){
    return arr.reduce((acc,curr)=>{
      acc[curr.id]=curr;
      return acc;
    },{});
  }

  getState=()=>{
    return this.data;
  }

  lookupAuthor=(authorId)=>{
    return this.data.authors[authorId];
  };

  subscribe=(cb)=>{
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId]=cb;
    return this.lastSubscriptionId;
  }

 notifySubscribers=()=>{
   Object.values(this.subscriptions).forEach((cb) => cb());
 }

  unsubscribe=(subscriptionId)=>{
    delete this.subscriptions[subscriptionId];// this.subscriptions.splice(subscriptionId,1);
  }

  mergeWithState=(newState)=>{
    this.data= { ...this.data,...newState};
  }

  setSearchTerm=(term)=>{
    this.mergeWithState({searchTerm:term});
    this.notifySubscribers();
  }

}

export default StateApi;