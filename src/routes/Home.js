import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";

const Home = ({userObj}) => {
    const [nweets, setNweets] = useState([]);
    /* older one */
    /*
    const getNweets = async () =>{
        const dbNweets = await dbService.collection("nweets").get(); //QuerySnapshot 
        dbNweets.forEach((document) => {
            const nweetObject = {
                ...document.data(),
                id : document.id,
            }
            setnweets((prev) => [nweetObject, ...prev]);
        });
    }
    */
    useEffect( ()=> {
        //getNweets();
        dbService.collection("nweets").onSnapshot(snapshot => { //listener
            const nweetArray = snapshot.docs.map((doc) => ({ /*foreach도 되는데 map은 렌더를 1번만해. */
                id: doc.id,
                ...doc.data(),
            }));
            setNweets(nweetArray);
        })
    }, [])


    
    return (
        <div className="container">
          <NweetFactory userObj={userObj} />
          <div style={{ marginTop: 30}}>
            {nweets.map((nweet) => (
              <Nweet
                key={nweet.id}
                nweetObj={nweet}
                isOwner={nweet.creatorId === userObj.uid}
              />
            ))}
          </div>
        </div>
      );
    
}

export default Home;