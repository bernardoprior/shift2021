import React, { useState } from "react";

import { createCtx } from "./createContext";

const [useFolder, CtxProvider] = createCtx();

const initialState = [
  {
    nSamples: 3,
    title: "Cool Beats",
    samplesData: [
      {
        type: "Vocals",
        title: "It was a Good Day",
        userImg:
          "https://scontent.fopo2-2.fna.fbcdn.net/v/t1.6435-9/60699165_2268414479861742_5825497553562501120_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=xndwKOK_o_oAX-TIWAH&_nc_ht=scontent.fopo2-2.fna&oh=8621e3dae9aa240674d810717c526ef9&oe=60A1020A",
      },
      {
        type: "Vocals",
        title: "It was a Good Day",
        userImg: "https://i.imgur.com/7RBF3Xk.jpg",
      },
    ],
    draftsData: [
      {
        title: "Draft 1",
      },
    ],
  },
  {
    nSamples: 2,
    title: "LoFi Vibin",
    samplesData: [
      {
        type: "Vocals",
        title: "It was a Good Day",
        userImg:
          "https://i.pinimg.com/474x/ac/99/67/ac9967dc9aa51d9e12da0e756300baf0.jpg",
      },
    ],
    draftsData: [
      {
        title: "Draft 1",
      },
    ],
  },
];

const FolderContextProvider = ({ children }) => {
  const [folders, setFolders] = useState(initialState);

  const addSampleToFolder = (beat, folderTitle) => {
    for (let i = 0; i < folders.length; i++) {
      const folder = folders[i];
      if (folder["title"] === folderTitle) folder.samplesData.push(beat);
    }

    setFolders([...folders]);
  };

  const value = { addSampleToFolder, folders };

  return <CtxProvider value={value}>{children}</CtxProvider>;
};

export { FolderContextProvider, useFolder };
