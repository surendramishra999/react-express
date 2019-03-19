class StateApi{

  constructor(rawData){
    this.data={
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm:'',
      timestamp:new Date(),
    };

    this.subscriptions={};
    this.lastSubscriptionId=0;

    setTimeout(()=>{
      const fakeArticle={
        ...rawData.articles[0],id:'fakearticleId',
      };
      //this.data.articles[fakeArticle.id]=fakeArticle;

      this.data={
        ...this.data,
        articles:{
          ...this.data.articles,
          [fakeArticle.id]:fakeArticle
        }
      };
      this.notifySubscribers();
    },1000);
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
    this.notifySubscribers();
  }

  setSearchTerm=(term)=>{
    this.mergeWithState({searchTerm:term});
  }

  startClock=()=>{
    setInterval(() => {
      this.mergeWithState({
        timestamp:new Date()
      });
    }, 1000);
  }

}

export default StateApi;